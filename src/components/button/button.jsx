import React from 'react';
import "../button/button.css"

const Button = (props) => {
    return (
        <button {...props} className={'button' + props.className}></button>
    );
};

export default Button;