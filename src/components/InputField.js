import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {

    const {
        id,
        name,
        type = 'text',
        label,
        placeholder,
        error,
        hideDetails = false,
        small = false,
        className,
        ...otherProps
    } = props;

    return (
        <div className={'flex flex-col gap-1 w-full'}>
            {label && <label htmlFor={name} className={'font-medium text-base'}>{label}</label>}
            <input type={type} id={id ? id : name} name={name} placeholder={placeholder}
                   className={`border-[1px] border-black font-normal ${small ? 'py-[9px] px-4 text-sm' : 'py-[13px] px-4 text-base'} rounded-[3px] ` + className} {...otherProps}/>
            {!hideDetails && <span className={'text-red-500 text-xs h-4'}>{error}</span>}
        </div>
    );
};

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    hideDetails: PropTypes.bool,
    className: PropTypes.string,
    small: PropTypes.bool,
};

export default InputField;
