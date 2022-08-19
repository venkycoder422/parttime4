import React from 'react'
import { useParams } from 'react-router-dom';
import '../styles/SingleRecipe.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import { Recipes } from './Recipes';
export const SingleRecipe = () => {
    const [recipe, setrecipe] = React.useState({});
    const { id } = useParams();
    console.log(id);
    React.useEffect(() => {
        fetch(`http://localhost:3000/recipes/${id}`)
            .then((res) => res.json())
            .then((res) => setrecipe(res))
            .then((err) => console.log(err))
    }, [id]);
    console.log(recipe)
    return (
        <div className="recipe_main_div">
            <div className='recipe_section'>
                <div>
                    <img src={recipe.img} />
                </div>
                <div>
                    <h1>{recipe.name}</h1>
                    <h2>{recipe.description}</h2>
                    <div className='timing_section'>
                        <div style={{ textAlign: "center" }}>
                            <AccessTimeIcon></AccessTimeIcon>
                            <h4>Prep Time</h4>
                            <h5>{recipe.pretime}.</h5>

                        </div>
                        <div style={{ textAlign: "center" }}>
                            <AccessTimeIcon></AccessTimeIcon>
                            <h4>Cook Time</h4>
                            <h5>{recipe.cooktime}.</h5>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <PeopleIcon></PeopleIcon>
                            <h4>{recipe.serve}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='recipe_content'>
                <div>
                    <h1>Instructions</h1>
                    {
                        recipe.instruction?.map((data, i) => {
                            if (i % 2 === 0) {
                                return <h2 style={{ color: "rgb(183, 18, 216)" }}>{data}<hr></hr></h2>
                            } else {
                                return <h3>{data}</h3>
                            }

                        })
                    }
                </div>
                <div>
                    <h1>Ingrediants</h1>
                    {
                        recipe.ingrediants?.map((data)=>(
                            <>
                            <h3>{data}</h3>
                            <hr></hr>
                            </>
                            
                            
                        ))
                    }
                    <h1>Tools</h1>
                    {
                        recipe.tools?.map((data)=>(
                           <>
                            <h3>{data}</h3>
                            <hr></hr>
                           </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
