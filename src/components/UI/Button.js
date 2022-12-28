import classes from './button.module.css'

const Button = props => {
    return <button className={`${classes.button} ${props.className}`} {...props.button} onClick={props.onClick}>{props.children}</button>
};

export default Button;