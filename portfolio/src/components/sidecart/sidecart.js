import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import styles from './sidecart.module.css'


const Sidecart = () => {
    //cleant up the component when unmount
    useEffect(()=>{
        return ()=>{}
    },[])
    return (
        <>
        <header>
            <Navbar />
            <div className={styles.background}></div> 
            <section className={styles.sidecart}>
                <h1>GET SIDE CART ON YOUR SHOPIFY STORE</h1>
                <p>Make easy for your shopping customer</p>
            </section>         
        </header>
        <section className={styles.description}>
            <img src={require('../../img-video/sidecart.png')} alt="side cart" />
            <div>
                <h2>Description</h2>
                <p> • Add a simple side cart on your shopify store
                    which allows you customer to see all cart items on every page with out actually going to actual cart page. <br />
                    <br />• Here they can update the quantity of items (with limit of available quantity in your inventory), delete the item(s) from cart. <br />
                    <br />• You can give any number of suggested items for customer to add into cart. <br />
                    <br />• Custom css that matches to your store color and buttons are available as well.  <br />
                </p>
                <Link to='' className={styles.projectlink}>GET IT NOW</Link>
            </div>
        </section> 
        <Footer />
        </>
)}

export default Sidecart;