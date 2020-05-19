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
                    <a href="https://www.ziprecruiter.com/jobs/aerotek-b2fdf001/customer-service-representative-remote-24dc707f?job_id=9f1a412174786e4040913c69426827c1" className="image">
                        <img src={pic08} alt="" />
                     </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Customer Service Representative (Remote)</h3>
                            </header>
                               <h4>Aerotek (Broomfield, CO, USA)</h4><br />
                               <p> Compensation <b>$14 to $15 Hourly</b><br />
                                   Benefits Offered: Dental, Medical, Vision<br />
                                   Employment Type: Full-Time<br />
                                       
                                     Aerotek is hiring for Customer Service Representative 1 working with Deckers Brands. Deckers Brands is a large, collaborative, culture driven call center that supports UGG, Koolaburra, Teva, HOKA One One, and Sanuk. This Customer Care Representative 1 role is responsible for providing premium service and building relationships with our customers through effective telephone communication.  
                                   

                               </p>
                                  <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/aerotek-b2fdf001/customer-service-representative-remote-24dc707f?job_id=9f1a412174786e4040913c69426827c1" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/hostwinds-b2b7b749/web-hosting-customer-support-remote-e531766b" className="image">
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
