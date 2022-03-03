import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {

  const state = useSelector((state) => state.cartReducer);
  console.log('what is state ',state);

  return (
    <div className="container">
      <div className="row">
        

{ state.map(itm => 

        

        <div key={itm.id} className="col-md-12">

          <div className="col-md-4 offset-md-8">
            <img src={itm.image} alt={itm.title} height={200} width={180} />
          </div>
          <h3>{itm.title}</h3>
          <p className="lead fw-bold">
            {itm.qty} X £ {itm.price} = £ {itm.qty * itm.price}
          </p>

          <button 
            //onClick={() => handleButton(state.product)}
            className="btn btn-outline-dark me-4">
            <i className="fa fa-minus"></i>
          </button>

          <button 
            //onClick={() => handleButton(product)}
            className="btn btn-outline-dark me-4">
            <i className="fa fa-plus"></i>
          </button>
        </div>

)}

      </div>
      Cart
    </div>
  )
}

export default Cart;