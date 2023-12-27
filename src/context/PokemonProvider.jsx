import { createContext, useState, useEffect } from 'react'

import clientAxios from '../config/axios'

const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {

    const [ pokemons, setPokemons ] = useState([])
    const [ pokemon, setPokemon ] = useState([])

    // obtener los pokemons
    useEffect( () => {
        const getPokemons = async () => {

            try {
                const config = {
                    headers : {
                        "Content-Type": "application/json"
                    }
                }


                const { data } = await clientAxios('/', config)
                
                setPokemons(data.results);

            } catch (error) {
                console.log(error);
            }

        }

        getPokemons()
    }, [])

    // obtene un pokemon
   

    return (
        <PokemonContext.Provider
            value={{
                pokemons,
                pokemon, 
                setPokemon
            }}
        >
            {children}
        </PokemonContext.Provider>
    )

}

export default PokemonContext;