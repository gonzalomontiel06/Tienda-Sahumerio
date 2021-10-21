import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './itemDetail.scss'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({name, price, description, img, id, category, stock}) => {
    
    const {goBack} = useHistory()

    const [cantidad, setCantidad] = useState(0)

    const addToCart = () => {
        const newItem = {
            name,
            id,
            category,
            price,
            cantidad
        }

        console.log(newItem);
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
                <div className='itemDetail__box__buttons'>
                    <ItemCount cantidad={cantidad} setCantidad={setCantidad} stock={stock}/>
                    <button className='itemDetail__box__buttons__comprar btn btn-info' onClick={addToCart}>comprar</button>
                    <button className='itemDetail__box__buttons__comprar btn btn-info' onClick={() => goBack()}>volver</button>
                </div>
            </div>
        </div>
    )
}