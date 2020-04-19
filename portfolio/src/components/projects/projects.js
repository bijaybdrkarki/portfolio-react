import React from 'react';
import {Link} from 'react-router-dom';
import styles from './projects.module.css'
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css"; (did not used this defualt theme given by react)
import '../../components/about/slick-theme.css'
//used own customized slick-theme.css instead of css given by react-slick


const Projects = ()=> {
    
    const settings = {
        arrows : true,
        infinite: true   
    };
    
    
    return (
        <>
        <header>
            <Navbar />
            <div className={styles.background}></div> 
            <section className={styles.projectSection}>
                <h1>WEB DESIGN &</h1>
                <h1>DEVELOPMENT</h1>
                <h1>PROJECTS.</h1>    
            </section>           
        </header>
        <section className={styles.heading}>
            <h1>I always love to solve the problems.</h1>
            <p>With saying that, I love to solve problems using web design and development. I usually start with paper based low fedility design and then go to high fedility on figma or Adobe xD and finally protyping of that design. After design is finalized i can work on both frontend and backend as required.</p>
        </section>
        <section className={styles.allprojects}>
            <div className={styles.design}>
                <h1>Web Design Projects</h1>
                <div className={styles.slider}>
                    <h2>Heathers Honey</h2><Link to="//www.figma.com/file/EJSnRSYSXPpRpregkxiOPk/Heathers-honey" target="_blank">view design</Link>
                    
                    <Slider {...settings} > 
                        <div><img src={require('../../img-video/heathers-design/heathers1.png')} alt="heathers-design" /></div>
                        <div><img src={require('../../img-video/heathers-design/heathers2.png')} alt="heathers-design" /></div>
                        <div><img src={require('../../img-video/heathers-design/heathers3.png')} alt="heathers-design" /></div>
                        <div><img src={require('../../img-video/heathers-design/heathers4.png')} alt="heathers-design" /></div>
                        <div><img src={require('../../img-video/heathers-design/heathers5.png')} alt="heathers-design" /></div>
                        <div><img src={require('../../img-video/heathers-design/heathers6.png')} alt="heathers-design" /></div>
                        <div><img src={require('../../img-video/heathers-design/heathers7.png')} alt="heathers-design" /></div>
                        <div><img src={require('../../img-video/heathers-design/heathers8.png')} alt="heathers-design" /></div>
                    </Slider> 
                </div>
                <div className={styles.slider}>
                <h2>Everest Store</h2><Link to="//www.figma.com/file/o2oOp6to95mCVCMO4xUZqm/web-store-(composite-2)" target="_blank">view design</Link>
                    <Slider {...settings} > 
                        <div><img src={require('../../img-video/webstore-design/webstore1.png')} alt="webstore-design" /></div>
                        <div><img src={require('../../img-video/webstore-design/webstore2.png')} alt="webstore-design" /></div>
                        <div><img src={require('../../img-video/webstore-design/webstore3.png')} alt="webstore-design" /></div>
                        <div><img src={require('../../img-video/webstore-design/webstore4.png')} alt="webstore-design" /></div>
                        <div><img src={require('../../img-video/webstore-design/webstore5.png')} alt="webstore-design" /></div>
                        <div><img src={require('../../img-video/webstore-design/webstore6.png')} alt="webstore-design" /></div>
                        <div><img src={require('../../img-video/webstore-design/boxing-day-sales.gif')} alt="webstore-design" /></div>
                    </Slider> 
                </div>
            </div>
        </section>
        <Footer /> 
        </>

)}


export default Projects;