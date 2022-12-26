import classes from './Input.module.css';

const Input = props => {
    return <div className={classes.input}>
        <label htmlFor={props.id}>{props.label}</label>
        <input id={props.id} {...props.input}></input>
    </div>
};

export default Input;