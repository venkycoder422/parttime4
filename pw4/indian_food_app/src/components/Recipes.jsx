import React from 'react';
import "../styles/Recipes.css";
import { Link } from 'react-router-dom';
export const Recipes = () => {
  const [getrecipes, setrecipes] = React.useState([]);
  React.useEffect(() => {
    fetch(`http://localhost:3000/recipes`)
      .then((res) => res.json())
      .then((res) => setrecipes(res))
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

  }, [])
  console.log("dfd", getrecipes)
  return (
    <div className='main_div'>
      
      
      <div>
      <h1>Recipes</h1>
      <div className='tag_centent'>
      {
        getrecipes?.map((data) => (
          <div>
           <Link to=""> <h2>{data.category}</h2></Link>
           </div>
        ))


      }
      </div>
      </div>
      <div className='recipes_div'>
      {
        getrecipes?.map((data) => (
          <div style={{margin:"0%"}}>
            <Link to={`/recipes/${data.id}`}><img src={data.img}></img></Link>
            <h3>{data.name}</h3>
            <span>Prep: {data.pretime} | Cook: {data.cooktime}</span>
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

