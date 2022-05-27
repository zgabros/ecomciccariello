import React from 'react'
import './CartWidget.css'
import cart from '../cart.svg'


function CartWidget() {
  return (
    <>{ <img
        src={cart}
        width="30"
        height="30"
        className="d-inline-block align-top imagen"
        alt="Cart logo"/> }</>
  )
}

export default CartWidget