import classes from './cartItem.module.css';

const CartItem = props => {
    return <li className={classes.cartItem}>
        <div>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.details}>
                <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
                <div className={classes.amount}>{`x${props.amount}`}</div>
            </div>
        </div>
        <div className={classes.action}>
            <button className={classes.box} onClick={props.onMinus}>-</button>
            <button className={classes.box} onClick={props.onPlus} >+</button>
        </div>
    </li>
};

export default CartItem;