import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  delItemCart,
  totalCartItems,
  getCartTotal,
  updateItemCart
} from '../redux/actions';
// styles
import { FadeInDiv } from '../components/animations/FadeInDiv';
import '../styles/components/Cart.scss';

const Cart = () => {
  const state = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  let items = state.cartItems;

  const handleItemUpdate = (item, op) => dispatch(updateItemCart(item, op));

  useEffect(() => {
    dispatch(totalCartItems(items));
    dispatch(getCartTotal(items));
    return () => {
      return [dispatch, items];
    };
  }, [dispatch, items]);

  const handleClose = (item) => dispatch(delItemCart(item));

  const cartIsEmpty = () => (
    <div className="px-2 my-5 bg-light py-4 rounded-3">
      <div className="cart-is-empty">
        <h4>Your Cart is Empty</h4>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d={`M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4
          4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z`}
          />
        </svg>
      </div>
    </div>
  );

  const showQtyWarning = (itm) => (
    <p className="text-danger">
      Cart Empty. Please update item quantity to continue
    </p>
  );

  const showCartItems = (itm) => (
    <div className="cart-product px-4 my-5 rounded-3" key={itm.id}>
      <div className="container p-0 py-md-5">
        <button
          onClick={() => handleClose(itm)}
          className="cart-close btn-close float-end"
        />

        <div className="row">
          <div className="col-12 col-md-4 bg-light p-3">
            <Link to={`/products/${itm.id}`}>
              <img
                className="cart-image"
                src={itm.image}
                alt={itm.title}
                height={'auto'}
                width={210}
              />
            </Link>
          </div>
          <div className="cart-title col-6 col-md-5 h-100 d-flex flex-column justify-content-space-between py-3">
            <h3 className="mt-3 mb-5">{itm.title}</h3>
            <p className="item-information lead fw-light">
              Qty:
              {itm.qty}
            </p>

            <p className="item-information lead fw-light">
              Price: £<label>{itm.price}</label>
            </p>
          </div>

          <div className="cart-total col-6 col-md-3 d-flex h-100 flex-column justify-content-center">
            <p className="item-total lead fw-normal">
              Total: £{itm.qty * itm.price}
            </p>
            <section className="d-flex justify-content-center my-2">
              <button
                onClick={() => handleItemUpdate(itm, -1)}
                className="cart-qty btn btn-sm btn-outline-dark me-2">
                <i className="fa fa-minus" />
              </button>

              <button
                onClick={() => handleItemUpdate(itm, +1)}
                className="cart-qty btn btn-sm btn-outline-dark me-2">
                <i className="fa fa-plus" />
              </button>
            </section>
          </div>
        </div>
        {items.length === 1 && itm.qty === 0 ? showQtyWarning(itm) : false}
      </div>
    </div>
  );

  return (
    <FadeInDiv>
      <div className="container">
        <div className="row">
          <div className="cart my-5">
            <div className="col-12">
              <h1 className="text-center">Cart</h1>
            </div>
            <div className="col-12">
              {items.length === 0 && cartIsEmpty()}
              {items.length !== 0 && items.map(showCartItems)}
            </div>
          </div>
        </div>
      </div>
    </FadeInDiv>
  );
};

export default Cart;
