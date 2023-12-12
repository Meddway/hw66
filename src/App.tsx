import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import Home from './container/Home/Home';
import AddEditMealForm from './container/AddEditMealForm/AddEditMealForm';
import {useState} from "react";

interface Meal {
  mealType: string;
  description: string;
  calories: number;
}

const App = () => {
  const [meals, setMeals] = useState<Meal[]>([]);

  const addMeal = (meal: Meal) => {
    setMeals((prevMeals) => [...prevMeals, meal]);
  };
  console.log(meals);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pages/add-edit-meal" element={<AddEditMealForm addMeal = {addMeal}/>}/>
          <Route path="/pages/edit-meal/:id" element={<AddEditMealForm addMeal={addMeal} />} />
          <Route path="/pages/edit-meal" element={<div>Выберите прием, для редактирования</div>}/>
          <Route path="*" element={<p className="text-center">Error 404 <p>Page not found :(</p></p>}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;