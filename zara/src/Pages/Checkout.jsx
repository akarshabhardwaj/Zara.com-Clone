import React from "react"
import { Box } from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"
import Navbar from "./Navbar"
import LargeWithAppLinksAndSocial from "../Components/Footer"

const inpsty={
    marginBottom:"7px",
    padding:"5px",
    border:"2px solid black",
    color:"black"
}
function Checkout(){
    const handleAlert=()=>{
        alert("Payment Successful")
    }
    return <>
    <Navbar/>

    <h1 style={{fontSize:"35px"}}>CHECKOUT PAGE AND ORDER YOUR STUFF AND BE IN STYLE</h1>
    <Box bg='black' w='40%' p={4} color='white' margin="auto" marginTop="70px" borderRadius="15px">
        <form style={{display:"flex" ,flexDirection:"column"}}>

        <input style={inpsty} placeholder="enter email" required/>
 <input style={inpsty} placeholder="enter your name" required/>
  <input style={inpsty} placeholder="enter your card details" required/>
   <input style={inpsty} placeholder="enter your CVV" required/>
    <input style={inpsty} placeholder="enter your PIN CODE" required/>
    <RouterLink to="/"><input onClick={handleAlert} style={inpsty} type="submit" placeholder="U"/></RouterLink>
        </form>
 
</Box>
<LargeWithAppLinksAndSocial/>
    </>
}
export default Checkout