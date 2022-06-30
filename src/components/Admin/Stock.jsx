import React from 'react'
import './Stock.scss'
import { RiEdit2Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

export const Stock = ({items}) => {

        return (
            <div className='container table mt-4'>   
                <table className='table__prod'>
                    
                    <thead className='table__prod__head'>
                        <tr>
                            <th>&nbsp;</th>
                            <th id='prod'>producto</th>
                            <th>precio</th>
                            <th>stock</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>

                    <tbody className='table__prod__body'>
                        {items.map((item) =>
                        <tr key={item.id}>
                            <td><img src={item.img} alt={item.name} width='60px'/></td>
                            <td id='name'>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.stock}</td>
                            <td>
                                <NavLink to={`/edit/${item.id}`}>
                                    <RiEdit2Fill className='icon'/>
                                </NavLink>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        ) 
}