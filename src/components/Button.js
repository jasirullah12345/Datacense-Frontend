import React from 'react';
import PropTypes from 'prop-types';

const colors = {
    primary: {
        bgDark: 'bg-primary',
        bgLight: 'bg-primary/40',
        textColor: 'text-white'
    },
    secondary: {
        bgDark: 'bg-secondary',
        bgLight: 'bg-secondary/40',
        textColor: 'text-white'
    },
    sky: {
        bgDark: 'bg-[#E3EBF7]',
        bgLight: 'bg-[#E3EBF7]/40',
        textColor: 'text-primary'
    },
    lightSky: {
        bgDark: 'bg-[#F7F7F7]',
        bgLight: 'bg-[#F7F7F7]/40',
        textColor: 'text-primary'
    }
}

const Button = ({text, onClick, disabled = false, color = 'primary', className=""}) => {
    return (
        <div
            className={`${disabled ? colors[color].bgLight : "cursor-pointer " + colors[color].bgDark} ${colors[color].textColor} min-w-[180px] text-center py-[13px] rounded-[3px] font-medium text-base ` + className}
            {...(!disabled && {onClick: onClick})}>
            {text}
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string,
    disabled: PropTypes.bool
};

export default Button;