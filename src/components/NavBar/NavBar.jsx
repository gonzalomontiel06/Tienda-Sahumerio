import React, { useContext, useState, useEffect } from 'react'
import './navBar.scss'
import { CartWidget } from './CartWidget'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { getLogo } from '../../helpers/getLogo'
import { LoginContext } from '../../context/LoginContext'

export const NavBar = () => {

    const [logoTransparente, setLogoTransparente] = useState({}) 

    useEffect(() => {
        getLogo(setLogoTransparente)
    },[])

    const {calcularItemCart} = useContext(CartContext)

    const {logout, userAuth} = useContext(LoginContext)

    return (
        
        // NAV BAR VIEW
        
            <header className='container header'>
                <nav className="navBar">
                    <NavLink exact to='/'>
                        <img src={logoTransparente.logo} alt="logoMarca" />
                    </NavLink>
                    <section className="navBar__list">
                        <NavLink activeClassName={'linkSelected'} exact to='/'>home</NavLink>
                        <NavLink activeClassName={'linkSelected'} exact to='/productos'>productos</NavLink>
                        <NavLink activeClassName={'linkSelected'} exact to='/raro'>raro</NavLink>
                    </section>
                    <div className="navBar__cart">
                            {userAuth
                                ?   <button className='logOut' onClick={() => logout()}>log out</button>
                                : 
                                    <NavLink className='logIn' exact to='/login'>log in</NavLink>
                            }
                        <NavLink exact to='/cartview' className='navBar__cart__cart'>
                            {calcularItemCart() === 0 ? "" : <CartWidget /> }
                        </NavLink>
                    </div>
                </nav>
            </header>
    )
}