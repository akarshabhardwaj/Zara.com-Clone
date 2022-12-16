import { Box ,Flex} from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom"
import {FaCartPlus} from "react-icons/fa"


function Navbar(){


return(
    <div>
        <Flex>
          
<Box bg='transparent' w='100%' p={0} color='black' border={"1px solid black"}>
<div style={{display:"flex",justifyContent:"space-around"}}>
  <RouterLink to="/" > <img  src='https://1000logos.net/wp-content/uploads/2017/05/Zara-Emblem.png' alt='zara' style={{width:"30%",padding:"5px"}}/></RouterLink>
  <RouterLink to="/cart"><FaCartPlus style={{width:"500px",margin:"auto",marginTop:"7px"}}/></RouterLink>
  </div>
</Box>

<Box bg='grey' w='100%' p={0} color='black' border={"1px solid black"}>
    <Flex justifyContent="space-around" alignItems="center">
   <RouterLink to="/login"><button>Login</button></RouterLink> 
   <RouterLink to="/register"> <button>Register</button></RouterLink>
   
    </Flex>

</Box>
</Flex>
</div>
)
}
export default Navbar