---
nav: 组件
order: 2
---

# 图片上传组件

## 说明

1、本表单是基于 antd 的 Upload 组件改造的。

## 参数

| 属性 | 说明 | 类型 | 默认值 |
| ---- | --- | ---- | ------ |
| tips | 提示文字 | string | - |
| value | 值 | `Array<UploadFile>` | - |
| accept | 接受上传的文件类型, 详见可以去参考 antd upload 组件同样字段 | string | - |
| action | 上传的地址 | `string 或者 (file) => Promise<string>` | - |
| maxCount | 限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件 | number | - |
| onChange | 上传文件改变时的回调 | `(values: Array<UploadFile>) => void` | - |
| hashCheck | 是否开启查重 | boolean | true |
| uploadTo | 上传到哪里 | 'server' 或者 'cos' 或者 'oss' 或者 'tos' | 默认是server | 
| listType | 和antdDesign的listType一样 | - | - |
| ifDrag | 是否开启拖拽模式上传 | boolean | - |

## 参数类型

```
export type UploadProps = {
  tips?: string;
  value?: Array<UploadFile>;
  accept?: string;
  action?: AntdUploadProps['action'];
  maxCount?: number;
  onChange?: (values: Array<UploadFile>) => void;
};
export type UploadFileType = UploadFile;
```

<code src="../../sample-code/upload/index.tsx"></code>
<code src="../../sample-code/upload/drag.tsx"></code>
