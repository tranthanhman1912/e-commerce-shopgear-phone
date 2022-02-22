import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Login from "../components/Login";
import Register from "../components/Register";
import ProductDetail from "../components/ProductDetail";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>
    );
}

export default Router;