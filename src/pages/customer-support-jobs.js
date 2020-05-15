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
            <title>Customer Support Jobs</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Customer Support Job List</h2>
                    </header>
                   </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/strategic-systems-7e45646b/technical-support-remote-7fb9c724" className="image">
                        <img src={pic08} alt="" />
                     </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Technical Support - Remote</h3>
                            </header>
                               <h4>Strategic Systems (Indianapolis, IN, USA)</h4><br />
                               <p> Compensation <b>$20 to $22 Hourly</b><br />
                                   Benefits Offered:<br />
                                   Employment Type: Contractor<br />
                                   
                                   Scope of work/responsibilities include doing Google/internet search on software’s end of life. Will be provided massive list of software and sub software to do search for end of life (when does version come to an end and no longer supported). 

                                   Skillsets – Must be able to utilize Google/comfortable doing internet searches
                                   Phone skills - May have to make phone calls to vendor of software if unable to find online.                    
                                   No certifications needed - Someone coming straight from tech s chool; still in college to get exposure, etc. Position is full time during regular business hours.
                              
                               </p>
                                  <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/strategic-systems-7e45646b/technical-support-remote-7fb9c724" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href=https://www.ziprecruiter.com/jobs/hostwinds-b2b7b749/web-hosting-customer-support-remote-e531766b"" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Web Hosting Customer Support - REMOTE</h3>
                            </header>
                            <p> <h4>Hostwinds (Seattle, WA, USA)</h4><br />
                                Compensation <b>$10 to $18 Hourly</b><br />
                                Benefits Offered: Dental, Medical, Vision<br />
                                Employment Type: Full-Time<br />
                            
                                As a member of our Front-Line Support Team, you will deliver excellent customer service to our clients. You will be responsible for resolving problems relating to their hosting services and answer any questions they may have about our products through Live Chat, Phone Calls, Email Tickets and creating high-quality knowledge guides. All Hostwinds employees share a common goal: ensure our clients are 100 % completely satisfied with Hostwinds' support and services.

                                Support areas include: cPanel, network connectivity, PHP (no development), MySQL (install/update), Plesk (support), Apache (basic configuration & troubleshooting), OS installation, routing/delivery, DNS and hosting package installation. We deliver Windows and Linux based hosting. As a Front-Line Agent, you will be providing support through phone, chat, and email-based ticketing system.

                                We provide support 7x24x365 and have varying shift schedules. Currently, we are recruiting for the following shifts:<br />

                                First Shift (Day): 5:30 AM - 2:00 PM PST<br />

                                Second Shift (Swing): 1:30 PM - 10:00 PM PST<br />

                                Third Shift (Overnight): 9:30 PM - 6: 00 AM PST<br />
                                </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/hostwinds-b2b7b749/web-hosting-customer-support-remote-e531766b" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/thrive-internet-marketing-agency-62063602/wordpress-technical-support-specialist-remote-503bb224" className="image">
                        <img src={pic10} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>WordPress Technical Support Specialist (Remote)</h3>
                            </header>
                            <p><h4>Thrive Internet Marketing Agency (Phoenix, AZ, USA)</h4><br />
                               Compensation: <b>$40,000 to $45,000 Annually</b><br />
                               Benefits Offered: 401K, Life, Dental, Medical, Vision<br />
                               Employment Type: Full-Time<br />
                               
                               Thrive Internet Marketing Agency is looking for an experienced Web Support team member with strong experience in WordPress that who can provide world-class support to our customers.
                               We already have many happy clients and are adding more every day. Grow with us as we address the business marketing needs of clients across the United States and around the world.
                            </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/thrive-internet-marketing-agency-62063602/wordpress-technical-support-specialist-remote-503bb224" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
