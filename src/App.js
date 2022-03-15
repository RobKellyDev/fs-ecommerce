import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/shop/';
import Product from './pages/shop/Product';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
//router
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Shop />} />
      <Route exact path="/products/:id" element={<Product />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/signin" element={<Signin />} />
    </Routes>
  </BrowserRouter>
);

export default App;
