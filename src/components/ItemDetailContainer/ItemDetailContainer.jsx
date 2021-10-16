import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { pedirStock } from '../../helpers/pedirStock'
import { Spinner } from 'react-bootstrap'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        pedirStock()
        .then((res) => {
            setItem(res.find(prod => prod.id === Number(itemId)))
        })
        .finally(() => {
            setLoading(false)
        })
    },[itemId])

    return (
        <div>
            {
                loading ? <div style={{textAlign: 'center'}}>
                                <Spinner animation="grow" />
                            </div>
                        : <ItemDetail {...item}/>
            } 
        </div>
    )

}