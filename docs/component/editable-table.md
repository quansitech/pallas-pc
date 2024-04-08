---
nav: 组件
order: 2
---

# 可编辑表格

## 说明

1、本表单是基于 antd 的 table 组件改造的。

## 参数

| 属性 | 说明 | 类型 | 默认值 |
| ---- | --- | ---- | ------ |
| value | 数据数组 | array | - |
| columns | 表格列的配置描述，具体项见下方说明 | array | = |
| onChange | 数据发生改变时触发的回调 | `(value: Array<any>) => void` | = |
| summary | 总结栏(详细说明请查看antd-design的table组件的summary) | = |
| canUpdateNum | 是否允许数据的新增或者删除 | boolean 或者 'delete_only' 或者 'add_only' | true |

### 参数columns
columns参数是基于antd-design的table组件的columns属性进行二次扩展的，下面将只说明扩展字段，如想查看其它字段，请去antd-design官网查看。  
| 属性 | 说明 | 类型 | 默认值 |
|----- | ---- | ---- | ----- |
| title | 列头显示文字 | string | - |
| dataIndex | 列数据在数据项中对应的路径 | string | - |
| component | 列中展示的组件 | 'Input' 或者 'InputNumber' 或者 'TextArea' | - |
| editable | 该项是否可编辑 | boolean | - |
| calc | 函数可用来计算总和 |  `(value: any) => React.ReactNode` | - |
| customComponentPropsFn | 支持antdDesign的input、inputNumber组件的参数。支持原生textArea的所有参数 | any | - |

## 参数类型


<code src="../../sample-code/editable-table/index.tsx"></code>
