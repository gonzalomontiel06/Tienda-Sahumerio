import React, { useContext } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { CartContext } from '../../context/CartContext'
import './navBar.scss'

export const CartWidget = () => {
    
    const {calcularItemCart} = useContext(CartContext)
    
    return (
        <div className='mb-2'>
            <RiShoppingCartLine className='cartWidget' />
            <span className={calcularItemCart() === 0 ? 'disable' : 'cartWidget__count'}>{calcularItemCart()}</span>
        </div>
    )
}