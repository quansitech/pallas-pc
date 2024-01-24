/**
 * defaultShowCode: true
 */

import { Upload } from '@quansitech/pallas-pc';
import type { UploadFileType } from '@quansitech/pallas-pc/upload/type';
import React from 'react';

export default () => {
  const handleChange = (value: UploadFileType) => {
    console.log(value);
  };
  return (
    <div>
      <Upload
        action="https://raw.githubusercontent.com/langlixiaoheihong/pallas-h5/master/mock/upload.json"
        tips="上传组件"
        accept="jpg"
        maxCount={1}
        onChange={handleChange}
      />
    </div>
  );
};
