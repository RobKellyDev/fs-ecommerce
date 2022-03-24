import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemCart, delItemCart, totalCartItems } from '../../redux/actions'
import { Link, useParams } from 'react-router-dom'
// styles
import '../../styles/components/Product.scss'
import { FadeInDiv } from '../../components/animations/FadeInDiv'
import { SlideInUpDiv } from '../../components/animations/SlideInUpDiv'
// skeleton
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const [cartBtn, setCartBtn] = useState('Add to Cart')

  const state = useSelector((state) => state.cartReducer)
  let cartItems = state.cartItems

  const dispatch = useDispatch()

  const addProduct = (product) => {
    if (cartBtn === 'Add to Cart') {
      dispatch(addItemCart(product))
      setCartBtn('Remove from Cart')
    } else {
      dispatch(delItemCart(product))
      setCartBtn('Add to Cart')
    }
  }

  useEffect(() => {
    dispatch(totalCartItems(cartItems))
    return () => {
      return [dispatch, cartItems]
    }
  }, [dispatch, cartItems])

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json())
      setLoading(false)
    }

    let responseProduct = getProduct()

    return () => responseProduct
  }, [id])

  // Loading comp
  const Loading = () => (
    <div className={'col-md-12'}>
      <div style={{ marginTop: '24vh', display: 'flex' }}>
        <div className="col-md-4 offset-md-1">
          <Skeleton height={400} />
        </div>

        <div className="col-md-5 offset-md-1">
          <Skeleton height={24} width={200} />
          <div style={{ display: 'flex', paddingTop: '1rem' }}></div>
          <Skeleton height={40} />
          <div style={{ display: 'flex', paddingTop: '1rem' }}></div>
          <Skeleton height={27} width={200} />

          <div
            style={{
              display: 'flex',
              paddingBottom: '1rem',
              marginBottom: '2rem',
            }}
          ></div>

          <Skeleton height={120} />

          <div style={{ display: 'flex', marginTop: '3rem' }}></div>

          <Skeleton height={32} />

          <div
            style={{
              display: 'flex',
              marginTop: '1rem',
            }}
          ></div>

          <Skeleton height={40} />
        </div>
      </div>
    </div>
  )

  return (
    <FadeInDiv>
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <div className="row justify-content-center">
            <FadeInDiv>
              <div className="product-details">
                <h1 className="w-100 text-center my-5">Product Details</h1>
                <div className="inner-product">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-lg-6 d-flex flex-column my-3 align-items-center justify-content-center show-product">
                      <img
                        className={'img-fluid text-center'}
                        height={'auto'}
                        width={250}
                        src={product.image}
                        alt={product.title}
                      />
                    </div>

                    <div className="col-12 col-md-12 col-offset-lg-1 col-lg-5 my-4 show-product-description">
                      <div className="d-md-flex flex-column justify-content-between px-3">
                        <h5 className="text-uppercase text-black-50 text-lg-start">
                          {product.category}
                        </h5>
                        <h3 className="text-center text-lg-start mb-3">
                          {product.title}
                        </h3>
                        <p className="lead py-2 my-2 text-lg-start">
                          Rating {product.rating && product.rating.rate} &nbsp;
                          <i className="fa fa-star"></i>
                        </p>
                        <h4 className="mb-4 text-lg-start text-danger">
                          £{product.price}
                        </h4>
                        <p className="text fw-light text-center text-wrap mb-5 text-lg-start">
                          {product.description}
                        </p>

                        <div className="button-wrapper">
                          <button
                            onClick={() => addProduct(product)}
                            className="add-product btn btn-outline-dark p-0 mb-4"
                          >
                            <SlideInUpDiv>{cartBtn}</SlideInUpDiv>
                          </button>

                          <button
                            className={`goto btn btn btn-dark py-2'
                    ${cartItems.length === 0 ? 'disabled' : ''}
                  `}
                          >
                            <Link
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: 'white',
                                textDecoration: 'none',
                              }}
                              to="/cart"
                            >
                              Go to Cart
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInDiv>
          </div>
        )}
      </div>
    </FadeInDiv>
  )
}

export default Product
