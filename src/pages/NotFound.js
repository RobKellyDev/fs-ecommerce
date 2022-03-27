import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NotFound = () => {
  let location = useLocation()
  return (
    <div className="page-wrap d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <span className="display-1 d-block text-danger">404</span>
            <div className="mb-4 lead">
              The page you are looking for at: <br />
              <span className="fw-bolder">{location.pathname}</span> was not
              found.
            </div>
            <p className="fs-5">
              <Link className="btn btn-outline-dark" to="/">
                Back to Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
