import React, { useContext, useEffect, useState } from 'react'
import './itemListContainer.scss'
import { Spinner } from 'react-bootstrap'
import { ItemList } from './ItemList'
import { useParams } from 'react-router'
import { CategoriesFilter } from '../CategoriesFilter/CategoriesFilter'
import { LoadingContext } from '../../context/LoadingContext'
import { getFirestore } from '../../firebase/config'
import { PriceFilter } from '../PriceFilter/PriceFilter'
import { FilterContext } from '../../context/FilterContext'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const {loading, setLoading} = useContext(LoadingContext)

    const {categoryId, menorPrecio, mayorPrecio} = useParams()

    const {handleMenorPrecio, handleMayorPrecio} = useContext(FilterContext)

    // USE EFFECT PARA PEDIR PRODUCTOS X FIREBASE
    useEffect(() => {
        const db = getFirestore()
        const productos = categoryId
                            ? db.collection('productos').where('category', '==', categoryId)
                            : db.collection('productos')
            
            productos.get()
                
                .then((response) => {
                    const newItem = response.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    })

                    setItems(newItem)
                })
                
                .catch((error) => console.log(error))
                
                .finally(() => {
                    setLoading(false)
                })

        },[categoryId, setLoading])

        menorPrecio && handleMenorPrecio(items)
        mayorPrecio && handleMayorPrecio(items)

        return (
            
            <main className="my-3 main">

                    <h2 className="main--subtitle ">nuestros productos</h2>

                    <section className='my-3'>
                        {
                        loading ? <Spinner animation="grow" />  
                                : <div className="container">
                                        <div className='row'>

                                            <div className='col-lg-2'>
                                                <CategoriesFilter />
                                                <PriceFilter />
                                            </div>

                                            <div className='main__section col-lg-10'>
                                                <ItemList items={items} />
                                            </div>
                                        </div>
                                    </div>
                        }
                    </section>
                    
            </main>
        )
}