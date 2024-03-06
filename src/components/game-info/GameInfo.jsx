const GameInfo = ({ setContent, game }) => {
	return (
		<div>
			<img src={game.background_image} alt={game.name + 'image'} />
			<h2>{game.name}</h2>
			<p> Release date: {game.released}</p>
			<p> Rating: {game.rating}</p>
			<button onClick={() => setContent()}>Cerrar</button>
		</div>
	);
};

export default GameInfo;
