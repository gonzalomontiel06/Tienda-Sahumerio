import React, { useContext } from 'react'
import { GiCancel } from "react-icons/gi";
import { FaRegTrashAlt } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext';


export const Cart = () => {

        const {carrito, removeItem, clearCart} = useContext(CartContext)
        
        return (
            <>
                <div className='container my-4 table'>
                    
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
                                                <button className='cancelItem__button'>
                                                    <GiCancel className='cancelItem__button__icon' onClick={() => removeItem(prod.id)}/>
                                                </button>
                                            </div>
                                        </td>
                                        <td><img src={prod.img} alt={prod.name} width='60px'/></td>
                                        <td id='name'>{prod.name}</td>
                                        <td>${prod.price}</td>
                                        <td>
                                            <button className='button-'>-</button>
                                            <span>{prod.cantidad}</span>
                                            <button className='button-'>+</button>
                                        </td>
                                        <td>${prod.price * prod.cantidad}</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
                
                <div className='removeAll'>
                    <button className='removeAll__button' onClick={clearCart}>
                        <FaRegTrashAlt className='removeAll__button__icon' />
                        <p>vaciar</p>
                    </button>
                </div>
            </>
        )
}