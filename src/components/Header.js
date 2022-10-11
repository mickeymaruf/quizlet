import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <header className='bg-slate-900 py-5'>
            <nav className='w-10/12 mx-auto flex items-center justify-between'>
                <Link to="/"><img className='w-40' src={logo} alt="logo" /></Link>
                <div className={`bg-slate-700 backdrop-blur-sm bg-opacity-80 text-white text-2xl md:text-base font-medium flex gap-5 md:gap-8 flex-col md:flex-row md:bg-inherit w-full absolute md:static right-0 ${toggle ? 'top-0' : '-top-[1000px]'} h-screen md:h-fit items-center justify-center md:justify-end px-16 py-8 md:p-0 duration-300 z-10`}>
                    <NavLink onClick={() => setToggle(false)} className='hover:text-indigo-400' to="/">Home</NavLink>
                    <NavLink onClick={() => setToggle(false)} className='hover:text-indigo-400' to="/">Topics</NavLink>
                    <NavLink onClick={() => setToggle(false)} className='hover:text-indigo-400' to="/statistics">Statistics</NavLink>
                    <NavLink onClick={() => setToggle(false)} className='hover:text-indigo-400' to="/blog">Blog</NavLink>
                </div>
                <div onClick={() => setToggle(!toggle)} className='z-20 cursor-pointer md:hidden'>
                    {
                        toggle ?
                        <XMarkIcon className='h-8 w-8 text-white' /> :
                        <Bars3Icon className='h-8 w-8 text-blue-500' />
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;