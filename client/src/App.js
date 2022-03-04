import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
//router
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
//styles
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/products/:id" element={<Product />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
);

export default App;
