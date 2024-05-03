import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NewGameComment from "./Components/NewGameComment"
import ErrorPage from "./Components/ErrorPage"
import GameLibrary from "./Components/GameLibrary"
import FavGames from "./Components/FavGames"
import GameComment from "./Components/GameComment"

const routes = [
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/games',
        element: < GameLibrary />,
    },
    {
        path: '/games/comments/commentTitles',
        element: < GameComment />,
    },
    {
        path: '/games/favorite',
        element: <  FavGames/>,
    },
    {
        path: '/games/:new_game_comment_Id',
        element: < NewGameComment/>,
    },
    {
        path: "*",
        element: < ErrorPage />,
    }
]

export const router = createBrowserRouter(routes)