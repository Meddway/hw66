import React, {useState, useEffect} from 'react';
import axiosApi from '../../axiosApi';
import {useNavigate, useParams} from 'react-router-dom';

interface AddEditMealFormProps {
  addMeal: (meal: Meal) => void;
}

interface Meal {
  id?: string;
  mealType: string;
  description: string;
  calories: number;
}

const AddEditMealForm: React.FC<AddEditMealFormProps> = ({addMeal}) => {
  const [meal, setMeal] = useState<Meal>(
    {
      mealType: '',
      description: '',
      calories: 0
    }
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      void fetch();
    }
  },);

  const fetch = async () => {
    try {
      const response = await axiosApi.get(`/meals/${id}.json`);
      if (response.data) {
        setMeal(response.data);
      }
    } catch (error) {
      console.error('Error fetch meal for edit:', error);
    }finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      if (id) {
        await axiosApi.put(`/meals/${id}.json`, meal);
      } else {
        const response = await axiosApi.post('/meals.json', meal);
        if (response.status === 200) {
          addMeal(response.data);
        }
      }
      navigate('/');
    } catch (error) {
      console.error('Error submit meal:', error);
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="ms-3 mt-3 w-25">
      {loading && <p className="text-center">Loading...</p>}
      {!loading && (
        <>
      <h5 className="mb-3">{id ? 'Редактировать' : 'Добавить'} Прием пищи</h5>
      <select className="form-select"
              value={meal.mealType}
              onChange={(e) => setMeal(
                {
                  ...meal,
                  mealType: e.target.value
                })}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Snack">Snack</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <textarea className="mt-3" value={meal.description}
                onChange={(e) => setMeal(
                  {
                    ...meal,
                    description: e.target.value
                  })}
                >
      </textarea>
      <div>
        <p className="mt-3">Калории</p>
        <input type="number" value={meal.calories}
               onChange={(e) => setMeal(
                 {
                   ...meal,
                   calories: +e.target.value
                 })}
        />
      </div>
      <button className="mt-3 btn btn-primary" onClick={handleSubmit}>
        Сохранить
      </button>
        </>
      )}
    </div>
  );
};

export default AddEditMealForm;
