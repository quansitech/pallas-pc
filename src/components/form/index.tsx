import { Form as AntForm, Button, ConfigProvider, Modal, message } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import UploadFile from '../upload-file';

import type {
  ApiData,
  FormInstance,
  FormItemProps,
  FormProps,
  draftReturnData,
} from './type';

import './index.less';

const checkEmpty = (values: any) => {
  let keys = Object.keys(values);
  keys = keys.filter((key) => {
    const value = values[key];
    return !!value;
  });

  return keys.length === 0;
};

const serializeDayjs = (value: any) => {
  return {
    type: 'dayjs',
    value,
  };
};

const unserializeDayjs = (value: any) => {
  return dayjs(value.value);
};

const serialize = (value: any) => {
  if (dayjs.isDayjs(value)) {
    return serializeDayjs(value);
  }

  if (UploadFile.isUploadFile(value)) {
    return value.serialize();
  }

  return value;
};

const unserialize = (value: any) => {
  if (value?.type === 'dayjs') {
    return unserializeDayjs(value);
  }

  if (value?.type === 'UploadFile') {
    return new UploadFile(
      value.value.id,
      value.value.uid,
      value.value.url,
      value.value.name,
    );
  }

  return value;
};

export const Form: React.FC<FormProps> & {
  List: typeof AntForm.List;
  ErrorList: typeof AntForm.ErrorList;
  Item: typeof AntForm.Item;
  useForm: typeof AntForm.useForm;
  useWatch: typeof AntForm.useWatch;
  Buttons: React.FC<
    FormItemProps & {
      children?: React.ReactNode;
      form: FormInstance;
      draft?: boolean;
      initFn?: (val: string) => Promise<ApiData>;
      saveFn?: (val: draftReturnData) => Promise<ApiData>;
    }
  >;
} = (props) => {
  const { children, submitting, onFinish, readonly, ...rest } = props;

  if (!rest.name) {
    throw new Error('Form组件必须指定name属性');
  }

  const handleFinish = async (values: any) => {
    if (submitting) {
      return;
    }

    if (onFinish) {
      await onFinish(values);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextDisabled: readonly ? '#000' : 'rgba(0, 0, 0, 0.25)',
        },
      }}
    >
      <AntForm onFinish={handleFinish} {...rest} disabled={readonly}>
        {children}
      </AntForm>
    </ConfigProvider>
  );
};

Form.List = AntForm.List;
Form.ErrorList = AntForm.ErrorList;
Form.Item = AntForm.Item;
Form.useForm = AntForm.useForm;
Form.useWatch = AntForm.useWatch;

const FormButtons: React.FC<
  FormItemProps & {
    children?: React.ReactNode;
    form: FormInstance;
    draft?: boolean;
    initFn?: (val: string) => Promise<ApiData>;
    saveFn?: (val: draftReturnData) => Promise<ApiData>;
  }
> = (props) => {
  const { children, form, draft, initFn, saveFn, ...rest } = props;
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [draftData, setDraftData] = useState({});
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const init = async () => {
      if (typeof initFn === 'function') {
        const res = await initFn((form as any).__INTERNAL__.name);
        if (res.status && !!res.data) {
          for (const [key, value] of Object.entries(res.data)) {
            if (Array.isArray(value)) {
              res.data[key] = value.map((item) => unserialize(item));
            } else {
              res.data[key] = unserialize(value);
            }
          }

          setDraftData(res.data);
          setIsDraftModalOpen(true);
        }
      }
    };

    if (draft) {
      init();
    }
  }, []);

  const onSave = async () => {
    if (checkEmpty(form.getFieldsValue())) {
      messageApi.error('表单为空，没有内容可以暂存');
      return;
    }

    const formName = (form as any).__INTERNAL__.name;

    const formData = form.getFieldsValue();

    for (const [key, value] of Object.entries(formData)) {
      if (Array.isArray(value)) {
        formData[key] = value.map((item) => serialize(item));
      } else {
        formData[key] = serialize(value);
      }
    }

    if (typeof saveFn === 'function') {
      const res = await saveFn({
        form_name: formName,
        form_data: formData,
      });

      if (res.status) {
        messageApi.success('暂存成功');
      } else {
        messageApi.error(res.info);
      }
    }
  };

  const draftRestore = () => {
    form.setFieldsValue(draftData);
    setIsDraftModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <AntForm.Item {...rest}>
        {draft && (
          <>
            <Button type="dashed" htmlType="button" onClick={onSave}>
              暂存
            </Button>
            <Modal
              title="提示"
              open={isDraftModalOpen}
              onOk={draftRestore}
              onCancel={() => setIsDraftModalOpen(false)}
            >
              <p>是否要恢复暂存的表单数据？</p>
            </Modal>
          </>
        )}
        {children}
      </AntForm.Item>
    </>
  );
};
Form.Buttons = FormButtons;
