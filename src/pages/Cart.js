import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delItemCart, totalCartItems, updateItemCart } from '../redux/action';
import { FadeInDiv } from '../components/animations/FadeInDiv';

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
    <div className="px-4 my-5 bg-light rounded-3">
      <div className="container py-4">
        <div className="row">
          <h3>Your Cart is Empty</h3>
        </div>
      </div>
    </div>
  );

  const showQtyWarning = itm => <p className="text-danger">Please update item quantity to continue</p>;

  const showCartItems = itm => (
    <div className="px-4 my-5 bg-light rounded-3" key={itm.id}>
      <div className="container py-4">
        <button onClick={() => handleClose(itm)} className="btn-close float-end" />

        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={itm.image} alt={itm.title} height={200} width={180} />
            <section className="d-flex justify-content-start">
              <button onClick={() => handleItemUpdate(itm, -1)} className="btn btn-sm btn-outline-dark me-4">
                <i className="fa fa-minus" />
              </button>

              <button onClick={() => handleItemUpdate(itm, +1)} className="btn btn-sm btn-outline-dark me-4">
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

            <p className="item-information lead fw-light">Total: £{itm.qty * itm.price}</p>

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
              <span>Multiple items +/- ops need fixing</span>
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
