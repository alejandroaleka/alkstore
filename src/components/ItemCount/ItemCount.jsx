import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

  return (
    <div className="counter-item d-flex align-items-center flex-column">
        <div className="control-item">
            <button type="button" className="btn control-button" onClick={decrement}>-</button>
            <strong className="item-value">{quantity}</strong>
            <button type="button" className="btn control-button" onClick={increment}>+</button>
        </div>
        <div className="mt-auto">
            <button type="button" className="btn control-button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount