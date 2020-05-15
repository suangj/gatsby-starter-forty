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
            <title>Writer Jobs</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Writer Job List</h2>
                    </header>
                   </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/akorbi-41e27098/tech-writer-369b0e87" className="image">
                        <img src={pic08} alt="" />
                     </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Tech Writer</h3>
                            </header>
                               <h4>Akorbi (Mountain View, CA, USA)</h4><br />
                               <p> Compensation <b>$50 to $65 Hourly</b><br />
                                   Benefits Offered: 401K, Dental, Life, Medical, Vision<br />
                                   Employment Type: Contractor<br />
                                 
                                Exciting Technical Writer Opportunities in Mountain View, CA and NYC, NY

                                Pay Rate: $50-$65/ HR + Benefits

                                Locations: MTV, CA & NYC, NY (Remote to start however must sit in one the locations offered)

                                Position Description

                                The right person for this role will have exceptional written English skills and the ability to draft clear and concise email communications to customers. They will be responsible for taking a sheet of technical facts about a product topic (examples: a breaking change, a mandatory upgrade, a billing issue, a product or API deprecation) and translating it into customer-centric and customer-friendly language. They will collaborate with the product, legal, support, and marketing teams to create a final communication that meets the expectations of both our customers and our internal stakeholders. The right candidate will also be comfortable with change and have the ability to adapt to shifting priorities.
                               </p>
                                  <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/akorbi-41e27098/tech-writer-369b0e87" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/della-infotech-inc-5d403f0f/technical-writer-with-medical-device-or-life-science-environment-b809b711" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Technical Writer with MEDICAL DEVICE (or) Life science environment</h3>
                            </header>
                            <p> <h4>Della Infotech Inc. (Sunnyvale, CA, USA)</h4><br />
                                Compensation <b>$37 to $38 Hourly</b><br />
                                Benefits Offered: Medical<br />
                                Employment Type: Contractor<br />
                                
                                Job Title: Technical Writer II
                                Department: Technical Publications and Global Labeling
                                Reports to: Supervisor/Manager, Technical Publications

                                Primary Function of Position:
                                Produce accurate, clearly presented, consistent instructions for use (IFU) for medical device robotic systems and instruments; receive basic instruction on day-to-day work and general instructions on new assignments; can be mentored by a more experienced writer; use professional concepts and skills; apply company policies and procedures to resolve a variety of issues.
                                </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/della-infotech-inc-5d403f0f/technical-writer-with-medical-device-or-life-science-environment-b809b711" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/tentek-inc-decae4e7/technical-writer-ai-slack-project-ef5a4715" className="image">
                        <img src={pic10} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Technical Writer (AI/Slack project)</h3>
                            </header>
                            <p><h4>Tentek, Inc. (Los Angeles, CA, USA)</h4><br />
                               Compensation: <b>$30 to $35 Hourly</b><br />
                               Benefits Offered: 401K, Dental, Medical, Vision<br />
                               Employment Type: Contractor<br />
                               
                           
                            
                            About Tentek, Inc.:
                            TenTek has been in business since 1989, and is recognized as a leading staffing provider of tech professionals to a growing client base.
                             </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/tentek-inc-decae4e7/technical-writer-ai-slack-project-ef5a4715" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
