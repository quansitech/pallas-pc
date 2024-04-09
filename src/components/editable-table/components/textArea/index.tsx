import React, {useEffect, useState, useRef, useCallback} from "react";
import { Input as AntInput } from "antd";
import "./index.css";

const getHeigth = (node: any) => {
    const style = window.getComputedStyle(node);
    var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
    let height = node.scrollHeight;
    if (boxSizing === 'border-box') {
        return height += borderSize;
    } else if (boxSizing === 'content-box') {
        return height -= paddingSize;
    }
}

const TextArea:React.FC<any> = (props) => {
    const { onChange, className='',  ...rest } = props;

    const [focus, setFocus] = useState(false);

    const textAreaRef = useCallback((node: any) => {
        if (node && node.resizableTextArea && node.resizableTextArea.textArea) {
            rest.autoSize && (node.resizableTextArea.textArea.style.height = `${getHeigth(node.resizableTextArea.textArea)}px`);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange && props.onChange(e.target.value);
    };

    return <div className="component_editable_table_text_area">
        <AntInput.TextArea ref={textAreaRef} className={`component_editable_table_text_area_input ${focus ? 'focus' : ''} ${className }`} onChange={handleChange} onFocus={() => {setFocus(true);}} onBlur={() => {setFocus(false);}}  {...rest} />
        {
            focus && rest.maxLength ? <div className="component_editable_table_text_area_length">{`${rest?.value?.length ? rest.value.length : 0} / ${rest.maxLength}`}</div> : ''
        }
    </div>
}

export default TextArea;