import RecipeList from './component/RecipeList';
import FormRecipe from './component/Form';
import './App.css'; 
import { useEffect, useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipe, setRecipes] = useState([]);

  useEffect(() => {
    console.log("RecipeList component mounted");
    FetchAllRecipes();

}, []);


const FetchAllRecipes = () => {
  fetch(`${process.env.REACT_APP_URL_API}/recipes`)
  .then(response => response.json())
  .then(values => {
      setRecipes(values);
  });
}


  return (
    <div className="App">
      <p>Hello app</p>
      <FormRecipe FetchAllRecipes={FetchAllRecipes}/>

      <RecipeList recipe={recipe} FetchAllRecipes={FetchAllRecipes} />
      <ToastContainer />
      
    </div>
  );
}

export default App;
