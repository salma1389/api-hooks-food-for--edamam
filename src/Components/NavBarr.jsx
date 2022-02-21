import React from 'react'
import { Link } from 'react-router-dom'
import Alert from './Alert';
import './NavBarr.css'
// import logo from '../logo.jpg';

export const NavBarr = ({getData,onsubmit,query,handelchange,alert}) => {
  return (
    <div className='globalNav' >
      <div className='navbar'>
       <img style={{width:"300px"}} src="logo.jpg" alt="" />
       <Link to="/"><h3> Home </h3></Link>
       <Link to="/Recipe"><h3> Recipes </h3></Link>
       <Link to="/Footer"><h3> Contact </h3></Link>
       </div>
       <div style={{display:"flex" , justifyContent:"center"}}>
       <h1 style={{marginRight:"10px"}} onClick={getData}> Search Recipes with </h1>
       <h1 style={{color:"orangered"}}>  EDAMAM </h1> 
       </div>
       <form onSubmit={onsubmit} style={{paddingBottom:"50px"}}>
        {alert !=="" && <Alert  alert={alert}/>}
        <input type="text" autoComplete='off' placeholder='search food'value={query} onChange={handelchange}/>
        <input type="submit" value="search"/>
      </form>
    </div>
  )
}
