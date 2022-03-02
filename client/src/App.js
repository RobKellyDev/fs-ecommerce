import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
   <>
     <Navbar />
     <Routes>
       <Route exact path="/" element={ <Home/> } />
       <Route exact path="/products" element={ <Products/> } />
     </Routes>
   </>
  );
}

export default App;
