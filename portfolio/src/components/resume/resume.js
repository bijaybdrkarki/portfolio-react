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
                            <p className="paragraph-content">Humber-Acentury Telecommunication Award 2019 for excellent academics
                                <br />Destination Indication Device, 2013(2nd best undergrad project and funded by Nepal Telecommunication Authority)  
                            </p>
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
                            <li> Personal Site: <a href="/">bijaybahadurkarki.com</a></li>
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
                            <p className="paragraph-content"> Coursework: web design, web programming, plan, prototype, coding and development.</p>
                        </article>
                        <article>
                            <ul>
                                <li className="job-position">HUMBER COLLEGE</li>
                                <li className="company-name">Post Graduate in Wireless Telecommunication</li>
                            </ul>
                            <p className="paragraph-content"> GPA: 4.0 (91.7%)
                                <br />Graduate Coursework: RF Technology, Fibre optics and microwave, Telecommunication, Data Networks, Applied
                                    Electromagnetics, , broadband communication and security, LTE core
                            </p>
                        </article>
                        <article>
                            <ul>
                                <li className="job-position">Himalaya College of Engineering</li>
                                <li className="company-name">B.E. in Electronics and Communication</li>
                            </ul>
                            <p className="paragraph-content">GPA: 3.4
                                <br />Undergraduate Coursework: Analog and Digital Communication, computer programming, object oriented
                                    programming, Optical Fiber, Telecommunication, Wireless Communication and Remote Sensing
                                <br />Undergrad Semester topper: I & II & 2nd topper: III, IV, V, VI, VII & VIII
                            </p>
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
                                <li className="job-position">Student@Web Developer</li>
                                <li className="company-name">Humber College</li>
                            </ul>
                            <p className="paragraph-content">• Extra-ordinary design mock-ups for customers to ensure product quality and client gratification before development phase
                                <br /> Management of Brands: name, logo, appearance, and design of the web site to get the best revenue.
                                <br />• Heavily involved in every step of web application framework design including: Logo design in Illustrator, creating multiple wireframe design, 
                                        interactive prototypes in Figma or Adobe xD, implementation and usability testing
                                <br />• Modified photos to be used in websites using Adobe Photoshop, illustrator.
                                <br />• Programmed and debugged in HTML, CSS, and vanilla Javascript (Visual studio code)
                                <br />• Designed, developed and executed serviceable small web programming projects without use of frameworks.
                                <br />• Developed Responsive design of web practice with mobile first.
                                <br />• Excellent use of GIT, git branch, merge for version management and github to store the code
                                <br />• Clear understanding of using frontend frameworks React.JS, Vue.JS, CSS frameworks Bootstrap, SASS
                                <br />• Exercising backend development using node.JS Express, Handlebars
                                <br />• Strong in OOPS coding, MVC concepts implement in Projects, deployment on Heroku
                                <br />• Fundamental understanding and implementation of NoSQL (MongoDB)
                                <br />• E-commerce knowledge(shopify)
                            </p>
                        </article>
                        <article>
                            <ul>
                                <li className="job-position">Lecturer and Project Supervisor</li>
                                <li className="company-name">Himalaya College of Engineering</li>
                            </ul>
                            <p className="paragraph-content">• Developed course and lab manual for all level (1st to 4th year), Conduct examinations, copy checking and marking, Report weekly to Head of Department, Handled lectures (100mins) and labs(180mins) with 48 students in each section
                                <br />• Supervise under major and minor undergrad projects, Assist/verify Project report writing : Vehicle tracking with alcohol
                                        detection (2015), Public vehicle tracker (2016),Vehicle over speed detection and recognition (2017), Analog and Digital
                                        Data transmission through VLC (2018)
                            </p>
                        </article>
                        <article>
                            <ul>
                                <li className="job-position">Network Admin & Lab Co-Ordinator</li>
                                <li className="company-name">Himalaya College of Engineering</li>
                            </ul>
                            <p className="paragraph-content">•Install and configure computer network and system, Budgeting for equipment, assembly cost and content documentation biyearly, Work with other IT personnel and engineers as team <br />• Monitor, Analyze and Manage all types of Network systems, Implementation and test all hardware/software to conduct lab,
Identify and troubleshoot problems that arises with computer networks and system</p>
                        </article>
                    </section>
                </div>
            </div>
        </main>
        <section className={styles.nowConnect}>
            <h1> Your Thoughts Now ? </h1>
            <p>Did you liked my resume and work experience ? How about we work together now. Let's connect now </p>
            <div className={styles.sendrequest}>
                <Link to="/connect">Connect Now<i className="fas fa-arrow-right"></i></Link>
            </div> 
        </section>
        <Footer /> 
        </>
)}

export default Resume;