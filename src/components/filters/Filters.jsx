import { PLATFORMS } from '../../constants/platforms';

const Filters = ({ setGameName, setPlatform }) => {
	return (
		<div>
			<form onSubmit={event => getGameName(event, setGameName)}>
				<input type='text' id='name' />
				<button>Buscar</button>
			</form>
			<select
				name='platform'
				id='platform'
				onChange={event =>
					getFilterPlatformValue(event.target.value, setPlatform)
				}
			>
				{PLATFORMS.map(platform => (
					<option key={platform.id} value={platform.value}>
						{platform.name}
					</option>
				))}
			</select>
		</div>
	);
};

// FUNCION PARA OBTENER EL VALOR DEL JUEGO A BUSCAR
const getGameName = (event, setGameName) => {
	event.preventDefault();
	const searchValue = event.target.name.value;
	setGameName(searchValue);
};

// FUNCION PARA OBTENER EL VALOR DEL FILTRO DE PLATAFORMA
const getFilterPlatformValue = (value, setPlatform) => {
	setPlatform(value);
};

export default Filters;
