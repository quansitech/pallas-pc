import React, { useState, useRef, MouseEventHandler, EventHandler } from "react";
import { Button as AntButton, Divider, Popconfirm } from "antd";
import type { ButtonProps } from './type';

export const Button: React.FC<ButtonProps> = (props) => {
    const { children, confirm, ...rest } = props;
    const [loading, setLoading] = useState(false);
    const [innerDisabled, setInnerDisabled] = useState(false);

    const loadingLock = useRef(false);

    const handleClick:MouseEventHandler = (e) => {
        !!confirm || triggerClick(e);
    }

    const triggerClick = async (e: React.MouseEvent) => {
        if (!loadingLock.current && rest.onClick) {
            loadingLock.current = true;
            let timeoutId = setTimeout(() => {
                setLoading(true);
                setInnerDisabled(true);
            }, 300)

            await rest.onClick();

            clearTimeout(timeoutId);
            setLoading(false);
            setInnerDisabled(false);
            loadingLock.current = false;
        }
    }

    const Wrap: React.FC<any> = ({children}) => {

        const handleConfirm = async (e: any) => {
            await triggerClick(e);
        }

        return (!!confirm && !loading  ? <Popconfirm title={confirm?.title} description={confirm?.description} onConfirm={handleConfirm} okText="确定" cancelText="取消">{children}</Popconfirm> : children)
    }



    return <Wrap>
        <AntButton loading={loading} disabled={innerDisabled} {...rest} onClick={handleClick}>{children}</AntButton>
    </Wrap>
}