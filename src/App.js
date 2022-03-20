import React from 'react'
import Home from './pages/Home'
import Shop from './pages/shop/'
import Product from './pages/shop/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Signin from './pages/Signin'
// router
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Shop />} />
      <Route exact path="/products/:id" element={<Product />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/signin" element={<Signin />} />
    </Routes>
  </div>
)

export default App
