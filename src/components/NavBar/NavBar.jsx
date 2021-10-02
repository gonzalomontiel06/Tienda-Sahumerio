import React from 'react'
import logotransparente from '../../img/logotransparente.png'
import { CartWidget } from './CartWidget'
import './navBar.scss'

export const NavBar = () => {
    return (
            <nav className="navBar">
                <img src={logotransparente} alt="logoMarca" />
                <ul className="navBar__list">
                    <li>home</li>
                    <li>productos</li>
                    <li>contacto</li>
                </ul>
                <div className="navBar__cart">
                    <p>login</p>
                    <CartWidget />
                </div>
            </nav>
    )
}