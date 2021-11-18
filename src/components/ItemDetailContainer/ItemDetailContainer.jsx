import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Spinner } from 'react-bootstrap'
import { ItemDetail } from './ItemDetail'
import { getFirestore } from '../../firebase/config'
import { LoadingContext } from '../../context/LoadingContext'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const {loading, setLoading} = useContext(LoadingContext)

    const {itemId} = useParams()

    // USE EFFECT PARA LLAMAR PRODUCTOS X FIREBASE 
    useEffect(() => {
        
        const bd = getFirestore()
        const productos = bd.collection('productos')
        const prod = productos.doc(itemId)

        prod.get()
            
            .then((res) => {
                setItem({id: res.id, ...res.data()})
            })

            .catch((err) => {
                console.log(err);
            })

            .finally(() => {
                setLoading(false)
            })
    
    },[itemId, setLoading])

    console.log(item);

    return (
        <div>
            {
                loading 
                    ?
                        <div style={{textAlign: 'center'}}>
                                <Spinner animation="grow" />
                        </div>
                    :
                        <ItemDetail {...item}/>
            } 
        </div>
    )

}