import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import '../Router/router.css'
import AddServices from '../Pages/AddServices/AddServices';
import Services from '../Components/Services/Services';
import ServiceDetails from '../Components/Services/ServiceDetails';
import MySchedules from '../Pages/MySchedules/MySchedules';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import ManageService from '../Pages/ManageService/ManageService';
import UpdateService from '../Pages/ManageService/UpdateService';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/servicedetails/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/manageservice',
                element: <PrivateRoute><ManageService></ManageService></PrivateRoute>,
                loader: ()=> fetch(`http://localhost:5000/services`)
            },
            {
                path: '/updateservice/:id',
                element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myschedules',
                element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>,
                loader: ()=> fetch(`http://localhost:5000/myschedules`)
            }
        ]
    }
])

export default router;