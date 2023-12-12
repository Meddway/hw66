import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import Home from './container/Home/Home';
import AddEditMealForm from './container/AddEditMealForm/AddEditMealForm';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pages/add-edit-meal" element={<AddEditMealForm/>}/>
          <Route path="/pages/edit-meal" element={<div>Редактирование приема</div>}/>
          <Route path="*" element={<p className="text-center">Error 404 <p>Page not found :(</p></p>}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;