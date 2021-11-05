import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    console.log(carrito);

    const addToCart = (item) => {
        setCarrito([...carrito, item])
    }

    const removeItem = (itemId) => {
        const newCart = carrito.filter(prod => prod.id !== itemId)
        setCarrito(newCart)
    }

    const calcularItemCart = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const clearCart = () => {
        setCarrito([])
    }

    const isInCart = (itemId) => {
        return carrito.some(prod => prod.id === itemId)
    }

    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
    }

    // const updateItem = (cant, prodId) => {
    //     const itemUpdate = carrito.find((prod) => prod.id === prodId)
    //     itemUpdate.cantidad = cant + 1
    //     console.log(itemUpdate);
    //     setCarrito([...carrito, itemUpdate])
    // }
    
    return(
        
        <CartContext.Provider value={ {carrito, addToCart, removeItem, calcularItemCart, clearCart, isInCart, calcularTotal} }>
            {children}
        </CartContext.Provider>
    )
}