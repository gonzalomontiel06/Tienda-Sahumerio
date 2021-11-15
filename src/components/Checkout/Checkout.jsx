import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import './checkout.scss'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { Spinner } from 'react-bootstrap'
import { LoadingContext } from '../../context/LoadingContext'
import { generarOrden } from '../../firebase/generarOrden'

export const Checkout = () => {

    const {carrito, calcularTotal, clearCart} = useContext(CartContext)

    const {loading, setLoading} = useContext(LoadingContext)
    
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
    })

    const inputHandleChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        
        setLoading(true)

        generarOrden(carrito, values, calcularTotal())
            
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Gracias por su compra',
                    text: `N° de orden: ${res}`,
                    willClose: () => {
                        clearCart()
                    }
                })
            })

            .catch((err) =>{
                Swal.fire({
                    icon: 'error',
                    title: 'ITEM SIN STOCK:',
                    text: err.map(prod => prod.name)
                })
            })

            .finally(() => {
                setLoading(false)
            })
        }


    return (

        <>
            {carrito.length === 0 && <Redirect to='/' />}
            
            {loading
                
                ? 
                    <div style={{textAlign: 'center'}}>
                        <Spinner animation="grow" />
                    </div>
                
                :    
                    <article className='container checkout'>

                        <h2 className='checkout__sub'>Detalles de facturacion</h2>

                        <form className='container checkout__form' onSubmit={handleSubmit}>
                            <label htmlFor="name">Nombre:</label>
                            <input 
                                type="text"
                                value={values.nombre}
                                name='nombre'
                                onChange={inputHandleChange}
                                className='holas'
                                required/>

                            <label htmlFor="apellido">Apellido:</label>
                            <input 
                                type="text"
                                value={values.apellido}
                                name='apellido'
                                onChange={inputHandleChange}
                                required/>

                            <label htmlFor="telefono">Telefono:</label>
                            <input 
                                type="text"
                                value={values.telefono}
                                name='telefono'
                                onChange={inputHandleChange}
                                required/>

                            <label htmlFor="mail">Mail:</label>
                            <input 
                                type="email"
                                value={values.correo}
                                name='correo'
                                onChange={inputHandleChange}
                                required/>

                            <button className='formButton' type='submit'>Finalizar compra</button>
                        </form>
                    </article>
            }
        </>
    )
}