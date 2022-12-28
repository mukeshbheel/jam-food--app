import classes from "./cart.module.css";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

// const dummydata = [
//     { id: "C1", "name": "Sushi", price: 23.23 }
// ];

const Cart = props => {

    const plusHandler = item => {
        cartCtx.addItem({
            ...item,
            amount: 1
        });
    };

    const minusHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartCtx = useContext(CartContext);
    const cartTotal = `$${cartCtx.total.toFixed(2)}`
    const cartItems = <ul className={classes.cartUl}>
        {cartCtx.items.map(item =>
            <CartItem
                id={item.id}
                key={item.id}
                price={item.price}
                amount={item.amount}
                name={item.name}
                onPlus={plusHandler.bind(null, item)}
                onMinus={minusHandler.bind(null, item.id)}
            ></CartItem>)}</ul>

    return <Modal onClose={props.onClose} className={classes.cart}>
        {cartItems}
        <div className={classes['total-amount']}>
            <span>Total Amount</span>
            <span>{cartTotal}</span>
        </div>
        <div className={classes.actions}>
            <Button className={classes.close} onClick={props.onClose}>Close</Button>
            <Button>Order</Button>
        </div>
    </Modal>
};


export default Cart;