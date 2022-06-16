import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/categories/:category" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
