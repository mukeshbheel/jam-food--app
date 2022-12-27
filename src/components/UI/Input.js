import React from 'react';
import classes from './Input.module.css';


const Input = React.forwardRef((props, ref) => {
    return (<div className={classes.input}>
        <label htmlFor={props.id}>{props.label}</label>
        <input ref={ref} id={props.id} {...props.input}></input>
    </div>)
});

export default Input;