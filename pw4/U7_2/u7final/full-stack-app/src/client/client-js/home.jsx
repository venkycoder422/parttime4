import React from 'react'
import { Link } from 'react-router-dom';


export const Home = () => {

  const [data, setData] = React.useState([]);
  const getData = () => {
    fetch(`http://localhost:3001/todos/all`)
      .then((res) => res.json())
      .then((res) => setData(res))

      .then((err) => console.log(err))
  }

  React.useEffect(() => {
    getData()
  }, [])
  console.log(data);

  return (
    <div>
      <h1>HOME PAGE</h1>
      {
        data.map((data) => (
          <div className="CartData">
            <Link className='Links' to={`/new_clothing/${data.id}`}></Link>
            <h3 className="" >{data.taskname}</h3>

            <p className="">{data.status}</p>
            <p className="tag">${data.tag}</p>

          </div>
        ))
      }

    </div>
  )
}

