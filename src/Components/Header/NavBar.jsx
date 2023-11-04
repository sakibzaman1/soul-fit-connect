import React from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
    return (
        <div>
            <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://i.ibb.co/cXFNP7Z/Soul-Fit-Connect-horizontal-logo-removebg-preview.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white italic">Soul Fit Connect</span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center gap-4 font-semibold">
        <h1 className='text-lg'>Dashboard</h1>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://i.ibb.co/DbM1DyM/Soul-fit-connect-logo-removebg-preview.png" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>My Services</Dropdown.Item>
          <Dropdown.Item>Add Services</Dropdown.Item>
          <Dropdown.Item>My Schedules</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <div>
       <ul  className='text-lg gap-14 flex'>
        <li className='navLinks'><NavLink to='/'>Home</NavLink></li>
        <li className='navLinks'><NavLink to='services'>Services</NavLink></li>
        <li className='navLinks'><NavLink to='about'>About</NavLink></li>
        <li className='navLinks'><NavLink to='contact'>Contact</NavLink></li>
        <li className='navLinks'><NavLink to='/login'>Login</NavLink></li>
       </ul>
      </div>
    </Navbar>
        </div>
    );
};

export default NavBar;