import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Online Marketing Jobs</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Online Marketing Jobs</h2>
                    </header>
                   </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/course-hero-174c8b26/content-developer-business-marketing-remote-contractor-4f34c03e?job_id=a0aceea6bb24448790e9c3888b450c0e" className="image">
                        <img src={pic08} alt="" />
                     </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Content Developer - Business Marketing (Remote Contractor)</h3>
                            </header>
                               <p><h4>Course Hero in Phoenix, AZ, USA</h4><br />
                                   Compensation <b>$35 to $50 Hourly</b><br />
                                   Employment Type: Contractor<br />
                                   <br />
    
                                             Are you a college educator looking to leverage your pedagogic chops to help students learn? Course Hero is looking for a Business Marketing Content Developer to ensure that we are creating the highest quality solutions to questions. Our ideal candidate will have strong expertise in college-level business marketing. Candidates must be self-starters with a passion for teaching, an outstanding work ethic, and a positive attitude.

                                             Note: This is a month-to-month Monday - Friday remote contract position in the United States with flexible hours.</p>
    
    
    
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/course-hero-174c8b26/content-developer-business-marketing-remote-contractor-4f34c03e?job_id=a0aceea6bb24448790e9c3888b450c0e" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/koren-riley-035d4da0/director-of-marketing-df6697b3" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Director of Marketing (Koren Riley)</h3>
                            </header>
                            <p> <h4>Koren Riley (Orem, UT, USA)</h4><br />
                                Compensation <b>$80,000 to $90,000 Annually</b><br />
                                Benefits Offered: Dental, Medical, Vision<br />
                                Employment Type: Full-Time<br />

                                We are looking for a Director Of Marketing for a Property Management Firm who specializes in Manufacturing Housing Communities. The ideal candidate would have at least 5 years experience as a Director Of Marketing</p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/koren-riley-035d4da0/director-of-marketing-df6697b3" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/impact-business-group-808c7a73/product-owner-for-digital-marketing-remote-available-14525-582d8265?job_id=a7c06cbdd9f74cc848ab7a9506a262cc" className="image">
                        <img src={pic10} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Product Owner for Digital Marketing (Remote Available)</h3>
                            </header>
                            <p><h4>iMPact Business Group in Saint Joseph, MI, USA</h4><br />
                               Compensation: <b>$50 to $60 Hourly</b><br />
                               Benefits Offered: Dental, Medical, Vision<br />
                               Employment Type: Contractor<br />

                                 Our client, a Global Leader in the Consumer Appliance Industry has an immediate opening for a Digital Marketing Product Analyst for a 6 Month + Contract. Our client offers results-driven people a place where they can make a difference – every day! You will also have the opportunity to work with other like-minded, self-directed and detail oriented Top Talents in an extremely collaborative and professional environment.  
                                   
                                   
                                   
                            </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/impact-business-group-808c7a73/product-owner-for-digital-marketing-remote-available-14525-582d8265?job_id=a7c06cbdd9f74cc848ab7a9506a262cc" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
