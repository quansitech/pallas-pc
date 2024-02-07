import React from "react";
import { Input as AntInput } from "antd";

const Input:React.FC<any> = (props) => {
    const { onChange, ...rest } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.target.value);
    }

    return <AntInput onChange={handleChange}  {...rest} />
}

export default Input;