import React from "react";
import Navbar from "../Pages/Navbar";
import {SimpleGrid} from "@chakra-ui/react"
import LargeWithAppLinksAndSocial from "./Footer";



const styles={
    width:"100%",
    margin:"auto",
    border:"2px solid black",
    padding:"45px",

backgroundColor:"grey"
}
function Kids(){
    const[data,setData]=React.useState([])
    
    
    React.useEffect(()=>{
        GetData()
    },[])
    
    function GetData(){
        fetch("https://zara-mock-cw.onrender.com/kids").then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((error)=>console.log(error))
    }
    const handleSort=()=>{
        fetch("https://zara-mock-cw.onrender.com/kidshtl").then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((error)=>console.log(error))
    }
    const Sorthandle=()=>{
        fetch("https://zara-mock-cw.onrender.com/kidslth").then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((error)=>console.log(error))
    }

    const AddToCart=async (el)=>{
        console.log(el)
        let req=await fetch(`https://zara-mock-cw.onrender.com/cart`,{
            method:"POST",
            body:JSON.stringify(el),
            headers:{
                'Content-Type':'application/json'
            }
        })
        
    }  
    // console.log(data)
    return (<>
        
        <Navbar/>
        <div style={{width:"30%",margin:"auto",border:"0px solid red",display:"flex",justifyContent:"space-between"}}>
        <button style={{backgroundColor:"black",color:"white",padding:"4px"}} onClick={handleSort}>Sort Low To High</button>
        <button style={{backgroundColor:"black",color:"white",padding:"4px"}} onClick={Sorthandle}>Sort High To Low</button>
        </div>
        
        <div style={styles}>
           
             
           <SimpleGrid  columns={{base:1,md:3,'2xl':4}} spacing={25}>
   {data?.map((el)=>{
   return (
   <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",borderRadius:"15px",padding:"10px",backgroundColor:"white"}} key={el.id}>
   <img  src={el.image} alt={el.cate} />
   <h3>{el.name}</h3>
   <h4>{el.price}</h4>
   <button onClick={()=>{AddToCart(el)}} style={{backgroundColor:"black",color:"white",padding:"4px",borderRadius:"5px"}}>Add To Cart</button>
   </div>
   )
   })}
   </SimpleGrid>
   <h1>LOADING ....</h1>
   </div>
      <LargeWithAppLinksAndSocial/> 
  </>  
    )
}
export default Kids