import React from 'react'
import {Link} from 'react-router-dom';
import styles from './footer.module.css'


const Footer = ()=> {

    return (
        <div className={styles.footer}>
            <h1>Let me build the Website you need</h1>
            <div className={styles.menu}>
                <ul>
                    <li><Link to='/'> HOME </Link></li>
                    <li><Link to='#'> CODE STATION </Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='#'>PROJECTS</Link></li>
                    <li><Link to='#'> RESUME </Link></li>
                    <li><Link to='#'>CONNECT</Link></li>
                </ul>
            </div>
            <p className={styles.copyright}>&copy;2020 Developed by Bijay. All rights reserved.</p>
            <div className={styles.terms}>
                <ul>
                    <li><Link to='#'>Terms of Service</Link></li>
                    <li><Link to='#'>Privacy Policy</Link></li>
                </ul>
            </div>
            <div className={styles.icon}>
                <Link to='#'><i className="fab fa-facebook-square" id={styles.f}></i></Link>
                <Link to='#'><i className="fab fa-instagram" id={styles.i}></i></Link>
                <Link to='#'><i className="fab fa-twitter" id={styles.t}></i></Link>
                <Link to='#'><i className="fab fa-linkedin-in" id={styles.in}></i></Link>
                <Link to='#'><i className="fab fa-youtube" id={styles.y}></i></Link>
            </div>
        </div>
    )
}


export default Footer;