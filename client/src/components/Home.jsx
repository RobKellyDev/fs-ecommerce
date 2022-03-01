import React from 'react';
import bg from '../assets/images/blank.png'

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
          <img 
            src={bg} height="550" 
            className="card-img" alt="..." />
          <div className="card-img-overlay">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">New Arrivals</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>  
          </div>
        </div>
    </div>
  )
}

export default Home;