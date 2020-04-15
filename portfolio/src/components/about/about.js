import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
import styles from "./about.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css"; (did not used this defualt theme given by react)
import './slick-theme.css'
//used own customized slick-theme.css instead of css given by react-slick

const About= ()=> {
    const settings = {
        dots: true,
        arrows : false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000 
      };
    return (
        <>
        <header>
            <Navbar />
            <Slider {...settings}> 
                <div className={styles.slide1}></div>
                <div className={styles.slide2}></div>
                <div className={styles.slide3}></div>
            </Slider>   
            <section className={styles.slideSection}>
                <h1>KNOW ME &</h1>
                <h1>I WILL KNOW YOU.</h1>
            </section>        
           
        </header>  
        <Footer /> 
        </>       
    )

}

export default About;