import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ClickedVideo from "../../Components/ClickedVideo/ClickedVideo";
import Forget from "../../Components/Context/Authprovider/Authintication/Forget";
import Login from "../../Components/Context/Authprovider/Authintication/Login";
import Reset from "../../Components/Context/Authprovider/Authintication/Reset";
import Signup from "../../Components/Context/Authprovider/Authintication/Signup";
import HomePage from "../../Components/Home/IndexPage/HomePage";
import Movies from "../../Components/Movies/Movies";
import Premium from "../../Components/Premium/Premium";
import Main from "../../Main/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/clickedvideo/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/movie/${params.id}`),
                element: <ClickedVideo></ClickedVideo>
            }, {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/forget',
                element: <Forget></Forget>
            },
            {
                path: '/resetform',
                element: <Reset></Reset>

            },

            {
                path: '/movies',
                element: <Movies></Movies>

            },
            // {
            //     path: '/tvshows',
            //     element: <TvShow></TvShows>

            // },
            {
                path: '/premium',
                element: <Premium></Premium>

            },

        ]
    },
]);
export default router;