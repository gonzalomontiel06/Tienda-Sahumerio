import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './cartView.scss'
import { GiCancel } from "react-icons/gi";

export const CartView = () => {

    const {carrito, removeItem, clearCart} = useContext(CartContext)


    return (
        <div>
            <div className='container table'>
                <table className='table__cart'>
                    <thead className='table__cart__header'>
                        <tr>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                            <th id='producto'>producto</th>
                            <th>precio</th>
                            <th>cantidad</th>
                            <th>subtotal</th>
                        </tr>
                    </thead>

                    <tbody className='table__cart__body'>
                            {carrito.map((prod) => 
                                <tr key={prod.id}>
                                    <td>
                                        <div className='cancelItem'>
                                            <GiCancel className='cancelItem__icon' onClick={() => removeItem(prod.id)}/>
                                        </div>
                                    </td>
                                    <td><img src={prod.img} alt={prod.name} width='60px'/></td>
                                    <td id='name'>{prod.name}</td>
                                    <td>${prod.price}</td>
                                    <td>
                                        <span>{prod.cantidad}</span>
                                    </td>
                                    <td>${prod.price * prod.cantidad}</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
            <button className='btn btn-danger' onClick={clearCart}>Vaciar carrito</button>
        </div>
    )




}