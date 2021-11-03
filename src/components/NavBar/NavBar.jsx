import React, { useContext } from 'react'
import logotransparente from '../../img/logotransparente.png'
import './navBar.scss'
import { CartWidget } from './CartWidget'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const NavBar = () => {

    const {calcularItemCart} = useContext(CartContext)

    return (
            <header className='container header'>
                <nav className="navBar">
                    <NavLink exact to='/'>
                        <img src={logotransparente} alt="logoMarca" />
                    </NavLink>
                    <section className="navBar__list">
                        <NavLink activeClassName={'linkSelected'} exact to='/'>home</NavLink>
                        <NavLink activeClassName={'linkSelected'} exact to='/categories'>productos</NavLink>
                        <NavLink activeClassName={'linkSelected'} exact to='/contacto'>contacto</NavLink>
                    </section>
                    <div className="navBar__cart">
                        <p>login</p>
                        <NavLink exact to='/cartview'>
                            {calcularItemCart() === 0 ? "" : <CartWidget /> }
                        </NavLink>
                    </div>
                </nav>
            </header>
    )
}