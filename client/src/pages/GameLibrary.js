import React, { useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import { useTheme } from "../Components/ThemeContext";
import GameLibraryList from "../Components/GameLibraryList";
import { Link } from "react-router-dom";
import "./style/gamelibrary.css";

const GameLibrary = () => {
	const { isDarkMode, toggleTheme } = useTheme();
	const [games, setGames] = useState([]);
	const token =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJkZWZhdWx0X3VzZXIifQ.hWBCFTI8zh4jcMuuxoR9bUfl_PgUYh258AnH9-EhYXs";

	useEffect(() => {
		fetchGames();
	}, []);

	const fetchGames = async () => {
		try {
			const response = await fetch("http://127.0.0.1:5000/api/games", {
				method: "GET",
				headers: {
					Authorization: token,
				},
			});
			const data = await response.json();
			console.log(data);
			setGames(data);
		} catch (error) {
			console.error("Error fetching games", error);
		}
	};

	return (
		<div className="game">
			<div className={isDarkMode ? "dark-mode" : "light-mode"}>
				<section style={{color: "orange", lineHeight: 1.5, fontSize: 25}}> 
					<h1>2000s Game Library!</h1></section>
				{/* <h1>2000s Game Library!</h1> */}
				{/* <div className="switch">
					<label> {!isDarkMode ? "Light Mode" : "Dark Mode"}</label>
					<ReactSwitch onChange={toggleTheme} checked={isDarkMode} />
				</div> */}
				<div className="game-button">
					<button>
						<Link to={"/games/post"}>Click to Post A 2000s Game!</Link>
					</button>
					<button>
					<Link to={"/games/favorites"}>View Favorite Games!</Link>
				</button>
					<button>
						<Link to={"/games/comments"}>
							Leave A Comment About A 2000's Game!
						</Link>
					</button>
					<button>
						<Link to={"/"}>
							Logout!
						</Link>
					</button>
				</div>
				<GameLibraryList games={games} />
			</div>
		</div>
	);
};

export default GameLibrary;
