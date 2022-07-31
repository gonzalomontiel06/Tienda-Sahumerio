import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../context/CartContext'
import { LoginContext } from '../../context/LoginContext'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export const SignUp = () => {

    const {signUp, userAuth} = useContext(LoginContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confPassword: '',
    })

    const {email, password, confPassword} = values

    const handleChange = (e) => {
        e.preventDefault()
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp(email, password, confPassword)
    }

    const {calcularItemCart} = useContext(CartContext)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

    const alert = () => {
        Toast.fire({
            icon: 'info',
            title: 'Por favor, registrate para continuar'
        })
    }

    return(
        
        // SIGN UP VIEW
        <>
        
        {userAuth && <Redirect exact to='/cartview' /> }

        {calcularItemCart() !== 0 && alert()}

        <div className='container d-flex align-items-center justify-content-center my-5'>
                <div className='row d-flex align-items-center justify-content-space'>
                    <div className='col' style={{ width: '500px', fontFamily: 'Quicksand , sans-serif', fontWeight: 'bold' }}>
                        <h2 className='text-center mb-4 font-weight-bold'>Sign up</h2>
                        <form className='p-0' onSubmit={handleSubmit}>
                            <div className='form-group mb-2'>
                                <label>Email</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Ingrese su email'
                                    name='email'
                                    value={values.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label>Password</label>
                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='Ingrese su password'
                                    name='password'
                                    value={values.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label>Repetir Password</label>
                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='Repita su password'
                                    name='confPassword'
                                    value={values.confPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type='submit' className='btn btn-primary btnLogin font-weight-bold text-uppercase d-block w-100 mt-4'>
                                Sign Up
                            </button>
                            <p className='text-center mt-3'> Ya tenes cuenta? <Link to='/login'>Log in</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}