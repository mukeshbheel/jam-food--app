import classes from './SingleMealItem.module.css';

const SingleMealItem = props => {
    const price = `${props.price.toFixed(2)}`;
    return <li>
        <h3>{props.name}</h3>
        <p className={classes.desc}>{props.description}</p>
        <p className={classes.price}>{price}</p>
    </li>
};

export default SingleMealItem;