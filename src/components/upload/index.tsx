import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import {
    Upload as AntUpload,
    Button,
    message,
    type UploadProps as AntdUploadProps,
} from 'antd';
import React, { useEffect, useState } from 'react';
import init, { calc_file_hash } from '@quansitech/file-md5-wasm';
import UploadFile from '../upload-file';

import type { UploadProps, UploadFileType } from './type';
import Utils from "./utils";

export interface StorageProps {
    file: File,
    action: string,
    hashId?: string
};

const { Dragger } = AntUpload;


const factoryStorage = async (uploadTo: string) => {
    const storage = await import(`./storage/${uploadTo}`);
    return storage.default;
};


export const Upload: React.FC<UploadProps> = (props) => {
    const { tips, value, onChange = () => { }, uploadTo = 'server', hashCheck = true, listType = 'picture', ifDrag, ...rest } = props;
    const defaultUploadPorps: AntdUploadProps = {
        listType: listType,
        ...rest
    };

    const antdUploadValue: any = value?.map((item) => {
        const newItem = item.toObject();
        return Object.assign(newItem, { uid: newItem.uid || newItem.id  });
    } );
    const [messageApi, contextHolder] = message.useMessage();

    const uploadFn = async (file: File) => {
        const params: StorageProps = {
            file,
            action: rest.action,
            hashId: ''
        };
        if (hashCheck) {
            params.hashId = await calc_file_hash(file);
        }

        const storage = await factoryStorage(uploadTo);

        const res = await storage.upload(params.file, params.action, params.hashId);

        return res;

    }

    const addFile = (fileId, uid, url, title) => {
        const newValue = antdUploadValue || [];
        const newFile = {
            id: fileId,
            uid: uid,
            url: url,
            name: title,
        };
        let cloneList = [...newValue, newFile];
        if (rest.maxCount === 1) {
            cloneList = cloneList.slice(-1);
        } else {
            cloneList = cloneList.slice(0, rest.maxCount);
        }

        onChange(cloneList.map(
            (item) =>
                new UploadFile(item.id, item.uid, item.url, item.name),
            )
        );
    }

    const removeFile = (fileId) => {
        onChange((antdUploadValue as any[])
            ?.filter((item) => {
                return item.id !== fileId;
            })
            ?.map(
                (item) =>
                    new UploadFile(item.id, item.uid, item.url, item.name),
            )
        );
    }

    const regularUploader = () => {
        const uploadProps: AntdUploadProps = {
            ...defaultUploadPorps,
            onChange({ file }) {
                if (file.status === 'done') {
                    // 上传成功或者失败重新设置FileList
                    if (file.response.status) {
                        addFile(file.response.file_id, file.uid, file.response.url, file.response.title);
                    } else if (parseInt(file.response.status) === 0) {
                        messageApi.error(file.response.info);
                    }
                }
                // 当点击删除时回调
                if (file.status === 'removed') {
                    removeFile((file as any)?.id || (file as any)?.response?.file_id);
                }
            },
            defaultFileList: antdUploadValue,
            showUploadList: {
                showDownloadIcon: true,
            },
            onPreview: (file) => {
                window.open(file?.url || file?.response?.url, '_blank');
            },
            customRequest: (callbackProps: any) => {
                uploadFn(callbackProps.file).then((res) => {
                    if (Utils.handleError.hasError(res)){
                        callbackProps.onError(new Error(Utils.handleError.extractError(res)))
                    }else{
                        callbackProps.onSuccess(res);
                    }
                });
            },
        };
        return (
            <>
                {contextHolder}
                {
                    ifDrag ? <>
                        <Dragger {...uploadProps}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">点击或拖拽文件到此区域进行上传</p>
                            <span className="drag-drop-upload-tips">{tips}</span>
                        </Dragger>
                    </> : <>
                        <AntUpload {...uploadProps}>
                            <Button icon={<UploadOutlined />}>点击上传</Button>
                        </AntUpload >
                        <span style={{ color: '#c9c6c6' }}>{tips}</span>
                    </>
                }
            </>

        );
    };

    useEffect(() => {
        if (hashCheck) {
            init();
        }
    }, []);

    return <>
        {regularUploader()}
    </>;
};
