import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, company, name, price, categoryId, stock, description, img}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={quantity => console.log('Cantidad agregada', quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail