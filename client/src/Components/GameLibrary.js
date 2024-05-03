import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GameLibraryCard({ game, handleUpdate, handleDelete }) {
    const [isTheFavorite, setIsTheFavorite] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsTheFavorite(!isTheFavorite);
        if (addToFavs) {
            addToFavs(game);
        }
        if (isTheFavorite) {
            navigate('/games/favorite', {state: { game } });
        }
    };
    const addToFavs = async (game) => {
        try {
            const resp = await fetch('/games/favorite', {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ gameId: game.id})
            });
            if (!resp.ok) {
                throw new Error("Failed to add game to favorites");
            }
        } catch (error) {
            console.error("Error adding game to favorites:", error);
        }
    };
    

    return (
        <li className="card" data-testid="game-item">
            <div style={{ backgroundColor: 'orange', padding: '20px' }}>
                <h4>{game.title}</h4>
                <p><b>Title of Game! : </b>{game.title}</p>
                <p><b>Description of Game! : </b>{game.description}</p>
                <p><b>Release Date:</b> {game['release_date']}</p>
                <p><b>Categories: </b>{game.categories.map(category => category.name).join(', ')}</p>
                <br/>
                <br/>
                {isTheFavorite ? (
                    <button className="favorite-btn" onClick={handleClick}>❤️</button>
                ) : (
                    <button className="unfavorite-btn" onClick={handleClick}>🩶</button>
                )}
                <div className="button-container">
                    <button className="update-btn" onClick={() => handleUpdate(game)}>Update Game Library</button>
                    <button className="delete-btn" onClick={() => handleDelete(game.id)}>Delete Game From Library</button>
                </div>
            </div>
        </li>
    );
}

export default GameLibraryCard;