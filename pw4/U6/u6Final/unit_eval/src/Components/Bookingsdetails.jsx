import React from 'react'
import {Link} from "react-router-dom"
import { useParams } from 'react-router-dom'
export const MoreDetails = () => {
    const {id}= useParams();
    const [singleMovie,setSigleMovie]=React.useState({})
console.log(id)
    React.useEffect(()=>{
        fetch(`http://localhost:8080/movies/${id}`)
        .then((res)=>res.json())
        .then((res)=>setSigleMovie(res))
        .then((err)=>console.log(err))
    },[id])
    console.log(singleMovie);
  return (
    <div style={{textAlign:'center'} }className="MovieCart" >
        <h2>{singleMovie.title}</h2>
        <img style={{width:"500px",height:"600px"}}src={singleMovie.poster_path}></img>
        <Link to="/Bookings"><button>Book details</button></Link>
        {
          
        }
        <Link to="#"><button>Booke Ticket</button></Link>
    </div>
  )
}
