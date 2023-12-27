import { createContext, useState, useEffect } from 'react'

import clientAxios from '../config/axios'

const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {

    return (
        <PokemonContext.Provider
            value={{

            }}
        >
            {children}
        </PokemonContext.Provider>
    )

}

export default PokemonContext;