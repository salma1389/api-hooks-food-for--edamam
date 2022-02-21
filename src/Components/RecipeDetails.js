import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';
import './RecipeDetails.css'

const RecipeDetails = ({recipe}) => {
  const [data, setData] = useState([recipe.recipe])
  const [result, setResult] = useState("")
  console.log(result)
  const {label}=useParams()

// console.log(res)

// Display the data of one item when didupdate (lifecycle) the label
useEffect(() => {
 const getTheone=async()=>{
  const res= await data.find(el=>el.label===label)
  setResult(res)
 }
 getTheone()
}, [label])

  

  return (
    <div  >
   
      {
        result&&<div className='details'>
<img src={result.image} alt="" />
<div >
<h1>{result.label}</h1>
    {result.ingredients.map (ingredient=>{
      return ( 
        <ul className='list' key={uuidv4() }>
           <li > {ingredient.text}</li>
    <li className='weight'>weight- {ingredient.weight}</li>
            </ul>
           )
          })}
          </div>
          </div>
        }
        
          </div>
    
  )
}

export default RecipeDetails