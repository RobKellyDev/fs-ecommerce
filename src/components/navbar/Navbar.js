import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import shopHouse from '../../assets/images/webp/shophouse22.webp'
import bag from '../../assets/images/bag-color29.png'
import shop from '../../assets/images/shopnav.png'
import '../../styles/components/Navbar.scss'
//import styles from './navbar.module.css'

const Navbar = () => {
  const state = useSelector((state) => state.cartReducer)

  let totalCartItems = state.cartTotalItems

  return (
    <nav className="d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-white py-1 shadow-sm">
      <div className="container px-3 px-sm-0">
        <Link
          title="Home page"
          className="navbar-brand fw-bold fs-6"
          to="/"
        >
          <img
            src={shopHouse}
            style={{
              maxWidth: '45px',
              width: '100%',
              height: 'auto',
            }}
            alt="Shopping home page"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-0">
            <li id="home-shop" className="nav-item">
              <Link
                title="Products page"
                className="home-shop nav-link"
                to="/products"
              >
                <img
                  width={45}
                  height={'auto'}
                  src={shop}
                  alt="Shop products"
                />
              </Link>
            </li>
          </ul>

          <div className="buttons">
            <Link
              aria-selected="false"
              to="/signin"
              className="btn btn-outline-dark"
            >
              <i className="fa fa-sign-in me-1"></i> Signin
            </Link>
            <Link
              aria-selected="false"
              to="/register"
              style={{ border: 'none', display: 'none' }}
              className="btn btn-outline-dark ms-2"
            >
              <i className="fa fa-user-plus me-1"></i> Register
            </Link>
            <Link
              aria-selected="false"
              to="/cart"
              className="btn btn-outline-dark ms-2"
            >
              <img
                src={bag}
                alt="cart"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '21px',
                }}
              />{' '}
              Cart ({totalCartItems === 0 ? 'empty' : totalCartItems})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
