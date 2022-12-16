import React from "react";
import Navbar from "../Pages/Navbar";
import {SimpleGrid} from "@chakra-ui/react"

let kids = [
    {
        id: 1,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/270000/274900/274929/products/1854175325.jpg?plain&size=400x400',
        name: 'Toddler Boys 7 Pack Spiderman Briefs, 4t , Multiple Colors',
        price: 960,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 2,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/270000/274900/274929/products/1853777717.jpg?plain&size=400x400',
        name: 'Toddler Boys 7 Pack Spiderman Briefs, 2t-3t , Multiple Color',
        price: 1000,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 3,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908233213.jpg?plain&size=400x400',
        name: 'BRoxy Juniors Faraway Shocks Combo',
        price: 720,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 4,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1915512615.jpg?plain&size=400x400',
        name: 'Baby Boys Long-Sleeve Bodysuits, Pack of 5',
        price: 1700,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 5,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/260000/268500/268595/products/1950241311.jpg?plain&size=400x400',
        name: 'First Impressions Baby Boys Star-Print Puffer Coat, Created for Macy',
        price: 2500,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 6,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1922848179.jpg?plain&size=400x400',
        name: 'First Impressions Baby Boys Star-Print Puffer Coat, Created for Macy',
        price: 1440,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 7,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/260000/268500/268595/products/1950992524.jpg?plain&size=400x400',
        name: 'BRoxy Juniors Faraway Shades Pullover Boy',
        price: 4000,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 8,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/260000/268500/268595/products/1950995873.jpg?plain&size=400x400',
        name: 'Baby Boy Carter Camo Puffer Heavyweight Jacket',
        price: 2600,
        shipping: 'Sold by BHFO',
        star: 5
    },
    {
        id: 9,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908175428.jpg?plain&size=400x400',
        name: 'Skip*hop Zoo Bath Fishin Fox Multii',
        price: 720,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 10,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908078820.jpg?plain&size=400x400',
        name: 'Disney Minnie Mouse Inflatable Bath Tub',
        price: 1620,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 11,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908239284.jpg?plain&size=400x400',
        name: 'Skip*hop Moby Bath Kneeler In Grey',
        price: 1440,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 12,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1907787947.jpg?plain&size=400x400',
        name: 'Sassy Soft Swimmers Bath Toys',
        price: 720,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 13,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1907784302.jpg?plain&size=400x400',
        name: 'Elegant Baby Monster Truck Party Bath Squirties Multii',
        price: 1200,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 14,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/280000/289900/289940/products/1907250923.jpg?plain&size=400x400',
        name: 'Kanga Care Lil Joey Newborn All in One AIO Cloth Diaper (2pk)',
        price: 2400,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 15,
        cate: 'Boy',
        image: 'https://img.shop.com/Image/280000/289900/289940/products/1907775044.jpg?plain&size=400x400',
        name: 'BKanga Care Rumparooz Reusable One Size Pocket Cloth Diaper',
        price: 2000,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 16,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/270000/274900/274929/products/1854175325.jpg?plain&size=400x400',
        name: 'Toddler Girls 7 Pack Spiderman Briefs, 4t , Multiple Colors',
        price: 960,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 17,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/270000/274900/274929/products/1853777717.jpg?plain&size=400x400',
        name: 'Toddler Girls 7 Pack Spiderman Briefs, 2t-3t , Multiple Color',
        price: 1000,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 18,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908233213.jpg?plain&size=400x400',
        name: 'BRoxy Juniors Faraway Shocks Combo',
        price: 720,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 19,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1915512615.jpg?plain&size=400x400',
        name: 'Baby Girls Long-Sleeve Bodysuits, Pack of 5',
        price: 1700,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 20,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/260000/268500/268595/products/1950241311.jpg?plain&size=400x400',
        name: 'First Impressions Baby Girls Star-Print Puffer Coat, Created for Macy',
        price: 2500,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 21,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243400/243406/products/1922848179.jpg?plain&size=400x400',
        name: 'First Impressions Baby Girls Star-Print Puffer Coat, Created for Macy',
        price: 1440,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 22,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/260000/268500/268595/products/1950992524.jpg?plain&size=400x400',
        name: 'BRoxy Juniors Faraway Shades Pullover Girl',
        price: 4000,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 23,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/260000/268500/268595/products/1950995873.jpg?plain&size=400x400',
        name: 'Baby Girl Carter Camo Puffer Heavyweight Jacket',
        price: 2600,
        shipping: 'Sold by BHFO',
        star: 5
    },
    {
        id: 24,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908175428.jpg?plain&size=400x400',
        name: 'Skip*hop Zoo Bath Fishin Fox Multii',
        price: 720,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 25,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908078820.jpg?plain&size=400x400',
        name: 'Disney Minnie Mouse Inflatable Bath Tub',
        price: 1620,
        shipping: 'Sold by BHFO',
        star: 3
    },
    {
        id: 26,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1908239284.jpg?plain&size=400x400',
        name: 'Skip*hop Moby Bath Kneeler In Grey',
        price: 1440,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 27,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1907787947.jpg?plain&size=400x400',
        name: 'Sassy Soft Swimmers Bath Toys',
        price: 720,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 28,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/240000/243500/243545/products/1907784302.jpg?plain&size=400x400',
        name: 'Elegant Baby Monster Truck Party Bath Squirties Multii',
        price: 1200,
        shipping: 'Sold by BHFO',
        star: 4
    },
    {
        id: 29,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/280000/289900/289940/products/1907250923.jpg?plain&size=400x400',
        name: 'Kanga Care Lil Joey Newborn All in One AIO Cloth Diaper (2pk)',
        price: 2400,
        shipping: 'Sold by BHFO',
        star: 2
    },
    {
        id: 30,
        cate: 'Girl',
        image: 'https://img.shop.com/Image/280000/289900/289940/products/1907775044.jpg?plain&size=400x400',
        name: 'BKanga Care Rumparooz Reusable One Size Pocket Cloth Diaper',
        price: 2000,
        shipping: 'Sold by BHFO',
        star: 3
    },
]

const styles={
    width:"100%",
    margin:"auto",
    border:"2px solid black",
    padding:"45px",

backgroundColor:"grey"
}
function Kids(){
    function DisplayData(){
    return (
        <div style={styles}>
           
             
        <SimpleGrid  columns={{base:1,md:3,'2xl':4}} spacing={25}>
{kids.map((el)=>{
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
        kids=kids.sort(function(a,b){
            return a.price-b.price
        })
        
       console.log(kids)
    }
    const sortDatahtl=()=>{
        kids=kids.sort(function(a,b){
            return b.price-a.price
        })
       console.log(kids)
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
export default Kids