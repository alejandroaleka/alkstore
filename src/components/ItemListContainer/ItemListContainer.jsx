import React, { useEffect, useState } from 'react'
//import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/FirebaseConfig'
import {getDocs, collection, where, query} from "firebase/firestore";


const ItemListContainer = ({ greeting }) => { 
    
    const [products, setProducts] = useState([]);
    //const [loader, setLoader] = useState(true)

    const { categoryId } = useParams();

    useEffect(() => {
        //setLoader(true)

        const collectionProd = categoryId
            ? query(collection(db, 'products'), where ('categoryId', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionProd)
            .then(res => {
                const productsAdapter = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapter)
            })
            .catch(error => {
                console.log(error)
            })
/*             .finally(() => {
                setLoader(false)
            }) */

/*         const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => setProducts(response))
            .catch(error => console.error(error))
    }, [categoryId]) */
}, [categoryId])

    return(
        <>
            <div className='container list-container text-center p-2'>
                <h1>{greeting}</h1>
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer;