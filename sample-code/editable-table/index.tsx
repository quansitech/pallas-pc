/**
 * defaultShowCode: true
 */

import { EditableTable, Form } from '@quansitech/pallas-pc';
import {Table } from "antd";
import React from 'react';

const Util = {
    round: (num:number, precision: number) => {
        const factor = Math.pow(10, precision);
        return Math.round(num * factor) / factor;
    },
}

export default () => {

    const columns = [
        {
            title: '开支项',
            dataIndex: 'budget_name',
        },
        {
            title: '单价',
            component: 'InputNumber',
            dataIndex: 'budget_unit_price',
        },
        {
            title: '数量',
            component: 'InputNumber',
            customComponentPropsFn: (record: any) => {
                if (record?.key === 1) {
                    return {
                        max: 10,
                    }
                }
            },
            dataIndex: 'budget_quantity',
        },
        {
            title: '这项不可修改',
            component: 'Input',
            dataIndex: 'no_update',
            editable: false,
        },
        {
            title: '小计',
            dataIndex: 'budget_subtotal',
            calc: (record: any) => Util.round((parseFloat(record?.budget_unit_price ?? 0) * parseFloat(record?.budget_quantity ?? 0)), 2)
        },
        {
            title: '备注',
            dataIndex: 'budget_remark',
        }
    ];

    const data_resource = [
        {
            key: 1,
            budget_name: '办公用品',
            budget_unit_price: 2,
            budget_quantity: 3,
            no_update: '不可修改的值'
        },
        {
            key: 2,
            budget_name: '经费',
            budget_unit_price: 3,
            budget_quantity: 4,
            no_update: '不可修改的值'
        }
    ]

    const summary = (pageData: readonly any[]) => {
        let total = 0;
        pageData.forEach(item => {
            total += Util.round((item?.budget_quantity ?? 0) * (item?.budget_unit_price ?? 0), 2);
        });
        return (
            <>
                <Table.Summary.Row>
                    <Table.Summary.Cell index={0} colSpan={4}>合计</Table.Summary.Cell>
                    <Table.Summary.Cell index={1}>
                        <span>{total}</span>
                    </Table.Summary.Cell>
                </Table.Summary.Row>
            </>
        );
    }

    return (
        <Form name="editableEditable" initialValues={{
            data: data_resource
        }}>
            <Form.Item name="data">
                <EditableTable columns={columns} summary={summary} hasAddBtn={false} onChange={(value) => {
                    console.log(value);
                }} />
            </Form.Item>
        </Form>
    );
};
