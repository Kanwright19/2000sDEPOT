function GameCommentList({ comments, deleteComment }) {
	const handleDelete = (id) => {
		deleteComment(id);
	};

	return (
		<>
			<h2 style={{ display: "flex", justifyContent: "center" }}>
				List of Comments
			</h2>
			<div className="gamelist">
				{Array.isArray(comments) && comments.length > 0 ? (
					comments.map(
						({ id, title, body, game_comment_id }, index) => (
							<div key={index}>
								<h3>Title: {title}</h3>
								<p>Body: {body}</p>
								<p>GameId: {game_comment_id}</p>
								<button
									style={{ backgroundColor: "red" }}
									onClick={() => handleDelete(id)}>
									Delete
								</button>
							</div>
						)
					)
				) : (
					<p>Loading...</p>
				)}
			</div>
		</>
	);
}

export default GameCommentList;
