import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Meal {
  id: string;
  mealType: string;
  description: string;
  calories: number;
}

const Home: React.FC = () => {
  const [localMeals, setLocalMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosApi.get('/meals.json');
        if (response.data) {
          const fetchMeals = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }));
          setLocalMeals(fetchMeals);
        }
      } catch (error) {
        console.log('Error fetch meals:', error);
      }
    };
    void fetch();
  }, []);

  const calculatorForCalories = () => {
    return localMeals.reduce((total, meal) => total + meal.calories, 0);
  };

  return (
    <div>
      <h2 className="ms-5">Meals</h2>
      <Link to="/pages/add-edit-meal" className="btn btn-primary mb-3 mt-3 ms-5">
        Add Meal
      </Link>
      <p className="ms-5">Total Calories: {calculatorForCalories()}</p>
      {localMeals.length === 0 ? (
        <p>No meals available</p>
      ) : (
        <ul>
          {localMeals.map((meal) => (
            <li key={meal.id}>
              <div className="mb-2 border p-2 w-25">
                <p className="border text-primary">Type: {meal.mealType}</p>
                <p className="border">Description: {meal.description}</p>
                <p className="border text-danger">Calories: {meal.calories}</p>
                <button className="btn btn-primary me-3"><Link to={`/pages/edit-meal/${meal.id}`}/>Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;