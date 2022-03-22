import React from 'react'
import styles from './product.module.css'

const MightAlsoLike = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Might also like these products</h1>

      <section class="pt-11">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <!-- Heading -->
            <h4 class="mb-10 text-center">You might also like</h4>

            <!-- Items -->
            <div class="row">
              <div class="col-6 col-sm-6 col-md-4">

                <!-- Card -->
                <div class="card mb-7 mb-md-0">

                  <!-- Image -->
                  <img class="card-img-top" src="assets/img/products/product-80.jpg" alt="...">

                  <!-- Body -->
                  <div class="card-body px-0 pb-0 bg-white">
                    <div class="row no-gutters">
                      <div class="col">

                        <!-- Title -->
                        <a class="d-block font-weight-bold text-body" href="product.html">
                          Leather Women's Belt
                        </a>

                        <!-- Category -->
                        <a class="font-size-xs text-muted" href="shop.html">
                          Accessories
                        </a>

                      </div>
                      <div class="col-auto">

                        <!-- Price -->
                        <div class="font-size-sm font-weight-bold text-muted">
                          $39.00
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>
              <div class="col-6 col-sm-6 col-md-4">

                <!-- Card -->
                <div class="card mb-7 mb-md-0">

                  <!-- Badge -->
                  <div class="badge badge-white card-badge card-badge-left text-uppercase">
                    New
                  </div>

                  <!-- Image -->
                  <img class="card-img-top" src="assets/img/products/product-86.jpg" alt="...">

                  <!-- Body -->
                  <div class="card-body px-0 pb-0 bg-white">
                    <div class="row no-gutters">
                      <div class="col">

                        <!-- Title -->
                        <a class="d-block font-weight-bold text-body" href="product.html">
                          Heel strappy Sandals
                        </a>

                        <!-- Category -->
                        <a class="font-size-xs text-muted" href="shop.html">
                          Shoes
                        </a>

                      </div>
                      <div class="col-auto">

                        <!-- Price -->
                        <div class="font-size-sm font-weight-bold text-muted">
                          $90.00
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>
              <div class="col-6 col-sm-6 col-md-4">

                <!-- Card -->
                <div class="card mb-0">

                  <!-- Image -->
                  <img class="card-img-top" src="assets/img/products/product-85.jpg" alt="...">

                  <!-- Body -->
                  <div class="card-body px-0 pb-0 bg-white">
                    <div class="row no-gutters">
                      <div class="col">

                        <!-- Title -->
                        <a class="d-block font-weight-bold text-body" href="product.html">
                          Leather key Case
                        </a>

                        <!-- Category -->
                        <a class="font-size-xs text-muted" href="shop.html">
                          Bags
                        </a>

                      </div>
                      <div class="col-auto">

                        <!-- Price -->
                        <div class="font-size-sm font-weight-bold text-muted">
                          $29.00
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>
              <div class="col-6 col-sm-6 col-md-4 d-md-none">

                <!-- Card -->
                <div class="card mb-0">

                  <!-- Image -->
                  <img class="card-img-top" src="assets/img/products/product-87.jpg" alt="...">

                  <!-- Body -->
                  <div class="card-body px-0 pb-0 bg-white">
                    <div class="row no-gutters">
                      <div class="col">

                        <!-- Title -->
                        <a class="d-block font-weight-bold text-body" href="product.html">
                          White Summer Hat
                        </a>

                        <!-- Category -->
                        <a class="font-size-xs text-muted" href="shop.html">
                          Hats
                        </a>

                      </div>
                      <div class="col-auto">

                        <!-- Price -->
                        <div class="font-size-sm font-weight-bold text-muted">
                          $15.00
                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>




    </div>
  )
}

export default MightAlsoLike
