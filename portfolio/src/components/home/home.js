import React from 'react';
import Navbar from '../navbar/navbar';
import video from '../../img-video/Source-Code.mp4'
import "./home.css"

const Home = () => {

return (
    <header>
        <Navbar />
        <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
                Your browser does not support HTML5 video.
        </video>

        <section className="videoSection">
            <h1>WEB DESIGN &</h1>
            <h1>DEVELOPMENT ?</h1>
        </section>

        
    </header>
)

}

export default Home;