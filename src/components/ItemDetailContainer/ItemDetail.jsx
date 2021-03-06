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

    // FUNCION AGREGAR ITEM A CART
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

        // ITEM DETAIL VIEW
        
        <div className='container my-4 itemDetail'>
            <div className='itemDetail__img'>
                <img src={img} alt={name} />
            </div>
            <div className='itemDetail__box'>
                <h2 className='itemDetail__box__price'>${price}</h2>
                <h2 className='itemDetail__box__name'>{name}</h2>
                <p className='itemDetail__box__description'>{description}</p>
                
                {isInCart(id)
                    ?
                        <>
                            <NavLink className='itemDetail__box__buttons__comprar' exact to='/cartview'>terminar compra</NavLink>
                            <button className='itemDetail__box__buttons__comprar' onClick={() => goBack()}>volver</button>
                        </>
                    : 
                        <div className='itemDetail__box__buttons'>          
                            <ItemCount cantidad={cantidad} setCantidad={setCantidad} stock={stock}/>
                            <button className='itemDetail__box__buttons__comprar' onClick={handleAgregar}>comprar</button>
                            <button className='itemDetail__box__buttons__comprar' onClick={() => goBack()}>volver</button>
                        </div>
                    }
            </div>
        </div>
    )
}