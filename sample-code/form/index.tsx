/**
 * defaultShowCode: true
 */

import { Form, Upload } from '@quansitech/pallas-pc';
import type { ApiData, draftReturnData } from '@quansitech/pallas-pc/form/type';
import { Button, DatePicker, Input, InputNumber, Space } from 'antd';
import React, { useState } from 'react';

export default () => {
  const [submitting, setSubmitting] = useState(false);

  const [form] = Form.useForm();

  // 表单被触发submit事件的回调
  const onFinish = async (values: any): Promise<void> => {
    // values是表单的数据
    console.log(values);
    setSubmitting(true);
    await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(values),
    });
    setSubmitting(false);
  };

  // 获取暂存的数据
  const draftInit = async (val: string): Promise<ApiData> => {
    // val是表单的name
    console.log(val);
    const res: Response = await fetch(`/api/Staging?name=${val}`);
    const data: ApiData = await res.json();
    return data;
  };

  // 点击暂存按钮触发保存
  const draftSaveFn = async (val: draftReturnData): Promise<ApiData> => {
    // val.form_name是表单的名字，value.form_data是表单的数据
    console.log(val.form_name, val.form_data);
    const res = await fetch('/api/Staging', {
      method: 'POST',
      body: JSON.stringify(val),
    });
    return await res.json();
  };

  return (
    <div>
      <Form
        name="assitanceListForm"
        form={form}
        labelWrap={true}
        labelCol={{ span: 8 }}
        onFinish={onFinish}
        submitting={submitting}
      >
        <Form.Item hidden name="assistance_list_id">
          <Input />
        </Form.Item>
        <Form.Item
          name="amount"
          label="救助金额"
          rules={[{ required: true }]}
          hasFeedback
        >
          <InputNumber
            addonAfter="元/年"
            min={0}
            precision={2}
            controls={false}
          />
        </Form.Item>
        <Form.Item name="start_date" label="开始时间">
          <DatePicker />
        </Form.Item>
        <Form.Item name="file" label="文件">
          <Upload action="/api/upload" />
        </Form.Item>
        <Form.Buttons draft form={form} initFn={draftInit} saveFn={draftSaveFn}>
          <Space>
            <Button type="primary" htmlType="submit" loading={submitting}>
              确定
            </Button>
            <Button onClick={() => {}}>取消</Button>
          </Space>
        </Form.Buttons>
      </Form>
    </div>
  );
};
