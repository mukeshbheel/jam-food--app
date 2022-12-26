import Card from '../UI/Card';
import classes from './MealsItems.module.css';
import SingleMealItem from './SingleMealItem/SingleMealItem';

const mealsItems = [
  { "id": 1, "name": "Donuts", "price": 40.563, "desc": "food description lorem ipsum huhahahahhahahahahahhahh" },
  { "id": 2, "name": "Pizza", "price": 40.563, "desc": "food description lorem ipsum huhahahahhahahahahahhahh" },
  { "id": 3, "name": "Sushi", "price": 40.563, "desc": "food description lorem ipsum huhahahahhahahahahahhahh" },
];

const MealsItems = props => {

  const meals = mealsItems.map(meal => <SingleMealItem id={meal.id} key={meal.id} price={meal.price} name={meal.name} desc={meal.desc} />);

  return <ul className={classes['meals-ul']}>
    <Card className={classes.mealsItems}>{meals}</Card>

  </ul>
};


export default MealsItems;

