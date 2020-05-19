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
            <title>Desginer Jobs</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Designer Job List</h2>
                    </header>
                   </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/cybercoders-02e0c91b/revit-designer-0f0e611e?job_id=2b83f0f88434f2cb1d3e8e4d14bca4f6" className="image">
                        <img src={pic08} alt="" />
                     </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Revit Designer</h3>
                            </header>
                               <h4>CyberCoders (King of Prussia, PA, USA)</h4><br />
                               <p> Compensation <b>$60,000 to $75,000 Annually</b><br />
                                   Benefits Offered: <br />
                                   Employment Type: Full-Time<br />
                                 
                                       Revit Designer
                                       We have been a leader in the construction and service of commercial pools and aquatic facilities for almost 50 years. We are currently looking to add a Revit Designer to our team to assist with 3D piping models and project engineering.
                                       What You Will Be Doing
                                      - 3D Modeling of piping systems for commercial aquatics projects
                                      - Coordinating with internal team for layout that promotes ease of constructability
                                      - Creating piping takeoffs
                                      - Assisting with equipment and technical submittals
                                      - Conducting site inspections
                                      What You Need for this Position
                                      - 1+ years of Revit experience
                                      - Experience with piping systems is highly desirable
                                      What's In It for You
                                      - Competitive salary
                                      - Full Benefits Package (Medical, Dental, Vision)
                                      - Parental Leave
                                      - Professional Development Assistance
                                      - 401k Plan with company match
                                      - Paid Time Off

                               </p>
                                  <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/cybercoders-02e0c91b/revit-designer-0f0e611e?job_id=2b83f0f88434f2cb1d3e8e4d14bca4f6" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/cfs-technology-29b68b2a/ui-ux-designer-aaddf34c" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>UI UX Designer</h3>
                            </header>
                            <p> <h4>CFS - Technology (Portland, OR, USA)</h4><br />
                                Compensation <b>$65,000 to $80,000 Annually</b><br />
                                Benefits Offered: 401K, Dental, Life, Medical, Vision<br />
                                Employment Type: Full-Time<br />
                                
                                SOFTWARE PRODUCT DESIGNER

                                Remote and/or in-office

                                Full-Time | $65-85k

                                (hiring company unable to sponsor Visas at this time)

                                CFS Technology (a premier IT dedicated staffing solution in Portland, OR) is working with an established and growing company who is committed to developing exceptional integration technology and software solutions to meet the growing needs of their customers' business requirements.
                                
                                </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/cfs-technology-29b68b2a/ui-ux-designer-aaddf34c" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/the-get-smart-group-d7f31efc/graphic-designer-ebooks-print-infographics-production-art-04afe118" className="image">
                        <img src={pic10} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Graphic Designer - Ebooks / Print / Infographics / Production Art</h3>
                            </header>
                            <p><h4>The Get Smart Group (Angels Camp, CA, USA)</h4><br />
                               Compensation: <b>$17 to $25 Hourly (plus commission)</b><br />
                               Benefits Offered: 401K, Medica, Vision<br />
                               Employment Type: Part-Time<br />
                               
                               The Get Smart Group is looking to grow our internal design department with the addition of a new remote designer. We are a digital marketing agency creating design output in the following areas:
                               This position is for remote work, though our offices are based in Angels Camp, CA. Our entire team works remotely and we have people all across the US. We live by the deadline and need someone capable of producing quality work within our internal deadline structure.
                             
                             </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/the-get-smart-group-d7f31efc/graphic-designer-ebooks-print-infographics-production-art-04afe118" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
