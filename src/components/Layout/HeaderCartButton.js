import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
    return <button className={classes.Button}>
        <span className={classes.cartIcon}>
            <CartIcon />
        </span>
        <span className={classes.yourCart}>
            Your Cart
        </span>
        <span className={classes.cartCount}>
            3
        </span>
    </button>
}

export default HeaderCartButton;