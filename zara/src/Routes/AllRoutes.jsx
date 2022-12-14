import React from "react";
import {Routes,Route} from "react-router-dom"
import Men from "../Components/Men";
import Women from "../Components/Women";
import Kids from "../Components/Kids";
import Home from "../Components/Home";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/men" element={<Men/>} />
            <Route path="/women" element={<Women/>} />
            <Route path="/kids" element={<Kids/>} />
        </Routes>
    )
}
export default AllRoutes