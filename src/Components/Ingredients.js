import React from 'react'


import {v4 as uuidv4} from 'uuid';

const RecipeDetails = ({ingredients}) => {
  return (
    ingredients.map (ingredient=>{
        return (
        
            <ul key={uuidv4() }>
            <li > {ingredient.text}</li>
            <li >weight- {ingredient.weight}</li>
            </ul>
           
        )
    })
  )
}

export default RecipeDetails