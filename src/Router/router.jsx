import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import '../Router/router.css'
import AddServices from '../Pages/AddServices/AddServices';
import Services from '../Components/Services/Services';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch(`http://localhost:5000/services`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: ()=> fetch(`http://localhost:5000/services`)
            },
            {
                path: '/addservices',
                element: <AddServices></AddServices>
            }
        ]
    }
])

export default router;