import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Navbar from "../Pages/Navbar";
import{Link as RouterLink} from "react-router-dom"


const styles={
    width:"100%",
    margin:"auto",
    border:"2px solid black",
    padding:"45px",
backgroundColor:"#36454F"
}
const btn={
    backgroundColor:"grey",
    color:"white",
    padding:"7px",
    fontSize:"19px",
    marginTop:"9px",
    borderRadius:"11px",
    marginBottom:"7px"
}
function Cart(){
    const[data,setData]=React.useState([])
    
    
    React.useEffect(()=>{
        GetData()
    },[])
    
    function GetData(){
        fetch("https://zara-mock-cw.onrender.com/cart").then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((error)=>console.log(error))
    }

    const DeleteCart=async (id)=>{
let res=await fetch(`https://zara-mock-cw.onrender.com/cart/${id}`,{
    method:'DELETE',
    headers:{
        'Content-Type':'application/json'
    }
})
alert("Successfully removed")
// setData(res.json())
fetch("https://zara-mock-cw.onrender.com/cart").then((res)=>res.json())
.then((res)=>setData(res))
.catch((error)=>console.log(error))
    }
    let sum=0;
for(let i=0;i<data.length;i++){
    sum+=(data[i].price)
}

    return (<>
        {/* sum={sum} tota={data.length} */}
        <Navbar />
        
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",backgroundColor:"black"}}>
        <RouterLink to="/checkout" > <button style={btn}>Procced Checkout</button></RouterLink>    
       <h1 style={{fontSize:"35px",backgroundColor:"black",color:"white"}}>Total Price:{"   "}{sum}</h1>
       <h1 style={{fontSize:"35px",backgroundColor:"black",color:"white"}}>Total Number Of Items:{"   "}{data.length}</h1>
       
        </div>
        <div style={styles}>
           
             
           <SimpleGrid  columns={{base:1,md:3,'2xl':4}} spacing={25}>
   {data?.map((el)=>{
   return (
   <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",borderRadius:"15px",padding:"10px",backgroundColor:"white"}} key={el.id}>
   <img  src={el.image} alt={el.cate} />
   <h3>{el.name}</h3>
   <h4>{el.price}</h4>
   <button onClick={()=>{DeleteCart(el.id)}} style={{backgroundColor:"black",color:"white",padding:"4px",borderRadius:"5px"}}>Remove</button>
   </div>
   )
   })}
   </SimpleGrid>
  
   </div>
   <h1>Loading ...</h1>
       
  </>  
    )
}
export default Cart