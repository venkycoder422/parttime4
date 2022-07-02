import React from 'react'

export const Bookings = () => {
    const [booking,setbookings]=React.useState([]);

    React.useEffect(()=>{
        fetch(`http://localhost:8080/moviesBooked`)
        .then((res)=>res.json())
        .then((res)=>setbookings(res))
        .then((err)=>console.log(err));
    },[]);
    console.log(booking);
  return (
    <div>
        <h1>Booked Movie</h1>
        {
            booking.map((data)=>(
                <div style={{textAlign:"center"}}>
                    <h2>ID:{data.id}</h2>
                    <h3>MOVIE-ID{data.movie_id}</h3>
                    <h3>Name:{data.name}</h3>
                    <h1>Seat:{data.seat}</h1>
                </div>
            ))
        }
    
    </div>
  )
}
