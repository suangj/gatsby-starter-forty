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
                    <a href="https://www.flexjobs.com/publicjobs/payroll-clerk--1235683" className="image">
                        <img src={pic08} alt="" />
                     </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Payroll Clerk</h3>
                            </header>
                               <h4>(Joliet, IL, USA)</h4><br />
                               <p> Compensation <b>	17.00 USD / Hourly</b><br />
                                   Benefits Offered:<br />
                                   Employment Type: 	Temporary, Short-Term<br />
                                   
                                   Optional remote, 1-month temporary job for candidate who will be responsible for payroll for 200 employees, entering information regarding salary, hourly pay, shift differentials, and new codes regarding COVID19. 3-5 years' exp. req. $17-$25/hour.
   
   
                               </p>
                                  <ul className="actions">
                                <li><a href="https://www.flexjobs.com/publicjobs/payroll-clerk--1235683" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.flexjobs.com/publicjobs/administrative-assistants-1235244" className="image">
                        <img src={pic09} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Administrative Assistants</h3>
                            </header>
                            <p> <h4>	(Denver, CO, USA)</h4><br />
                                Compensation <b>17 USD / Hourly</b><br />
                                Benefits Offered: <br />
                                Employment Type: Freelance, Temporary<br />
                            
                               Seeking administrative assistants who can answer calls, schedule appointments, file documents, sort mail, & manage database information. Must have at least a year of recent exp. in a similar position. This is a temp/contract job. Teleworking is possible.
                            </p>
                                <ul className="actions">
                                <li><a href="https://www.flexjobs.com/publicjobs/administrative-assistants-1235244" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.flexjobs.com/publicjobs/loan-processor-1235968" className="image">
                        <img src={pic10} alt="" />
                    </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3></h3>
                            </header>
                            <p><h4>Chicago, IL, USA </h4><br />
                               Compensation: <b>40.00 USD / Annually</b><br />
                               Benefits Offered: <br />
                               Employment Type: 	Employee, Full-Time<br />
                               
                               
                               A remote loan processor is needed to be responsible for the processing of commercial loans and preparing them for closing, verify customer documentation and information to identify consistencies and demonstrate knowledge of loan programs.
                               
                            </p>
                                <ul className="actions">
                                <li><a href="https://www.flexjobs.com/publicjobs/loan-processor-1235968" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
