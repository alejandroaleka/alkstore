import './ItemDetailContainer.css'
import React, { useState, useEffect } from 'react'
//import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/FirebaseConfig'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    //const [loader, setLoader] = useState(true)

    const { itemId } = useParams();

    useEffect(() => {
        //setLoader(true)

        const docFS = doc(db, 'products', itemId)

        getDoc(docFS)
            .then(response => {
                const data = response.data()
                const productAdapter = { id: response.id, ...data }
                setProduct(productAdapter)
            })
            .catch(error => {
                console.log(error)
            })
/*             .finally(() => {
                setLoader(false)
            }) */
    }, [itemId])

/*     useEffect(() => {
        getProductById(itemId)
            .then(response => setProduct(response))
            .catch(error => console.error(error))
    }, [itemId]) */

    return(
        <div className='item-detail-container container justify-content-center'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer