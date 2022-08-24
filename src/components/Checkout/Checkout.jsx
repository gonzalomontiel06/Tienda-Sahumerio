import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import './checkout.scss'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { Spinner } from 'react-bootstrap'
import { LoadingContext } from '../../context/LoadingContext'
import { generarOrden } from '../../firebase/generarOrden'
import { validateForm } from '../../helpers/validateForm'

export const Checkout = () => {

    const {carrito, calcularTotal, clearCart} = useContext(CartContext)

    const {loading, setLoading} = useContext(LoadingContext)
    
    const [errors, setErrors] = useState({})
    
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

    const handleBlur = (e) => {
        inputHandleChange(e)
        setErrors(validateForm(values))
    }

    // FUNCION GENERAR ORDEN DE COMPRA
    
    const handleSubmit = (e) => {
        
        e.preventDefault()
        setLoading(true)
        setErrors(validateForm(values))

        if (Object.keys(errors).length === 0) {
            
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
        }


    return (

        // CHECKOUT VIEW

        <>
            {carrito.length === 0 && <Redirect to='/' />}
            
            {loading
                
                ? 
                    <div className='my-5' style={{textAlign: 'center'}}>
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
                                onBlur={handleBlur}
                                required />
                            {errors.nombre && <p className='error'>{errors.nombre}</p>}

                            <label htmlFor="apellido">Apellido:</label>
                            <input 
                                type="text"
                                value={values.apellido}
                                name='apellido'
                                onChange={inputHandleChange} 
                                onBlur={handleBlur}
                                required/>
                                {errors.apellido && <p className='error'>{errors.apellido}</p>}

                            <label htmlFor="telefono">Telefono:</label>
                            <input 
                                type="text"
                                value={values.telefono}
                                name='telefono'
                                onChange={inputHandleChange}
                                onBlur={handleBlur}
                                required/>
                                {errors.telefono && <p className='error'>{errors.telefono}</p>}

                            <label htmlFor="mail">Mail:</label>
                            <input 
                                type="email"
                                value={values.correo}
                                name='correo'
                                onChange={inputHandleChange}
                                onBlur={handleBlur}
                                required/>
                                {errors.correo && <p className='error'>{errors.correo}</p>}

                            <button className='formButton' type='submit'>Finalizar compra</button>
                        </form>
                    </article>
            }
        </>
    )
}