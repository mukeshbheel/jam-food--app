import MealItemForm from './MealItemForm';
import classes from './SingleMealItem.module.css';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const SingleMealItem = props => {

    const cartCtx = useContext(CartContext);

    const price = `$ ${props.price}`;

    const addItem = amount => {
        cartCtx.addItem({
            id: props.id,
            price: props.price,
            amount: amount,
            name: props.name
        });

        console.log(cartCtx.items);
    }

    return <li className={classes.singleMealItem}>
        <div className={classes.details}>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.desc}>{props.desc}</p>
            <p className={classes.price}>{price}</p>
        </div>
        <MealItemForm id={props.id} onAdd={addItem} />
    </li>
};

export default SingleMealItem;