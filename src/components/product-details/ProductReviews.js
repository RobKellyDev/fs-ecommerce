import React from 'react'
import styles from './product.module.css'

const ProductReviews = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Product Reviews</h1>

      <section class="py-11" id="reviews">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <!-- Heading -->
            <h4 class="mb-10 text-center">Customer Reviews</h4>

            <!-- Header -->
            <div class="row align-items-center">
              <div class="col-12 col-md-auto">

                <!-- Dropdown -->
                <div class="dropdown mb-4 mb-md-0">

                  <!-- Toggle -->
                  <a class="dropdown-toggle text-reset" data-toggle="dropdown" href="#">
                    <strong>Sort by: Newest</strong>
                  </a>

                  <!-- Menu -->
                  <div class="dropdown-menu mt-3">
                    <a class="dropdown-item" href="#!">Newest</a>
                    <a class="dropdown-item" href="#!">Oldest</a>
                  </div>

                </div>

              </div>
              <div class="col-12 col-md text-md-center">

                <!-- Rating -->
                <div class="rating text-dark h6 mb-4 mb-md-0" data-value="4">
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

                <!-- Count -->
                <strong class="font-size-sm ml-2">Reviews (3)</strong>

              </div>
              <div class="col-12 col-md-auto">

                <!-- Button -->
                <a class="btn btn-sm btn-dark" data-toggle="collapse" href="#reviewForm">
                  Write Review
                </a>

              </div>
            </div>

            <!-- New Review -->
            <div class="collapse" id="reviewForm">

              <!-- Divider -->
              <hr class="my-8">

              <!-- Form -->
              <form>
                <div class="row">
                  <div class="col-12 mb-6 text-center">

                    <!-- Text -->
                    <p class="mb-1 font-size-xs">
                      Score:
                    </p>

                    <!-- Rating form -->
                    <div class="rating-form">

                      <!-- Input -->
                      <input class="rating-input" type="range" min="1" max="5" value="5">

                      <!-- Rating -->
                      <div class="rating h5 text-dark" data-value="5">
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

                    </div>

                  </div>
                  <div class="col-12 col-md-6">

                    <!-- Name -->
                    <div class="form-group">
                      <label class="sr-only" for="reviewName">Your Name:</label>
                      <input class="form-control form-control-sm" id="reviewName" type="text" placeholder="Your Name *" required="">
                    </div>

                  </div>
                  <div class="col-12 col-md-6">

                    <!-- Email -->
                    <div class="form-group">
                      <label class="sr-only" for="reviewEmail">Your Email:</label>
                      <input class="form-control form-control-sm" id="reviewEmail" type="email" placeholder="Your Email *" required="">
                    </div>

                  </div>
                  <div class="col-12">

                    <!-- Name -->
                    <div class="form-group">
                      <label class="sr-only" for="reviewTitle">Review Title:</label>
                      <input class="form-control form-control-sm" id="reviewTitle" type="text" placeholder="Review Title *" required="">
                    </div>

                  </div>
                  <div class="col-12">

                    <!-- Name -->
                    <div class="form-group">
                      <label class="sr-only" for="reviewText">Review:</label>
                      <textarea class="form-control form-control-sm" id="reviewText" rows="5" placeholder="Review *" required=""></textarea>
                    </div>

                  </div>
                  <div class="col-12 text-center">

                    <!-- Button -->
                    <button class="btn btn-outline-dark" type="submit">
                      Post Review
                    </button>

                  </div>
                </div>
              </form>

            </div>

            <!-- Reviews -->
            <div class="mt-8">

              <!-- Review -->
              <div class="review">
                <div class="review-body">
                  <div class="row">
                    <div class="col-12 col-md-auto">

                      <!-- Avatar -->
                      <div class="avatar avatar-xxl mb-6 mb-md-0">
                        <span class="avatar-title rounded-circle">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>

                    </div>
                    <div class="col-12 col-md">

                      <!-- Header -->
                      <div class="row mb-6">
                        <div class="col-12">

                          <!-- Rating -->
                          <div class="rating font-size-sm text-dark" data-value="5">
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

                        </div>
                        <div class="col-12">

                          <!-- Time -->
                          <span class="font-size-xs text-muted">
                            Logan Edwards, <time datetime="2019-07-25">25 Jul 2019</time>
                          </span>

                        </div>
                      </div>

                      <!-- Title -->
                      <p class="mb-2 font-size-lg font-weight-bold">
                        So cute!
                      </p>

                      <!-- Text -->
                      <p class="text-gray-500">
                        Justo ut diam erat hendrerit. Morbi porttitor, per eu. Sodales curabitur diam sociis. Taciti lobortis nascetur. Ante laoreet odio hendrerit.
                        Dictumst curabitur nascetur lectus potenti dis sollicitudin habitant quis vestibulum.
                      </p>

                      <!-- Footer -->
                      <div class="row align-items-center">
                        <div class="col-auto d-none d-lg-block">

                          <!-- Text -->
                          <p class="mb-0 font-size-sm">Was this review helpful?</p>

                        </div>
                        <div class="col-auto mr-auto">

                          <!-- Rate -->
                          <div class="rate">
                            <a class="rate-item" data-toggle="vote" data-count="3" href="#" role="button">
                              <i class="fe fe-thumbs-up"></i>
                            </a>
                            <a class="rate-item" data-toggle="vote" data-count="0" href="#" role="button">
                              <i class="fe fe-thumbs-down"></i>
                            </a>
                          </div>

                        </div>
                        <div class="col-auto d-none d-lg-block">

                          <!-- Text -->
                          <p class="mb-0 font-size-sm">Comments (0)</p>

                        </div>
                        <div class="col-auto">

                          <!-- Button -->
                          <a class="btn btn-xs btn-outline-border" href="#!">
                            Comment
                          </a>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <!-- Review -->
              <div class="review">

                <!-- Body -->
                <div class="review-body">
                  <div class="row">
                    <div class="col-12 col-md-auto">

                      <!-- Avatar -->
                      <div class="avatar avatar-xxl mb-6 mb-md-0">
                        <span class="avatar-title rounded-circle">
                          <i class="fa fa-user"></i>
                        </span>
                      </div>

                    </div>
                    <div class="col-12 col-md">

                      <!-- Header -->
                      <div class="row mb-6">
                        <div class="col-12">

                          <!-- Rating -->
                          <div class="rating font-size-sm text-dark" data-value="3">
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

                        </div>
                        <div class="col-12">

                          <!-- Time -->
                          <span class="font-size-xs text-muted">
                            Sophie Casey, <time datetime="2019-07-07">07 Jul 2019</time>
                          </span>

                        </div>
                      </div>

                      <!-- Title -->
                      <p class="mb-2 font-size-lg font-weight-bold">
                        Cute, but too small
                      </p>

                      <!-- Text -->
                      <p class="text-gray-500">
                        Shall good midst can't. Have fill own his multiply the divided. Thing great. Of heaven whose signs.
                      </p>

                      <!-- Footer -->
                      <div class="row align-items-center">
                        <div class="col-auto d-none d-lg-block">

                          <!-- Text -->
                          <p class="mb-0 font-size-sm">Was this review helpful?</p>

                        </div>
                        <div class="col-auto mr-auto">

                          <!-- Rate -->
                          <div class="rate">
                            <a class="rate-item" data-toggle="vote" data-count="2" href="#" role="button">
                              <i class="fe fe-thumbs-up"></i>
                            </a>
                            <a class="rate-item" data-toggle="vote" data-count="1" href="#" role="button">
                              <i class="fe fe-thumbs-down"></i>
                            </a>
                          </div>

                        </div>
                        <div class="col-auto d-none d-lg-block">

                          <!-- Text -->
                          <p class="mb-0 font-size-sm">Comments (1)</p>

                        </div>
                        <div class="col-auto">

                          <!-- Button -->
                          <a class="btn btn-xs btn-outline-border" href="#!">
                            Comment
                          </a>

                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <!-- Child review -->
                <div class="review review-child">
                  <div class="review-body">

                    <!-- Content -->
                    <div class="row">
                      <div class="col-12 col-md-auto">

                        <!-- Avatar -->
                        <div class="avatar avatar-xxl mb-6 mb-md-0">
                          <span class="avatar-title rounded-circle">
                            <i class="fa fa-user"></i>
                          </span>
                        </div>

                      </div>
                      <div class="col-12 col-md">

                        <!-- Header -->
                        <div class="row mb-6">
                          <div class="col-12">

                            <!-- Rating -->
                            <div class="rating font-size-sm text-dark" data-value="4">
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

                          </div>
                          <div class="col-12">

                            <!-- Time -->
                            <span class="font-size-xs text-muted">
                              William Stokes, <time datetime="2019-07-14">14 Jul 2019</time>
                            </span>

                          </div>
                        </div>

                        <!-- Title -->
                        <p class="mb-2 font-size-lg font-weight-bold">
                          Very good
                        </p>

                        <!-- Text -->
                        <p class="text-gray-500">
                          Made face lights yielding forth created for image behold blessed seas.
                        </p>

                        <!-- Footer -->
                        <div class="row align-items-center">
                          <div class="col-auto d-none d-lg-block">

                            <!-- Text -->
                            <p class="mb-0 font-size-sm">Was this review helpful?</p>

                          </div>
                          <div class="col-auto mr-auto">

                            <!-- Rate -->
                            <div class="rate">
                              <a class="rate-item" data-toggle="vote" data-count="7" href="#" role="button">
                                <i class="fe fe-thumbs-up"></i>
                              </a>
                              <a class="rate-item" data-toggle="vote" data-count="0" href="#" role="button">
                                <i class="fe fe-thumbs-down"></i>
                              </a>
                            </div>

                          </div>
                          <div class="col-auto d-none d-lg-block">

                            <!-- Text -->
                            <p class="mb-0 font-size-sm">Comments (0)</p>

                          </div>
                          <div class="col-auto">

                            <!-- Button -->
                            <a class="btn btn-xs btn-outline-border" href="#!">
                              Comment
                            </a>

                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

            <!-- Pagination -->
            <nav class="d-flex justify-content-center mt-9">
              <ul class="pagination pagination-sm text-gray-400">
                <li class="page-item">
                  <a class="page-link page-link-arrow" href="#">
                    <i class="fa fa-caret-left"></i>
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link page-link-arrow" href="#">
                    <i class="fa fa-caret-right"></i>
                  </a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </section>


    </div>
  )
}

export default ProductReviews
