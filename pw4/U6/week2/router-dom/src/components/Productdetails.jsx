
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductDetails=()=>{
const {id}= useParams();
const [details,setDetails] = React.useState({});
React.useEffect(() =>{
    fetch(`http://localhost:3001/products/${id}`)
    .then((res)=>res.json())
    .then((res)=>setDetails(res))
    
    .catch((err)=>console.log(err))
    
},[id])
//console.log(id)
console.log(details)

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

return (
        <>
            <h1>PRODUCT DETAILS-{id}</h1>
            <Table>
                <Thead>
                    <th>id</th>
                    <th>Name</th>
                    <th>Price</th>
                    
                </Thead>

            
            {
                
                    
                    <Tbody>
                        <tr>
                            <Tdata>{details.id}</Tdata>
                            <Tdata>{details.name}</Tdata>
                            <Tdata>{details.price}</Tdata>
                            
                        </tr>
                    </Tbody>

            }
            </Table>
        </>
    )
}

export default ProductDetails;