import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import CartContext from "./components/context/CartContext";
import { initializeApp } from "firebase/app";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyD4yuO_8p4Y4caMHvtcScmJZav1bs15Bpw",
    authDomain: "apiecomciccariello.firebaseapp.com",
    projectId: "apiecomciccariello",
    storageBucket: "apiecomciccariello.appspot.com",
    messagingSenderId: "734234969037",
    appId: "1:734234969037:web:4d3b66e9c807a8d8c7fa84",
  };

  initializeApp(firebaseConfig);

  return (
    <>
      <CartContext>
        <div className="App">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/categories/:category" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </CartContext>
    </>
  );
}

export default App;
