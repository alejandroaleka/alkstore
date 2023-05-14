import './CartWidget.css'
import CartLogo from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cart } = useContext(CartContext)

  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0)

  return (
    <Link to='/cart' style={{ display: totalQuantity > 0 ? "block" : "none" }} >
      <div className='cartUnits'>
          <img className='cartSVG' src={CartLogo} alt="Cart" />
          <p>{ totalQuantity }</p>
      </div>
    </Link>
    )
}

export default CartWidget