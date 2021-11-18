import React, { createContext, useState } from 'react'

export const LoadingContext = createContext()

// COMPONENTE LOADER
export const LoadingProvider = ({children}) => {

        const [loading, setLoading] = useState(true)

        return (
            <LoadingContext.Provider value={ {loading, setLoading} }>       
                {children}
            </LoadingContext.Provider>
        )
} 