import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Official CSI Letterhead.png'

const Header = () => {
    return (
        
        <header className="w-full bg-white bg-opacity-25 rounded-[100px] border-2 border-white backdrop-blur-[0px] px-8 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to='/'>
                    <div className="logo"><img src={Logo} alt="" /></div>
                </Link>

                <nav className="hidden md:flex space-x-4 md:space-x-8 uppercase">
                    <Link to='/' className="text-lg ">Home</Link>
                    <Link to='/events' className="text-lg ">Events</Link>
                    <Link to='/blog' className="text-lg ">Blogs</Link>
                    <Link to='/join' className="text-lg ">Join Us</Link>
                    <Link to='/members' className="text-lg ">Members</Link>
                    <Link to='/about' className="text-lg ">About</Link>
                </nav>

                <div className="hidden lg:flex md:w-1/4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full border p-2 rounded-3xl py-2 px-6"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
