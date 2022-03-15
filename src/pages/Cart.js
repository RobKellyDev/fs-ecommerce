import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delItemCart, totalCartItems, updateItemCart } from '../redux/action';
// styles
import { FadeInDiv } from '../components/animations/FadeInDiv';
import '../styles/components/Cart.scss';

const Cart = () => {
  const state = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  let items = state.cartItems;

  const handleItemUpdate = (item, op) => dispatch(updateItemCart(item, op));

  useEffect(() => {
    dispatch(totalCartItems(items));
    return () => {
      return [dispatch, items];
    };
  }, [dispatch, items]);

  const handleClose = item => {
    dispatch(delItemCart(item));
  };

  const cartIsEmpty = () => (
    <div className="px-2 my-5 bg-light py-4 rounded-3">
      <div className="cart-is-empty">
        <h4>Your Cart is Empty</h4>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
        </svg>
      </div>
    </div>
  );

  const showQtyWarning = itm => (
    <p className="text-danger">
      Cart Empty. Please update item quantity to continue
    </p>
  );

  const showCartItems = itm => (
    <div className="px-4 my-5 bg-light rounded-3" key={itm.id}>
      <div className="container py-4">
        <button
          onClick={() => handleClose(itm)}
          className="btn-close float-end"
        />

        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={itm.image} alt={itm.title} height={200} width={180} />
            <section className="d-flex justify-content-start">
              <button
                onClick={() => handleItemUpdate(itm, -1)}
                className="btn btn-sm btn-outline-dark me-4"
              >
                <i className="fa fa-minus" />
              </button>

              <button
                onClick={() => handleItemUpdate(itm, +1)}
                className="btn btn-sm btn-outline-dark me-4"
              >
                <i className="fa fa-plus" />
              </button>
            </section>
          </div>

          <div className="col-md-4">
            <h3>{itm.title}</h3>
            <p className="item-information lead fw-light">Qty:{itm.qty}</p>

            <p className="item-information lead fw-light">
              Price: £<label>{itm.price}</label>
            </p>

            <p className="item-information lead fw-light">
              Total: £{itm.qty * itm.price}
            </p>

            <p className="item-information lead fw-light">
              Rate:
              {itm.rating.rate}
            </p>
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
