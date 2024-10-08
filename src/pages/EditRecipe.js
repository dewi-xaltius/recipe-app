import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../data/recipe';

const EditRecipe = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>Edit Recipe</h1>
      <p>Editing Recipe ID: {id}</p>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" defaultValue={recipe.name} />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea defaultValue={recipe.ingredients.join(', ')} />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea defaultValue={recipe.instructions} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditRecipe;
