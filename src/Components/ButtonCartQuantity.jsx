import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import  './ButtonCartQuantity.css'


const ButtonCartQuantity = ({quantity,recipe}) => {
  // const [data, setData] = useState([recipe.recipe])
  // const [result, setResult] = useState("")
  // const {label}=useParams()
  //   console.log(quantity)

  //   useEffect(() => {
  //     const getTheone=async()=>{
  //      const res= await data.find(el=>el.label==label)
  //      setResult(res)
  //     }
  //     getTheone()
  //    }, [label])

  
  
  return (
  <div>
     <div className='btnCartCount' >
         
    <div className='count'>{quantity >=100 ? '99+' : quantity}</div>
      
    <i className='fas fa-shopping-cart'></i>
    
 
</div>

</div>
  )
  
}

export default ButtonCartQuantity