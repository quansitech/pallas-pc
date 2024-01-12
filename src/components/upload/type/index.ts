import type { UploadProps as AntdUploadProps } from 'antd';
import UploadFile from '../../../common/upload-file';

export type UploadProps = {
  tips?: string;
  value?: Array<UploadFile>;
  accept?: string;
  action?: AntdUploadProps['action'];
  maxCount?: number;
  onChange?: (values: Array<UploadFile>) => void;
};
