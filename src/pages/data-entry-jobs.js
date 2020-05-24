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
            <title>Data Entry Jobs</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Data Entry Job List</h2>
                    </header>
                   </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/resource-staffing-be53b381/data-entry-morning-shift-21056451?job_id=a74f4a846969ad68f33ad46a618036bc" className="image">
                        <img src={pic08} alt="" />
                     </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Data Entry Morning Shift</h3>
                            </header>
                               <h4>RESOURCE STAFFING in Houston, TX, USA</h4><br />
                               <p> Compensation <b>$10 to $10.01 Hourly</b><br />
                                   Benefits Offered:<br />
                                   Employment Type: Full-Time<br />
    
                                   
                                   The Data Entry Image Reviewer processes images of vehicles that violate the EZ Tag lanes. This positon is based on typing speed and accuracy, located in the Northwest area off Beltway 8 and Clay Rd. 

                                   Requirements: 

                                     8,000 data entry strokes per hour,
                                     Typing speed 35+ words per minute,
                                     Punctual at all times,
                                     90 day NO absence policy,
                                     Ability to sit for long periods of time,
                                     Must pass a drug screen test,
                                     Clean criminal background-a background check will be performed

   
                               </p>
                                  <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/resource-staffing-be53b381/data-entry-morning-shift-21056451?job_id=a74f4a846969ad68f33ad46a618036bc" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/conns-homeplus-4003e3d5/data-entry-specialist-loan-servicing-specialists-12f34942?job_id=faa0b872078c9349e0ae1cbbd8e9928f" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Data Entry Specialist - Loan Servicing Specialists</h3>
                            </header>
                            <p> <h4>Conn's HomePlus in Houston, TX, USA</h4><br />
                                Compensation <b>$11 to $13 Hourly</b><br />
                                Benefits Offered: 401K, Dental, Life, Medical, Vision<br />
                                Employment Type: Full-Time<br />
    
                                       The Loan Servicing Specialist – Loan Operations responsibilities include, but are not limited to, providing support and solutions to customers regarding account maintenance for due date changes, payoff processing, credit and payment disputes, payment history requests, payoff verification, combining and refinance account requests, and extension processing. The associate reviews assigned accounts on a daily basis that are submitted from units within the organization to resolve account discrepancies and process account requests, 
                                       insuring that customer records are accurately maintained during resolution of requests. In addition, the specialist will play a vital role in resolving customer concerns submitted through workflow queues from our customer service and collections team consistent with championing Conn’s dedication to delivering high quality customer service.
    

                            </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/conns-homeplus-4003e3d5/data-entry-specialist-loan-servicing-specialists-12f34942?job_id=faa0b872078c9349e0ae1cbbd8e9928f" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/smarttrades-llc-4fcf6802/data-entry-clerk-abf364bc?job_id=242a24c5c3b76c7e06e1ea2e235b82e9" className="image">
                        <img src={pic10} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Data Entry Clerk</h3>
                            </header>
                            <p><h4>Smarttrades LLC in Murray, UT, USA</h4><br />
                               Compensation: <b>$13 to $13.50 Hourly</b><br />
                               Benefits Offered: Dental, Life, Medical, Vision<br />
                               Employment Type: Full-Time<br />
                                   
                                   
                               We are seeking to add a Data Entry Clerk to our team! You will be responsible for accurate data entry, file maintenance, and record keeping.

                                  Responsibilities:

                                    Enter variety of data using current technology,
                                    Prepare and sort documents for data entry,
                                    Create and maintain logs for tracking purposes,
                                    Review and enter data updates in the systems,
                                    Review discrepancies in data received,
                                    Advise supervisor of issues related to data.
                               
  
                            </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/smarttrades-llc-4fcf6802/data-entry-clerk-abf364bc?job_id=242a24c5c3b76c7e06e1ea2e235b82e9" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
