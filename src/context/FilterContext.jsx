import React, { createContext } from 'react'

export const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    
    const handleMenorPrecio = (items) => {
        items.sort((a,b) => {
            return a.price - b.price
        })
        console.log(items);
    }

    const handleMayorPrecio = (items) => {
        items.sort((a,b) => {
            return b.price - a.price
        })
        console.log(items);
    }

    return(
            <FilterContext.Provider value={ {handleMenorPrecio, handleMayorPrecio} }>
                {children}
            </FilterContext.Provider>
    )
}