import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between px-48 items-center h-20 bg-black text-white '>
            <h2 className='text-2xl'>Portfolio</h2>
            <nav className='flex gap-8 text-xl'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <button className='text-2xl primary_btn'><Link to="/login">Login</Link></button>
        </div>
    );
};

export default Header;