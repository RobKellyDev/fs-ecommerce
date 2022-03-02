import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  return (
    <div className="md-6">
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} alt={product.title} height={200} width={180} />
        </div>
        <div className="col-md-4">
          <h3>{product.title}</h3>
          <p className="lead fw-bold">
            {product.qty} X £ {product.price} = £ {product.qty * product.price}
          </p>

          <button 
            onClick={() => handleButton(product)}
            className="btn btn-outline-dark me-4">
            <i className="fa fa-minus"></i>
          </button>

          <button 
            onClick={() => handleButton(product)}
            className="btn btn-outline-dark me-4">
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
      Cart
    </div>
  )
}

export default Cart;