import React from 'react'
import '../styles/HomePage.css' 
import { Recipes } from './Recipes'
export const Home = () => {
  return (
    <div className='Home_main_div'>
        <div className='indianfood_homepage_image'>
           
           <h1 className="text_above_img" style={{filter: "contrast(200%)"}}>Indian Recipes</h1>
          <h4 style={{marginTop:"0px",fontSize: "1.563rem"}}>Bring soul to the Recipe</h4>
          
    
        </div>
        <Recipes />
    </div>
  )
}
