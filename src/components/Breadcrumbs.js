import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumbs = () => (
  <div className="all-products-breadcrumbs">
    <div className="row">
      <header className="col-12 mb-5 mt-3 px-4">
        <nav role="navigation" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-uppercase">
              <NavLink className="" to="/">
                Home
              </NavLink>
            </li>
            <li className="breadcrumb-item text-uppercase">
              <NavLink aria-current="page" className="" to="/products">
                Products
              </NavLink>
            </li>
          </ol>
        </nav>

        <h1 className="display-2 display-5 mt-5 text-center">
          Latest Products
        </h1>
        <hr />
      </header>
    </div>
  </div>
)

export default Breadcrumbs
