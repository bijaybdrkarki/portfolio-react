import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
import styles from "./about.module.css"
// import gsap from 'gsap'; 
// import {useIntersection} from 'react-use';
import nepal3 from "../../img-video/nepal3.jpeg";
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

    // tried to implement animation on scroll not working till now

    // let text = useRef(null);
    // let image = useRef(null);
    // const intersection = useIntersection(text, {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 1
    //   });
   
    // const fadeIn = element => {
    //     if (element)
    //     {
    //     gsap.to(element, {x:10,opacity:1,ease:"Power4.Out"})
    //     console.log(element)
    //     }
    // }
    // const fadeOut = element => {    
    //     gsap.to(element, {x:-10,opacity:0,ease:"Power4.Out"})
    // }
    
    // if (intersection && intersection.intersectionRatio < 1)
    // {
    //     console.log(2); 
    //     fadeOut(".aboutImg")   
    // }
    // else
    // {
    //     console.log(intersection); 
    //     fadeIn(".aboutImg")
    // } 
    
    
        
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
        <section className={styles.aboutSection}>
            <img src={nepal3} alt="nepal" className={styles.aboutImg}/>
            <div className={styles.aboutText}>
                <h1>About Myself</h1>
                <p>
                    These are something that resume can not explain. I love to drink Tea/coffee alot.
                    My favorite number is 2 because 1/top is easy to get and very hard to maintain. Also 2nd makes you work hard.
                    I love watching football (soccer) sepcially premier league. And I love to play FIFA.
                </p> 
            </div>       
        </section>
        <Footer /> 
        </>       
    )

}

export default About;