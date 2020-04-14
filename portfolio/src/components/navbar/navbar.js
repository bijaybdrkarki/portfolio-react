import React from 'react';
import logo from '../../img-video/logo.png';
import {Link} from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    return (    
        <div className="navbar">
            <div className="your-text">
                <div className="logo">
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to='#'> CODE STATION </Link></li>
                        <li><Link to='/about'>ABOUT</Link></li>
                        <li><Link to='#'>PROJECTS</Link></li>
                        <li><Link to='#'>CONNECT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;