import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id, company, name, price, categoryId, stock, description, img}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = { id, name, price }

        addItem(item, quantity)
    }

    return(
        <article className="card-item">
            <header className="header">
                <h2 className="item-header">
                    {company} {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={description} className="item-img" />
            </picture>
            <section className='info'>
                <p>{description}</p>
                <p>${price}</p>
                <p>Quedan {stock} u.</p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <>
                        <div className='mt-auto option'>
                        <Link to='/cart'><button type='button' className='btn control-button'>Ir al carrito</button></Link>
                        <Link to='/'><button type='button' className='btn control-button'>Seguir Comprando</button></Link>
                        </div>
                        </>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd/* quantity => console.log('Cantidad agregada', quantity*/} />
                    )
            }
            </footer>
        </article>
    )
}

export default ItemDetail