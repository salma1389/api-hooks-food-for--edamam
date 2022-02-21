import React from 'react'
import './ButtonAddRemove.css';
import ButtonCartQuantity from './ButtonCartQuantity';

const ButtonAddRemove = ({quantity,handelRemove,handelAdd}) => {
 
  //  console.log("quantity",quantity)
  return (
      <div>
    <div className='btnAddRemove'>
        
      {quantity !== 0 ? (
        <div className='btnAddRemove-positive'>
          <i
            className='fa fa-minus'
            aria-hidden='true'
            onClick={handelRemove}
          ></i>
          <span> {quantity}</span>
          <i className='fa fa-plus' aria-hidden='true' onClick={handelAdd}></i>
        </div>
      ) : (
        <div onClick={handelAdd} className='btnAddRemove-negative'>
          <span>ADD</span>
          <i className='fa fa-plus' aria-hidden='true'></i>
        </div>
      )}
     
    </div>
  
  </div>
  )
}

export default ButtonAddRemove