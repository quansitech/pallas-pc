import {type ButtonProps as AntdButtonProps} from 'antd';

export type ButtonProps = Omit<AntdButtonProps, 'onClick'> & {
    onClick?: () => Promise<void> | void,
    children?: React.ReactNode,
    confirm?: {
        title?: string,
        description?: string,
    }
}