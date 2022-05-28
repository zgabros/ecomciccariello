import React from 'react'
import './CartWidget.css'
import cart from '../cart.svg'


function CartWidget({item}) {
  return (
    <>{ <img
        src={cart}
        width="30"
        height="30"
        className="d-inline-block align-top imagen"
        alt="Cart logo"/> }
        <span style={{color:"grey", fontWeight:"600", padding:"5px"}}>{item}</span>
        </>
  )
}

export default CartWidget