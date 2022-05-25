import React from 'react'
import './priceFilter.scss'
import { NavLink } from 'react-router-dom'

export const PriceFilter = () => {

    return (
        <div className='asd mt-4'>
            <h4 className='subtitle'>ordenar por</h4>
            <div className='price'>
                <NavLink activeClassName={'categorieSelected'} exact to='/productos'>
                    Mas relevante
                </NavLink>
                <NavLink activeClassName={'categorieSelected'} exact to='/orden/menorPrecio'>
                    Menor precio
                </NavLink>
                <NavLink activeClassName={'categorieSelected'} exact to='/orden/mayorPrecio'>
                    Mayor precio
                </NavLink>
            </div>
        </div> 
    ) 
}