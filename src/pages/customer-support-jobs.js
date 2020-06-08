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
                    <a href="https://www.ziprecruiter.com/jobs/rentreporters-com-8a9414d4/customer-support-representative-remote-7a741eb6?job_id=43323de6e996d105a4b191d3fad28102" className="image">
                        <img src={pic08} alt="" />
                     </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Customer Support Representative</h3>
                            </header>
                               <h4>RentReportersin Los Angeles, CA, USA</h4><br />
                               <p> Compensation <b>$14 to $15 Hourly</b><br />
                                   Benefits Offered: 401K, Dental, Medical, Vision<br />
                                   Employment Type: Full-Time<br />
    
                                     Helping Renters Build Credit: Rent Reporters believes that 100 million renters and particularly the 40 million credit invisible should have a credit score that is reflective of their responsible rent payment history...giving them access to the financial options they deserve.

                                     Pasadena, CA based RentReporters is seeking to continue growing its Customer Support Representative team.  
      

                               </p>
                                  <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/rentreporters-com-8a9414d4/customer-support-representative-remote-7a741eb6?job_id=43323de6e996d105a4b191d3fad28102" className="button">Learn more</a></li>
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
                    <a href="https://www.glassdoor.com/Job/us-customer-support-remote-jobs-SRCH_IL.0,2_IN1_KE3,26.htm?fromAge=1" className="image">
                        <img src={pic10} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Customer Service Rep</h3>
                            </header>
                            <p><h4>Aerotek in Tucson, AZ, US</h4><br />
                               Compensation: <b>$11-$15 Per Hour</b><br />
                               Benefits Offered: Dental, Health<br />
                               Employment Type: Part-Time<br />
                                   
                                   
                                We are looking for Tier I and Tier II customer service representatives that will be providing support to Educational Administrators and Teachers all around the world. The agents will be answering inbound calls, chats, and email correspondences within a call center environment. Tier I customer service representatives will handle basic customer service questions while Tier II will be helping with technical support questions troubleshooting issues.   

                                   
                                   </p>
                                <ul className="actions">
                                <li><a href="https://www.glassdoor.com/Job/us-customer-support-remote-jobs-SRCH_IL.0,2_IN1_KE3,26.htm?fromAge=1" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
