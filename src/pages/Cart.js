import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
  updateItemCart,
  //getCartTotal,
  totalCartItems 
} from '../redux/action';

import { useSelector } from 'react-redux';
import { FadeInDiv } from '../components/animations/FadeInDiv';

const Cart = () => {
  const state = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  console.log('what is state ', state);


  let totalPrice = state.cartTotalPrice;
  let totalItems = state.cartTotalItems;
  let items = state.cartItems;
  
  

  const handleItemUpdate = (item,op) => dispatch(updateItemCart(item,op));
 

  // useEffect(() => {
  //   dispatch(getCartTotal(items));
  //   dispatch(totalCartItems(items));

  //   return (() => {
  //     return [dispatch,items]
  //   })

  // },[dispatch,items]);

  
  console.log('cart items ==> ', items)

  return (
    <FadeInDiv>
      <div className="container">
        <div className="row">
          <div className="cart">
            <div className="container mt-5">
              <div className="col py-5">
                <h1 className="text-center">Cart</h1>

          
                {/* <h3>total Price: {totalPrice}</h3> */}
                {/* <h3>total Items: {totalItems}</h3> */}


                {items.map(itm => (
                  <div key={itm.id} className="col-md-12">
                    <div className="col-md-4 offset-md-8">
                      <img
                        src={itm.image}
                        alt={itm.title}
                        height={200}
                        width={180}
                      />
                    </div>
                    <h3>{itm.title}</h3>
                    <p className="lead fw-bold">
                      {itm.qty} X £ {itm.price} = £{' '}
                      {itm.qty * itm.price}
                    </p><span>Qty: {itm.qty}</span>  
                    <span>Rate: {itm.rating.rate}</span> <span>Count: {itm.rating.count}</span>

                    <button
                      onClick={() => handleItemUpdate(itm,-1)}
                      className="btn btn-outline-dark me-4"
                    >
                      <i className="fa fa-minus"></i>
                    </button>

                    <button
                      onClick={() => handleItemUpdate(itm, +1)}
                      className="btn btn-outline-dark me-4"
                    >
                      <i className="fa fa-plus"></i>
                    </button>

                    <span>Total price: </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInDiv>
  );
};

export default Cart;
