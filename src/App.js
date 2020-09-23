import React, { useState, useEffect, Fragment } from 'react';
import Recipe from './components/Recipe';
import { FiSearch } from 'react-icons/fi';
import { FaSmileBeam } from 'react-icons/fa'
import './App.css';


function App() {
  const API_ID = 'd9456999';

  const API_KEY = '61e3ef2c3fc848e79508804652cf9b93';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query])


  const getRecipes = async () => {
    try {
      const URL = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await URL.json();
      setRecipes(data.hits);
      setError(false)
      console.log(recipes);
    } catch (error) {
      setError(true)
      displayErr()
    }
  }


  function displayErr() {
    return <h1>Sorry, Try again...</h1>
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }



  return (
    <div className="App">
      <div className='heading'>
        <form onSubmit={getSearch}>
          <input type="text" placeholder='Search...' value={search} onChange={updateSearch} />
          <button type='submit'><FiSearch /></button>

        </form>
      </div>
      <div className="line"></div>

      <div className="wrap">
        {
          error ? (displayErr()) : (
            <>

              {recipes.map(recipe => (
                <Recipe
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredient={recipe.recipe.ingredientLines}
                />
              ))
              }
            </>
          )

        }
      </div>
      <footer>
        <h2>Check some delicious recipes and have fun <FaSmileBeam /></h2>
        <br />
        <ul>
          <li><a href="https://github.com/elencho">Contact</a></li>
          <li><a href="https://github.com/elencho">Policy</a></li>
          <li><a href="https://github.com/elencho">License</a></li>
          <li><a href="https://developer.edamam.com/edamam-recipe-api">API</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
