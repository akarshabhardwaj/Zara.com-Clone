import { Box ,Flex} from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom"



function Navbar(){


return(
    <div>
        <Flex>
<Box bg='black' w='100%' p={0} color='white' border={"1px solid black"}>
  <RouterLink to="/" > <img src='https://1000logos.net/wp-content/uploads/2017/05/Zara-Emblem.png' alt='zara' style={{width:"10%"}}/></RouterLink>
</Box>
<Box bg='black' w='100%' p={0} color='white' border={"1px solid black"}>
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