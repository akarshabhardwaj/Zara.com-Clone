import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link as RouterLink } from 'react-router-dom';
  
  export default function Login() {
const [email,setEmail]=React.useState("")
const[pass,setPass]=React.useState("")
const getEmail=(e)=>{
  setEmail(e.target.value)
}
const getPass=(e)=>{
  setPass(e.target.value)
}
let flag=false;
    const checklogi=()=>{
      let regis=JSON.parse(localStorage.getItem("regis"))
      
      regis.forEach((el)=>{
        if(el.email===email && el.pass===pass){
          flag=true
        }
      })
      if(flag){
        alert("Login Successfull")
      }
      else{
        alert("Renter correct Credentails")
      }
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email"  onChange={getEmail}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={getPass} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>I agree to T&C of the websites</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
             <RouterLink  to="/" >
             <Button
                onClick={checklogi}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button></RouterLink> 
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }