import React, { useEffect, useContext, useState } from 'react'
import './EditStock.scss'
import { getFirestore } from '../../firebase/config'
import { useParams } from 'react-router-dom'
import { LoadingContext } from '../../context/LoadingContext'
import { Spinner } from 'react-bootstrap'
import { ItemStock } from './ItemStock'

export const EditStock = () => {
    
    const {editId} = useParams()

    const [item, setItem] = useState(null)

    const {loading, setLoading} = useContext(LoadingContext)

    useEffect(() => {
        
        const db = getFirestore()
        const productos = db.collection('productos')
        const prod = productos.doc(editId)

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
        },[editId, setLoading])

        return (
            <div>
                {
                    loading 
                        ?
                            <div style={{textAlign: 'center'}}>
                                    <Spinner animation="grow" />
                            </div>
                        :
                            <ItemStock {...item} />
                } 
            </div>
        )
}