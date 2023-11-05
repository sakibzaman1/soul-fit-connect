import React, { useContext } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { AuthContext } from '../../Providers/AuthProvider';
import defaultUser from '../../assets/Images/defaultUser.png'
import { BsArrowDownRight } from "react-icons/bs";

const NavBar = () => {


  const {user, logOutUser} = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
        .then(() => {
        })
        .catch(error => console.log(error.message))
}


    return (
        <div>
            <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://i.ibb.co/cXFNP7Z/Soul-Fit-Connect-horizontal-logo-removebg-preview.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white italic font-kalam">Soul Fit Connect</span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center gap-4 font-semibold">
        {
          user? <h1 className='text-xl font-extralight font-kalam'>Dashboard</h1> : <h1 className='text-xl navLinks'><NavLink to="/login">Login</NavLink></h1>
        }
        <BsArrowDownRight></BsArrowDownRight>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={user? user.photoURL : defaultUser} rounded />
          }
        >
          <Dropdown.Header>
            {user? <span className="block text-sm">{user.displayName}</span> : 'Plaese Login First'}
            {user?  <span className="block truncate text-sm font-medium">{user.email}</span> : ''}
          </Dropdown.Header>
          {user? <Dropdown.Item>My Services</Dropdown.Item> : ''}
          {user? <Dropdown.Item>Add Services</Dropdown.Item> : ''}
          {user? <Dropdown.Item>My Schedules</Dropdown.Item> : ''}
          <Dropdown.Divider />
          {user? <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item> : ''}
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <div>
       <ul  className='text-lg gap-14 flex'>
        <li className='navLinks'><NavLink to='/'>Home</NavLink></li>
        <li className='navLinks'><NavLink to='services'>Services</NavLink></li>
        <li className='navLinks'><NavLink to='about'>About</NavLink></li>
        <li className='navLinks'><NavLink to='contact'>Contact</NavLink></li>
       </ul>
      </div>
    </Navbar>
        </div>
    );
};

export default NavBar;