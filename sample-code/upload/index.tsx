/**
 * defaultShowCode: true
 */

import { Upload, Form } from '@quansitech/pallas-pc';
import type { UploadFileType } from '@quansitech/pallas-pc/upload/type';
import React from 'react';
import { Button } from 'antd';

export default () => {
  const handleChange = (value: UploadFileType[]) => {
  };
  return (
    <Form name="upload-form" onFinish={async (value) => {console.log("value", value)}}>
      <Form.Item name="upload" label="上传" rules={[{ required: true }]}>
        <Upload
          action="/api/upload?cate=image"
          tips="上传组件"
          accept="*"
          multiple
          onChange={handleChange}
        />
      </Form.Item>
      <Button htmlType="submit">提交</Button>
    </Form>
  );
};
