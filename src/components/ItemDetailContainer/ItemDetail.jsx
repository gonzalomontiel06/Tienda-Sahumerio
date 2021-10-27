import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import './itemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom'

export const ItemDetail = ({name, price, description, img, id, category, stock}) => {

    const {addToCart, isInCart} = useContext(CartContext)

    const {goBack} = useHistory()

    const [cantidad, setCantidad] = useState(0)

    const handleAgregar = () => {
        const newItem = {
            name,
            id,
            category,
            price,
            cantidad,
            img
        }

        if (cantidad > 0){
            addToCart(newItem)
    }
}


    
    return (
        <div className='container itemDetail'>
            <div className='itemDetail__img'>
                <img src={img} alt={name} />
            </div>
            <div className='itemDetail__box'>
                <h2 className='itemDetail__box__price'>{price}</h2>
                <h2 className='itemDetail__box__name'>{name}</h2>
                <p className='itemDetail__box__description'>{description}</p>
                {isInCart(id)
                ?
                    <>
                        <NavLink className='itemDetail__box__buttons__comprar btn btn-info' exact to='/cartview'>terminar compra</NavLink>
                        <button className='itemDetail__box__buttons__comprar btn btn-info' onClick={() => goBack()}>volver</button>
                    </>
                : 
                    <div className='itemDetail__box__buttons'>          
                        <ItemCount cantidad={cantidad} setCantidad={setCantidad} stock={stock}/>
                        <button className='itemDetail__box__buttons__comprar btn btn-info' onClick={handleAgregar}>comprar</button>
                        <button className='itemDetail__box__buttons__comprar btn btn-info' onClick={() => goBack()}>volver</button>
                    </div>
                }
            </div>
        </div>
    )
}