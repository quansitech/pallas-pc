import type {
  FormInstance as AntdFormInstance,
  FormItemProps as AntdFormItemProps,
  FormProps as AntdFormProps,
} from 'antd';
import React from 'react';

export type FormProps = Omit<AntdFormProps, 'onFinish'> & {
  submitting?: boolean;
  readonly?: boolean;
  children?: React.ReactNode;
  onFinish?: (values: any) => Promise<void>;
};

export type ApiData = {
  status: number | string;
  info?: string;
  data: any;
};

export type draftReturnData = {
  form_name: string;
  form_data: any;
};

export type FormInstance = AntdFormInstance;
export type FormItemProps = AntdFormItemProps;
