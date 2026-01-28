/**
 * defaultShowCode: true
 */

import { EditableTable } from '@quansitech/pallas-pc';
import React from 'react';

export default () => {
    const columns = [
        {
            title: '产品名称',
            dataIndex: 'name',
        },
        {
            title: '价格',
            component: 'InputNumber' as const,
            dataIndex: 'price',
        },
        {
            title: '库存',
            component: 'Input' as const,
            dataIndex: 'stock',
        },
    ];

    // 数据使用 id 作为唯一标识
    const [dataSource, setDataSource] = React.useState([
        {
            id: 'prod-001',
            name: '笔记本电脑',
            price: 5999,
            stock: 10
        },
        {
            id: 'prod-002',
            name: '无线鼠标',
            price: 99,
            stock: 50
        },
        {
            id: 'prod-003',
            name: '机械键盘',
            price: 299,
            stock: 25
        }
    ]);

    return (
        <div>
            <h3>使用自定义 rowKey (id)</h3>
            <p>当数据使用 id 等字段作为唯一标识时，可以通过 rowKey 属性指定</p>

            <EditableTable
                rowKey="id"
                columns={columns}
                value={dataSource}
                onChange={(value) => {
                    console.log('数据更新:', value);
                    setDataSource(value);
                }}
            />

            <div style={{ marginTop: 16 }}>
                <h4>当前数据：</h4>
                <pre>{JSON.stringify(dataSource, null, 2)}</pre>
            </div>
        </div>
    );
};
