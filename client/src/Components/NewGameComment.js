import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewGameComment() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [game_comment_id, setGame_comment_id] = useState("");
	const [comments, setComments] = useState([]);
	const token =
		"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJkZWZhdWx0X3VzZXIifQ.hWBCFTI8zh4jcMuuxoR9bUfl_PgUYh258AnH9-EhYXs";

	const addComments = async (comment) => {
		try {
			const response = await fetch("http://127.0.0.1:5000/api/comments", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: token,
				},
				body: JSON.stringify(comment),
			});
			const data = await response.json();
			setComments([...comments, data]);
		} catch (error) {
			console.error("Error adding game", error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addComments({ title, body, game_comment_id });
		setTitle("");
		setBody("");
		setGame_comment_id("");
	};

	const handleOnClick = () => {
		window.location.reload();
	};

	return (
		<div className="container">
			<h2></h2>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Title"
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					placeholder="Game ID"
					type="text"
					value={game_comment_id}
					onChange={(e) => setGame_comment_id(e.target.value)}
				/>
				<textarea
					type="text"
					value={body}
					onChange={(e) => setBody(e.target.value)}
					placeholder="Write your comment here"
					rows={"5"}
					cols={"33"}
				/>
				<div style={{ display: "flex" }}>
					<button onClick={handleOnClick} type="submit">
						Add
					</button>
					<button>
						<Link to={"/games"}>Go back to Game Library!</Link>
					</button>
				</div>
			</form>
		</div>
	);
}

export default NewGameComment;
