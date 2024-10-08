import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load components
const RecipeDetails = lazy(() => import('./pages/RecipeDetails'));
const Profile = lazy(() => import('./pages/Profile'));
const AddRecipe = lazy(() => import('./pages/AddRecipe'));
const EditRecipe = lazy(() => import('./pages/EditRecipe'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id/*" element={<RecipeDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-recipe" element={<ProtectedRoute element={<AddRecipe />} />} />
          <Route path="/edit-recipe/:id" element={<ProtectedRoute element={<EditRecipe />} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
