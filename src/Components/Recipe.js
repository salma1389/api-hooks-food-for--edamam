import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Ingredients from './Ingredients';

import RecipeDetails from './RecipeDetails';

const Recipe = ({recipe}) => {
    const {label,image,url,ingredients,id}=recipe.recipe;
    const [show, setShow] = useState(false)
  return (
   <div className="card" style={{display:"flex"}}>

    <div className='menuCard'  >
    
        <Link to={`/RecipeDetails/${label}`}> 
    
        <img src={image} alt={label} />
        <h2>{label}</h2>
        
        <button style={{marginLeft:'20px'}}> See details </button> </Link>
        <a href={url} style={{marginRight:"10px"}} > url </a>

       {/* to affiche the ingredient under the card item  */}

        {/* <button onClick={()=>setShow(!show)}>Ingredients</button>
      {show && <Ingredients ingredients={ingredients}/>}   */}
      {/* <button >Ingredients</button> */}
      
      </div>
     
    
    </div>
   
  )
}

export default Recipe