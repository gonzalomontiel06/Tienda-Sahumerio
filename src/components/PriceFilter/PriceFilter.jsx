import React from 'react'
// import { ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const PriceFilter = () => {

    return (
        <>
            <div>
                <NavLink exact to='/orden/menorPrecio'>
                    Menor precio
                </NavLink>
            </div>
        </> 
    ) 
}







{/* <div>
    {[DropdownButton].map((DropdownType, idx) => (
        <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size="sm"
            variant="transparent"
            title="Ordenar por"
        >
            <Dropdown.Item eventKey="1">Mas relevante</Dropdown.Item>
            <Dropdown.Item eventKey="2" href='/orden/menorPrecio'>Menor precio</Dropdown.Item>
            <Dropdown.Item eventKey="3" href='/orden/mayorPrecio'>Mayor precio</Dropdown.Item>
        </DropdownType>
    ))}
</div> */}