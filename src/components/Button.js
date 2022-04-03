import React from 'react'

function Button({ submitButton, children }) {
  return (
    <div
      className="btn btn-primary"
      type={submitButton ? 'submit' : 'button'}
    >
      {children}
    </div>
  )
}

export default Button
