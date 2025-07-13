import React from 'react';
import { useParams } from 'react-router-dom';

const EditRecipe = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Recipe</h1>
      <p>Editing Recipe ID: {id}</p>
    </div>
  );
};

export default EditRecipe;
