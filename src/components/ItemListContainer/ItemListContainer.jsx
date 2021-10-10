import React, { useEffect, useState } from 'react'
import './itemListContainer.scss'
import { Spinner } from 'react-bootstrap'
import { pedirStock } from '../../helpers/pedirStock'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        pedirStock()
            .then((res) => {
                setItems(res)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false)
            })
    },[])

    return (
        <main className="main">
            
            <h2 className="main--subtitle">nuestros productos</h2>
            
            <section className="main__section">
                {
                loading ? <Spinner animation="grow" />  
                        : <ItemList items={items} />
                }
            </section>
            
        </main>
    )
}
