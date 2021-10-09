import React from 'react'
import logotransparente from '../../img/logotransparente.png'
import { RiShoppingCartLine } from 'react-icons/ri'
import './navBar.scss'

export const NavBar = () => {
    return (
            <header>
                <nav className="navBar">
                    <img src={logotransparente} alt="logoMarca" />
                    <ul className="navBar__list">
                        <li>home</li>
                        <li>productos</li>
                        <li>contacto</li>
                    </ul>
                    <div className="navBar__cart">
                        <p>login</p>
                        <div>
                            <RiShoppingCartLine />
                        </div>
                    </div>
                </nav>
            </header>
    )
}