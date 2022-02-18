
import './App.css';
import axios from "axios";
import React , { useState } from 'react';
import Recipe from './Components/Recipe';
import {v4 as uuidv4} from 'uuid';
import Alert from './Components/Alert';
import { NavBarr } from './Components/NavBarr';
import RecipeDetails from './Components/RecipeDetails';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

function App() {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [alert, setAlert] = useState("")

  const APP_ID="e352995b";
  const APP_KEY="3291f38977f04e8e216e56b87329958b";
  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () =>{
    if(query!==""){
      const result =await axios.get(url);
      if (!result.data.more){
        return setAlert('No food with such a name')
      }
      setRecipes(result.data.hits) 
      // console.log(result)
      setAlert("")
      setQuery("")
    } else {
      setAlert("please full the form")
    }
    
  }

  const handelchange=(e)=>{
    setQuery(e.target.value)
  }

  const onsubmit= (e)=>{
    e.preventDefault();
    getData();
  }
  return (
    <div className="App">
      <Router>
      <NavBarr/>
     
     
      <h1 onClick={getData}> search for Recipes with EDAMAM </h1>
      <form onSubmit={onsubmit}>
        {alert !=="" && <Alert  alert={alert}/>}
        <input type="text" autoComplete='off' placeholder='search food'value={query} onChange={handelchange}/>
        <input type="submit" value="search"/>
      </form>
      <div className='card '> 
      
      <Routes>
       {/* <div className='card '>  */}
    
        <Route   path='/'   element= {recipes !==[] && recipes.map(recipe=> < Recipe  recipe={recipe} key={uuidv4()}/>)}/>
        {/* </div>  */}
     
        <Route  path='/RecipeDetails/:label' element= { recipes.map(recipe=> <RecipeDetails recipe={recipe} key={uuidv4()}/>)}/>
      </Routes>
      </div>
    </Router>
      </div>
     
  );
}


export default App;
