import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  delItemCart,
  totalCartItems,
  getCartTotal,
  updateItemCart,
} from '../redux/actions'
// styles
import { FadeInDiv } from '../components/animations/FadeInDiv'
import '../styles/components/Cart.scss'

const Cart = () => {
  const state = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  let items = state.cartItems

  const handleItemUpdate = (item, op) => dispatch(updateItemCart(item, op))

  useEffect(() => {
    dispatch(totalCartItems(items))
    dispatch(getCartTotal(items))
    return () => {
      return [dispatch, items]
    }
  }, [dispatch, items])

  const handleClose = (item) => dispatch(delItemCart(item))

  const cartIsEmpty = () => (
    <div className="px-0 px-md-3 my-5 bg-light py-4 rounded-3">
      <div className="cart-is-empty">
        <h5>Your Cart is Empty</h5>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d={`M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4
          4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z`}
          />
        </svg>
      </div>
    </div>
  )

  const showQtyWarning = () => (
    <p className="text-danger">
      Cart Empty. Please update item quantity to continue
    </p>
  )

  const showCartItems = (itm) => (
    <div
      className="cart-product w-100 flex-wrap px-md-5 my-5 rounded-3"
      key={itm.id}
    >
      <button
        onClick={() => handleClose(itm)}
        className="cart-close btn-close float-end"
      />

      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <Link className="image-link" to={`/products/${itm.id}`}>
            <img
              className="cart-image"
              src={itm.image}
              alt={itm.title}
              height={'auto'}
              width={210}
            />
          </Link>
        </div>
        <div className="col-12 col-md-5 col-lg-5">
          <div className="cart-title">
            <h5 className="mt-3 mb-3">{itm.title}</h5>
            <p className="item-information lead mb-1 fw-light">
              Qty: &nbsp;
              {itm.qty}
            </p>
            <p className="item-information lead fw-light mb-1">
              Price: &nbsp; <label className="text-danger">£{itm.price}</label>
            </p>
          </div>
        </div>

        <div className="col-12 col-md-3 col-lg-3 col-offset-lg-1">
          <div className="cart-total">
            <h5 className="item-total mt-3 mb-3">
              Total: <label> £{(itm.qty * itm.price).toFixed(2)}</label>
            </h5>
            <section className="d-flex justify-content-center mt-0 mb-0">
              <button
                onClick={() => handleItemUpdate(itm, -1)}
                className="cart-qty btn btn-sm btn-outline-danger me-2"
              >
                <i className="fa fa-minus" />
              </button>

              <button
                onClick={() => handleItemUpdate(itm, +1)}
                className="cart-qty btn btn-sm btn-outline-success me-2"
              >
                <i className="fa fa-plus" />
              </button>
            </section>
          </div>
        </div>
      </div>
      {items.length === 1 && itm.qty === 0 ? showQtyWarning() : false}
    </div>
  )

  return (
    <FadeInDiv>
      <div className="container">
        <div className="cart d-flex h-100 w-100 flex-column my-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">Cart</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {items.length === 0 && cartIsEmpty()}
              {items.length !== 0 && items.map(showCartItems)}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="checkout-btn">
                <Link to="/checkout">
                  <button className="btn btn-lg btn-outline-dark fs-5 px-5">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInDiv>
  )
}

export default Cart
