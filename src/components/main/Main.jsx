// Buscador de videojuegos (por nombre)
// Filtro por plataforma
// Filtro por género
// Vista de detalles del juego

import { useEffect, useState } from 'react';
import { URLS } from '../../constants/api-games';
import Filters from '../filters/Filters';
import GamesList from '../games-list/GamesList';

const Main = () => {
	const [gamesList, setGamesList] = useState([]);
	const [page, setPage] = useState(1);
	const [gameName, setGameName] = useState('');
	const [platform, setPlatform] = useState('');
	console.log(platform);
	console.log(gamesList);

	useEffect(() => {
		const getGamesList = async () => {
			const games = await getAllGames(page, gameName);
			setGamesList(games);
		};
		getGamesList();
	}, [page, gameName]);

	const filteredGames = filterGamesByPlatform(gamesList, platform);

	return (
		<main>
			<Filters setGameName={setGameName} setPlatform={setPlatform} />
			<GamesList filteredGames={filteredGames} page={page} setPage={setPage} />
		</main>
	);
};

// FUNCION PARA OBTENER TODOS LOS JUEGOS DE LA API
const getAllGames = async (page, gameName) => {
	let url;
	if (gameName) {
		url = `${URLS.GAMES_NAME_URL}${gameName}`;
	} else {
		url = `${URLS.ALL_GAMES_URL}${page}`;
	}
	const response = await fetch(url);
	const data = await response.json();
	return data.results;
};

// FUNCION PARA FILTRAR JUEGOS POR PLATAFORMA
const filterGamesByPlatform = (gamesList, plat) => {
	if (!plat) return gamesList;

	const filteredGames = gamesList.filter(game =>
		game.platforms.some(platform => platform.platform.slug === plat)
	);
	return filteredGames;
};

export default Main;
