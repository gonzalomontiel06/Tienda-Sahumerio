import React from 'react'
import './footer.scss'
import { BiRightArrowAlt } from 'react-icons/bi'
import { AiFillInstagram, AiFillFacebook, AiFillMail, AiFillPhone } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { TiLocation } from 'react-icons/ti'
import logotransparente from '../../img/logotransparente.png'
import { NavLink } from 'react-router-dom'


export const Footer = () => {

    const maps = () => {
        window.open('https://www.google.com.ar/maps/place/Av.+Chivilcoy+15,+C1407ADA+C1407ADA+1407ADB,+Buenos+Aires/@-34.6335354,-58.4838679,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcc996e0587db3:0x70cd4c4889da055d!8m2!3d-34.6335398!4d-58.4816792')
    }

    const instagram = () => {
        window.open('https://www.instagram.com/ellocodelsahumerio/')
    }

    const facebook = () => {
        window.open('https://www.facebook.com/locodelsahumerio')
    }

    const whatsapp = () => {
        window.open('https://api.whatsapp.com/send/?phone=541160413241&text=Hola%2C+te+escribo+a+traves+de+la+tienda+El+Loco+Del+Sahumerio..&app_absent=0')
    }

    return (
        <>
            <section className='container footer'>
                <div className='container footer__flex'>
                    <div className='container footer__text'>
                        <div className='footer__text__box'>
                            <h2>Suscribite</h2>
                            <p>Enterate de las novedades, nuevos productos y obtene un 10% de descuento en tu primer compra</p>
                        </div>
                    </div>
                    <div className='container footer__form'>
                        <button className='footer__form__button'>suscribirse a las newsletters <BiRightArrowAlt /></button>
                    </div>
                </div>
            </section>

            <section className='mt-5 footerMap'>

                <div className='container' style={ {display: 'flex'} }>
                
                    <div className='footerMap__links'>
                        <NavLink exact to='/'><img src={logotransparente} alt="logo" /></NavLink>
                        <div className='footerMap__links__icons'>
                            <button className='footerMap__links__icons--button' onClick={() => instagram()}><AiFillInstagram /></button>
                            <button className='footerMap__links__icons--button' onClick={() => facebook()}><AiFillFacebook /></button>
                            <button className='footerMap__links__icons--button' onClick={() => whatsapp()}><RiWhatsappFill /></button>
                        </div>
                    </div>

                    <div className='footerMap__data'>
                        <div className='footerMap__data__box'>
                            <button className='' onClick={() => maps()}> <TiLocation /> Chivilcoy 15 - CABA</button>
                            <p> <AiFillMail /> locodelsahumerio@gmail.com</p>
                            <p> <AiFillPhone /> 11-6041-3241</p>
                        </div>
                    </div>

                    <div className='footerMap__enlaces'>
                        <NavLink exact to='/'>Comprar ahora</NavLink>
                        <p>Mi cuenta</p>
                        <NavLink exact to='/cartview'>Mis compras</NavLink>
                        <NavLink exact to='/contacto'>Contactanos</NavLink>
                    </div>
                
                </div>

            </section>
        </>
    )
}