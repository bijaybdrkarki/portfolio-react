import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import video from '../../img-video/Source-Code.mp4'
import styles from "./home.module.css"

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])    

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
            <h1>Hi, I am Bijay</h1>
            <p>
                Have you ever imagined of having a website for your business that clearly shows what you do in your business or personal portfolio that explain who you are and you can do ?
            <br /><br /> Let's connect, give me a call (or email) and build a website for you.
            </p> 
        </div>      
    </section>
    <section className={styles.aboutCode}>
        <h1>I also provide code snippets for Shopify, React and Express.js</h1>
        <div className={styles.codetype}>
            <article>
                <h2>Customize your shopify store</h2>
                <p>Do you want to customize you shopify store, add some extra features that makes you unique from other and help your customer feel easy on your store ?</p>
            </article>
            <article>
                <h2>Customize your React frontend</h2>
                <p>Some components you would like to add to your React App</p>
            </article>
            <article>
                <h2>Need help on Express server</h2>
                <p>combine your frontend with express server, add Mongodb database, send sms/email to your user</p>
            </article>
        </div>
        <Link to="/codestation" className={styles.codestation}>CODE STATION <i className="fas fa-arrow-right"></i></Link> 
    </section>
    <section className={styles.recentproject}>
        <h1>Most Recent Projects</h1>
        <div className={styles.develop}>
            <div className={styles.airbnb}>
                <img src={require('../../img-video/airbnb.png')} alt="airbnb" />
                <div className={styles.airbnbcenter}>
                    <p>Node.js MVC project</p>
                    <Link to="//web120.herokuapp.com/" target="_blank" className={styles.connect}>Airbnb project</Link>
                </div>
            </div>
            <div className={styles.shopify}>
                <img src={require('../../img-video/shopify.png')} alt="shopify" />
                <div className={styles.shopifycenter}>
                    <p>Shopify Liquid project</p>
                    <Link to="//jhupro.myshopify.com/" target="_blank" className={styles.connect}>Shopify project</Link>
                </div>
            </div>
        </div>
        <Link to="/projects" className={styles.codestation}>MORE PROJECTS <i className="fas fa-arrow-right"></i></Link>
    </section>
    <Footer />
    </>
)}

export default Home;