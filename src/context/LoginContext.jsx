import React, { createContext, useEffect, useState } from 'react'
import { getAuth } from '../firebase/config'

export const LoginContext = createContext()

// FUNCIONES LOGIN / LOGOUT / SINGUP X FIRESTORE Authentication

export const LoginProvider = ({children}) => {

    const auth = getAuth()
    const [currentUser, setCurrentUser] = useState(null)
    const [userAuth, setUserAuth] = useState(false)

    const login = (mail, pw) => {
        return auth.signInWithEmailAndPassword(mail, pw)
    }

    const logout = () => {
        return auth.signOut()
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