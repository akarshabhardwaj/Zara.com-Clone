import React from "react";
import {Routes,Route} from "react-router-dom"
import Men from "../Components/Men";
import Women from "../Components/Women";
import Kids from "../Components/Kids";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Cart from "../Components/Cart"
import Checkout from "../Pages/Checkout";

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/men" element={<Men/>} />
            <Route path="/women" element={<Women/>} />
            <Route path="/kids" element={<Kids/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
        </Routes>
    )
}
export default AllRoutes