import React from "react";
import { InputNumber as AntInputNumber } from "antd";

const Index:React.FC<any> = (props) => {
    const { onChange, ...rest } = props;

    const handleChange = (value: number | string | null) => {
        props.onChange && props.onChange(value);
    }

    return <AntInputNumber bordered={false} onChange={handleChange} {...rest} />
}


export default Index;