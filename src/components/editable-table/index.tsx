import React, { memo, forwardRef, useImperativeHandle, useRef } from "react";
import { Table, Row, ConfigProvider } from "antd";
import { Button } from '@quansitech/pallas-pc';
import Upload from "./components/upload";
import Input from "./components/input";
import InputNumber from "./components/input-number";
import TextArea from "./components/textArea";
import type { EditableTableProps, ColumnType, EditableTableRef } from './type';
import "./index.css";

const components = {
    Input,
    InputNumber,
    TextArea,
    Upload,
}

interface EditableCellProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
    children?: React.ReactNode,
    dataIndex: string,
    onChange?: (val: any) => void,
    component: 'Input' | 'InputNumber' | 'TextArea' | 'Upload',
    editable?: boolean,
    calc?: (record: any) => React.ReactNode,
    record?: any,
    customComponentProps?: any,
}


const EditableCell: React.FC<EditableCellProps> = memo((props) => {
    const { children, dataIndex, onChange, component = 'Input', editable, calc, customComponentProps = {}, ...restProps } = props;

    if (calc) {
        return <td {...restProps} >{calc(restProps.record)}</td>;
    }

    const componentProps = {
        [component === 'Upload' ? 'value' : 'defaultValue']: restProps?.record && restProps?.record[dataIndex],
        onChange: onChange,
        ...customComponentProps
    }

    return <td {...restProps} >
        {editable ? React.createElement(components[component], componentProps) : children}
    </td>
})

export const EditableTable = forwardRef<EditableTableRef, EditableTableProps>((props: EditableTableProps, ref) => {
    const { value = [], columns, onChange, summary, canUpdateNum = true } = props;

    const { componentDisabled } = ConfigProvider.useConfig();

    useImperativeHandle(ref, () => ({
        addRow: handleAdd,
        deleteRow: handleDelete,
    }));
    const valueRef = useRef<any[]>(value);
    valueRef.current = value;

    const mergedColumns = columns.map(col => {
        return {
            ...col,
            onCell: (record: any) => ({
                record,
                dataIndex: col.dataIndex,
                title: col.title,
                component: col?.component,
                editable: col.editable === undefined ? true : col.editable,
                calc: col.calc,
                customComponentProps: typeof col.customComponentPropsFn === 'function' ? col.customComponentPropsFn(record) : {},
                onChange: (val: any) => {
                    onChange && onChange((value as any[]).map((item, index) => {
                        if (item.key === record.key) {
                            item[col.dataIndex] = val
                        }
                        return item;
                    }))
                }
            }),
        } as ColumnType<any>;
    });

    const handleDelete = (key: string | number) => {
        onChange && onChange((value as Array<any>).filter(item => item.key !== key));
    }

    const handleAdd = () => {
        let index = 0;
        const newValue = valueRef.current ?? [];
        newValue.forEach(item => {
            if (item.key > index) {
                index = item.key;
            }
        })

        const newVal: { [key: string]: any } = {};
        columns.forEach(item => {
            if (item.editable === true) {
                newVal[item.dataIndex] = '';
            }
        });
        newVal['key'] = index + 1;

        onChange && onChange([...newValue, newVal]);
    }

    if (!componentDisabled && canUpdateNum) {
        canUpdateNum !== 'add_only' && mergedColumns.push({
            title: '操作',
            dataIndex: 'operation',
            editable: false,
            width: '40px',
            render: (_, record) => (
                <Button type='primary' danger={true} confirm={{ title: '删除', description: '确定要删除吗?' }} onClick={() => handleDelete(record.key)}>删除</Button>
            )

        })
    }



    return <Table pagination={false} rowClassName='budget-td' components={{ body: { cell: EditableCell } }} summary={summary}
        {...(!componentDisabled && canUpdateNum && canUpdateNum !== 'delete_only' ? {
            footer: () => (<Row justify='center'><Button type='primary' onClick={handleAdd}>新增</Button></Row>)
        } : {})
        }
        dataSource={value} columns={mergedColumns} bordered />
})