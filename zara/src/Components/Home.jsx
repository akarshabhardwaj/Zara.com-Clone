import React from "react";
import Navbar from "../Pages/Navbar";
import CaptionCarousel from "../Pages/Swiper";
import Details from "./Dummy";
import LargeWithAppLinksAndSocial from "./Footer";

function Home(){
    return (
      <>
        <Navbar/>
        <CaptionCarousel/>
        <Details/>
        <LargeWithAppLinksAndSocial/>
      </>
      
        
    )
}
export default Home