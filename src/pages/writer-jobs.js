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
                    <a href="https://www.ziprecruiter.com/jobs/sharpedge-solutions-inc-96cfb783/technical-writer-instruction-designer-content-writer-737381f8?job_id=1ef2422f40516049872e808e0aece2e2" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Technical Writer / Instruction Designer/ Content Writer</h3>
                            </header>
                            <p> <h4>Sharpedge Solutions Inc (Menlo Park, CA, USA)</h4><br />
                                Compensation <b>$49 to $50 Hourly</b><br />
                                Benefits Offered: <br />
                                Employment Type: Contractor<br />
                                    
                                   Primary Skills: Technical Writing, Process Flows, Training Content Design and Development, Wiki, Video Creation

                                   Job Description:

                                  * 7 - 17 Years of experience in Technical Writing, including creation of different types of content, including user guides, quick reference manuals and Wikis (Must have)

                                  * Minimum 2 years of experience in instructional design of training content, including design and development of interactive content authoring tools, including Articulate Storyline, Adobe Captivate (Nice to have)

                                  * 2-5 years of Experience documenting and creating process flows of complex IT systems and applications (Must have)

                                  * Experience in technical writing of software and system upgrades (must have)

                                  * Should be well versed in understanding key touchpoints to extract "how" & "what" needed for documenting workflows (must have)

                                  * Should have extensive experience in Wiki content creation (must have), video creation (nice to have)

                                  * Should be familiar with standard IT industry terminology such as storage, database, server, architecture (PLUS)

                                  * Familiar with basic end to end project management life cycle to manage deliverables (must have)

                                  * Manage updates and revisions to technical content (must have)

                                  * Co-ordinate with cross functional stakeholders to gather information and document test procedures (must have)

                                  * Write requirement documents that will be shared with remote teams for understanding the scope and scheduling baseline of deliverables (must have)

                                  * Working experience and sound knowledge of video documentation tools such as Camtasia (nice to have)

                                  * Knowledge of word processing authoring tools, such as MS Office 
                                
                              </p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/sharpedge-solutions-inc-96cfb783/technical-writer-instruction-designer-content-writer-737381f8?job_id=1ef2422f40516049872e808e0aece2e2" className="button">Learn more</a></li>
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
