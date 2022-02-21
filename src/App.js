
import './App.css';
import axios from "axios";
import React , { useState } from 'react';
import Recipe from './Components/Recipe';
import {v4 as uuidv4} from 'uuid';

import { NavBarr } from './Components/NavBarr';
import RecipeDetails from './Components/RecipeDetails';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';


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
      console.log('recipes',result)
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
      <NavBarr getData={getData} onsubmit={onsubmit} query={query} handelchange={handelchange}  alert={alert}  />
     
     <div style={{backgroundColor:'rgb(240, 247, 240)'}}>
      <div className='card '> 
  
      
      <Routes>
       {/* <div className='card '>  */}
        <Route path='/' element ={ <HomePage recipes={[recipes]} key={uuidv4()}/>}/>

        <Route   path='/Recipe'   element= {recipes !==[] && recipes.map(recipe=> < Recipe  recipe={recipe} key={uuidv4()}/>)}/>
        {/* </div>  */}
     
        <Route  path='/RecipeDetails/:label' element= { recipes.map(recipe=> <RecipeDetails recipe={recipe} key={uuidv4()}/>)}/>
      </Routes>
      </div>
      </div>
    </Router>

    <Footer/>
      </div>
     
  );
}


export default App;
