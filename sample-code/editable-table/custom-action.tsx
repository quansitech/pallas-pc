import React, { useRef } from 'react';
import { EditableTable, Form } from '@quansitech/pallas-pc';
import { Button } from '@quansitech/pallas-pc';
import { PlusCircleOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { EditableTableRef } from '@quansitech/pallas-pc/editable-table/type';



const AdvancedUsage = () => {
    const tableRef = useRef<EditableTableRef>(null);

    const columns = [
        {
            title: '项目/服务名称',
            dataIndex: 'name',
            component: 'Input',
            width: '20%',
            customComponentPropsFn: () => ({ placeholder: '请输入项目名称' })
        },
        {
            title: '图片',
            dataIndex: 'image',
            component: 'Upload',
            width: '30%',
            customComponentPropsFn: () => ({
                maxCount: 1,
                listType: 'picture-card',
                action: '/api/upload?cate=image',
                tips: '支持jpg, png格式, 2M以内',
                accept: '.jpg,.png',
                showUploadList: false,
                children: <PlusOutlined />
            })
        },
        {
            title: '简介',
            dataIndex: 'intro',
            component: 'TextArea',
            width: '40%',
            customComponentPropsFn: () => ({ placeholder: '请输入简介', rows: 4, showCount: true })
        },
        {
            title: () => <>
                <span style={{ textAlign: 'center', marginTop: 16, cursor: 'pointer' }} onClick={tableRef.current?.addRow}>
                    <PlusCircleOutlined style={{ fontSize: '20px', color: '#1890ff', marginRight: '8px' }} />
                </span>
            </>,
            dataIndex: 'operation',
            editable: false,
            width: '40px',
            render: (_, record) => (<>
                <Button style={{ color: '#fff', border: 'unset', outline: 'unset' }} ghost icon={<MinusCircleOutlined
                    style={{ fontSize: '20px', color: '#ff4d4f', cursor: 'pointer' }}
                />} confirm={{ title: '删除', description: '确定要删除吗?' }} onClick={() => { tableRef.current?.deleteRow(record.key) }}>

                </Button>
            </>
            ),
            customComponentPropsFn: () => ({ title: '' })

        }
    ];

    const data_resource = [
        {
            key: 1,
            name: '示例项目',
            image: [],
            intro: '这是一个社区公益图书馆的示例简介...'
        }
    ];

    return (
        <Form name="advancedEditable" initialValues={{ data: data_resource }}>
            <Form.Item name="data">
                <EditableTable
                    columns={columns as any}
                    canUpdateNum={'add_only'}
                    onChange={(value) => {
                        console.log(value);
                    }}
                    ref={tableRef}
                />
            </Form.Item>
        </Form>
    )
}

export default () => {
    return <AdvancedUsage />
}
