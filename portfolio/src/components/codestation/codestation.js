import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
import styles from "./codestation.module.css"

const Codestation = () =>{

    useEffect(()=>{
        return () => {
            
        }
    },[])

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
        <section className={styles.allproducts}>
            <h1>All Products</h1>
            <div className={styles.product}>
                <div className={styles.shopify}>
                    <img src={require('../../img-video/shopify.png')} alt="shopify" />
                    <div className={styles.shopifycenter}>
                        <p>Shopify side card</p>
                        <Link to='/sidecart' className={styles.projectlink}>GET IT</Link>
                    </div>
                </div>
            </div>
        </section>
        <Footer /> 
        
        </>       
)}


export default Codestation;