import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
import styles from "./connect.module.css"


const Connect= ()=> {
    
    return (
        <>
        <header>
            <Navbar />
             <div className={styles.background}>
            </div> 
            <section className={styles.connectSection}>
                <h1>LET'S CONNECT </h1>
                <h1>TODAY.</h1>
            </section>        
           
        </header>  
        <Footer /> 
        </>       
    )

}

export default Connect;