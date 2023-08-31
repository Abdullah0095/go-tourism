import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import AboutUs from '../AboutUS/AboutUs';
import Tours from "../Tours/Tours";
import Reviews from "../Reviews/Reviews";
import Contact from "../Contact/Contact";



export const router = 

createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/tours',
                element: <Tours></Tours>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])