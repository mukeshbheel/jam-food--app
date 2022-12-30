import Card from '../UI/Card';
import { useState, useEffect, useCallback } from 'react';
import classes from './MealsItems.module.css';
import SingleMealItem from './SingleMealItem/SingleMealItem';

// const mealsItems = [
//   { "id": 1, "name": "Donuts", "price": 40.563, "desc": "food description lorem ipsum huhahahahhahahahahahhahh" },
//   { "id": 2, "name": "Pizza", "price": 40.563, "desc": "food description lorem ipsum huhahahahhahahahahahhahh" },
//   { "id": 3, "name": "Sushi", "price": 40.563, "desc": "food description lorem ipsum huhahahahhahahahahahhahh" },
// ];

const MealsItems = props => {

  const [mealsItems, setMealsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();



  const fetchMealsitems = useCallback(async () => {
    const response = await fetch('https://react-jas-meal-app-default-rtdb.firebaseio.com/meals');
    if (!response.ok) {
      throw new Error('something went wrong');
    }

    const data = await response.clone().json();
    console.log(data);

    if (data) {
      const mealsData = [];
      for (const id in data) {
        mealsData.push({
          id: id,
          name: data[id].name,
          price: data[id].price,
          desc: data[id].description
        })
      }
      setMealsItems(mealsData);
      setIsLoading(false);
    }
    // console.log(response.clone().json());
    // console.log(mealsItems);

  }, []);

  useEffect(() => {
    fetchMealsitems().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [fetchMealsitems]);


  if (isLoading) {
    return <section><p>Loading...</p></section>
  };

  if (httpError) {
    return <section><p>{httpError}</p></section>
  }

  const meals = mealsItems.map(meal => <SingleMealItem id={meal.id} key={meal.id} price={meal.price} name={meal.name} desc={meal.desc} />);

  return <ul className={classes['meals-ul']}>
    {mealsItems.length > 0 && <Card className={classes.mealsItems}>{meals}</Card>}
  </ul>
};


export default MealsItems;

