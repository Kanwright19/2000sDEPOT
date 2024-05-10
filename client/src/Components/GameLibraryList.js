// import React, { useState, useEffect } from "react";
// // import ReactSwitch from "react-switch";
// // import { useTheme } from "../Components/ThemeContext";
// import GameLibraryList from "../Components/GameLibraryList";
// // import { Link } from "react-router-dom";
// import "./style/gamelibrary.css";

function GameLibraryList({ games }) {
	
	// const deleteGame = async (id) => {
	// 	try {
	// 		await fetch(`http://127.0.0.1:5000/api/games/${id}`, {
	// 			method: "DELETE",
	// 			headers: {
	// 				Authorization: token,
	// 			},
	// 		});
	// 		setComments(comments.filter((game) => game.id !== id));
	// 	} catch (error) {
	// 		console.error("Error deleting comment", error);
	// 	}
	// };
	return (
		<>
			<h2>Game List!</h2>
			<div className="gamelist">
				{Array.isArray(games) && games.length > 0 ? (
					games.map(
						(
							{ title, description, created_at, release_date },
							index
						) => (
							<div key={index}>
								<h3>Title: {title}</h3>
								<p>Description: {description}</p>
								<p>Date of Creation: {created_at}</p>
								<p>Released Date: {release_date}</p>
							</div>
						)
					)
				) : (
					<p>Loading...</p>
				)}
				{/* <GameLibraryList
				games={games}
				deleteGame={deleteGame}
			/> */}
			</div>
		</>
	);
}

export default GameLibraryList;
