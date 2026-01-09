import React from 'react';
import { Upload as OriginalUpload } from '../../../upload';
import type { UploadProps } from '../../../upload/type';

export interface EditableUploadProps extends UploadProps {
    onChange?: (val: any) => void;
    value?: any;
}

const Upload: React.FC<EditableUploadProps> = (props) => {
    const { onChange, value, ...rest } = props;

    return (
        <OriginalUpload
            value={value}
            onChange={onChange}
            {...rest}
        />
    );
};

export default Upload;
