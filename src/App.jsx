import React from 'react'
import ProductList from './compoenents/ProductList'
import Cart from './compoenents/Cart'
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path="/" element ={<ProductList/>}/>
        <Route path="/cart" element ={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App