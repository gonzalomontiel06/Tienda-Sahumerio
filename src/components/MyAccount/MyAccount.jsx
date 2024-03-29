import React, { useEffect, useState, useContext } from 'react'
import './MyAccount.scss'
import { getFirestore } from '../../firebase/config'
import { LoginContext } from '../../context/LoginContext'
import { CgNotes } from 'react-icons/cg'
import { MydModalWithGrid } from '../MydModalWithGrid/MydModalWithGrid'
import { LoadingContext } from '../../context/LoadingContext'
import { Spinner } from 'react-bootstrap'


export const MyAccount = () => {

    const {currentUser} = useContext(LoginContext)

    const [misCompras, setMisCompras] = useState([])

    const [modalShow, setModalShow] = useState(false)

    const {loading, setLoading} = useContext(LoadingContext)

    // const random = (id) => {
    //     const db = getFirestore()
    //     const compraId = db.collection('orders').doc(id)

    //     compraId.get()
    //         .then((res) => {
    //             setBuy({ id: res.id, ...res.data() })
    //         })
    //         .finally(() => {
    //             console.log(buy);
    //         })
    //     setModalShow(true)
    // }

    useEffect(() => {

        if (currentUser) {
            
            const db = getFirestore()
            const compras = db.collection('orders').where('buyer.correo', '==', currentUser.email)
    
            compras.get()
                .then((res) => {
                    const compra = res.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                    setMisCompras(compra)
                    
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        
    }, [currentUser, setLoading])


    return (
        <>
        {
            loading 
                ? 
                    <div style={{textAlign : 'center'}}>
                        <Spinner animation="grow"/> 
                    </div>
                : 
                    <section className='container compras'>
                        <h2 className='compras--sub'>mis compras</h2>
                        <div className='compras__box'>
                            <table className='compras__box__table'>
                                <thead className='compras__box__table__head'>
                                    <tr>
                                        <th>ID Compra</th>
                                        <th>Fecha</th>
                                        <th>Total</th>
                                        <th>Estado</th>
                                        <th>Detalle</th>
                                    </tr>
                                </thead>
                                <tbody className='compras__box__table__body'>
                                    {misCompras.map((res) =>
                                        <tr key={res.id} className='mt-5'>
                                            <td># {res.id}</td>
                                            <td>{res.date.toDate().toLocaleDateString()}</td>
                                            <td>$ {res.total}</td>
                                            <td id={res.estado === true ? 'pendiente' : 'finalizado'}>
                                                    {res.estado === true 
                                                                    ? 'pendiente'
                                                                    : 'finalizado'
                                                    }
                                            </td>
                                            <td>
                                                <button id='buttonDetail'>
                                                    <CgNotes className='detalleIcon' onClick={() => setModalShow(true)} />
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                    <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)}/>
                                </tbody>
                            </table>
                        </div>
                    </section>
            }
        </>
    )
}