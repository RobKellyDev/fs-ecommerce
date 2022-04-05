import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  delItemCart,
  totalCartItems,
  getCartTotal,
  updateItemCart,
} from '../redux/actions'
import CartItems from "./cart/CartItems";
// styles
import { FadeInDiv } from '../components/animations/FadeInDiv'
import '../styles/components/Cart.scss'
import styles from "./cart/cart.module.css";

const Cart = () => {
  const state = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  let items = state.cartItems

  const handleItemUpdate = (item, op,id) =>
    dispatch(updateItemCart(item, op,id))

  useEffect(() => {
    dispatch(totalCartItems(items))
    dispatch(getCartTotal(items))
    return () => {
      return [dispatch, items]
    }
  }, [dispatch, items])

  const handleClose = (item) => dispatch(delItemCart(item))

  const showCartEmpty = () => (
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
              {items.length === 0 && showCartEmpty()}
              {
                items.length !== 0
                  && (
                  items.map(itm =>

                  <CartItems
                    key={itm.id}
                    itm={itm}
                    id={itm.id}
                    handleClose={handleClose}
                    handleItemUpdate={handleItemUpdate}


                  />
                ))
              }



            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="checkout-btn">
                <Link to="/checkout">
                  {items.length > 0 &&
                  <button className="btn btn-lg btn-outline-dark fs-5 px-5">
                      Proceed to Checkout
                  </button>
                  }
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
