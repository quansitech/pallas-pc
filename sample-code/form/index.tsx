/**
 * defaultShowCode: true
 */

import { Form } from '@quansitech/pallas-pc';
import type { ApiData, draftReturnData } from '@quansitech/pallas-pc/form/type';
import { Button, DatePicker, Input, InputNumber, Space } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';

export default () => {
  const [submitting, setSubmitting] = useState(false);

  const [form] = Form.useForm();

  // 表单被触发submit事件的回调
  const onFinish = async (values: any): Promise<void> => {
    // values是表单的数据
    console.log(values);
    setSubmitting(true);
    await new Promise((resolve) => {
      // 模拟表单提交数据
      setTimeout(() => {
        resolve({
          status: 1,
          data: null,
        });
      }, 3000);
    });
    setSubmitting(false);
  };

  // 获取暂存的数据
  const draftInit = async (val: string): Promise<ApiData> => {
    // val是表单的name
    console.log(val);
    const res: ApiData = await new Promise((resolve) => {
      // 模拟api发送请求
      setTimeout(() => {
        resolve({
          status: 1,
          data: {
            assistance_list_id: '1',
            amount: 100,
            start_date: {
              type: 'dayjs',
              value: dayjs('2024-01-01'),
            },
          },
        });
      }, 3000);
    });
    return res;
  };

  // 点击暂存按钮触发保存
  const draftSaveFn = async (val: draftReturnData): Promise<ApiData> => {
    // val.form_name是表单的名字，value.form_data是表单的数据
    console.log(val.form_name, val.form_data);
    const res: ApiData = await new Promise((resolve) => {
      // 模拟接口返回数据
      setTimeout(() => {
        resolve({
          status: 1,
          data: null,
        });
      }, 3000);
    });
    return res;
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
