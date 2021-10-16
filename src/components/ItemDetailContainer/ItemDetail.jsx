import React from 'react'
import { useHistory } from 'react-router'
import './itemDetail.scss'

export const ItemDetail = ({name, price, description, img}) => {
    
    const {goBack} = useHistory()
    
    return (
        <div className='container itemDetail'>
            <div className='itemDetail__img'>
                <img src={img} alt={name} />
            </div>
            <div className='itemDetail__box'>
                <h2 className='itemDetail__box__price'>{price}</h2>
                <h2 className='itemDetail__box__name'>{name}</h2>
                <p className='itemDetail__box__description'>{description}</p>
                <button className='itemDetail__box__button btn btn-info'>comprar</button>
                <button className='itemDetail__box__button btn btn-info' onClick={() => goBack()}>volver</button>
            </div>
        </div>
    )
}