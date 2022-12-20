import { Box ,Flex} from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom"
import {FaCartPlus} from "react-icons/fa"
import React from 'react'
let total=0;
function Navbar(){
  const[data,setData]=React.useState([])
    
    
  React.useEffect(()=>{
      GetData()
  },[])
  
  function GetData(){
      fetch("https://zara-mock-cw.onrender.com/cart").then((res)=>res.json())
      .then((res)=>setData(res))
      .catch((error)=>console.log(error))
  }
  let sum=0;
  for(let i=0;i<data.length;i++){
    sum+=(data[i].price)
}
 console.log(sum)

return(
    <div>
        <Flex>
          
<Box bg='transparent' w='100%' p={0} color='black' border={"1px solid black"}>
<div style={{display:"flex",justifyContent:"space-around"}}>
  <RouterLink to="/" > <img  src='https://1000logos.net/wp-content/uploads/2017/05/Zara-Emblem.png' alt='zara' style={{width:"30%",padding:"5px"}}/></RouterLink>
  <RouterLink to="/cart"><FaCartPlus style={{width:"500px",margin:"auto",marginTop:"7px"}}/>{sum}<span>{"----"}{data.length}</span></RouterLink>
  </div>
</Box>

<Box bg='grey' w='100%' p={0} color='black' border={"1px solid black"}>
    <Flex justifyContent="space-around" alignItems="center">
   <RouterLink to="/login" style={{backgroundColor:"black",paddingLeft:"4px",paddingRight:"5px",color:"white",border:"1px solid white", marginTop:"7px",borderRadius:"5px"}}><button> LOGIN </button></RouterLink> 
   <RouterLink to="/register"  style={{backgroundColor:"black",paddingLeft:"4px",paddingRight:"5px",color:"white",border:"1px solid white", marginTop:"7px",borderRadius:"5px"}}> <button> REGISTER </button></RouterLink>
   
    </Flex>

</Box>
</Flex>
</div>
)
}
export default Navbar