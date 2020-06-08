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

                                             Note: This is a month-to-month Monday - Friday remote contract position in the United States with flexible hours.
                                                 
                                                 
                                 </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/course-hero-174c8b26/content-developer-business-marketing-remote-contractor-4f34c03e?job_id=a0aceea6bb24448790e9c3888b450c0e" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/1205-marketing-0af854b0/director-of-digital-marketing-at-integrated-marketing-agency-remote-9cf6119a?job_id=482b338217ec06db633d079aa8193770&lvk=0MHIsfo7Jxh3daf_qDxDNQ.--LbY9H-4cN" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Director of Digital Marketing at Integrated Marketing Agency</h3>
                            </header>
                            <p> <h4>1205 Marketing in Seattle, WA, USA</h4><br />
                                Compensation <b>$60,000 to $65,000 Annually</b><br />
                                Benefits Offered: <br />
                                Employment Type: Full-Time<br />
                                    
                                    
                                   Our team is on the hunt for a digital rock star who wants to take the next steps in their career with a growing integrated marketing agency. The DoDM is one of several Director level roles critical to the successful implementation of 1205’s integrated agency model. That model includes six core service lines: Branding, design, content, digital, communications, and out-of-home marketing. Our approach is driven by the unique integration of these disciplines at both a strategic and project management level.

                                   Our perfect candidate is a aspirations full-stack digital marketer / marketing strategist with at least five years digital experience. They may have already served in a Director-level role or have put in the work to achieve it, feel confident about their bona fides, and want to throw their hat in the ring. Either way, they are excited about the prospect of continually investing in their knowledge base and helping us to grow our reputation as a digital leader. 

                             </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/1205-marketing-0af854b0/director-of-digital-marketing-at-integrated-marketing-agency-remote-9cf6119a?job_id=482b338217ec06db633d079aa8193770&lvk=0MHIsfo7Jxh3daf_qDxDNQ.--LbY9H-4cN" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/revival-point-3f6ab1f9/email-marketing-coordinator-remote-34f6be7c?job_id=7aea14eec5c45ded8edcb37726bcf9a5&lvk=DsRVq-UgFVLNTRzs-Zc5gw.--LbZPdfsss" className="image">
                        <img src={pic10} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Email Marketing Coordinator (Remote)</h3>
                            </header>
                            <p><h4>Revival Point in Austin, TX, USA</h4><br />
                               Compensation: <b>$30,000 to $45,000 Annually</b><br />
                               Benefits Offered: 401K, Dental, Medical, Vision<br />
                               Employment Type: Full-Time<br />

                                          This is a junior marketing position that is remote. We are open to unique situations, such as a student at the end of college, looking to work slightly modified hours.

                                          Our company generated $11M in health supplement sales in 2019 and we have big plans for 2020. We need your help to take things to reach our ambitious goals. (You’ll get more info on the company if the first part of your application is accepted).
                                   
                                   
                            </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/revival-point-3f6ab1f9/email-marketing-coordinator-remote-34f6be7c?job_id=7aea14eec5c45ded8edcb37726bcf9a5&lvk=DsRVq-UgFVLNTRzs-Zc5gw.--LbZPdfsss" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
