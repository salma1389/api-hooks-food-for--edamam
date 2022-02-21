import React from 'react'
import { Link } from 'react-router-dom'

import './HomePage.css'

const HomePage = ({recipes}) => {
  console.log(recipes)
  return (
    
   <header>
   
   <div className='content-main'>
        <h1>Delicious food for your cravings</h1>
        <p>We made fresh and healthy meals with different recipes</p>
        <Link to="/Recipe">
        <button >
          Search Recipe <i className='fas fa-long-arrow-alt-right'></i>
        </button>
        </Link>
      </div>
    <img className='header-img1' src="Build-A-Bowl-FI.jpg" alt="j" />
    <img className='header-img2' src="R.jpg" alt="j" />
  </header>
 
  )
}

export default HomePage