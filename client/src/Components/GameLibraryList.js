import React, { useState } from "react";
import GameLibraryCard from "./GameLibrary";

function GameLibraryList({ games, addNewGame, handleDelete, handleUpdate }) {
    const [favGames, setFavGames] = useState([]);

    const addToFavorites = (game) => {
        setFavGames([...favGames, game]);
    };

    return (
        <ul className="games">
            {games.map((game) => (
                <GameLibraryCard
                    key={game.id}
                    game={game} 
                    addToFavorites={addToFavorites} 
                    addNewGame={addNewGame} 
                    handleDelete={handleDelete} 
                    handleUpdate={() => handleUpdate(game.id)}
                />
            ))}
        </ul>
    );
}

export default GameLibraryList;