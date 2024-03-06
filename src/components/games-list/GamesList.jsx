import { useState } from 'react';
import GameInfo from '../game-info/GameInfo';
import Modal from '../modal/Modal';
import { StyledContainer, StyledImg } from './styles';

const GamesList = ({ filteredGames, page, setPage }) => {
	const [content, setContent] = useState('');
	return (
		<>
			<div>
				<h2>Lista de juegos</h2>
				{filteredGames.map(game => (
					<StyledContainer
						key={game.id}
						onClick={() =>
							setContent(<GameInfo setContent={setContent} game={game} />)
						}
					>
						<h3>{game.name}</h3>
						<StyledImg src={game.background_image} alt='' />
					</StyledContainer>
				))}
				<div>
					<button onClick={() => handlePrevGames(page, setPage)}>Prev</button>
					<button onClick={() => setPage(page + 1)}>Next</button>
				</div>
			</div>
			{content && <Modal>{content}</Modal>}
		</>
	);
};

// FUNCION PARA MANEJAR EL PREV DE PAGINAS
const handlePrevGames = (page, setPage) => page > 1 && setPage(page - 1);

export default GamesList;
