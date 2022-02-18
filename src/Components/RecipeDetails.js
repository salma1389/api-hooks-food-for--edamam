import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';

const RecipeDetails = ({recipe}) => {
  const [data, setData] = useState([recipe.recipe])
  const [result, setResult] = useState("")
  console.log(result)
  const {label}=useParams()

// console.log(res)
useEffect(() => {
 const getTheone=async()=>{
  const res= await data.find(el=>el.label==label)
  setResult(res)
 }
 getTheone()
}, [label])

  

  return (
    <div >
      {
        result&&<div>

<h1>{result.label}</h1>
<img src={result.image} alt="" />
    {result.ingredients.map (ingredient=>{
      return (
        
        
        <ul key={uuidv4() }>
           <li > {ingredient.text}</li>
    <li >weight- {ingredient.weight}</li>
            </ul>
           
           )
          })}
          </div>
        }
          </div>
  
    
  )
}

export default RecipeDetails