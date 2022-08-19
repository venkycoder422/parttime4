import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Products=()=>{
    const [products,setProducts] = React.useState([]);
    const [cart,setCart] = React.useState({
    name:"",
    discription:""

    });

    const MainDiv =styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width:400px;
    margin:auto;
    `;

   
    React.useEffect(() =>{
        fetch(`http://localhost:8080/products`)
        .then((res)=>res.json())
        
        .then((res)=>setProducts(res))
        
        .catch((err)=>console.log(err));
    },[])
    console.log(products);
    const Posting=()=>{
        
    }
    React.useEffect(()=>{
        fetch(`http://localhost:8080/cart`, {
                method:"POST",
                body:JSON.stringify(cart),
                headers:{
                    "Content-type":"application/json"
                }
            }).then((res) => res.json())
            .catch((err) => console.log(err));
    },[])
    
    return(
        <div>
           
           {
            products?.map((product) => (
                <MainDiv>
                <h3>{product.name}</h3>
                <h5>{product.discription}</h5>
                
                <button onClick={()=>setCart(product)}>ADD TO CART</button>
                <div style={{display:"flex",marginLeft:"32%"}}>
                <button onClick={()=>setCart(product)}>INC</button>
                <h4>NOT add</h4>
                <button onClick={()=>setCart(product)}>DEC</button>
                </div >
                <button>REMOVE</button>
                </MainDiv>
            ))
}
        </div>
    )
}

export default Products;