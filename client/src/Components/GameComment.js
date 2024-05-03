import React, { useState, useEffect } from "react";
import GameLibraryList from "./GameLibraryList";



// Trying to get all game comments to show 


function GameComments() {
    const navigate = useNavigate();
   // const [games, setGames] = useState([]);
    const [gameComments,setGameComments] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    
    useEffect(() => {
        const seeComments = comments.filter((comment) =>
        comment.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setGameComments(filter);
    },  [searchQuery, comments]);

    const findGameComments = (query) => {
        setSearchQuery(query);
    };
    const handleGet = (comments) => {
        fetch(`/games/comments`, {
            method:"GET",
        })
        .then((resp) => {
            if (resp.ok) {
                setGameComments((originalGameComments) =>
                originalGameComments.filter((comment) => comment.title !== commentTitle)
                );
            } else {
                console.error("Failed to Load Comment Title");
            }
        });
    };
    // const handleUpdate = (commentTitles) => {
    //     navigate(`/games/comments/${commentTitles}`);
    // };

    return (
        <main className="main-container" >
            <Header />
            <Search onChange={ handleGet} games={games}/>
            <GameLibraryList games={gameComments} handleGet={handleGet} handleUpdate={handleUpdate}/>
            <GameComments games={filteredGameComments} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
            <Footer />
        </main>
    );
}
export default GameComments;