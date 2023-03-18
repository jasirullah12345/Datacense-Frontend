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

const Button = ({type = 'button', text, onClick, disabled = false, color = 'primary', className = ""}) => {
    return (
        <button type={type}
                className={`${disabled ? "cursor-auto " + colors[color].bgLight : "cursor-pointer " + colors[color].bgDark} ${colors[color].textColor} w-fit text-center py-[13px] px-5 rounded-[3px] w-fit font-medium text-base ` + className}
                {...(!disabled && onClick && {onClick: onClick})}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    className: PropTypes.string
};

export default Button;