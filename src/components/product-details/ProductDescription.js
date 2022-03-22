import React from 'react'
import styles from './product.module.css'

const ProductDescription = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Product description</h1>

      <section class="pt-11">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <!-- Nav -->
            <div class="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
              <a class="nav-link active" data-toggle="tab" href="#descriptionTab">
                Description
              </a>
              <a class="nav-link" data-toggle="tab" href="#shippingTab">
                Shipping &amp; Return
              </a>
            </div>

            <!-- Content -->
            <div class="tab-content">
              <div class="tab-pane fade show active" id="descriptionTab">
                <div class="row justify-content-center py-9">
                  <div class="col-12 col-lg-10 col-xl-8">
                    <div class="row">
                      <div class="col-12">

                        <!-- Text -->
                        <p class="text-gray-500">
                          Won't herb first male seas, beast. Let upon, female upon third fifth every. Man subdue rule after years herb after
                          form. And image may, morning. Behold in tree day sea that together cattle whose. Fifth gathering brought
                          bearing. Abundantly creeping whose. Beginning form have void two. A whose.
                        </p>

                      </div>
                      <div class="col-12 col-md-6">

                        <!-- List -->
                        <ul class="list list-unstyled mb-md-0 text-gray-500">
                          <li>
                            <strong class="text-body">SKU</strong>: #61590437
                          </li>
                          <li>
                            <strong class="text-body">Occasion</strong>: Lifestyle, Sport
                          </li>
                          <li>
                            <strong class="text-body">Country</strong>: Italy
                          </li>
                        </ul>

                      </div>
                      <div class="col-12 col-md-6">

                        <!-- List -->
                        <ul class="list list-unstyled mb-0">
                          <li>
                            <strong>Outer</strong>: Leather 100%, Polyamide 100%
                          </li>
                          <li>
                            <strong>Lining</strong>: Polyester 100%
                          </li>
                          <li>
                            <strong>CounSoletry</strong>: Rubber 100%
                          </li>
                        </ul>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="shippingTab">
                <div class="row justify-content-center py-9">
                  <div class="col-12 col-lg-10 col-xl-8">

                    <!-- Table -->
                    <div class="table-responsive">
                      <table class="table table-bordered table-sm table-hover">
                        <thead>
                          <tr>
                            <th>Shipping Options</th>
                            <th>Delivery Time</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Standard Shipping</td>
                            <td>Delivery in 5 - 7 working days</td>
                            <td>$8.00</td>
                          </tr>
                          <tr>
                            <td>Express Shipping</td>
                            <td>Delivery in 3 - 5 working days</td>
                            <td>$12.00</td>
                          </tr>
                          <tr>
                            <td>1 - 2 day Shipping</td>
                            <td>Delivery in 1 - 2 working days</td>
                            <td>$12.00</td>
                          </tr>
                          <tr>
                            <td>Free Shipping</td>
                            <td>
                              Living won't the He one every subdue meat replenish
                              face was you morning firmament darkness.
                            </td>
                            <td>$0.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <!-- Caption -->
                    <p class="mb-0 text-gray-500">
                      May, life blessed night so creature likeness their, for. <a class="text-body text-decoration-underline" href="#!">Find out more</a>
                    </p>

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

export default ProductDescription
