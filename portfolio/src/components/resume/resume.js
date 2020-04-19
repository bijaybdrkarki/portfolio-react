import React from 'react';
import {Link} from 'react-router-dom';
import styles from './resume.module.css'
import './data.css'
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';


const Resume = ()=> {
    
    return (
        <>
        <header>
            <Navbar />
            <div className={styles.background}></div> 
            <section className={styles.resumeSection}>
                <h1>UNDERSTAND ME</h1>
                <h1>MORE.</h1>
                <Link to="/resumeDeveloperBijay.pdf" target="_blank" className={styles.resume} download>DOWNLOAD RESUME</Link>
            </section>           
        </header>
        <section className={styles.skills}>
            <h1>Technologies</h1>
            <div className={styles.software}>
                <ul>
                    <li>HTML5 / CSS3</li>
                    <li>vanilla JS</li>
                    <li>Responsive Design (mobile first)</li>
                    <li>Webpack / Babel</li>
                    <li>React.js / Vue.js</li>
                    <li>Node.js (npm)</li>
                    <li>Express.js & Handlebars</li>
                    <li>GIT, github, VS code</li>
                    <li>C/C++</li>
                    <li>MongoDB, Mongoose</li>
                    <li>Adobe Photoshop, illustrator</li>
                    <li>Figma / Adobe xD prototyping</li>
                    <li>E-commerce(shopify)</li>
                </ul>
            </div>
        </section>
        <main className="class-of">
            <div className="student-profile">
                <div className="student-intro">
                    <section>
                        <article className="personal-basic">
                            <h1 className="full-name">Bijay Bahadur Karki</h1>
                            <h2 className="professional-position">Web Developer</h2>
                            <img src={require ('../../img-video/Pro_Pic.jpg')} alt="professional_image" />
                        </article>
                        
                        <article>
                            <hr />
                            <div className="personal-contact">
                                <i className="fas fa-home"></i>
                                <p className="vertical-line"></p>
                                <h3>Brampton, ON, Canada</h3>
                            </div>
                            <hr />
                            <div className="personal-contact">
                                <i className="fas fa-envelope"></i>
                                <p className="vertical-line"></p>
                                <h3>bijay.jhupro@gmail.com</h3>
                            </div>
                            
                            <hr />
                            <div className="personal-contact">
                                <i className="fas fa-mobile"></i>
                                <p className="vertical-line"></p>
                                <h3>437-228-1850</h3>
                            </div>
                            <hr />
                        </article>
                    </section>
                    <section>
                        <article>
                            <h4 className="paragraph-title">Intro</h4>
                            <p className="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis nisi ut eligendi temporibus harum autem amet fugiat quae. At beatae sunt iusto reiciendis eaque unde nesciunt vero repellendus. Iste</p>
                        </article>
                        <article>
                            <h4 className="paragraph-title">Major Achievements</h4>
                            <p className="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nobis nisi ut eligendi temporibus harum autem amet fugiat quae. At beatae sunt iusto reiciendis eaque unde nesciunt vero repellendus. Iste</p>
                        </article>
                    </section>
                    <section>
                        <hr className="horizontal-line" />
                        <div className="title-icon">
                            <i className="fas fa-layer-group"></i>
                            <p className="group-title">Portfolio</p>
                        </div>
                        <hr className="horizontal-line" />
                        <ul className="paragraph-content portfolio-link">
                            <li> Personal Site: <a href="/">bijaybdrkarki.com</a></li>
                            <li> Shopify: <a href="//jhupro.myshopify.com/" target="_blank" rel="noopener noreferrer">Jhupro.myshopfy.com</a></li>
                            <li>Other: <a href='//www.linkedin.com/in/bijay-bahadur-karki/' target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
                        </ul>
                    </section>
                    <section>
                        <hr className="horizontal-line" />
                        <div className="title-icon">
                            <i className="fas fa-cogs"></i>
                            <p className="group-title">Skill & Expertise</p>
                        </div>
                        
                        <hr className="horizontal-line" />
                        <article>
                            <p className="paragraph-content">CSS, HTML, Javascript, Node.js, Shopify, Adobe:XD, Photoshop, After Effects, Illustrator</p>
                            <p className="paragraph-content">Team Work, Collaboration</p>
                        </article>
                    </section>
                    <section>
                        <hr className="horizontal-line" />
                        <div className="title-icon">
                            <i className="fas fa-language"></i>
                            <p className="group-title">Languages</p>
                        </div>
                        <hr className="horizontal-line" />
                        <article>
                            <p className="paragraph-content">English, Nepalese</p>
                        </article>
                    </section>
                </div>
                <div className="student-indepth-detail">
                    <section>
                        <hr className="horizontal-line" />
                        <div className="title-icon">
                            <i className="fas fa-briefcase"></i>
                            <p className="group-title">Experience</p>
                        </div>
                        <hr className="horizontal-line" />
                        <article>
                            <ul>
                                <li className="job-position">Web Developer</li>
                                <li className="company-name">Humber College</li>
                            </ul>
                            <p className="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?</p>
                        </article>
                        <article>
                            <ul>
                                <li className="job-position">Lecturer and Project Supervisor</li>
                                <li className="company-name">Himalaya College of Engineering</li>
                            </ul>
                            <p className="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?</p>
                        </article>
                        <article>
                            <ul>
                                <li className="job-position">Network Admin & Lab Co-Ordinator</li>
                                <li className="company-name">Himalaya College of Engineering</li>
                            </ul>
                            <p className="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tenetur adipisci modi. Eos quis esse expedita impedit qui dolorum explicabo sapiente consequatur, ea, sequi minima natus blanditiis eaque inventore quidem?</p>
                        </article>
                    </section>
                    <section>
                        <hr className="horizontal-line" />
                        <div className="title-icon">
                            <i className="fas fa-graduation-cap"></i>
                            <p className="group-title">Education</p>
                        </div>
                        <hr className="horizontal-line" />
                        <article>
                            <ul>
                                <li className="job-position">HUMBER COLLEGE</li>
                                <li className="company-name">Certification in Web Design and Development</li>
                            </ul>
                            <p className="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum tenetur adipisci modi. </p>
                        </article>
                        <article>
                            <ul>
                                <li className="job-position">HUMBER COLLEGE</li>
                                <li className="company-name">Post Graduate in Wireless Telecommunication</li>
                            </ul>
                            <p className="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum tenetur adipisci modi. </p>
                        </article>
                        <article>
                            <ul>
                                <li className="job-position">Himalaya College of Engineering</li>
                                <li className="company-name">B.E. in Electronics and Communication</li>
                            </ul>
                            <p className="paragraph-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum tenetur adipisci modi.</p>
                        </article>
                    </section>
                </div>
            </div>
        </main>
        <section className={styles.nowConnect}>
            <h1> Your Thoughts Now ? </h1>
            <p>Did you liked my resume and work experince ? How about we work together now. Let's connect now </p>
            <div className={styles.sendrequest}>
                <Link to="/connect">Connect Now<i className="fas fa-arrow-right"></i></Link>
            </div> 
        </section>
        <Footer /> 
        </>
)}

export default Resume;