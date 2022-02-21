import { Button } from '@mui/material';
import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import ButtonAddRemove from './ButtonAddRemove';
import ButtonCartQuantity from './ButtonCartQuantity';
import './Recipe.css'

// import Ingredients from './Ingredients';

// import RecipeDetails from './RecipeDetails';

const Recipe = ({recipe}) => {
    const {label,image,url,ingredients}=recipe.recipe;
    const [count, setCount] = useState(0)
   
    const [result, setResult] = useState(0)
    
   
    // const [show, setShow] = useState(false)

    const handelAdd=()=>{
      setCount(count+1) 
    }

    const handelRemove=()=>{
      setCount(count-1)
      
    }
    
   
    const handelchange=()=>{
      setResult(count)
      // setShow(true)
    }
    // console.log('count',count)
    // console.log('result',result)


  
  return (
<div>


   <div className="card" style={{display:"flex"}}>
      

    <div className='menuCard'>
    
        
    
        <img src={image} alt={label} />
        <h2>{label}</h2>
        <div className='btn'>
        <Link to={`/RecipeDetails/${label}`}>
        <Button variant="contained" color="success">
        See details 
        </Button>
        </Link>
        <ButtonAddRemove quantity={count} handelAdd={handelAdd} handelRemove={handelRemove}/>
        <ButtonCartQuantity quantity={count}/>
        <Button onClick={handelchange}>done</Button>
        {/* {show==='true'? { */}
        
      
      
       
        </div>
       <button style={{marginTop:"10px"}}> <a href={url}  > url </a></button>


       {/* to affiche the ingredient under the card item  */}

        {/* <button onClick={()=>setShow(!show)}>Ingredients</button>
      {show && <Ingredients ingredients={ingredients}/>}   */}
      {/* <button >Ingredients</button> */}
      
      </div>
     
    
    </div>
    </div>
  )
}

export default Recipe