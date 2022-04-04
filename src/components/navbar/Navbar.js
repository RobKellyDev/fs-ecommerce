import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import shopHouse from '../../assets/images/webp/shophouse22.webp'
import bag from '../../assets/images/bag-color29.png'
import shop from '../../assets/images/shopnav.png'
import '../../styles/components/Navbar.scss'
import styles from './navbar.module.css'

const Navbar = () => {
  const state = useSelector((state) => state.cartReducer)

  let totalCartItems = state.cartTotalItems

  return (
    <nav id={styles.navigation} className="d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-white py-1 shadow-sm">
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
          <span className="navbar-toggler-icon" />
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                   fill="currentColor" className="bi bi-box-arrow-in-right"
                   viewBox="0 0 16 16">
                <path
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                <path
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
              {" "} Signin
            </Link>

            <Link
              aria-selected="false"
              to="/register"
              style={{ border: 'none', display: 'none' }}
              className="btn btn-outline-dark ms-2"
            >
              <i className="fa fa-user-plus me-1" /> Register
            </Link>
            <Link
              aria-selected="false"
              to="/cart"
              className="btn btn-outline-dark ms-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                   fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              {" "}
              Cart ({totalCartItems === 0 ? 'empty' : totalCartItems})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
