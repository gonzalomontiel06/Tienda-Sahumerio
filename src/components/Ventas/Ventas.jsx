import React, { useEffect, useState, useContext } from 'react'
import './Ventas.scss'
import { getFirestore } from '../../firebase/config'
import { LoadingContext } from '../../context/LoadingContext'
import { Spinner } from 'react-bootstrap'
import { MdOutlineDoneAll } from 'react-icons/md'
import Swal from 'sweetalert2'

export const Ventas = () => {

    const [ventas, setVentas] = useState([])

    const {loading, setLoading} = useContext(LoadingContext)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })


    const finalizarVenta = (id) => {
        const db = getFirestore()
        const prod = db.collection('orders').doc(id)
                prod.update({
                    estado: false
                })
                .finally(() => {
                    Toast.fire({
                        icon: 'success',
                        title: 'Finalizado'
                    })
                })
    }

    useEffect(() => {
        
        const db = getFirestore()
        const misVentas = db.collection('orders')
                misVentas.get()
                        .then((res) => {
                            const newItem = res.docs.map((doc) => {
                                return {id: doc.id, ...doc.data()}
                            })
                            setVentas(newItem)
                        })
                        .catch((error) => console.log(error))
                
                        .finally(() => {
                            setLoading(false)
                        })
    },[setLoading])

        return (
            <>
                {
                    loading 
                        ? 
                        <div className='container'>
                            <Spinner animation="grow" />
                        </div>
                        : 
                            <div className='container ventas'>
                                <h2 className='ventas--sub mt-5'>Ventas</h2>
                                {ventas.map((res) => 
                                    <div className='container ventas__id mt-5' key={res.id}>
                                        <h3 className='ventas__id--sub'>ID # {res.id}</h3>
                                        <small>{res.date.toDate().toLocaleDateString()}</small>
                                        <div className='ventas__id__box mt-5'>
                                            <div className='ventas__id__box__datos'>
                                                <h4>datos :</h4>
                                                <p>Nombre: {res.buyer.nombre} {res.buyer.apellido}</p>
                                                <p>Mail: {res.buyer.correo}</p>
                                                <p>Telefono: {res.buyer.telefono}</p>
                                            </div>
                                            <div className='ventas__id__box__items'>
                                                <h4 className='ventas__id__box__items--sub'>items :</h4>
                                                <table className='ventas__id__box__items__table'>
                                                    <thead className='ventas__id__box__items__table--head'>
                                                        <tr>
                                                            <th>&nbsp;</th>
                                                            <th>Producto</th>
                                                            <th>Precio</th>
                                                            <th>Cantidad</th>
                                                            <th>Subtotal</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className='ventas__id__box__items__table--body'>
                                                        {res.items.map((it) =>
                                                            <tr key={it.id}>
                                                                <td>
                                                                    <img src={it.img} alt={it.name} width='55px'/>
                                                                </td>
                                                                <td>{it.name}</td>
                                                                <td>{it.price}</td>
                                                                <td>{it.cantidad}</td>
                                                                <td>{it.price * it.cantidad}</td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className='ventas__id__finalizar mt-4'>
                                            <div className='ventas__id__finalizar__sub'>
                                                <h4 className='ventas__id__finalizar__sub--sub'>TOTAL : ${res.total}</h4>
                                            </div>
                                            {
                                                res.estado === true 
                                                                ? <button onClick={() => finalizarVenta(res.id)} className='ventas__id__finalizar--button mt-2'> finalizar venta</button>
                                                                : <MdOutlineDoneAll className='ventas__id__finalizar--icon' />
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                }
            </>
        )
}