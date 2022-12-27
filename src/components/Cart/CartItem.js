import classes from './cartItem.module.css';

const CartItem = props => {
    return <li className={classes.cartItem}>
        <div>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.details}>
                <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
                <div className={classes.box}>{`x${props.amount}`}</div>
            </div>
        </div>
        <div className={classes.action}>
            <div className={classes.box}>-</div>
            <div className={classes.box}>+</div>
        </div>
    </li>
};

export default CartItem;