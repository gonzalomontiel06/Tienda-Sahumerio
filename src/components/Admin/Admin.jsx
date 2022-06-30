import React, { useContext, useState, useEffect } from 'react'
import './Stock.scss'
import { getFirestore } from '../../firebase/config'
import { LoadingContext } from '../../context/LoadingContext'
import { Spinner } from 'react-bootstrap'
import { Stock } from './Stock'
import { GrAddCircle } from 'react-icons/gr';




export const Admin = () => {

    const {loading, setLoading} = useContext(LoadingContext)

    const [items, setItems] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const productos = db.collection('productos')
            
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
            },[setLoading])
            console.log(items);

    return(
        <section className='container'>
            <h1 className='stock mt-4'>stock</h1>
                {loading 
                        ?                             
                            <div style={{textAlign: 'center'}}>
                                <Spinner animation="grow" />
                            </div>
                        : 
                            <>
                                <div>
                                    <GrAddCircle />
                                </div>
                                <div className='container'>
                                    <div>
                                        <Stock items={items} />
                                    </div>
                                </div>
                            </>
                }
        </section>
    )
}