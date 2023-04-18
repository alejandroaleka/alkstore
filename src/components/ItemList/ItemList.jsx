import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div className="item-list row justify-content-around g-8">
        {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList