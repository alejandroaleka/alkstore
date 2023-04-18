import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, company, name, price, categoryId, stock, description, img}) => {

    return (
            <article className="card-item col-12 col-sm-8 col-lg-4 p-3 g-4">
                <Link to={`/item/${id}`} className='detail-link'>
                    <header className="header">
                        <h2 className="item-header">
                            {company} {name}
                        </h2>
                    </header>
                    <picture>
                        <img src={img} alt={name} className="item-img" />
                    </picture>
                    <section className="info">
                        <p >{description}</p>
                        <p>${price}</p>
                        <p>Quedan {stock} u.</p>
                    </section>
                    </Link>
                </article>
    )
}

export default Item