import React from "react"
import { Box } from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"

const inpsty={
    marginBottom:"7px",
    padding:"5px",
    border:"2px solid black",
    color:"black"
}
function Checkout(){
    return <>
    <h1 style={{fontSize:"35px"}}>CHECKOUT PAGE AND ORDER YOUR STUFF AND BE IN STYLE</h1>
    <Box bg='black' w='40%' p={4} color='white' margin="auto" marginTop="70px">
        <form style={{display:"flex" ,flexDirection:"column"}}>

        <input style={inpsty} placeholder="enter email" required/>
 <input style={inpsty} placeholder="enter your name" required/>
  <input style={inpsty} placeholder="enter your card details" required/>
   <input style={inpsty} placeholder="enter your CVV" required/>
    <input style={inpsty} placeholder="enter your PIN CODE" required/>
    <RouterLink to="/"><input style={inpsty} type="submit" placeholder="U"/></RouterLink>
        </form>
 
</Box>
    </>
}
export default Checkout