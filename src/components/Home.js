import React from "react";
import coverGirl from "../assets/images/videos/covergirl.png";
import walkingGirl from "../assets/images/videos/walking-girl.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>

      <div className="offcanvas-wrap">

        {/* hero */}
        <section className="cover overflow-hidden inverted bg-black">
          <div className="d-flex flex-column h-35 container py-10">
            <div className="row justify-content-center my-auto">

              <div className="col-md-8 text-center position-absolute top-50">
                <span className="eyebrow text-danger opacity-50">New Collection</span>
                <h1 className="display-2 lh-sm fw-bold">Spring Jacket.</h1>
                <Link to="" className="btn btn-outline-white rounded-pill opacity-50">
                  ByBye Collection
                </Link>
              </div>

            </div>
            <div className="row text-center">
              <div className="col">
                <small className="fs-text-secondary eyebrow text-secondary opacity-100 px-2 lh">
                  Limited Time Only -&nbsp;<span style={{padding: "0 5px", color:"darkred", opacity: 1}}>Jacket Only</span> -&nbsp; For Sale Now £197
                </small>
              </div>
            </div>
          </div>
          <div
            className="background background-overlay"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <video
              controls
              poster={coverGirl}
              width="400"
              height="320"
              autoPlay={true}
              muted={true}
              loop={true}
              style={{width: "100%", height:"100%"}}
            >
              <source src={walkingGirl} />
            </video>
          </div>
        </section>
        {/* product carousel */}
        <section className="overflow-hidden pt-3 pt-xl-4">
          <div className="container">
            <div className="carousel carousel-visible">
              <div data-carousel='{"nav": false,"mouseDrag": true, "gutter": 32, "loop": true, "responsive": {"0": {"items": 1}, "768": {"items": 2}, "992": {"items": 2}, "1200": {"items": 3}}}'>
                <div>
                  <div className="product">
                    <figure className="product-image">
                      <Link to="#">
                        <img
                          src="../assets/images/products/product-1.jpg"
                          alt="Product 1"
                        />
                        <img
                          src="../assets/images/products/product-1-2.jpg"
                          alt="Product 2"
                        />
                      </Link>
                    </figure>
                    <Link className="product-title" to="#">
                      Watch
                    </Link>
                    <span className="product-price">$100 </span>
                  </div>{" "}
                </div>
                <div>
                  <div className="product">
                    <figure className="product-image">
                      <Link to="">
                        <img
                          src="../assets/images/products/product-2.jpg"
                          alt="Product 2"
                        />
                        <img
                          src="../assets/images/products/product-2-2.jpg"
                          alt="Product 2-2"
                        />
                      </Link>
                    </figure>
                    <Link className="product-title" to="">
                      Black Karlo Backpack
                    </Link>
                    <span className="product-price">$88 </span>
                  </div>{" "}
                </div>
                <div>
                  <div className="product">
                    <figure className="product-image">
                      <Link to="">
                        <img
                          src="../assets/images/products/product-3.jpg"
                          alt=" Product 3"
                        />
                        <img
                          src="../assets/images/products/product-3-2.jpg"
                          alt="Product 3-2"
                        />
                      </Link>
                    </figure>
                    <Link className="product-title" to="">
                      Black Closca Helmet
                    </Link>
                    <span className="product-price">$132 </span>
                  </div>{" "}
                </div>
                <div>
                  <div className="product">
                    <figure className="product-image">
                      <Link to="">
                        <img
                          src="../assets/images/products/product-4.jpg"
                          alt="Product 4"
                        />
                        <img
                          src="../assets/images/products/product-4-2.jpg"
                          alt="Product 4-2"
                        />
                      </Link>
                    </figure>
                    <Link className="product-title" to="">
                      Speaker
                    </Link>
                    <span className="product-price">$100 </span>
                  </div>{" "}
                </div>
                <div>
                  <div className="product">
                    <figure className="product-image">
                      <Link to="">
                        <img
                          src="../assets/images/products/product-5.jpg"
                          alt="Product 2"
                        />
                        <img
                          src="../assets/images/products/product-5-2.jpg"
                          alt="Product 5-2"
                        />
                      </Link>
                    </figure>
                    <Link className="product-title" to="#">
                      Gravel Black Sigg Water Bottle
                    </Link>
                    <span className="product-price">
                      $23 <s className="text-muted">$34</s>
                    </span>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Categories */}
        <section className="py-15 py-xl-20">
          <div className="container">
            <div className="row mb-5">
              <div className="col text-center">
                <h2 className="fw-bold mb-0">Categories</h2>
              </div>
            </div>
            <div className="row g-3 g-xl-4" data-masonry>
              <div className="col-md-6" data-aos="fade-up">
                <Link to="" className="card equal-md-1-1 card-hover-gradient">
                  <div className="card-wrap">
                    <div className="card-footer my-auto">
                      <div className="text-center text-shadow">
                        <h3 className="mb-0 fw-bold text-white">Pullovers</h3>
                      </div>
                    </div>
                  </div>
                  <figure
                    className="background"
                    style={{
                      backgroundImage: "../assets/images/offers/arrivals3.png",
                    }}
                  ></figure>
                </Link>
              </div>
              <div className="col-md-6" data-aos="fade-up">
                <Link to="" className="card equal-md-16-9 card-hover-gradient">
                  <div className="card-wrap">
                    <div className="card-footer my-auto">
                      <div className="text-center text-shadow">
                        <h3 className="mb-0 fw-bold text-white">Trainers</h3>
                      </div>
                    </div>
                  </div>
                  <figure
                    className="background"
                    style={{
                      backgroundImage: "../assets/images/shop-2.jpg",
                    }}
                  ></figure>
                </Link>
              </div>
              <div className="col-md-6" data-aos="fade-up">
                <Link to="" className="card equal-md-1-1 card-hover-gradient">
                  <div className="card-wrap">
                    <div className="card-footer my-auto">
                      <div className="text-center text-shadow">
                        <h3 className="mb-0 fw-bold text-white">Jeans</h3>
                      </div>
                    </div>
                  </div>
                  <figure
                    className="background"
                    style={{ backgroundImage: "../assets/images/shop-3.jpg" }}
                  ></figure>
                </Link>
              </div>
              <div className="col-md-6" data-aos="fade-up">
                <Link to="" className="card equal-md-16-9 card-hover-gradient">
                  <div className="card-wrap">
                    <div className="card-footer my-auto">
                      <div className="text-center text-shadow">
                        <h3 className="mb-0 fw-bold text-white">Accessories</h3>
                      </div>
                    </div>
                  </div>
                  <figure
                    className="background"
                    style={{ backgroundImage: "../assets/images/shop-4.jpg" }}
                  ></figure>
                </Link>
              </div>
            </div>
          </div>
        </section>

        
       

      </div>
    </>
  );
};

export default Home;
