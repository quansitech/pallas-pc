import React, {memo} from "react";
import { Table, Row, ConfigProvider } from "antd";
import {Button} from '@quansitech/pallas-pc';
import Input from "./components/input";
import InputNumber from "./components/input-number";
import type {EditableTableProps, ColumnType} from './type';
import "./index.css";

const components = {
    Input,
    InputNumber,
}

interface EditableCellProps extends React.TdHTMLAttributes<HTMLTableDataCellElement> {
    children?: React.ReactNode,
    dataIndex: string,
    onChange?: (val: any) => void,
    component: 'Input' | 'InputNumber',
    editable?: boolean,
    calc?: (record: any) => React.ReactNode,
    record?: any,
    customComponentProps?: any,
}

const EditableCell:React.FC<EditableCellProps> = memo((props) => {
    const { children, dataIndex, onChange, component = 'Input', editable, calc, customComponentProps={}, ... restProps } = props;

    if(calc){
        return <td {...restProps} >{calc(restProps.record)}</td>;
    }

    const componentProps = {
        defaultValue: restProps?.record && restProps?.record[dataIndex],
        onChange: onChange,
        ...customComponentProps
    }

    return <td {...restProps} >
        {editable ? React.createElement(components[component], componentProps) : children}
    </td>
})

export const EditableTable = (props: EditableTableProps) => {
    const {value, columns, onChange, summary, hasAddBtn=true} = props;

    const { componentDisabled } = ConfigProvider.useConfig();

    const mergedColumns= columns.map(col => {
        return {
            ...col,
            onCell: (record: any) => ({
                record,
                dataIndex: col.dataIndex,
                title: col.title,
                component: col?.component,
                editable: col.editable === undefined ? true: col.editable,
                calc: col.calc,
                customComponentProps: typeof col.customComponentPropsFn === 'function' ? col.customComponentPropsFn(record) : {},
                onChange: (val: any) => {
                    onChange && onChange((value as any[]).map((item,index) => {
                        if(item.key === record.key) {
                            item[col.dataIndex] = val
                        }
                        return item;
                    }))
                }
            }),
        } as ColumnType<any>;
    });

    const handleDelete = (key: string | number) => {
        return () => {
            onChange && onChange((value as Array<any>).filter(item => item.key !== key));
        }
    }

    const handleAdd = () => {
        let index = 0;
        const newValue = value ?? [];
        newValue.forEach(item => {
            if(item.key > index){
                index = item.key;
            }
        })

        const newVal:{[key:string]: any} = {};
        columns.forEach(item => {
            if(item.editable === true){
                newVal[item.dataIndex] = '';
            }
        });
        newVal['key'] = index+1;

        onChange && onChange([...newValue, newVal]);
    }

    if(!componentDisabled){
        mergedColumns.push({
            title: '操作',
            dataIndex: 'operation',
            editable: false,
            width: '40px',
            render: (_, record) => (
                <Button type='primary' danger={true} confirm={{title: '删除', description: '确定要删除吗?'}} onClick={handleDelete(record.key)}>删除</Button>
            )
    
        })
    }
    


    return <Table pagination={false} rowClassName='budget-td' components={{ body: { cell: EditableCell } }} summary={summary}
                    {...(!componentDisabled && hasAddBtn ? {
                            footer: () => (<Row justify='center'><Button type='primary' onClick={handleAdd}>新增</Button></Row>)
                        } : {})
                    }
                  dataSource={value} columns={mergedColumns} bordered />
}