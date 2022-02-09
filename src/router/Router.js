import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
// import NotFound from "../components/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalog/:slug" element={<Product />} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
}

export default Router;