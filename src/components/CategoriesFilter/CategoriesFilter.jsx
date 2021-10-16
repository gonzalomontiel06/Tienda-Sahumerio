import React from 'react'
import { NavLink } from 'react-router-dom'
import './categoriesFilter.scss'

export const CategoriesFilter = () => {

    return(
        
        <div className='categories'>
            
            <h4 className='categories--subtitulo'>Categorias</h4>
            
            <ul className='categories__list'>
                <li><NavLink activeClassName={'categorieSelected'} exact to='/categories/sahumerios'>Sahumerios</NavLink></li>
                <li><NavLink activeClassName={'categorieSelected'} exact to='/categories/esencias'>Esencias</NavLink></li>
                <li><NavLink activeClassName={'categorieSelected'} exact to='/categories/velas'>Velas</NavLink></li>
                <li><NavLink activeClassName={'categorieSelected'} exact to='/categories/lamparas'>Lamparas de sal</NavLink></li>
            </ul>
        
        </div>
    )
}

