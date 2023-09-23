import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logoChoco.png'

const Navbar = () => {
    const navList = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About us</Link></li>
        <li><Link to="/tours">Tours</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>
    return (
        <div>
            {/* fixed top-0 */}
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <Link to="/" className="h-[70px] w-[70px]">
                        <img className='hidden lg:flex mx-12' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex px-1">
                    <ul className="menu menu-horizontal text-white text-xl font-semibold">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-wide bg-teal-900 text-white font-bold" >123-456-789</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;