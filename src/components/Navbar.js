import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import shopHouse from '../assets/images/shophouse22.png';
import bag from '../assets/images/bag-color29.png';
import arrivals from '../assets/images/arrivals23.jpg';

const Navbar = () => {
  const state = useSelector(state => state.cartReducer);
  let cartItems = state.cartItems;
  let totalCartItems = state.cartTotalItems;

  return (
    <nav
      className='d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-white py-1 shadow-sm'>
      <div className='container'>
        <Link className='navbar-brand fw-bold fs-6' to='/'>
          <img
            src={shopHouse}
            style={{
              maxWidth: '50px',
              width: '100%',
              height: 'auto',
            }}
            alt='shopHouse'
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
            <li className='nav-item px-2'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/'
              >
                Home
              </Link>
            </li>
            <li className='nav-item px-2'>
              <Link className='nav-link' to='/products'>
                Shop
              </Link>
            </li>

            <li className='nav-item px-2'>
              <img
                src={arrivals}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '37px',
                  mixBlendMode: 'darken',
                }}
                alt='arrivals'
              />
            </li>
          </ul>

          <div className='buttons'>
            <Link
              to='/login'
              style={{ border: 'none' }}
              className='btn btn-outline-dark'
            >
              <i className='fa fa-sign-in me-1'></i> Login
            </Link>
            <Link
              to='/register'
              style={{ border: 'none', display: 'none' }}
              className='btn btn-outline-dark ms-2'
            >
              <i className='fa fa-user-plus me-1'></i>{' '}
              Register
            </Link>
            <Link
              to='/cart'
              style={{
                border: 'none',
                lineHeight: '26px',
                verticalAlign: 'top',
              }}
              className='btn btn-outline-dark ms-2'
            >
              <img
                src={bag}
                alt='cart'
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '21px',
                }}
              />{' '}
              Cart ({totalCartItems})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
