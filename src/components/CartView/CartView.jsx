import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './cartView.scss'

export const CartView = () => {

    const {carrito, removeItem, clearCart} = useContext(CartContext)

    return (
        <div>
            <div className='container table'>
                <table className='table__Cart'>
                    <thead className='table__Cart__header'>
                        <tr>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                            <th>producto</th>
                            <th>precio</th>
                            <th>cantidad</th>
                            <th>subtotal</th>
                        </tr>
                    </thead>

                    <tbody>
                            {carrito.map((prod) => 
                                <tr key={prod.id}>
                                    <td><button className='btn btn-danger' onClick={() => removeItem(prod.id)}> X </button></td>
                                    <td><img src={prod.img} alt={prod.name} width='60px'/></td>
                                    <td>{prod.name}</td>
                                    <td>{prod.price}</td>
                                    <td>{prod.cantidad}</td>
                                    <td>{prod.price * prod.cantidad}</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
            <button className='btn btn-danger' onClick={clearCart}>Vaciar carrito</button>
        </div>
    )




}