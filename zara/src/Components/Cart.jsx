import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Navbar from "../Pages/Navbar";
function Cart(){
    React.useEffect(()=>{
        DisplayData()
    })
let arr=JSON.parse(localStorage.getItem("Cart"))
const deletefun=(index)=>{
    arr=arr.filter((el,i)=>{
        return i!==index
    })
    localStorage.setItem("Cart",JSON.stringify(arr))
}
const DisplayData=()=>{
return (
    <SimpleGrid  columns={{base:1,md:3,'2xl':4}} spacing={25}>
    {arr.map((el,index)=>{
    return (
    <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",borderRadius:"15px",padding:"10px",backgroundColor:"white"}} key={el.id}>
    <img  src={el.image} alt={el.cate} />
    <h3>{el.name}</h3>
    <h4>{el.price}</h4>
    <button onClick={()=>deletefun(index)} style={{backgroundColor:"black",color:"white",padding:"4px",borderRadius:"5px"}}>REMOVE</button>
    </div>
    )
    })}
    </SimpleGrid>
)
}

    return <>
    <Navbar/>
   <DisplayData/>
    </>
}
export default Cart