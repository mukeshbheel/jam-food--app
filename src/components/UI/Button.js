import classes from './button.module.css'

const Button = props => {
    return <button {...props.button}>{props.children}</button>
};

export default Button;