import React from 'react'
import './itemCount.scss'

export const ItemCount = ({cantidad, setCantidad, stock}) => {

    const handleRestar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }

    const handleSumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    return (
        <div className='handleBox'>
            <button className='handleBox__button' onClick={handleRestar}>-</button>
            <div className='handleBox__cantidad'>
                <span>{cantidad}</span>
            </div>
            <button className='handleBox__button' onClick={handleSumar}>+</button>
        </div>
    )

}