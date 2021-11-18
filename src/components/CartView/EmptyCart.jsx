import React from 'react'
import './cartView.scss'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const EmptyCart = () => {


        return(

            // EMPTY CART VIEW
            
            <>
                <div className='container my-5 clearCart'>
                    <AiOutlineInfoCircle className='clearCart__icon' />
                    <h3 className='clearCart__subtitle'>su carrito esta vacio</h3>
                </div>
                <div className='container'>
                    <Link exact to='/productos'>
                        <button className='backShop'> <BiLeftArrowAlt /> volver a la tienda </button>
                    </Link>
                </div>
            </>
        )
}