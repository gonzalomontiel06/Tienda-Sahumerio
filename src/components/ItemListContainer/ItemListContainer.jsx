import React, { useEffect, useState } from 'react'
import './itemListContainer.scss'
import { Spinner } from 'react-bootstrap'
import { pedirStock } from '../../helpers/pedirStock'
import { ItemList } from './ItemList'
import { useParams } from 'react-router'
import { CategoriesFilter } from '../CategoriesFilter/CategoriesFilter'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        pedirStock()
            .then((res) => {
                
                if (categoryId) {
                    setItems(res.filter(product => product.category === categoryId) )
                }
                
                else{
                    setItems(res)
                }
            })
            
            .catch((err) => {
                console.log(err);
            })
            
            .finally(() => {
                setLoading(false)
            })
    },[categoryId])

    return (
        <main className="main">
            
                <h2 className="main--subtitle ">nuestros productos</h2>
                
                <section>
                    {
                    loading ? <Spinner animation="grow" />  
                            : <div className="container">
                                    <div className='row'>
                                        <div className='col-lg-2'><CategoriesFilter /></div>
                                        <div className='main__section col-lg-10'><ItemList items={items} /></div>
                                    </div>
                                </div>
                    }
                </section>
            
        </main>
    )
}
