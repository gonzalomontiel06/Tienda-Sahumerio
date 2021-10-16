import React from 'react'
import logotransparente from '../../img/logotransparente.png'
import './navBar.scss'
import { CartWidget } from './CartWidget'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
            <header>
                <nav className="navBar">
                    <img src={logotransparente} alt="logoMarca" />
                    <section className="navBar__list">
                        <NavLink activeClassName={'linkSelected'} exact to='/'>home</NavLink>
                        <NavLink activeClassName={'linkSelected'} exact to='/categories'>productos</NavLink>
                        <NavLink activeClassName={'linkSelected'} exact to='/contacto'>contacto</NavLink>
                    </section>
                    <div className="navBar__cart">
                        <p>login</p>
                        <CartWidget />
                    </div>
                </nav>
            </header>
    )
}