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
        <div className='countBox'>
            <button className={cantidad === 0 ? 'countBox__disable' : 'countBox__button'} disabled={cantidad === 0} onClick={handleRestar}>-</button>
            <div className='countBox__cantidad'>
                <span style={cantidad === 0 ? {color: 'darkgray'} : {color: 'darkgray'} }>{cantidad}</span>
            </div>
            <button className={cantidad === stock ? 'countBox__disable' : 'countBox__button'} disabled={cantidad === stock} onClick={handleSumar}>+</button>
        </div>
    )
}