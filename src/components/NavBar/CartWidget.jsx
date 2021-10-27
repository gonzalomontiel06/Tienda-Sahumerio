import React, { useContext } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
    
    const {calcularItemCart} = useContext(CartContext)
    
    return (
        <div>
            <RiShoppingCartLine />
            <span>{calcularItemCart()}</span>
        </div>
    )
}