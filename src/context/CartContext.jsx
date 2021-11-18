import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    console.log(carrito);

    // FUNCION AGREGAR ITEM AL CARRITO
    const addToCart = (item) => {
        setCarrito([...carrito, item])
    }

    // FUNCION REMOVE ITEM DE CARRITO
    const removeItem = (itemId) => {
        const newCart = carrito.filter(prod => prod.id !== itemId)
        setCarrito(newCart)
    }

    // FUNCION CARCULAR CANTIDAD DE ITEMS EN CARRITO
    const calcularItemCart = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    // FUNCION VACIAR CARRITO
    const clearCart = () => {
        setCarrito([])
    }

    // FUNCION COMPARA SI HAY ITEM EN CARRTIO
    const isInCart = (itemId) => {
        return carrito.some(prod => prod.id === itemId)
    }

    // FUNCION CALCULAR TOTAL DE COMPRA
    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
    }

    // FUNCION CAMBIAR CANTIDAD DE ITEM EN CARRITO
    const updateItem = (cantidad, prodId) => {
        const itemUpdate = carrito.find((prod) => prod.id === prodId)
        itemUpdate.cantidad = cantidad
        setCarrito([...carrito])
    }

    
    return(
        
        <CartContext.Provider value={ {carrito, addToCart, removeItem, calcularItemCart, clearCart, isInCart, calcularTotal, updateItem} }>
            {children}
        </CartContext.Provider>
    )
}