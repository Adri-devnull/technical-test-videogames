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
	const [gender, setGender] = useState('');
	console.log(gamesList);

	useEffect(() => {
		getGamesList(page, gameName, setGamesList);
	}, [page, gameName]);

	let filteredGames = filterGamesByPlatform(gamesList, platform);
	filteredGames = filterGamesByGender(filteredGames, gender);

	return (
		<main>
			<Filters
				setGameName={setGameName}
				setPlatform={setPlatform}
				setGender={setGender}
			/>
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
		game.platforms?.some(platform => platform.platform.slug === plat)
	);
	return filteredGames;
};

// FUNCION PARA FILTRAR JUEGOS POR GENERO
const filterGamesByGender = (filteredGames, gender) => {
	if (!gender) return filteredGames;
	const newFilteredGames = [...filteredGames];
	const updatedFilteredGames = newFilteredGames.filter(games =>
		games.genres?.some(genre => genre.slug === gender)
	);
	return updatedFilteredGames;
};

// FUNCION PARA OBTENER LA LISTA DE JUEGOS UNA VEZ YA LOS TENEMOS DESDE LA API
const getGamesList = async (page, gameName, setGamesList) => {
	const games = await getAllGames(page, gameName);
	setGamesList(games);
};

export default Main;
