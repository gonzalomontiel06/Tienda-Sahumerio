import React from 'react'
import './homeView.scss'
import 'animate.css';
import { NavLink } from 'react-router-dom';

export const HomeView = () => {

    return(

        // HOME VIEW 

        <article className='container homeView'>
            <div className='homeView__box'>
                <NavLink exact to='/productos'>
                    <button className='animate__animated animate__bounce animate__delay-1s animate__infinite homeView__box__button'>Shop now!</button>
                </NavLink>
            </div>
        </article>
    )
}
