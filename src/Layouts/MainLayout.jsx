import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/Header/Navbar';
import FooTer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='font-josefinSans max-w-7xl'>
            <section>
            <NavBar></NavBar>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
            <section>
                <FooTer></FooTer>
            </section>
        </div>
    );
};

export default MainLayout;