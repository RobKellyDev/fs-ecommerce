import React from 'react'
import { Link } from "react-router-dom";
import styles from './cart.module.css';


const CartItems = ({itm,handleClose,handleItemUpdate,id}) => {

  const showQtyWarning = () => (
    <span className={styles.cartEmpty}>
      Not a valid quantity. Please update before continuing.
    </span>
  )

  return (

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
            <div className={styles.cartQtyWrapper}>
              <p className={styles.itemInformation}>
                Qty: &nbsp;
                {(itm.qty === 0 && itm.id === id) ? showQtyWarning() : itm.qty}
              </p>
            </div>

            <p className="item-information lead fw-light mb-1">
              Price: &nbsp;{' '}
              <label className="text-danger">£{itm.price}</label>
            </p>
          </div>
        </div>

        <div className="col-12 col-md-3 col-lg-3 col-offset-lg-1">
          <div className="cart-total">
            <h5 className="item-total mt-3 mb-3">
              Total:{' '}
              <label> £{(itm.qty * itm.price).toFixed(2)}</label>
            </h5>
            <section className="d-flex justify-content-center mt-0 mb-0">
              <button
                onClick={() => handleItemUpdate(itm, -1,id)}
                className="cart-qty btn btn-sm btn-outline-danger me-2"
              >
                <i className="fa fa-minus" />
              </button>

              <button
                onClick={() => handleItemUpdate(itm, +1,id)}
                className="cart-qty btn btn-sm btn-outline-success me-2"
              >
                <i className="fa fa-plus" />
              </button>
            </section>
          </div>
        </div>
      </div>

    </div>
  )

}


export default CartItems;