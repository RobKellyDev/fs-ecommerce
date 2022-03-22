import React from 'react'
import { Link } from 'react-router-dom'
import styles from './product.module.css'

const ProductDetails = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Product Details</h1>

      <section>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12 col-md-6">
                  {/* <!-- Images --> */}
                  <div class="form-row mb-10 mb-md-0">
                    <div class="col-6">
                      {/* <!-- Card --> */}
                      <Link
                        class="card mb-4"
                        to="assets/img/products/product-147.jpg"
                        data-fancybox=""
                      >
                        {/* <!-- Badge --> */}
                        <div class="badge badge-white card-badge card-badge-left text-uppercase">
                          New
                        </div>

                        {/* <!-- Image --> */}
                        <img
                          class="card-img-top"
                          src="assets/img/products/product-147.jpg"
                          alt="..."
                        />
                      </Link>
                    </div>
                    <div class="col-6">
                      {/* <!-- Card --> */}
                      <Link
                        class="card mb-4"
                        to="assets/img/products/product-148.jpg"
                        data-fancybox=""
                      >
                        {/* <!-- Image --> */}
                        <img
                          class="card-img-top"
                          src="assets/img/products/product-148.jpg"
                          alt="..."
                        />
                      </Link>
                    </div>
                    <div class="col-6">
                      {/* <!-- Card --> */}
                      <Link
                        class="card"
                        to="assets/img/products/product-149.jpg"
                        data-fancybox=""
                      >
                        {/* <!-- Image --> */}
                        <img
                          class="card-img-top"
                          src="assets/img/products/product-149.jpg"
                          alt="..."
                        />
                      </Link>
                    </div>
                    <div class="col-6">
                      {/* <!-- Card --> */}
                      <Link
                        class="card"
                        to="assets/img/products/product-150.jpg"
                        data-fancybox=""
                      >
                        {/* <!-- Image --> */}
                        <img
                          class="card-img-top"
                          src="assets/img/products/product-150.jpg"
                          alt="..."
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 pl-lg-10">
                  {/* <!-- Header --> */}
                  <div class="row mb-1">
                    <div class="col">
                      {/* <!-- Preheading --> */}
                      <Link class="text-muted" to="shop.html">
                        Bags
                      </Link>
                    </div>
                    <div class="col-auto">
                      {/* <!-- Rating --> */}
                      <div class="rating font-size-xs text-dark" data-value="4">
                        <div class="rating-item">
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="rating-item">
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="rating-item">
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="rating-item">
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="rating-item">
                          <i class="fas fa-star"></i>
                        </div>
                      </div>

                      <Link class="font-size-sm text-reset ml-2" to="#reviews">
                        Reviews (3)
                      </Link>
                    </div>
                  </div>

                  {/* <!-- Heading --> */}
                  <h3 class="mb-2">Bag with Flap</h3>

                  {/* <!-- Price --> */}
                  <div class="mb-7">
                    <span class="ml-1 font-size-h5 font-weight-bold">
                      $99.00
                    </span>
                    <span class="ml-1 font-size-sm">(In Stock)</span>
                  </div>

                  {/* <!-- Form --> */}
                  <form>
                    <div class="form-group">
                      {/* <!-- Label --> */}
                      <p class="mb-4">
                        Color: <strong id="colorCaption">Black</strong>
                      </p>

                      {/* <!-- Radio --> */}
                      <div class="mb-8 ml-n1">
                        <div class="custom-control custom-control-inline custom-control-img">
                          <input
                            type="radio"
                            class="custom-control-input"
                            id="imgRadioOne"
                            name="imgRadio"
                            data-toggle="form-caption"
                            data-target="#colorCaption"
                            value="White"
                            checked=""
                          />

                          <label class="custom-control-label" for="imgRadioOne">
                            <span
                              class="embed-responsive embed-responsive-1by1 bg-cover"
                              data-style={
                                'background-image: url(assets/img/products/product-147.jpg);'
                              }
                            ></span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-row mb-7">
                        <div class="col-12 col-lg-auto">
                          {/* <!-- Quantity --> */}
                          <select class="custom-select mb-2">
                            <option value="1" selected="">
                              1
                            </option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                        <div class="col-12 col-lg">
                          {/* <!-- Submit --> */}
                          <button
                            type="submit"
                            class="btn btn-block btn-dark mb-2"
                          >
                            Add to Cart <i class="fe fe-shopping-cart ml-2"></i>
                          </button>
                        </div>
                        <div class="col-12 col-lg-auto">
                          {/* <!-- Wishlist --> */}
                          <button
                            class="btn btn-outline-dark btn-block mb-2"
                            data-toggle="button"
                          >
                            Wishlist <i class="fe fe-heart ml-2"></i>
                          </button>
                        </div>
                      </div>

                      {/* <!-- Text --> */}
                      <p>
                        <span class="text-gray-500">
                          Is your size/color sold out?
                        </span>
                        <Link
                          class="text-reset text-decoration-underline"
                          data-toggle="modal"
                          to="#modalWaitList"
                        >
                          Join the Wait List!
                        </Link>
                      </p>

                      {/* <!-- Share --> */}
                      <p class="mb-0">
                        <span class="mr-4">Share:</span>
                        <Link
                          class="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
                          to="#!"
                        >
                          <i class="fab fa-twitter"></i>
                        </Link>
                        <Link
                          class="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
                          to="#!"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                          class="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
                          to="#!"
                        >
                          <i class="fab fa-pinterest-p"></i>
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
