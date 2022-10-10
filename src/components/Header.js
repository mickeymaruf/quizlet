import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <header className='bg-slate-900 py-5'>
            <nav className='w-10/12 mx-auto flex items-center justify-between'>
                <Link to="/"><img className='w-20' src={logo} alt="logo" /></Link>
                <div className={`text-white text-lg md:text-base font-medium flex gap-5 md:gap-8 flex-col md:flex-row bg-slate-700 md:bg-inherit absolute md:static right-0 ${/** toggle ? 'top-16' : '-top-[250px]'*/''} items-center justify-center px-16 py-5 md:p-0 rounded-lg md:ml-2 duration-300`}>
                    <NavLink className='hover:text-indigo-400' to="/">Home</NavLink>
                    <NavLink className='hover:text-indigo-400' to="/topics">Topics</NavLink>
                    <NavLink className='hover:text-indigo-400' to="/statistics">Statistics</NavLink>
                    <NavLink className='hover:text-indigo-400' to="/blog">Blog</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;