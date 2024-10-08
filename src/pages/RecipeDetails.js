import React from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import recipes from '../data/recipe';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Reviews from './Reviews';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <nav>
        <ul>
          <li>
            <Link to="ingredients">Ingredients</Link>
          </li>
          <li>
            <Link to="instructions">Instructions</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="ingredients" element={<Ingredients ingredients={recipe.ingredients} />} />
        <Route path="instructions" element={<Instructions instructions={recipe.instructions} />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default RecipeDetails;
