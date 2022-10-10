import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <header className='bg-slate-900 py-5'>
            <nav className='w-10/12 mx-auto flex items-center justify-between'>
                <a to="/"><img className='w-20' src={logo} alt="logo" /></a>
                <div className={`text-white text-lg md:text-base font-medium flex gap-5 md:gap-8 flex-col md:flex-row bg-slate-700 md:bg-inherit absolute md:static right-0 ${/** toggle ? 'top-16' : '-top-[250px]'*/''} items-center justify-center px-16 py-5 md:p-0 rounded-lg md:ml-2 duration-300`}>
                    <a className='hover:text-indigo-400' to="/products">Home</a>
                    <a className='hover:text-indigo-400' to="/pricing">Topics</a>
                    <a className='hover:text-indigo-400'>Statistics</a>
                    <a className='hover:text-indigo-400'>Blog</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;