import React from 'react';
import Products from './Products.js'
import bg from '../assets/images/blank.png'


const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
          <img 
            src={bg} height="550" 
            className="card-img" alt="..." />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">New Arrivals</h5>
              <p className="card-text lead fs-2">FREE DELIVERY | FIND OUT MORE</p>
            </div>  
          </div>
        </div>
        <Products />
    </div>
  )
}

export default Home;