import React, { useState, useEffect } from "react";
import GameLibrary from "./GameLibrary";
import Header from "./Header";


function FavGamesPage() {
    const [favGames, setFavGames] = useState([]);


    useEffect(() => {
        fetchFavGames();
    }, []);
   
    const fetchFavGames = async () => {
        try {
            const response = await fetch('/games/favorite', {
                method: "GET",
                credentials: "include"
            });
            console.log(response)
            if (!response.ok) {
                throw new Error("Failed to fetch favorite games");
            }
            const data = await response.json();
            setFavGames(data);
        } catch (error) {
            console.error("Error fetching favorite games:", error);
        }
    };

    return (
        <div className="favorites">
            <Header />
            <h1>Favorite Games</h1>
            <ul>
                {favGames.map((games) => (
                    <GameLibrary
                        key={games.id}
                        games={games} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default FavGamesPage;