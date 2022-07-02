import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Homepage.css"
export const HomePage = () => {
    const [movieData,setMovieData]=React.useState([]);

    React.useEffect(()=>{
        fetch(`http://localhost:8080/movies`)
        .then((res)=>res.json())
        .then((res)=>setMovieData(res))
        .then((err)=>console.log(err));
    },[]);
    console.log(movieData);
  return (
    <div style={{backgroundColor:"aqua"}}>
        <div className='HomeMainDiv'>
            {
                movieData.map((data)=>(
                    <>
                    <div>
                        <img src={data.poster_path}></img>
                        <h2>{data.title}</h2>
                        <Link to={`/movies/${data.id}`}><button>More Details</button></Link>
                    </div>
                
                </>
                ))
            }

        </div>
    </div>
  )
}

