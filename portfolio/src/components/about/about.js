import React from 'react';
import Navbar from '../navbar/navbar';
import "./about.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
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
        <header>
             <Navbar />
            <Slider {...settings}> 
                <div className="slide1"></div>
                <div className="slide2"></div>
                <div className="slide3"></div>
            </Slider>           
           
        </header>          
    )

}

export default About;