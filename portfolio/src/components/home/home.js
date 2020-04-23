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
    <section className={styles.homeSection}>
        <img src={require('../../img-video/home.png')} alt="nepal" className={styles.homeImg}/>
        <div className={styles.homeText}>
            <h1>About Myself</h1>
            <p>
                These are something that resume can not explain. I love to drink Tea/coffee alot.
                My favorite number is 2 because 1/top is easy to get and very hard to maintain. Also 2nd makes you work hard. I enjoy watching football (soccer) sepcially premier league <i className="far fa-futbol"></i>. And I love to play FIFA. Lastly, i love to discuss in person and solve the problem.
            </p> 
        </div>       
    </section>
        
    
    
    <Footer />
    </>
)}

export default Home;