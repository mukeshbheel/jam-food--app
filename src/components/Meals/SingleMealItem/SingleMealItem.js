import MealItemForm from './MealItemForm';
import classes from './SingleMealItem.module.css';

const SingleMealItem = props => {
    const price = `$ ${props.price}`;
    return <li className={classes.singleMealItem}>
        <div className={classes.details}>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.desc}>{props.desc}</p>
            <p className={classes.price}>{price}</p>
        </div>
        <MealItemForm id={props.id} />
    </li>
};

export default SingleMealItem;