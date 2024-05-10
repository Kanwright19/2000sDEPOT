import React, { useState, useEffect } from "react";
import ReactSwitch from "react-switch";
import { useTheme } from "../Components/ThemeContext";
import NewGameComment from "../Components/NewGameComment";
import GameCommentList from "../Components/GameCommentList";

const GameLibrary = () => {
	const { isDarkMode, toggleTheme } = useTheme();
	const [comments, setComments] = useState([]);
	const token =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJkZWZhdWx0X3VzZXIifQ.hWBCFTI8zh4jcMuuxoR9bUfl_PgUYh258AnH9-EhYXs";

	useEffect(() => {
		fetchGames();
	}, []);

	const fetchGames = async () => {
		try {
			const response = await fetch("http://127.0.0.1:5000/api/comments", {
				method: "GET",
				headers: {
					Authorization: token,
				},
			});
			const data = await response.json();
			setComments(data);
		} catch (error) {
			console.error("Error fetching games", error);
		}
	};

	const deleteComment = async (id) => {
		try {
			await fetch(`http://127.0.0.1:5000/api/comments/${id}`, {
				method: "DELETE",
				headers: {
					Authorization: token,
				},
			});
			setComments(comments.filter((comment) => comment.id !== id));
		} catch (error) {
			console.error("Error deleting comment", error);
		}
	};

	return (
		<div className={isDarkMode ? "dark-mode" : "light-mode"}>
			<h1 style={{ display: "flex", justifyContent: "center" }}>
				Add to Our 2000s Comment Section!
			</h1>

			{/* <div className="switch">
				<label> {!isDarkMode ? "Light Mode" : "Dark Mode"}</label>
				<ReactSwitch onChange={toggleTheme} checked={isDarkMode} />
			</div> */}
			<NewGameComment />
			<GameCommentList
				comments={comments}
				deleteComment={deleteComment}
			/>
		</div>
	);
};

export default GameLibrary;
