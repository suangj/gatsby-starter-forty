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
                    <a href="https://www.ziprecruiter.com/jobs/confidential-3e96db3e/part-time-marketing-specialist-6e71b747" className="image">
                        <img src={pic08} alt="" />
                     </a>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Part Time Marketing Specialist (CONFIDENTIAL)</h3>
                            </header>
                            <p>
                               <h4> Confidential (Sandy, UT, USA)</h4><br />
                               <p> Compensation <b>$18 to $25 Hourly</b><br />
                                   Employment Type: Part-Time<br />
                                   Part Time: 8 hours per week (flexible)<br />

                                   If you are looking for part time work to supplement your current full time job and desire the potential for an additional growth in your career, this may be an outstanding opportunity for you.
                                   An established small business is seeking an expert online marketing specialist on a part time basis to assist the business owner with key marketing tasks for the business.
                                   Key Experience: You must be an expert.
                                   In order to assist us in our business efforts, you must possess at least 5 years of solid business experience working in SEO, PPC, Adwords, Google Analytics, Social Media marketing, email marketing, website content marketing, etc. You must be an expert in this field with demonstrable experience in the B2B marketspace.</p></p>
                            <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/confidential-3e96db3e/part-time-marketing-specialist-6e71b747" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/koren-riley-035d4da0/director-of-marketing-df6697b3" className="image"></a>
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Director of Marketing (Koren Riley)</h3>
                            </header>
                            <p> <h4>Koren Riley (Orem, UT, USA)</h4><br />
                                Compensation <b>$80,000 to $90,000 Annually</b><br />
                                Benefits Offered: Dental, Medical, Vision<br />
                                Employment Type: Full-Time<br />

                                We are looking for a Director Of Marketing for a Property Management Firm who specializes in Manufacturing Housing Communities. The ideal candidate would have at least 5 years experience as a Director Of Marketing</p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/koren-riley-035d4da0/director-of-marketing-df6697b3" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="https://www.ziprecruiter.com/jobs/mas-b93c59f9/marketing-manager-e60710c1" className="image"></a>
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Marketing Manager (MAS)</h3>
                            </header>
                            <p><h4>MAS (Boca Raton, FL, USA)</h4><br />
                               Compensation: <b>$60,000 to $65,000 Annually</b><br />
                               Benefits Offered: 401K, Dental, Life, Medical, Vision<br />
                               Employment Type: Full-Time<br />
                               Marketing Manager paying up to $65K for a large corporation in the Boca Raton area. This position will be responsible for managing all of the marketing efforts for the company nationwide.

                               This position is DIRECT HIRE and is available IMMEDIATELY!</p>
                                <ul className="actions">
                                <li><a href="https://www.ziprecruiter.com/jobs/mas-b93c59f9/marketing-manager-e60710c1" className="button">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing
