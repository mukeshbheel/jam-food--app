import classes from "./cart.module.css";
import Modal from "../UI/Modal";

const dummydata = [
    { id: "C1", "name": "Sushi", price: 23.23 }
];

const Cart = props => {
    const cartItems = <ul className={classes.cart}>{dummydata.map(item => <li id={item.id} key={item.id}>{item.name}</li>)}</ul>
    return <Modal>
        {cartItems}
        <div className={classes['total-amount']}>
            <span>Total Amount</span>
            <span>$ 34.34</span>
        </div>
        <div className={classes.actions}>
            <button>Close</button>
            <button>Order</button>
        </div>
    </Modal>
};


export default Cart;