import React, {useState} from "react";
import "./index.scss";

const TextArea:React.FC<any> = (props) => {
    const { onChange, value, minLength, maxLength, ...rest } = props;

    const [inputState, setInputState] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange && props.onChange(e.target.value);
    }

    return <div className="component_editable_table_text_area">
        <textarea
            className={`component_editable_table_text_area_input ${inputState ? 'focus' : ''}`}
            onFocus={() => {setInputState(true);}}
            onBlur={() => {setInputState(false);}}
            onChange={handleChange}
            value={value}
            minLength={minLength}
            maxLength={maxLength}
            {...rest}
        />
        {
            maxLength && inputState ? <div className="component_editable_table_text_area_length">{`${value?.length ? value.length : 0} / ${maxLength}`}</div> : ''
        }
        
    </div>
}

export default TextArea;