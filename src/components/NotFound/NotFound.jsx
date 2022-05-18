import React from 'react'
import './notFound.scss'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'

export const NotFound = () => {
    return(
        <>
            <div className='container my-5 notFound'>
                <AiOutlineInfoCircle className='notFound__icon' />
                <h3 className='notFound__subtitle'>Pagina no encontrada</h3>
            </div>

            <div className='container'>
                <Link exact to='/'>
                    <button className='backShop'> <BiLeftArrowAlt /> volver a la tienda </button>
                </Link>
            </div>
        </>
    )
}