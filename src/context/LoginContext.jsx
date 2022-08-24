import React, { createContext, useEffect, useState } from 'react'
import { getAuth } from '../firebase/config'
import Swal from 'sweetalert2'

export const LoginContext = createContext()

// FUNCIONES LOGIN / LOGOUT / SINGUP X FIRESTORE Authentication

export const LoginProvider = ({children}) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

    const auth = getAuth()
    const [currentUser, setCurrentUser] = useState(null)
    const [userAuth, setUserAuth] = useState(false)


    const login = (mail, pw) => {
        return auth.signInWithEmailAndPassword(mail, pw)
    }

    const logout = () => {
        auth.signOut()
        .finally(() => {
            Toast.fire({
                icon: 'success',
                title: 'Sesión finalizada'
            })
        })
    }

    const signUp = (mail, pw) => {
        return auth.createUserWithEmailAndPassword(mail, pw)
    }

    useEffect(() => {
        if (currentUser) {
            setUserAuth(true)
        }
        else {
            setUserAuth(false)
        }
    },[currentUser])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) =>{
            setCurrentUser(user)
        })
        return () => {
            unsubscribe()
        }
    })

    const value = { login, currentUser, userAuth, logout, signUp }

    return(
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
}