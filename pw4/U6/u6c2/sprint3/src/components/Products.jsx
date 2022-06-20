import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Products=()=>{
    const [products,setProducts] = React.useState([]);
    const [count,setCount]= React.useState(0);

    const MainDiv =styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width:400px;
    margin:auto;
    `;

    const Tbody=styled.tbody`
    border: 1px solid black;
    background-color: aquamarine;
    `;
    const Tdata=styled.td`
    border: 1px solid black;
    `;
    React.useEffect(() =>{
        fetch(`http://localhost:8080/products`)
        .then((res)=>res.json())
        
        .then((res)=>setProducts(res))
        
        .catch((err)=>console.log(err));
    },[])
    console.log(products);

    return(
        <div>
           
           {
            products?.map((product) => (
                <MainDiv>
                <h3>{product.name}</h3>
                <h5>{product.discription}</h5>
                
                <button>ADD TO CART</button>
                <div style={{display:"flex",marginLeft:"32%"}}>
                <button onClick={()=>setCount(count+1)}>INC</button>
                <h4>NOT add</h4>
                <button onClick={()=>setCount(count-1)}>DEC</button>
                </div >
                <button>REMOVE</button>
                </MainDiv>
            ))
}
        </div>
    )
}

export default Products;