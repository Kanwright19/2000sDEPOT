import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Replies from "./components/Replies";


const routes = [
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/recipes',
        element: <  />,
    },
    {
        path: '/games/new',
        element: < />,
    },
    {
        path: '/games/favorite',
        element: <  />,
    },
    {
        path: '/games/:gameId',
        element: < />,
    },
    {
        path: "*",
        element: <  />,
    }
]

export const router = createBrowserRouter(routes)