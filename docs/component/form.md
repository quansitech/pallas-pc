---
nav: 组件
order: 1
---

# 表单组件

## 说明

1、本表单是基于 antd 的改造的，antd 的 form 组件支持的属性，本表单也支持。  
2、本表单提供暂存功能。  
3、本表单日期表单组件在提交时，value 值会被转成成{type: 'dayjs', value: dayjs 实例对象}  
4、本表单在使用上传组件的时候，value 值会被转成{type: 'UploadFile', value: {id: , uid: ,url: ,name: }}

## 参数

在这里不一一列举 antd 的可支持属性（有需要可以去 antd 官网查看），这里只列举本表单独有的属性。

### Form

| 属性       | 说明             | 类型                             | 默认值 |
| ---------- | ---------------- | -------------------------------- | ------ |
| submitting | 是否正处于提交中 | boolean                          | -      |
| readonly   | 是否只读         | boolean                          | -      |
| onFinish   | 表单提交函数     | `(values: any) => Promise<void>` | -      |

### Form.Buttons

| 属性   | 说明                                                      | 类型                                         | 默认值 |
| ------ | --------------------------------------------------------- | -------------------------------------------- | ------ |
| form   | 经 Form.useForm() 创建的 form 控制实例                    | FormInstance                                 | -      |
| draft  | 是否拥有暂存按钮                                          | boolean                                      | false  |
| initFn | 初始化函数用来获取暂存的数据（只有 draft 为 true 才执行） | `async (val: string) => Promise<ApiData>`    | -      |
| saveFn | 点击暂存按钮触发的事件                                    | `(val: draftReturnData) => Promise<ApiData>` | -      |
| ...    | antd 的 Form.item 支持的所有属性（详情查看 antd 官网）    | -                                            | -      |

<code src="../../sample-code/form/index.tsx"></code>
