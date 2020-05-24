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
                 <a href="https://www.ziprecruiter.com/jobs/arsenal-media-grouop-4f000e13/graphic-designer-03bec44f?job_id=6d134a0f4c0d0af9aea1636e2fec2be2" className="image">
                        <img src={pic08} alt="" />
                     </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Graphic Designer</h3>
                            </header>
                               <h4>Arsenal Media Grouop Phoenix, AZ, USA</h4><br />
                               <p> Compensation <b>$35,000 to $50,000 Annually</b><br />
                                   Benefits Offered: Medical<br />
                                   Employment Type: Full-Time<br />
                                 
                                        Arsenal Media Group built from the most dynamic, pioneering, storytellers in the Conservative movement - and we’re hiring!

                                        We are seeking a Graphic Designer to join our team! You will create graphics for social media posts and advertising. Candidates should be boundlessly creative, and roll with a continuous, exciting, ever-changing production schedule. You must be able to learn on the fly, be technically adept, professional and maintain a functional mastery of Photoshop.


                               </p>
                                  <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/arsenal-media-grouop-4f000e13/graphic-designer-03bec44f?job_id=6d134a0f4c0d0af9aea1636e2fec2be2" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.glassdoor.com/Job/us-graphic-designer-remote-jobs-SRCH_IL.0,2_IN1_KO3,26.htm?fromAge=1" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Graphic Designer</h3>
                            </header>
                            <p> <h4>OrangeShine in Cerritos, CA, USA</h4><br />
                                Compensation <b>$20.00 to $24.00 /hour</b><br />
                                Benefits Offered: 401(k) Matching, Dental Insurance, Health Insurance, Life Insurance, Paid Time Off, Vision Insurance<br />
                                Employment Type: Full-Time<br />
                                
                                    Job requirements

                                    - Minimum 2+ years experience working as a graphic designer in a fast-paced, team oriented environment
                                    - BA/BS in Graphic Design or similar field
                                    - A portfolio demonstrating a core competency in graphic design
                                    - Hierarchy/Layout/Typography skill set.
                                    - Complete knowledge and expert use of Adobe Creative Suite 5: Photoshop, Illustrator, Indesign
                                    - Familiarity with cosmetics, fashion and beauty trends
                                    - Excellent attention to detail and time management skills
                                    - Able to prioritize projects to meet strict deadlines
                                    - Above average verbal and written communication skills
                                    - Flexibility and willingness to learn and understand business aspects
                                    - MS Office knowledge and advanced use of Word, Excel, Outlook
                                    - Understanding UX & UI design is a plus.
   
                                </p>
                                <ul className="actions">
                                <li><a href="https://www.glassdoor.com/Job/us-graphic-designer-remote-jobs-SRCH_IL.0,2_IN1_KO3,26.htm?fromAge=1" className="button">Learn more</a></li>
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
