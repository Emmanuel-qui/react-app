import { Link } from 'react-router-dom';


const Pokemon = ({ pokemon }) => {

	const { name } = pokemon

	return (
		<div className="card" style={{ width: '18rem'}}>
			<svg className="bd-placeholder-img card-img-top" width="100%" height="180" role="img"
				aria-label="Marcador de posición: Cap de imagen" focusable="false" preserveAspectRatio="xMidYMid slice"
				xmlns="http://www.w3.org/2000/svg">
				<title>Marcador de posición</title>
				<rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6"
					dy=".3em">Image cap</text>
			</svg>

			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">Un texto de ejemplo rápido para desarrollar el título de la tarjeta y constituir la
					mayor parte del contenido de la tarjeta.</p>
				<Link to={`${name}`} className='btn btn-primary'>Ver pokemon</Link>
				
			</div>
		</div>
	)
}

export default Pokemon;