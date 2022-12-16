import React from "react";
import Navbar from "../Pages/Navbar";
import {SimpleGrid} from "@chakra-ui/react"
let mens = [
    {
        id: 1,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940909955.jpg?plain&size=400x400',
        name: 'Clique Mens Reliance Packable Jacket',
        price: 1500,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 2,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940909956.jpg?plain&size=400x400',
        name: 'Clique Mens Hudson Jacket Clique Mens Hudson Jacket',
        price: 6400,
        shipping: 'Sold by Cutter & Buck',
        star: 4
    },
    {
        id: 3,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910019.jpg?plain&size=400x400',
        name: 'Clutter and Buck mens Advantage Zip Mocket Jacket ',
        price: 7200,
        shipping: 'Sold by Cutter & Buck',
        star: 4
    },
    {
        id: 4,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940909955.jpg?plain&size=400x400',
        name: 'Clique Colorado Mens Jacket',
        price: 12000,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 5,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910028.jpg?plain&size=400x400',
        name: 'Clique and Buck Mens Shoreline Packable Jacket',
        price: 8000,
        shipping: 'Sold by Cutter & Buck',
        star: 2
    },
    {
        id: 6,
        cate: 'Jacket',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1951836733.jpg?plain&size=400x400',
        name: 'CBUK Mens Swish Full-Zip jacket',
        price: 6400,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 7,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/290000/292000/292019/products/1932866045.jpg?plain&size=400x400',
        name: 'Cinch Work Denim Jeans Mens FR Blue Label Utility WRX',
        price: 6500,
        shipping: 'Sold by Ranch and Home',
        star: 3
    },
    {
        id: 8,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/290000/290400/290461/products/1942803010.jpg?plain&size=400x400',
        name: 'Dolce & Gabbana Blue Cotton Stretch Slim Fit Denim Men',
        price: 24000,
        shipping: 'Sold by LUX LAIR',
        star: 3
    },
    {
        id: 9,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1951836733.jpg?plain&size=400x400',
        name: 'CBUK Mens Swish Full-Zip Jeans',
        price: 6400,
        shipping: 'Sold by Cutter & Buck',
        star: 3
    },
    {
        id: 10,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1936329597.jpg?plain&size=400x400',
        name: 'LUCKY BRAND Mens Blue Relaxed Fit Denim Jeans',
        price: 4000,
        shipping: 'Sold by BOBBI + BRICKA',
        star: 3
    },
    {
        id: 11,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1935359763.jpg?plain&size=400x400',
        name: 'LEVIS Mens Blue Straight Leg, Classic Fit Denim Jeans',
        price: 2400,
        shipping: 'Sold by BOBBI + BRICKA',
        star: 3
    },
    {
        id: 12,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/274900/274929/products/1899351355.jpg?plain&size=400x400',
        name: 'LEVIS Mens Blue Straight Leg, Classic Fit Denim Jeans',
        price: 4800,
        shipping: 'Sold by JC Penny',
        star: 4
    },
    {
        id: 13,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1934733443.jpg?plain&size=400x400',
        name: 'CBUK Mens Swish Full-Zip jacket',
        price: 4400,
        shipping: 'Sold by Cutter & Buck',
        star: 1
    },
    {
        id: 14,
        cate: 'Jeans',
        image: 'https://img.shop.com/Image/270000/273200/273200/products/1915600598.jpg?plain&size=400x400',
        name: 'True Religion Mens Tony Denim Destory Skinny Jeans',
        price: 1600,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 15,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1939500270.jpg?plain&size=400x400',
        name: 'Cutter & Buck Mens Big & Tall CB DryTec Northgate Polo Shirt',
        price: 4000,
        shipping: 'Sold by Cutter and Buck',
        star: 3
    },
    {
        id: 16,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1943601116.jpg?plain&size=400x400',
        name: 'Cutter & Buck Mens Big & Tall CB DryTec Northgate Polo Shirt',
        price: 8000,
        shipping: 'Sold by Cutter and Buck',
        star: 3
    },
    {
        id: 17,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910020.jpg?plain&size=400x400',
        name: 'Cutter & Buck Versatech Multi Check Stretch Mens Big and Tall',
        price: 7500,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 18,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910013.jpg?plain&size=400x400',
        name: 'True Religion Mens Tony Denim Destory Skinny Shirt',
        price: 7200,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 19,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1939500311.jpg?plain&size=400x400',
        name: 'True Religion Mens Tony Denim Destory Skinny Shirt',
        price: 1600,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 20,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940910042.jpg?plain&size=400x400',
        name: 'True Religion Mens Tony Denim Destory Skinny Shirt',
        price: 6600,
        shipping: 'Sold by BHFO',
        star: 5
    },
    {
        id: 21,
        cate: 'Shirt',
        image: 'https://img.shop.com/Image/290000/291600/291696/products/1940909978.jpg?plain&size=400x400',
        name: 'True Religion Mens Tony Denim Destory Skinny Shirt',
        price: 160,
        shipping: 'Sold by BHFO',
        star: 1
    },
    {
        id: 22,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1921848209.jpg?plain&size=400x400',
        name: 'HUGO BOSS Mens Burgundy Single Breasted, Extra Slim Fit Suit Wool Blend Suit Separate',
        price: 20000,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 23,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1919207483.jpg?plain&size=400x400',
        name: 'HUGO BOSS Mens Burgundy Single Breasted, Extra Slim Fit Suit Wool Blend Suit Separate',
        price: 16000,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 24,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1919085971.jpg?plain&size=400x400',
        name: 'HUGO BOSS Mens Burgundy Single Breasted, Extra Slim Fit Suit Wool Blend Suit Separate',
        price: 14400,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 25,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1919208138.jpg?plain&size=400x400',
        name: 'HUGO BOSS Mens Burgundy Single Breasted, Extra Slim Fit Suit Wool Blend Suit Separate',
        price: 21000,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 26,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1925626770.jpg?plain&size=400x400',
        name: 'HUGO BOSS Mens Burgundy Single Breasted, Extra Slim Fit Suit Wool Blend Suit Separate',
        price: 26000,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 27,
        cate: 'Suit',
        image: 'https://img.shop.com/Image/270000/278100/278132/products/1925886109.jpg?plain&size=400x400',
        name: 'HUGO BOSS Mens Burgundy Single Breasted, Extra Slim Fit Suit Wool Blend Suit Separate',
        price: 13600,
        shipping: 'Sold by BHFO',
        star: 1
    },
    {
        id: 28,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/250000/253200/253251/products/1938902935.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style',
        price: 3500,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 29,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1928248230.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style ',
        price: 2600,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 30,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/250000/253200/253251/products/1938883217.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style',
        price: 1000,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 31,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/250000/253200/253251/products/1938901572.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style ',
        price: 3500,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 32,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/250000/252500/252590/products/1948834533.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style',
        price: 1560,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 33,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/240000/248200/248295/products/1946132994.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style ',
        price: 4800,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 34,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1918670890.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style',
        price: 13200,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 35,
        cate: 'Sweater',
        image: 'https://img.shop.com/Image/250000/252500/252590/products/1946209252.jpg?plain&size=400x400',
        name: 'Buffalo David Bitton Mens Wacam Pullover Sweater, Style',
        price: 1320,
        shipping: 'Sold by BHFO',
        star: 2
    }
]
    
const styles={
    width:"100%",
    margin:"auto",
    border:"2px solid black",
    padding:"45px",

backgroundColor:"grey"
}
function Men(){
    function DisplayData(){
    return (
        <div style={styles}>
           
             
        <SimpleGrid  columns={{base:1,md:3,'2xl':4}} spacing={25}>
{mens.map((el)=>{
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
<h1>MENS PAGE</h1>
</div>
    )
}
let cartArray=JSON.parse(localStorage.getItem("Cart"))||[]
const AddToCart=(el)=>{
cartArray.push(el)
localStorage.setItem("Cart",JSON.stringify(cartArray))
}

    const sortData=()=>{
        mens=mens.sort(function(a,b){
            return a.price-b.price
        })
        
       console.log(mens)
    }
    const sortDatahtl=()=>{
        mens=mens.sort(function(a,b){
            return b.price-a.price
        })
       console.log(mens)
    }
   
    // console.log(data)
    return (<>
        
        <Navbar/>
        <div style={{width:"30%",margin:"auto",border:"0px solid red",display:"flex",justifyContent:"space-between"}}>
        <button style={{backgroundColor:"black",color:"white",padding:"4px"}} onClick={sortData}>Sort Low To High</button>
        <button style={{backgroundColor:"black",color:"white",padding:"4px"}} onClick={sortDatahtl}>Sort High To Low</button>
        </div>
        
       <DisplayData/>
        {/* <div style={styles}>
           
             
             <SimpleGrid  columns={{base:1,md:3,'2xl':4}} spacing={25}>
{mens.map((el)=>{
    return (
 <div style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",borderRadius:"15px",padding:"10px",backgroundColor:"white"}} key={el.id}>
 <img  src={el.image} alt={el.cate} />
 <h3>{el.name}</h3>
 <h4>{el.price}</h4>
 <button>Add To Cart</button>
 </div>
    )
})}
</SimpleGrid>
  <h1>MENS PAGE</h1>
  </div> */}
  </>  
    )
}
export default Men

