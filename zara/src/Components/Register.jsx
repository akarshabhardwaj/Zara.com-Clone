import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
  import Navbar from '../Pages/Navbar';
  import React from 'react';
import { Link } from 'react-router-dom';



  export default function Register() {
    const[email,setEmail]=React.useState("")
    const[pass,setPass]=React.useState("")

    const getEmail=(e)=>{
        setEmail(e.target.value)
        // console.log(email)
    }
    
    const getPassword=(e)=>{
        setPass(e.target.value)
        // console.log(pass)
    }
    let regis=JSON.parse(localStorage.getItem("regis"))||[]
    const getDataRegister=()=>{
        const obj={email,pass}
        regis.push(obj)
        console.log(obj )
        localStorage.setItem("regis",JSON.stringify(regis))
    }

    return (
        <>
       <Navbar/>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} color={'grey'}>
            Enter email and password
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              onChange={getEmail}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={getPassword} />
          </FormControl>
          <Stack spacing={6}>
           <Link to="/login" >
           <Button
            onClick={getDataRegister}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Submit
            </Button></Link> 
          </Stack>
        </Stack>
      </Flex>
      </>
    );
  }