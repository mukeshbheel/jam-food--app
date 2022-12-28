import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {

    const [addBumpClass, setAddBumpClass] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return
        }

        setAddBumpClass(true);

        const timer = setTimeout(() => { setAddBumpClass(false); }, 300);

        return () => {
            clearTimeout(timer);
        }

    }, [cartCtx.items]);

    return <button className={`${classes.Button} ${addBumpClass ? classes.bump : ''}`} onClick={props.onShowCart}>
        <span className={classes.cartIcon}>
            <CartIcon />
        </span>
        <span className={classes.yourCart}>
            Your Cart
        </span>
        <span className={classes.cartCount}>
            {numberOfCartItems}
        </span>
    </button>
}

export default HeaderCartButton;