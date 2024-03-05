import { StyledImg } from './styles';

const GamesList = ({ filteredGames, page, setPage }) => {
	return (
		<div>
			<h2>Lista de juegos</h2>
			{filteredGames.map(game => (
				<div key={game.id}>
					<h3>{game.name}</h3>
					<StyledImg src={game.background_image} alt='' />
				</div>
			))}
			<div>
				<button onClick={() => handlePrevGames(page, setPage)}>Prev</button>
				<button onClick={() => setPage(page + 1)}>Next</button>
			</div>
		</div>
	);
};

// FUNCION PARA MANEJAR EL PREV DE PAGINAS
const handlePrevGames = (page, setPage) => page > 1 && setPage(page - 1);

export default GamesList;
