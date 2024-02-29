import type { TableProps } from 'antd';
import type { ColumnType as AntdColumnType } from 'antd/es/table'; 

export type ColumnType<T> = Omit<AntdColumnType<T>, 'dataIndex' | 'title'> & {
    title?: string,
    dataIndex: string,
    component?: string,
    editable?: boolean,
    calc?: (value: any) => React.ReactNode,
    customComponentPropsFn?: (record: any) => any,
};

export type EditableTableProps = {
    value?: Array<any>,
    columns: ColumnType<any>[],
    onChange?: (value: Array<any>) => void,
    summary?: TableProps<any>['summary'],
    canUpdateNum?: boolean,
}