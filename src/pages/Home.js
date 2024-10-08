import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Dummy data for recipes
  const recipes = [
    { id: 1, name: 'Spaghetti Bolognese' },
    { id: 2, name: 'Chicken Curry' },
  ];

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
