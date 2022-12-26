import classes from './MealsSummary.module.css';
const MealsSummary = () => {
    return <div  className='center'>
        <div className={classes.mealsSummary}>
        <h1 className={classes.heading}>Delicious Food, Delivered To You</h1>
        <p className={classes.desc1}>Choose your favorite meal from our broad slelection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p className={classes.desc2}>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
    </div>    
    </div> 
    

};


export default MealsSummary;