import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import { LoginContext } from '../../context/LoginContext'

export const SignUp = () => {

    const {signUp, userAuth} = useContext(LoginContext)

    const [values, setValues] = useState({
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
    
    return(
        
        // SIGN UP VIEW
        <>
        
        {userAuth && <Redirect exact to='/' />}

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
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}