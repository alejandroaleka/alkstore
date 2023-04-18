import React from 'react'
import './CartWidget.css'
import CartLogo from './assets/cart.svg'

const CartWidget = () => {
  return (
    <div className='cartUnits'>
        <img className='cartSVG' src={CartLogo} alt="Cart" />
        <p>0</p>
    </div>
    )
}

export default CartWidget