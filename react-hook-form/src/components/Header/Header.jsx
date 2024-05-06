import React from 'react';
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className="flex justify-between items-center bg-gray-200 py-4 px-8">
            <div>Logo</div>
            <div className="flex space-x-4">
                <NavLink to="/" className={({isActive})=>`${isActive ? "text-orange-600":"text-gray-600"}`}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=>`${isActive ? "text-orange-600":"text-gray-600"}`}>About Us</NavLink>
                <NavLink to="/contact" className={({isActive})=>`${isActive ? "text-orange-600":"text-gray-600"}`}>Contact</NavLink>
            </div>
        </div>
    );
}

export default Header;
