import React from "react";

const Home = () => {
  return (
    <>
      <div className="col-12 hero">
        <div
          style={{height: "92vh"}}
          className="card bg-image bg-dark text-white border-0 shadow-2-strong">
         
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">
                New Arrivals
              </h5>
              <p className="card-text lead fs-2">
                FREE DELIVERY | FIND OUT MORE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-products">

      </div>
    </>
  );
};

export default Home;
