import { UploadOutlined } from '@ant-design/icons';
import {
    Upload as AntUpload,
    Button,
    message,
    type UploadProps as AntdUploadProps,
} from 'antd';
import React from 'react';
import init, { calc_file_hash } from '@quansitech/file-md5-wasm';
import UploadFile from '../upload-file';

import type { UploadProps } from './type';

export interface StorageProps {
    file: File,
    action: string,
    hashId?: string
}


const factoryStorage = async (uploadTo: string) => {
    const storage = await import(`./storage/${uploadTo}`);
    return storage.default;
};

export const Upload: React.FC<UploadProps> = (props) => {
    const { tips, value, onChange = () => { }, uploadTo = 'server',hashCheck=true, listType = 'picture', ...rest } = props;
    const defaultUploadPorps: AntdUploadProps = {
        accept: rest.accept,
        listType: listType,
        maxCount: rest.maxCount,
    };

    const antdUploadValue = value?.map((item) => item.toObject());
    const [messageApi, contextHolder] = message.useMessage();

    const uploadFn = async (file: File) => {
        const params: StorageProps = {
            file,
            action: rest.action,
            hashId: ''
        };
        if (hashCheck) {
            await init();
            params.hashId = await calc_file_hash(file);
        }

        const storage = await factoryStorage(uploadTo);

        const res = await storage.upload(params.file, params.action, params.hashId);

        return res;

    }

    const RegularUploader = () => {
        const uploadProps: AntdUploadProps = {
            ...defaultUploadPorps,
            onChange(changeProps) {
                const { file } = changeProps;
                console.log("changeProps", changeProps);
                if (file.status === 'done') {
                    // 上传成功或者失败重新设置FileList
                    if (file.response.status === 1) {
                        const newValue = antdUploadValue || [];
                        const newFile = {
                            id: file.response.file_id,
                            uid: file.uid,
                            url: file.response.url,
                            name: file.response.title,
                        };
                        let cloneList = [...newValue, newFile];
                        if (rest.maxCount === 1) {
                            cloneList = cloneList.slice(-1);
                        } else {
                            cloneList = cloneList.slice(0, rest.maxCount);
                        }
                        onChange(
                            cloneList.map(
                                (item) =>
                                    new UploadFile(item.id, item.uid, item.url, item.name),
                            ),
                        );
                    } else if (file.response.status === 0 ) {
                        messageApi.error(file.response.info);
                    }
                }
                // 当点击删除时回调
                if (file.status === 'removed') {
                    onChange(
                        (antdUploadValue as UploadFile[])
                            .filter((item) => item.id !== (file as UploadFile).id)
                            .map(
                                (item) =>
                                    new UploadFile(item.id, item.uid, item.url, item.name),
                            ),
                    );
                }
            },
            defaultFileList: antdUploadValue,
            showUploadList: {
                showDownloadIcon: true,
            },
            customRequest: (callbackProps:any) => {
                console.log("callbackProps", callbackProps);
                uploadFn(callbackProps.file).then((res) => {
                    callbackProps.onSuccess(res);
                });
            },
        };
        return (
            <>
                {contextHolder}
                <AntUpload {...uploadProps}>
                    <Button icon={<UploadOutlined />}>点击上传</Button>
                </AntUpload>
                <span style={{ color: '#c9c6c6' }}>{tips}</span>
            </>
        );
    };

    return <RegularUploader />;
};
