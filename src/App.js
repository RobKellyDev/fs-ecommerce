import React from 'react'
import Home from './pages/Home'
import Shop from './pages/shop/products'
import Product from './pages/shop/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { Signin } from './pages/signin/'
import * as ROUTE from './constants'
import NotFound from './pages/NotFound'
// router
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path={ROUTE.HOME} element={<Home />} />
      <Route exact path={ROUTE.CART} element={<Cart />} />
      <Route exact path={ROUTE.CHECKOUT} element={<Checkout />} />
      <Route exact path={ROUTE.SIGNIN} element={<Signin />} />
      <Route exact path={ROUTE.PRODUCTS} element={<Shop />} />
      <Route exact path={ROUTE.PRODUCT} element={<Product />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
    </Routes>
  </>
)

export default App
