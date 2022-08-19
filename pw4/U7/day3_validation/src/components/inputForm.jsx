import React from 'react'

 const InputForm = () => {
  return (
    <>
    <div>
    <div>
        <h2>InputForm</h2>
      
        <form>
        <input type="text" value="First_Name" placeholder='First Name'></input>
        <input type="text" value="Last_Name" placeholder='LastName'></input>
        <input type="email" value="Email" placeholder='Email'></input>
        <input type="text" value="age" placeholder='Age'></input>
        <input type="text" value="pincode" placeholder="Pincode"></input>
        <input type="submit" value="Submit"></input>
        </form>
    </div>
    </div>
    

    
    </>
  )
}

export default InputForm



