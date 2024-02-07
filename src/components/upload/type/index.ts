import type { UploadProps as AntdUploadProps } from 'antd';
import UploadFile from '../../upload-file';

export type UploadFileType = UploadFile;
export type UploadProps = Omit<AntdUploadProps, 'value' | 'action' | 'onChange'> & {
  tips?: string;
  value?: Array<UploadFileType>;
  action: string;
  hashCheck?: boolean;
  uploadTo?: 'server' | 'cos' | 'oss' | 'tos',
  ifDrag?: boolean;
  onChange?: (values: Array<UploadFileType>) => void;
};

