import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';


const MealItemForm = props => {
    return <div className={classes.mealItemForm}>
        <Input id={props.id} label="Amount" input={{
            type: "number",
            min: 1,
            max: 5,
            step: 1,
            defaultValue: 1,
            label: "Amount"
        }} />
        <button>+ Add</button>
    </div>
};

export default MealItemForm;