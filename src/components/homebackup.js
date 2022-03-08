import React from "react";
import coverGirl from "../assets/images/videos/covergirl.png";
import walkingGirl from "../assets/images/videos/walking-girl.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav
        id="mainNav"
        className="navbar navbar-expand-lg navbar-sticky navbar-dark"
      >
        <div className="container">
          <Link className="navbar-brand">
            {/* <img src="../assets/images/logo/logo-light.svg" alt="Logo" /> */}
          </Link>

          {/* secondary  */}
          {/* <ul className="navbar-nav navbar-nav-secondary order-lg-3">
            <li className="nav-item">
              <NavLink
                className="nav-link nav-icon"
                data-bs-toggle="offcanvas"
                to="#"
                role="button"
                aria-controls="offcanvasCart"
              >
                <i className="bi bi-cart2"></i>
              </NavLink>
            </li>
            <li className="nav-item d-lg-none">
              <NavLink
                className="nav-link nav-icon"
                to=""
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#"
                aria-expanded="false"
              >
                <i className="bi bi-person"></i>
              </NavLink>
            </li>
            <li className="nav-item dropdown dropdown-hover d-none d-lg-block">
              <NavLink
                className="nav-link nav-icon"
                role="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person"></i>
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <NavLink className="dropdown-item " to="">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item " to="">
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item " to="">
                    Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item " to="">
                    Billing
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item text-red" to="#">
                    Log Out
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item d-lg-none">
              <NavLink
                className="nav-link nav-icon"
                to=""
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="bi bi-list"></span>
              </NavLink>
            </li>
            <li className="nav-item d-none d-lg-block">
              <NavLink
                to="#"
                className="btn btn-outline-white rounded-pill ms-2"
              >
                Buy Cube
              </NavLink>
            </li>
          </ul> */}

          {/* primary  */}
          <div
            className="collapse navbar-collapse"
            id="navbar"
            // data-bs-parent="#"
          >
            {/* <ul className="navbar-nav">
              <li className="nav-item dropdown dropdown-hover">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown-1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Landings
                </NavLink>

                <ul
                  className="dropdown-menu dropdown-menu-md"
                  aria-labelledby="navbarDropdown-1"
                >
                  <li>
                    <NavLink className="dropdown-item " to="">
                      Startup
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="">
                      Saas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="#">
                      Coworking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="">
                      Job Board
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="">
                      Agency
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="">
                      Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="">
                      App
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item active" to="">
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="">
                      Event
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="">
                      Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="">
                      Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="">
                      Software
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="">
                      Documentation
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown dropdown-hover">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown-2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </NavLink>

                <div
                  className="dropdown-menu dropdown-menu-custom"
                  aria-labelledby="navbarDropdown-2"
                >
                  <div className="row g-0">
                    <div className="col-6">
                      <div className="p-4">
                        <span className="dropdown-label">Company</span>
                        <Link className="dropdown-item " to="">
                          About
                        </Link>
                        <Link className="dropdown-item " to="">
                          Pricing
                        </Link>
                        <Link className="dropdown-item " to="">
                          FAQ
                        </Link>
                        <Link className="dropdown-item " to="">
                          Terms
                        </Link>
                        <Link className="dropdown-item " to="">
                          Services
                        </Link>
                        <Link className="dropdown-item " to="">
                          Job Listing
                        </Link>
                        <Link className="dropdown-item " to="">
                          Job Post
                        </Link>
                        <span className="dropdown-label">Portfolio</span>
                        <Link className="dropdown-item " to="">
                          Grid
                        </Link>
                        <Link className="dropdown-item " to="">
                          List
                        </Link>
                        <Link className="dropdown-item " to="">
                          Case Study
                        </Link>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-4">
                        <span className="dropdown-label">Blog</span>
                        <Link className="dropdown-item " to="">
                          Listing
                        </Link>
                        <Link className="dropdown-item " to="">
                          Post
                        </Link>
                        <span className="dropdown-label">Contact</span>
                        <Link className="dropdown-item " to="">
                          Classic
                        </Link>
                        <Link className="dropdown-item " to="">
                          Location
                        </Link>
                        <span className="dropdown-label">Utilities</span>
                        <Link className="dropdown-item " to="">
                          404
                        </Link>
                        <Link className="dropdown-item " to="">
                          Coming Soon
                        </Link>
                      </div>
                    </div>
                    <div className="col-12">
                      <Link to="" className="card card-arrow inverted bg-green">
                        <div className="card-footer mt-auto">
                          <h4 className="lead lh-3 fw-light">Buy Cube</h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-hover">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown-3"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  Account
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown-3"
                >
                  <li>
                    <Link className="dropdown-item " to="">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="">
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="">
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="">
                      Billing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="">
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="">
                      Forgot Password
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown dropdown-hover">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown-4"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  Shop
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown-4"
                >
                  <li>
                    <Link className="dropdown-item " to="">
                      Product
                    </Link>
                  </li>
                  <li className="dropend dropend-hover">
                    <Link
                      className="dropdown-item dropdown-toggle  "
                      to="#"
                      id="navbarDropend-1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      Listing
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropend-1"
                    >
                      <li>
                        <Link className="dropdown-item " to="">
                          Full width
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item " to="">
                          Sidebar
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="">
                      Checkout
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown dropdown-hover">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown-5"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Docs
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-detailed"
                  aria-labelledby="navbarDropdown-5"
                >
                  <li>
                    <Link className="dropdown-item " to="">
                      <span>
                        <i className="bi bi-book"></i>
                        Get Started
                        <small>Customising and building</small>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item ">
                      <span>
                        <i className="bi bi-grid"></i>
                        Components
                        <small>Full list of components</small>
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item d-lg-none">
                <Link className="nav-link text-primary">Buy Cube</Link>
              </li>
            </ul> */}
          </div>

          {/* mobile user menu  */}
          <div
            className="collapse account-collapse"
            id="userNav"
            // data-bs-parent="#"
          >
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link className="nav-link ">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ">Settings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ">Orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ">Billing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-red">Log Out</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
       
        id="offcanvasCart"
        aria-labelledby="offcanvasCart"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasCartLabel">
            Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li>
              <div className="row g-2 g-lg-3 align-items-center">
                <Link to="" className="col-3">
                  <img
                    className="img-fluid"
                    src="../assets/images/products/product-1.jpg"
                    alt="Product"
                  />
                </Link>

                <div className="col">
                  <Link to="" className="text-black text-primary-hover lead">
                    Bluetooth Speaker
                  </Link>
                  <ul className="list-inline text-muted">
                    <li className="list-inline-item">
                      Price: <span className="text-secondary">$90</span>
                    </li>
                    <li className="list-inline-item">
                      Color: <span className="text-secondary">Blue</span>
                    </li>
                    <li className="list-inline-item">
                      Qty:
                      <div
                        className="counter text-secondary"
                        data-counter="qty-1"
                      >
                        <span className="counter-minus bi bi-dash"></span>

                        <input
                          type="number"
                          name="qty-1"
                          className="counter-value"
                          value="0"
                          min="0"
                          max="10"
                        />
                        <span className="counter-plus bi bi-plus"></span>
                      </div>
                    </li>
                  </ul>
                  <Link to="" className="text-red underline">
                    Remove
                  </Link>
                </div>
              </div>
            </li>
            <li className="mt-4">
              <div className="row g-2 g-lg-3 align-items-center">
                <Link to="" className="col-3">
                  <img
                    className="img-fluid"
                    src="./assets/images/products/product-2.jpg"
                    alt="Product"
                  />
                </Link>

                <div className="col">
                  <Link to="" className="text-black text-primary-hover lead">
                    Bluetooth Speaker
                  </Link>
                  <ul className="list-inline text-muted">
                    <li className="list-inline-item">
                      Price: <span className="text-secondary">$90</span>
                    </li>
                    <li className="list-inline-item">
                      Color: <span className="text-secondary">Blue</span>
                    </li>

                    <li className="list-inline-item">
                      Qty:
                      <div
                        className="counter text-secondary"
                        data-counter="qty-1"
                      >
                        <span className="counter-minus bi bi-dash"></span>

                        <input
                          type="number"
                          name="qty-1"
                          className="counter-value"
                          // value="0"
                          min="0"
                          max="10"
                        />

                        <span className="counter-plus bi bi-plus"></span>
                      </div>
                    </li>
                  </ul>
                  <Link to="" className="text-red underline">
                    Remove
                  </Link>
                </div>
              </div>
            </li>

            <li className="mt-4">
              <div className="row g-2 g-lg-3 align-items-center">
                <Link to="" className="col-3">
                  <img
                    className="img-fluid"
                    src="./assets/images/products/product-3.jpg"
                    alt="Product"
                  />
                </Link>

                <div className="col">
                  <Link to="" className="text-black text-primary-hover lead">
                    Bluetooth Speaker
                  </Link>
                  <ul className="list-inline text-muted">
                    <li className="list-inline-item">
                      Price: <span className="text-secondary">$90</span>
                    </li>
                    <li className="list-inline-item">
                      Color: <span className="text-secondary">Blue</span>
                    </li>

                    <li className="list-inline-item">
                      Qty:
                      <div
                        className="counter text-secondary"
                        data-counter="qty-1"
                      >
                        <span className="counter-minus bi bi-dash"></span>

                        <input
                          type="number"
                          name="qty-1"
                          className="counter-value"
                          // value="0"
                          min="0"
                          max="10"
                        />

                        <span className="counter-plus bi bi-plus"></span>
                      </div>
                    </li>
                  </ul>
                  <Link to="" className="text-red underline">
                    Remove
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="offcanvas-footer">
          <div className="d-grid gap-1">
            <Link to="" className="btn btn-outline-light rounded-pill">
              View Cart
            </Link>
            <Link to="" className="btn btn-primary rounded-pill">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>

      <div className="offcanvas-wrap">
        {/* hero */}
        <section className="cover overflow-hidden inverted bg-black">
          <div className="d-flex flex-column min-vh-75 container py-10 level-1">
            <div className="row justify-content-center my-auto">
              <div className="col-md-8 text-center">
                <span className="eyebrow text-secondary">New Collection</span>
                <h1 className="display-2 lh-sm fw-bold">Spring Forward.</h1>
                <Link to="" className="btn btn-outline-white rounded-pill">
                  Shop Collection
                </Link>
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <small className="text-secondary">
                  Limited time only. Selected styles marked down on site.
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
        {/* product carousel */}
        <section className="overflow-hidden">
          <div className="container">
            <div className="row align-items-end mb-5">
              <div className="col-lg-8 mb-2 mb-lg-0">
                <h2 className="fw-bold">Gadgets</h2>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Link to="" className="underline action">
                  View all products <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="carousel carousel-visible" data-aos="fade-left">
              <div data-carousel='{"nav": false,"mouseDrag": true, "gutter": 32, "loop": true, "responsive": {"0": {"items": 1}, "768": {"items": 2}, "992": {"items": 2}, "1200": {"items": 3}}}'>
                <div>
                  <div className="product">
                    <figure className="product-image">
                      <Link to="">
                        {/* <img
                          src="assets/images/products/product-1.jpg"
                          alt="Product 1"
                        />
                        <img
                          src="assets/images/products/product-1-2.jpg"
                          alt="Product 1-2"
                        /> */}
                      </Link>
                    </figure>
                    <Link className="product-title" to="">
                      Watch
                    </Link>
                    <span className="product-price">$100 </span>
                  </div>{" "}
                </div>
                <div>
                  <div className="product">
                    <figure className="product-image">
                      <Link to="">
                        {/* <img
                          src="assets/images/products/product-2.jpg"
                          alt="Product 2"
                        />
                        <img
                          src="assets/images/products/product-2-2.jpg"
                          alt="Product 2-2"
                        /> */}
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
                        {/* <img
                          src="assets/images/products/product-3.jpg"
                          alt="Product 3"
                        />
                        <img
                          src="assets/images/products/product-3-2.jpg"
                          alt="Product 3-2"
                        /> */}
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
                        {/* <img
                          src="assets/images/products/product-4.jpg"
                          alt="Product 4"
                        />
                        <img
                          src="assets/images/products/product-4-2.jpg"
                          alt="Product 4-2"
                        /> */}
                      </Link>
                    </figure>
                    <Link className="product-title" to="#">
                      Speaker
                    </Link>
                    <span className="product-price">$100 </span>
                  </div>{" "}
                </div>
                <div>
                  <div className="product">
                    <figure className="product-image">
                      <Link to="#">
                        {/* <img
                          src="assets/images/products/product-5.jpg"
                          alt="Product 5"
                        />
                        <img
                          src="assets/images/products/product-5-2.jpg"
                          alt="Product 5-2"
                        /> */}
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
        {/* text */}
        <section className="py-15 py-xl-20">
          <div className="container">
            <div className="row g-5 justify-content-center">
              <div className="col-8 col-md-4 text-center">
                <i className="bi bi-truck fs-4 mb-2"></i>
                <h6 className="mb-0 fw-normal fs-lg">Free Shipping</h6>
                <p className="text-muted">From all orders over $100</p>
              </div>
              <div className="col-8 col-md-4 text-center">
                <i className="bi bi-arrow-left-right fs-4 mb-2"></i>
                <h6 className="mb-0 fw-normal fs-lg">Free Returns</h6>
                <p className="text-muted">Return money within 30 days</p>
              </div>
              <div className="col-8 col-md-4 text-center">
                <i className="bi bi-bag-check fs-4 mb-2"></i>
                <h6 className="mb-0 fw-normal fs-lg">Secure Shopping</h6>
                <p className="text-muted">You’re in safe hands</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* footer */}
        <footer className="py-15 py-xl-20 border-top">
          <div className="container">
            <div className="row g-4 g-lg-5 mb-10">
              <div className="col-md-3 text-center text-md-start">
                <Link to="" className="navbar-brand">
                  {/* <img src="./assets/images/logo/logo-dark.svg" alt="Logo" /> */}
                </Link>
              </div>
              <div className="col-md-4 col-lg-5 text-center text-md-start">
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <Link to="" className="text-reset text-primary-hover">
                      documentation
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="" className="text-reset text-primary-hover">
                      components
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="" className="text-reset text-primary-hover">
                      blocks
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link to="" className="text-reset text-primary-hover">
                      changelog
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="text-reset text-primary-hover">
                      roadmap
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="grouped-inputs border p-1 rounded-pill">
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control rounded-pill px-3"
                        aria-label="Text input"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="col-auto">
                      <Link
                        to=""
                        className="btn btn-primary btn-icon rounded-circle"
                      >
                        <i className="bi bi-arrow-return-left"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center g-1 g-lg-6 text-muted">
              <div className="col-md-6 col-lg-5 order-lg-2 text-center text-md-start">
                <ul className="list-inline small">
                  <li className="list-inline-item">
                    <Link to="" className="text-reset text-primary-hover">
                      facebook
                    </Link>
                  </li>
                  <li className="list-inline-item ms-1">
                    <Link to="" className="text-reset text-primary-hover">
                      twitter
                    </Link>
                  </li>
                  <li className="list-inline-item ms-1">
                    <Link to="" className="text-reset text-primary-hover">
                      linkedin
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 text-center text-md-end order-lg-3">
                <span className="small">5th Avenue, New York USA 10255</span>
              </div>
              <div className="col-lg-3 order-lg-1 text-center text-md-start">
                <p className="small">Copyrights © 2021</p>
              </div>
            </div>
          </div>
        </footer>{" "}

      </div>
    </>
  );
};

export default Home;
