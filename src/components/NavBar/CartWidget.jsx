import React, { useContext } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { CartContext } from '../../context/CartContext'
import './navBar.scss'

export const CartWidget = () => {
    
    const {calcularItemCart} = useContext(CartContext)
    
    return (
        <div>
            <RiShoppingCartLine className='cartWidget' />
            <span className='cartWidget__count'>{calcularItemCart()}</span>
        </div>
    )
}