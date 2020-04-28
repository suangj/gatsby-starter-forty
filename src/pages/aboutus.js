import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About Us</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p> Because we believe it is possible to have a full or part time job from home, yes, from the comfort of your living room you can acquire a decent salary while spending time with your family, pets or simply playing video games.<br />
                        Tired of searching hours and hours for remote jobs?<br />
                        Tired of your mailbox being filled with thousands of emails?
                        FarAwayJobs makes it simple, we search and select the best job offers in different careers just for you!<br />

                        We started this project at the beginning of 2019 to facilitate the job search for people and in turn fill job vacancies in many large and small companies. <br />

                        At FarAwayJobs we like to help everyone and we will help you find your dream job so that you can do it from the comfort of your home. <br />

                        Meet our team: <br /></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
