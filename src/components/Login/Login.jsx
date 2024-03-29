import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { LoginContext } from "../../context/LoginContext";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import './login.scss'

export const Login = () => {

    const {login, currentUser} = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const {email, password} = values

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

    const handleChange = (e) => {
        e.preventDefault()
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
            .finally(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'Bienvenido'
                })
            })
    }

    return(
        
        // LOGIN VIEW
        <>
            {currentUser && <Redirect to='/cartview' />}
        
            <div className='container d-flex align-items-center justify-content-center my-5'>
                <div className='row d-flex align-items-center justify-content-space'>
                    <div className='col' style={{ width: '500px', fontFamily: 'Quicksand , sans-serif', fontWeight: 'bold' }}>
                        <h2 className='text-center mb-4 font-weight-bold'>Log in</h2>
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
                            <button type='submit' className='btn btn-primary btnLogin font-weight-bold text-uppercase d-block w-100 mt-4'>
                                Log in
                            </button>
                        </form>
                        <p className='text-center mt-3'> No tenes cuenta? <Link to='/signup'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}