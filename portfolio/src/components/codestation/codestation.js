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
                <h1>WEB CODE </h1>
                <h1>STATION.</h1>
            </section>         
        </header> 
        <Footer /> 
        </>       
)}


export default Codestation;