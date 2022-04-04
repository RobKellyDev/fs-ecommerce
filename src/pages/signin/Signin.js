import React from 'react'
import { Link } from 'react-router-dom'
import { FadeInDiv } from '../../components/animations/FadeInDiv'
import styles from './signin.module.css'

const Signin = () => {
  return (
    <FadeInDiv>
      <div className="d-flex flex-column">
        <main className="container">
          <div className="row">



              <div className={styles.signin}>
                <h1 className="mt-5 mt-sm-0 text-center w-100">Signin</h1>
                <div className="col-12 col-md-9 col-xl-6">

                <div id={styles.card} className="card mt-0 mt-sm-5">

                      <div className="card-body p-0 p-sm-5 my-5">
                        <form className={styles.signinForm}>
                          <div className="mb-3">
                            <label
                              className="mb-2 text-muted"
                              htmlFor="email"
                            >
                              E-Mail Address
                            </label>

                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className={styles.inputGroupText}>
                                  <span className="fa fa-user"></span>
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                name="username"
                                autoComplete="username"
                                placeholder="Username"
                                required="required"
                              />
                            </div>

                            <div className="invalid-feedback">
                              Email is invalid
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="mt-4 mb-2 w-100">
                              <label
                                className="text-muted"
                                htmlFor="password"
                              >
                                Password
                              </label>
                              <a
                                href="forgot.html"
                                className="float-end"
                              >
                                Forgot Password?
                              </a>
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className={styles.inputGroupText}>
                                  <i className="fa fa-lock"></i>
                                </span>
                              </div>
                              <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                required="required"
                              />
                            </div>

                            <div className="invalid-feedback">
                              Password is required
                            </div>
                          </div>

                          <div className="d-flex align-items-center">
                            <div className={styles.formCheck}>
                              <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                                className="form-check-input"
                              />

                              <label
                                htmlFor="remember"
                                className="form-check-label"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>

                          <div className="d-flex w-100 flex-wrap justify-content-center mt-5">
                            <button
                              type="submit"
                              id={styles.signinBtn}
                              className="btn btn-lg btn-outline-dark fs-5 px-5"
                            >
                              Sign now
                            </button>
                          </div>
                        </form>
                      </div>

                      <div
                        id={styles.signinFooter}
                        className="d-flex w-100 justify-content-center flex-column mt-5"
                      >
                        <p className={styles.existingAccount}>
                          Don't want an account? Signin using an existing
                          account instead.
                        </p>

                        <div className={styles.socialBtn}>
                          <Link to={''} className="btn btn-outline-primary">
                            <i className="fa fa-facebook"></i>&nbsp;
                            Facebook
                          </Link>

                          <Link to={'#'} className="btn btn-outline-dark">
                            <i className="fa fa-twitter"></i>&nbsp; Twitter
                          </Link>
                          <Link to="#" className="btn btn-outline-danger">
                            <i className="fa fa-google"></i>&nbsp; Google
                          </Link>
                        </div>

                        <p className="text-center text-muted small my-3">
                          Or to be notified when your favourite product goes
                          on sale. &nbsp;
                          <Link to={'/register'}>Sign up here!</Link>
                        </p>
                      </div>

                      <div
                        id={styles.formFooter}
                        className="card-footer py-3 border-0">

                        <div className={styles.noAccount}>
                          Don't have an account? &nbsp;
                          <Link to={'/register'}>
                            Signup Now
                          </Link>
                        </div>
                      </div>


                    </div>

                </div>

            </div>

          </div>
        </main>
      </div>
    </FadeInDiv>
  )
}

export default Signin
