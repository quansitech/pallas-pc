/**
 * defaultShowCode: true
 */

import { PlusOutlined } from '@ant-design/icons';
import { Form, Upload } from '@quansitech/pallas-pc';
import type { UploadFileType } from '@quansitech/pallas-pc/upload/type';
import { Button } from 'antd';
import React from 'react';

export default () => {
  const handleChange = (value: UploadFileType[]) => {
    console.log('handleChange', value);
  };
  return (
    <Form
      name="upload-form"
      onFinish={async (value) => {
        console.log('value', value);
      }}
    >
      <Form.Item name="upload" label="上传" rules={[{ required: true }]}>
        <Upload
          action="/api/upload?cate=image"
          tips="上传组件"
          accept="*"
          multiple
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item name="upload2" label="上传" rules={[{ required: true }]}>
        <Upload
          action="/api/upload?cate=image"
          tips="上传前裁切图片"
          listType="picture-card"
          accept=".jpg,.png"
          multiple
          onChange={handleChange}
          crop={{ ratio: '2/1' }}
        >
          <PlusOutlined />
        </Upload>
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};
