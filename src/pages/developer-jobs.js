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
            <title>Developer Jobs</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Developer Job List</h2>
                    </header>
                   </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/twenty-bridge-staffing-5d48146f/senior-angular-developer-remote-60f38a92" className="image">
                        <img src={pic08} alt="" />
                     </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Senior Angular Developer (REMOTE)(Twenty Bridge Staffing)</h3>
                            </header>
                               <h4>Twenty Bridge Staffing (Jacksonville, FL, USA)</h4><br />
                               <p> Compensation <b>$100,000 to $125,000 Annually</b><br />
                                   Benefits Offered: 401K, Dental, Life, Medical, Vision<br />
                                   Employment Type: Full-Time<br />
                                 
                                   Summary: Our team is currently looking for a seasoned Angular developer with strong communication and tech leadership skills. Your primary focus will be developing and supporting a responsive Angular application by creating components from wireframes and/or work with the team to debug features as issues arise. Keen attention to detail, problem-solving abilities, and a solid knowledge base are essential.

                                   Location: Remote work with quarterly travel to Client HQ</p>
                                  <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/twenty-bridge-staffing-5d48146f/senior-angular-developer-remote-60f38a92" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/rpc-solutions-llc-6b48ef89/salesforce-developer-remote-9714e5b9" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Salesforce Developer (remote)</h3>
                            </header>
                            <p> <h4>RPC Solutions Llc (Missouri Township, MO, USA)</h4><br />
                                Compensation <b>$75 to $76 Hourly</b><br />
                                Benefits Offered: <br />
                                Employment Type: Contractor<br />
                                **Please note: This is a short-term contract**
                                Positions are either remote or mostly remote

                                We are seeking a Salesforce Developer to become an integral part of our team!
                                </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/rpc-solutions-llc-6b48ef89/salesforce-developer-remote-9714e5b9" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/triplebyte-421379d7/software-engineer-remote-69e2ff4a" className="image">
                        <img src={pic10} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Software Engineer - Remote</h3>
                            </header>
                            <p><h4>Triplebyte (Scottsdale, AZ, USA)</h4><br />
                               Compensation: <b>$125,000 to $190,000 Annually</b><br />
                               Benefits Offered: 401K, Dental, Medical, Vision<br />
                               Employment Type: Full-Time<br />
                               
                               Triplebyte helps companies find and hire great technical talent. For any company building software, this is crucial for success. A recent survey of top C-Level Executives, across multiple industries, showed that software, R&D and recruiting technical talent are the top areas they are planning increased investment and budget over the next 5 years. Companies like Apple, Dropbox and American Express trust Triplebyte’s online technical assessment to identify the best engineers for their open roles and reduce the time and effort it takes to hire them.

                               We just raised a $35 million Series B and our team of 40 will double in size during 2019. Now is a great time to join as we're on an exciting growth trajectory. You will have lots of opportunity for taking on responsibility and developing new skills quickly.
                               
                             </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/triplebyte-421379d7/software-engineer-remote-69e2ff4a" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
