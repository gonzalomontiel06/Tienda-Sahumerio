import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './cartView.scss'
import { EmptyCart } from './EmptyCart';
import { Cart } from './Cart';


export const CartView = () => {

    const {carrito } = useContext(CartContext)

    return (
        <div className='container'>
            
            {
            carrito.length === 0
                            
                            ? 
                                <EmptyCart />
                            :
                                <Cart />
            }   
        </div>  
    )
}