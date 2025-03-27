import React from 'react'
import ProductList from './compoenents/ProductList'
import Card from './compoenents/Card'
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<ProductList/>}/>
        <Route path="/cart" element ={<Card/>}/>
      </Routes>
    </Router>
  )
}

export default App