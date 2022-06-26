import React from 'react'
import './EditStock.scss'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { useState } from 'react'
import { getFirestore } from '../../firebase/config'
import { useHistory } from 'react-router-dom'

export const ItemStock = ({category, name, price, stock, description, id, img}) => {

        const {goBack} = useHistory()
    
        const [values, setValues] = useState({
            category: category,
            name: name,
            price: price,
            stock: stock,
            description: description
        })

        const handleChange = (e) => {
            e.preventDefault()
            setValues({
                ...values, 
                [e.target.name] : e.target.value
            })
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const db = getFirestore()
            const prod = db.collection('productos').doc(id)

            prod.get()
                    .then((res) => {
                        console.log(res);
                        prod.update({
                            category: values.category,
                            description: values.description,
                            name: values.name,
                            price: values.price,
                            stock: values.stock,
                        })
                    })
                    .catch((err) => console.log(err))
        }


        return (
            <div className='container'>
                <button className='volver mt-4' onClick={() => goBack()}><BiLeftArrowAlt /> volver </button>
                <div className='container modItem'>
                    <h2 className='modItem--sub'>{name}</h2>
                    <div className='modItem__itemBox'>
                        <form className='modItem__itemBox__form' onSubmit={handleSubmit}>
                            <div className='modItem__itemBox__form__div'>
                                <label htmlFor="name" className='spanItem'>Nombre:</label>
                                <input type="text" name="name" value={values.name} onChange={handleChange} className='modItem__itemBox__form__div__inputItem mt-2' />
                            </div>
                            <div className='modItem__itemBox__form__div'>
                                <label htmlFor="category" className='spanItem'>Categoria:</label>
                                <input type="text" name="category" value={values.category}  onChange={handleChange} className='modItem__itemBox__form__div__inputItem inputCategory mt-2' />
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
                                <textarea name="description" className='modItem__itemBox__form__div__inputItem inputDescrp mt-2' value={values.description} onChange={handleChange} ></textarea>
                            </div>
                            <button type='submit' className='modItem__itemBox__form__buttonItem mt-3'>modificar</button>
                        </form>
                        <div className='modItem__itemBox__img'>
                            <img src={img} alt={name} width='200px' />
                        </div>
                    </div>
                </div>
            </div>
        )
}