import React, {useState, useEffect} from 'react';
// import cx from 'classnames'
import logo from '../../img-video/logo.png';
import logo1 from '../../img-video/logo1.png';
import {Link} from 'react-router-dom';
import styles from './navbar.module.css';
import './menu.css'


const Navbar = () => {
    const [logovalue, setlogovalue]= useState()
    useEffect(()=>{
        if (window.innerWidth >= 640)
        {
            setlogovalue(logo);
        }
        else
        {
            setlogovalue(logo1);
        }
        //event listener for window resize and change logo img 
        window.addEventListener('resize',()=>{
            if (window.innerWidth >= 640)
            {
                setlogovalue(logo);
            }
            else
            {
                setlogovalue(logo1);
            }
        })
        return (window.removeEventListener('resize',()=>{}))
    },[])
    
    const [menu, setmenu]= useState('menu')
    const [open, setopen]= useState('menu')
    const menuVisible = ()=>{
        if (menu === 'menu')
        {
            setmenu('clear'); //inner html of menu button 'clear'
            setopen('menu invisible'); //set class of menu and invisible
        }
        else
        {
            setmenu('menu'); // inner html of menu button 'menu'
            setopen('menu'); // set class of menu
        }
        
    }
    return (    
        <div className={styles.navbar}>
            <div className={styles.yourText}>
                <div className={styles.logo}>
                    <Link to='/'><img src={logovalue} alt="logo" /></Link>
                </div>
                <div className={styles.dropMenu}>
                    <button type="button" onClick={menuVisible}>
                        <span className="material-icons" id="menu">{menu}</span>
                    </button>
                </div>
                <div className={open}>
                    <ul>
                        <li className="notVisible"><Link to='/'>HOME</Link></li>
                        <li><Link to='#'>CODE STATION</Link></li>
                        <li><Link to='/about'>ABOUT</Link></li>
                        <li><Link to='#'>PROJECTS</Link></li>
                        <li><Link to='/connect'>CONNECT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;