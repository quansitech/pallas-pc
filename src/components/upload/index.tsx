import { UploadOutlined } from '@ant-design/icons';
import {
  Upload as AntUpload,
  Button,
  message,
  type UploadProps as AntdUploadProps,
} from 'antd';
import React from 'react';
import UploadFile from '../../common/upload-file';

import type { UploadProps } from './type';

export const Upload: React.FC<UploadProps> = (props) => {
  const { tips, value, ...rest } = props;
  const defaultUploadPorps: AntdUploadProps = {
    action: rest.action,
    accept: rest.accept,
    listType: 'picture',
    maxCount: rest.maxCount,
  };

  const antdUploadValue = value?.map((item) => item.toObject());
  const [messageApi, contextHolder] = message.useMessage();
  const RegularUploader = () => {
    const uploadProps: AntdUploadProps = {
      ...defaultUploadPorps,
      onChange({ file }) {
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
            props.onChange(
              cloneList.map(
                (item) =>
                  new UploadFile(item.id, item.uid, item.url, item.name),
              ),
            );
          } else {
            messageApi.error(file.response.info);
          }
        }
        // 当点击删除时回调
        if (file.status === 'removed') {
          if (antdUploadValue) {
            props.onChange(
              antdUploadValue
                .filter((item) => item.id !== file.id)
                .map(
                  (item) =>
                    new UploadFile(item.id, item.uid, item.url, item.name),
                ),
            );
          }
        }
      },
      defaultFileList: antdUploadValue,
      showUploadList: {
        showDownloadIcon: true,
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
