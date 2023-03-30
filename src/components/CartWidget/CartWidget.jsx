import React from 'react'
import './CartWidget.css'
import CartLogo from './cart.svg'

const CartWidget = () => {
  return (
    <div>
        <img className='cartSVG' src={CartLogo} alt="Cart" />
        <p className='cartUnits'>4</p>
    </div>
    )
}

export default CartWidget