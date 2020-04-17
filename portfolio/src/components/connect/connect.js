import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
import styles from "./connect.module.css"


const Connect= ()=> {
    
    return (
        <>
        <header>
            <Navbar />
            <div className={styles.background}></div> 
            <section className={styles.connectSection}>
                <h1>LET'S CONNECT </h1>
                <h1>TODAY.</h1>
            </section>         
        </header> 
        <main className={styles.main}>
            <article className={styles.connectArticle}>
                <h1>Code Station Support</h1>
                <p>Made a purchase of code from code Station earlier and have an issue or you need to re-download code? You have come the right place.</p>
                <a href="/connect/support">SEND TICKET</a>
            </article>
            <article className={styles.connectArticle}>
                <h1>Hire a Developer</h1>
                <p>Are you looking for a Web developer? Or do you need some consulting or training ? Send an inquiry text/email or just call 555-555-5555.</p>
                <a href="/connect/support">SEND INQUIRY</a>
            </article>
            <article className={styles.connectArticle}>
                <h1>Just Questions</h1>
                <p>Feel free to reach out if you have any questions regarding my services. Also you can always just send me a friendly hello on email or SMS</p>
                <a href="/connect/support">SEND HELLO</a>
            </article>
        </main> 
        <section className={styles.connectDirect}>
            <article>
                <h1>Reach Out to me directly.</h1>
                <p>Call <span>555-555-5555</span> MON-FRI : 9AM to 5PM EST. </p>  
            </article>            
        </section>
        <div className={styles.location}>
            <p className={styles.google}>Google</p>
            <div className={styles.map}>
                <p>Map data &copy; 2020</p>
                <p>Terms of Use</p> 
                <p>Report a map error</p> 
            </div>  
        </div> 
        <Footer /> 
        </>       
    )

}

export default Connect;