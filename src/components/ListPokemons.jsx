import usePokemons from '../hooks/usePokemons'
import Pokemon from './Pokemon';

const ListPokemons = () => {

	const { pokemons } = usePokemons()
	
	return (
		<div style={{ display: 'grid',  gridTemplateColumns: "1fr 1fr 1fr ", gap: '1.3rem'}}>
			{ pokemons.map( pokemon => (
				<Pokemon 
					key={pokemon.name}
					pokemon={pokemon}
				/>
			))}
		</div>
	)
}

export default ListPokemons;