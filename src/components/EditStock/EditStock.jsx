import React, { useEffect, useContext, useState } from 'react'
import './EditStock.scss'
import { getFirestore } from '../../firebase/config'
import { useParams } from 'react-router-dom'
import { LoadingContext } from '../../context/LoadingContext'
import { Spinner } from 'react-bootstrap'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'


export const EditStock = () => {
    
    const {editId} = useParams()

    const {goBack} = useHistory()

    const [item, setItem] = useState({})

    const {loading, setLoading} = useContext(LoadingContext)

    useEffect(() => {
        
        const db = getFirestore()
        const productos = db.collection('productos')
        const prod = productos.doc(editId)

        prod.get()
                .then((res) => {
                    setItem({id: res.id, ...res.data()})
                })

                .catch((err) => {
                    console.log(err);
                })

                .finally(() => {
                    setLoading(false)
                })
        },[editId, setLoading])

    const handleChange = (e) => {
        e.preventDefault()
        setItem({
            ...item, 
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        
        const db = getFirestore()
        const prod = db.collection('productos').doc(item.id)
        
        prod.get()
                .then((res) => {
                    console.log(res.exists);
                    prod.update({
                        category: item.category,
                        description: item.description,
                        name: item.name,
                        price: item.price,
                        stock: item.stock,
                    })
                })
                
                .catch((err) => console.log(err))
                
                .finally(() => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'item modificado',
                        showConfirmButton: false,
                        timer: 1500,
                        willClose: () => {
                            goBack()
                        }
                    })
                })
    }

        return (
            <div>
                {
                    loading 
                        ?
                            <div style={{textAlign: 'center'}}>
                                    <Spinner animation="grow" />
                            </div>
                        :
                            <div className='container'>
                                <button className='volver mt-4' onClick={() => goBack()}><BiLeftArrowAlt /> volver </button>
                                <div className='container modItem'>
                                    <div className='modItem--small'>
                                        <small>ID #{item.id}</small>
                                    </div>
                                    <h2 className='modItem--sub'>{item.name}</h2>
                                    <div className='modItem__itemBox mt-4'>
                                        <form className='modItem__itemBox__form' onSubmit={handleSubmit}>
                                            <div className='modItem__itemBox__form__div'>
                                                <label htmlFor="name" className='spanItem'>Nombre:</label>
                                                <input type="text" name="name" value={item.name} onChange={handleChange} className='modItem__itemBox__form__div__inputItem mt-2' />
                                            </div>
                                            <div className='modItem__itemBox__form__div'>
                                                <label htmlFor="category" className='spanItem'>Categoria:</label>
                                                <input type="text" name="category" value={item.category} onChange={handleChange} className='modItem__itemBox__form__div__inputItem inputCategory mt-2' />
                                            </div>
                                            <div className='modItem__itemBox__form__div'>
                                                <label htmlFor="price" className='spanItem'>Precio:</label>
                                                <input type="number" name="price" value={item.price} onChange={handleChange} className='modItem__itemBox__form__div__inputItem inputPrice mt-2' />
                                            </div>
                                            <div className='modItem__itemBox__form__div'>
                                                <label htmlFor="stock" className='spanItem'>Stock:</label>
                                                <input type="number" name="stock" value={item.stock} onChange={handleChange} className='modItem__itemBox__form__div__inputItem inputStock mt-2' />
                                            </div>
                                            <div className='modItem__itemBox__form__div'>
                                            <label htmlFor="description" className='spanItem'>Descripcion:</label>
                                                <textarea name="description" value={item.description} onChange={handleChange} className='modItem__itemBox__form__div__inputItem inputDescrp mt-2'></textarea>
                                            </div>
                                            <button type='submit' className='modItem__itemBox__form__buttonItem mt-3 mx-5'>modificar</button>
                                        </form>
                                        <div className='modItem__itemBox__img'>
                                            <img src={item.img} alt={item.name} width='200px' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                } 
            </div>
        )
}