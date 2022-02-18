import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../logo.jpg';

export const NavBarr = () => {
  return (
      <div className='navbar'>
       <img style={{width:"300px"}} src="logo.jpg" alt="" />
       <Link to="/"><h3> Home </h3></Link>
       <h3> Recipes </h3>
  
    </div>
  )
}
