import React, { useState } from 'react'
import './AddItem.scss'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'
import { getFirestore } from '../../firebase/config'
import Swal from 'sweetalert2'

export const AddItem = () => {

    const {goBack} = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const db = getFirestore()
        const productos = db.collection('productos')
        
        productos.add(values)
                    .finally(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Producto agregado',
                            willClose: () => {
                                goBack()
                            }
                        })
                    })
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const [values, setValues] = useState({
        category: '',
        description: '',
        img: '',
        name: '',
        price: '',
        stock: ''
    })

    return(
        <div className='container'>
            <button className='volver mt-4' onClick={() => goBack()}><BiLeftArrowAlt /> volver </button>
            <div className='container modItem'>
                <h2 className='modItem--sub'>new prod</h2>
                    <div className='modItem__itemBox mt-4'>
                    <form className='modItem__itemBox__form' onSubmit={handleSubmit}>
                        <div className='modItem__itemBox__form__div'>
                            <label htmlFor="name" className='spanItem'>Nombre:</label>
                            <input type="text" name="name" value={values.name} onChange={handleChange} className='modItem__itemBox__form__div__inputItem mt-2' />
                        </div>
                        <div className='modItem__itemBox__form__div'>
                            <label htmlFor="category" className='spanItem'>Categoria:</label>
                            <input type="text" name="category" value={values.category} onChange={handleChange} className='modItem__itemBox__form__div__inputItem inputCategory mt-2' />
                        </div>
                        <div className='modItem__itemBox__form__div'>
                            <label htmlFor="price" className='spanItem'>Precio:</label>
                            <input type="number" name="price" value={values.price} onChange={handleChange} className='modItem__itemBox__form__div__inputItem inputPrice mt-2' />
                        </div>
                        <div className='modItem__itemBox__form__div'>
                            <label htmlFor="stock" className='spanItem'>Stock:</label>
                            <input type="number" name="stock" value={values.stock} onChange={handleChange} className='modItem__itemBox__form__div__inputItem inputStock mt-2' />
                        </div>
                        <div className='modItem__itemBox__form__div'>
                        <label htmlFor="description" className='spanItem'>Descripcion:</label>
                            <textarea name="description" value={values.description} onChange={handleChange} className='modItem__itemBox__form__div__inputItem inputDescrp mt-2'></textarea>
                        </div>
                        <button type='submit' className='modItem__itemBox__form__buttonItem mt-3 mx-5'>agregar</button>
                    </form>
                    </div>
            </div>
        </div>
    )
}