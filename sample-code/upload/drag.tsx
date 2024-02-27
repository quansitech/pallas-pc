/**
 * defaultShowCode: true
 */

import { Upload } from '@quansitech/pallas-pc';
import type { UploadFileType } from '@quansitech/pallas-pc/upload/type';
import React from 'react';

export default () => {
  const handleChange = (value: UploadFileType[]) => {
  };
  return (
    <div>
      <Upload
        action="/api/upload?cate=image"
        tips="上传组件"
        accept="*"
        maxCount={1}
        onChange={handleChange}
        ifDrag
      />
    </div>
  );
};
