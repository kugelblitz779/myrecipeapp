import React, {useEffect, useState} from 'react'
import './App.css';
import Recipe from './components/Recipe';
import style from './style.module.css'


const App = () => {

  const APP_ID = "958e8819";
  const APP_KEY = "93a5f44b1f7d80a8ed9c30d69ee84bb7";


  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("turkey");

  useEffect(() => {
    getRecipe();
  }, [query])

  const getRecipe = async () => {

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (e) => {

    setSearch(e.target.value);

  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <div>
      <form onSubmit={getSearch} className="search-form">
        <input 
        type="text" 
        className="search-bar"
        value={search}
        onChange={updateSearch}
        placeholder="Search for a food item..."
        />

        <button type="submit" className="search-button">Search</button>
      </form>
      </div>

      <div className={style.content}>
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calorie={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
      
    </div>
  );
}

export default App;
