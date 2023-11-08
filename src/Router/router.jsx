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
import Location from '../Components/ExtraSections/Location';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import MyServices from '../Pages/MyServices/MyServices';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch(`https://soul-fit-connect-server.vercel.app/services`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
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
                loader: ()=> fetch(`https://soul-fit-connect-server.vercel.app/services`)
            },
            {
                path: '/servicedetails/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://soul-fit-connect-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myservices',
                element: <PrivateRoute><MyServices></MyServices></PrivateRoute>,
                loader: ()=> fetch(`https://soul-fit-connect-server.vercel.app/services`)
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/manageservice',
                element: <PrivateRoute><ManageService></ManageService></PrivateRoute>,
                loader: ()=> fetch(`https://soul-fit-connect-server.vercel.app/services`)
            },
            {
                path: '/location',
                element: <PrivateRoute><Location></Location></PrivateRoute>
            },
            {
                path: '/updateservice/:id',
                element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
                loader: ({params})=> fetch(`https://soul-fit-connect-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myschedules',
                element: <PrivateRoute><MySchedules></MySchedules></PrivateRoute>,
                loader: ()=> fetch(`https://soul-fit-connect-server.vercel.app/myschedules`)
            }
        ]
    }
])

export default router;