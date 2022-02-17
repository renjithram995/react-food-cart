import React from 'react';
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label>
            <span>{props.label}</span>
            <input {...props.input} ref={ref}/>
            </label>
        </div>
    )
});
export default Input;