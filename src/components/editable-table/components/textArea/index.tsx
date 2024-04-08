import React, {useState} from "react";
import { Input as AntInput } from "antd";
import "./index.css";

const TextArea:React.FC<any> = (props) => {
    const { onChange, className='',  ...rest } = props;

    const [focus, setFocus] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange && props.onChange(e.target.value);
    }

    return <div className="component_editable_table_text_area">
        <AntInput.TextArea className={`component_editable_table_text_area_input ${focus ? 'focus' : ''} ${className }`} onChange={handleChange} onFocus={() => {setFocus(true);}} onBlur={() => {setFocus(false);}}  {...rest} />
        {
            focus && rest.maxLength ? <div className="component_editable_table_text_area_length">{`${rest?.value?.length ? rest.value.length : 0} / ${rest.maxLength}`}</div> : ''
        }
    </div>
}

export default TextArea;