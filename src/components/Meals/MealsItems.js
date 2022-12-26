import Card from '../UI/Card';
import classes from './MealsItems.module.css';
import SingleMealItem from './SingleMealItem/SingleMealItem';

const mealsItems = [
    { "id": 1, "name": "Donuts"},
  { "id": 2, "name": "Pizza" },
  { "id": 3, "name": "Sushi" },
];

const MealsItems = props => {

    const meals = mealsItems.map(meal => <SingleMealItem  />);

    return <ul>
      <Card className={classes.mealsItems}>{meals}</Card>
    
</ul>
};


export default MealsItems;

