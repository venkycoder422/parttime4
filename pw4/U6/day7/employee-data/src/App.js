
import React, { useState } from "react";
import './App.css';
import { FormDate } from './List'
function App() {
  const [data, setData] = React.useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    maritual_status: true,
  });

  const [formData, setFormData] = useState([])

  const HandleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })

  }

  React.useEffect(() => {
    fetch(`http://localhost:3001/employee_data`)
      .then((res) => res.json())
      .then((res) => setFormData(res)).catch((error) => console.log(error))
  }, []);

  const { name, age, address, department, salary, maritual_status } = data
  console.log("getting ROy", data)



  const HandleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3001/employee_data`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }

    }).then((res) => res.json())
      .catch((err) => console.log(err, "error"))
      .then((res) => console.log(res));

  }


  return (
    <div className="App">
      <div>
        <h1>EMPOLYEE DATA</h1>
      </div>
      <form className="inputForm" onSubmit={HandleSubmit}>
        <input type="text" placeholder="Name" name="name" onChange={HandleChange} value={name}></input>
        <input type="text" placeholder="Age" name="age" onChange={HandleChange} value={age}></input>
        <input type="text" placeholder="Address" name="address" onChange={HandleChange} value={address}></input>
        <select name="department" onChange={HandleChange} value={department}>
          <option value="">Department</option>
          <option value="Science">Science</option>
          <option value="Maths">Maths</option>
          <option value="Physics">Physics</option>
          <option value="Computers">Computers</option>
        </select>
        <input type="text" placeholder="salary" name="salary" onChange={HandleChange} value={salary}></input>
        <label>
        Maritual State: <input type="checkbox" placeholder="" name="maritual_status" onChange={HandleChange} value={maritual_status}></input>
        </label>
        <input type="submit" value="SAVE" ></input>
      </form>
      <div>
      </div>
      <FormDate data={formData} />
    </div>
  );
}

export default App;
