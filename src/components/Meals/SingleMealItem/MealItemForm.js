import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';


const MealItemForm = props => {

    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitFormHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        console.log(amountInputRef.current.value)

        if (enteredAmount.trim === '' || enteredAmountNumber < 0 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
        } else {
            setAmountIsValid(true);
            props.onAdd(enteredAmountNumber);
        }
    }

    return <form onSubmit={submitFormHandler} className={classes.mealItemForm}>
        <Input
            ref={amountInputRef}
            id={props.id}
            label="Amount"
            input={{
                type: "number",
                min: 1,
                max: 5,
                step: 1,
                defaultValue: 1,
                label: "Amount"
            }} />
        <button type='submit'>+ Add</button>
        {!amountIsValid && <p>please enter a valid amount(1-5)</p>}
    </form>
};

export default MealItemForm;