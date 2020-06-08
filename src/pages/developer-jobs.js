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
                    <a href="https://www.glassdoor.com/Job/us-developer-remote-jobs-SRCH_IL.0,2_IN1_KO3,12_KE13,19.htm?fromAge=1" className="image">
                        <img src={pic08} alt="" />
                     </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Talend / ETL Developer (AWS)</h3>
                            </header>
                               <h4>Travelers in Hartford, CT, USA</h4><br />
                               <p> Compensation <b>$57K-$91K Annually</b><br />
                                   Benefits Offered: 401K, Health<br />
                                   Employment Type: Full-Time<br />
                                       
                                       
                                          
                                      Travelers is seeking a Software Engineer I to join our organization as we grow and transform our Technology landscape.
                                      Individual will participate in the design, build and management of large-scale data structures and pipelines and efficient Extract/Load/Transform (ETL) workflows. Individual will complete intermediate end to end engineering tasks for specific system assignments including developing, analyzing, configuring, testing, debugging, troubleshooting, documenting, health monitoring/alerting, and implementing based on user or system design specifications, as well as participating in troubleshooting, conducting impact analysis and escalating appropriately.
                                 

                               </p>
                                 <ul className="actions">
                                <li><a href="https://www.glassdoor.com/Job/us-developer-remote-jobs-SRCH_IL.0,2_IN1_KO3,12_KE13,19.htm?fromAge=1" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/saicon-consultants-inc-c66cc262/servicenow-developer-remote-1dbc15a8?job_id=7b6d7fc261fc192959e1cc3593f0bc7a" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>ServiceNow Developer (Remote)</h3>
                            </header>
                            <p> <h4>Saicon Consultants Inc (Tucker, GA, USA)</h4><br />
                                Compensation <b>$70 Hourly</b><br />
                                Benefits Offered: <br />
                                Employment Type: Contractor<br />

                                    Saicon Consultants, Inc. (Saicon) is a certified WBE/MBE IT Consulting company founded in 1998 with 6 regional offices in the US and 3 offices internationally. Saicon offers IT Professional Services (Contract, Contract For Hire, Direct Hire / Perm Placement) to Commercial clients and Government agencies (Federal/State/Local) nationwide. Saicon is CMMI Level 3 appraised.<br />
                                    Duration: 8+ Months
                                    Description:
                                    SACM Identification And Reconciliation Module Experience must
                                    Minimum of 3 years of Service Integration and Management experience
                                    Minimum of 5 years' experience in Service Level measurement methodologies
                                    Minimum of 5 years' experience with reporting requirements analysis, documentation and solution design
                                    Minimum of 3 years of experience with ServiceNow as advanced user
                                </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/saicon-consultants-inc-c66cc262/servicenow-developer-remote-1dbc15a8?job_id=7b6d7fc261fc192959e1cc3593f0bc7a" className="button">Learn more</a></li>
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
