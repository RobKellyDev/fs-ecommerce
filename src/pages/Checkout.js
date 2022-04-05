import React from 'react'
//import { CheckoutForm } from '../components/checkout-form'
import { FadeInDiv } from '../components/animations/FadeInDiv'

const Checkout = () => {
  return (
    <FadeInDiv>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mt-5">Checkout Not Yet Ready</h1>
            {/* <CheckoutForm /> */}
          </div>
        </div>
      </div>
    </FadeInDiv>
  )
}

export default Checkout
