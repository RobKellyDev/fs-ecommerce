import React from 'react'
import CheckoutSidebar from './CheckoutSidebar'
import CheckoutMainForm from './CheckoutMainForm'
import styles from './checkout.module.css'

const CheckoutForm = () => {
  return (
    <div className={styles.checkoutWrapper}>
      <div className="row g-5">
        <CheckoutSidebar />
        <CheckoutMainForm />
      </div>
    </div>
  )
}

export default CheckoutForm
