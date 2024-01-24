import type { UploadProps as AntdUploadProps } from 'antd';
import UploadFile from '../../upload-file';

export type UploadProps = {
  tips?: string;
  value?: Array<UploadFile>;
  accept?: string;
  action: string;
  maxCount?: number;
  hashCheck?: boolean;
  uploadTo?: 'server' | 'cos' | 'oss' | 'tos',
  listType?: AntdUploadProps['listType'],
  onChange?: (values: Array<UploadFile>) => void;
};

export type UploadFileType = UploadFile;
