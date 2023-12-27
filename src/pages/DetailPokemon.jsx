import { useParams } from "react-router-dom";
import usePokemons from '../hooks/usePokemons'
import { useEffect } from "react";
import clientAxios from '../config/axios'


const DetailPokemon = () => {

	let { name } = useParams()

	const { setPokemon, pokemon } = usePokemons()

	const getPokemon = async (name) => {
		try {

			const config = {
				headers: {
					"Content-Type": "application/json"
				}
			}

			const { data } = await clientAxios(`/${name}`, config)


			let _tipos = data.types.map( (type) => type.type.name).join(', ')

			let _habilidades = data.abilities.map( (item) => item.ability.name).join(', ')

			const objPokemon = {
				img: data.sprites.front_shiny,
				name: data.name,
				categoria: data.species.name,
				tipos : _tipos,
				altura: data.height,
				peso: data.weight,
				habilidades: _habilidades
			
			}

			setPokemon(objPokemon)

		} catch (error) {
			console.log(error);
		}
	}

	
	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			getPokemon(name)
		}
		return () => {
			isMounted = false
		}
	}, [])


	return (
		<div className="card" style={{ width: '18rem'}}>
			<div className="card-header">
				<h5 className="card-title">{ pokemon.name }</h5>
			</div>
			<img className="card-img-top" src={ pokemon.img } alt="Image Pokemon" />


			<div className="card-body">
				<ul>
					<li> <strong>Categoria : </strong> {pokemon.categoria}</li>
					<li> <strong>Tipo(s) :</strong> { pokemon.tipos}</li>
					<li> <strong>Altura : </strong>{ pokemon.altura / 10} metros </li>
					<li> <strong>Peso : </strong>{ pokemon.peso / 10} kilogramos </li>
					<li> <strong>Habilidades : </strong>{ pokemon.habilidades}  </li>
				</ul>
			
			</div>
		</div>

	)
}

export default DetailPokemon;