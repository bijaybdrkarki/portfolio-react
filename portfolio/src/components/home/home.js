import React from 'react';
import {Link} from 'react-router-dom'
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import video from '../../img-video/Source-Code.mp4'
import styles from "./home.module.css"

const Home = () => {

return (
    <>
    <header>
        <Navbar />
        <video autoPlay muted loop id={styles.myVideo}>
            <source src={video} type="video/mp4" />
                Your browser does not support HTML5 video.
        </video>

        <section className={styles.videoSection}>
            <h1>WEB DESIGN &</h1>
            <h1>DEVELOPMENT ?</h1>
            <Link to="/connect" className={styles.connect}>LET'S CONNECT</Link> 
        </section>

        
    </header>
    <p>this main body</p>
    <Footer />
    </>
)}

export default Home;