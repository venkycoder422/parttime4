import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Products=()=>{
    const [products,setProducts] = React.useState([]);
    const Table = styled.table`
    width:400px;
    margin: auto;
    border: 1px solid black;
    `;

    const Thead =styled.tr`
    background-color: yellow;
    color:black;
    border: 1px solid black;
    `;

    const Tbody=styled.tbody`
    border: 1px solid black;
    background-color: aquamarine;
    `;
    const Tdata=styled.td`
    border: 1px solid black;
    `;
    React.useEffect(() =>{
        fetch(`http://localhost:3001/products`)
        .then((res)=>res.json())
        
        .then((res)=>setProducts(res))
        
        .catch((err)=>console.log(err));
    },[])
    console.log(products);

    return(
        <div>
            <h1>PRODUCTS</h1>
            <Table>
                        <Thead>
                            <th>NAME OF PRODUCT</th>
                            <th>PRICE</th>
                            <th>MORE DETAILS</th>
                        </Thead>
                {
                   
                    products?.map((product) => (
                        <Tbody>
                            <tr>
                                <Tdata>{product.name}</Tdata>
                                <Tdata>{product.price}</Tdata>
                                <Tdata> <Link to={`/products/${product.id}`}>More Details</Link></Tdata>
                            </tr>
                        </Tbody>
                    ))
                    
                }
            </Table>
        </div>
    )
}

export default Products;