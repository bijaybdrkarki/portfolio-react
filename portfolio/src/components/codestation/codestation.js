import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
import styles from "./codestation.module.css"

const Codestation = () =>{

    return (
        <>
        <header>
            <Navbar />
            <div className={styles.background}></div> 
            <section className={styles.codestationHeader}>
                <h1>WEB DESIGN &</h1>
                <h1>CODESTATION.</h1>
            </section>         
        </header> 
        <Footer /> 
        </>       
)}


export default Codestation;