import React from 'react';
import {Link} from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <Link to="/pages/add-edit-meal" className="btn btn-primary mb-3 mt-3">
        Add Meal
      </Link>
    </div>
  );
};

export default Home;