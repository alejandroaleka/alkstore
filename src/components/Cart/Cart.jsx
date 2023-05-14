import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart } = useContext(CartContext)

    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0)

    const total = cart.reduce((total, product) => total + (product.item.price * product.quantity), 0)

    if(totalQuantity === 0) {
        return(
            <>
                <h1>Su carrito está vacío</h1>
                <Link to='/'><button type='button' className='btn control-button'>Volver a la tienda</button></Link>
            </>
        )
    }

    return(
        <div className='cart-menu container'>
            { cart.map(product => <CartItem key={product.id}{...product}/>) }
            <h3 className='option'>Total: ${total}</h3>
            <div className='mt-auto'>
                <button onClick={() => clearCart()} className="btn control-button">Vaciar carrito</button>
                <Link to='/checkout'><button type='button' className='btn control-button'>Finalizar compra</button></Link>
            </div>
        </div>
    )
}

export default Cart