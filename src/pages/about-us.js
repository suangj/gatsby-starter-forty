import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic13 from '../assets/images/pic13.webp'
import pic14 from '../assets/images/pic14.webp'
import pic15 from '../assets/images/pic15.webp'

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
                    <span className="image main"><img src={pic13} alt="" /></span>
                    <p> Because we believe it is possible to have a full or part time job from home, yes, from the comfort of your living room you can acquire a decent salary while spending time with your family, pets or simply playing video games.<br /></p>
                    
                    <p> Tired of searching hours and hours for remote jobs?<br />
                        Tired of your mailbox being filled with thousands of emails?
                        FarAwayJobs makes it simple, we search and select the best job offers in different careers just for you!<br /></p>

                    <p> We started this project at the beginning of 2019 to facilitate the job search for people and in turn fill job vacancies in many large and small companies. <br /></p>

                    <p> At FarAwayJobs we like to help everyone and we will help you find your dream job so that you can do it from the comfort of your home. <br /></p>

                    <p> <h2>Meet our team:</h2> <br /></p>
    
                    <span className="image fit"><img src={pic14} alt="" /></span>
                    <div className="box">
                                    <p>Hi, my name is Elliot I. Johnson and I'm 39 years old. I'm a software engeenier. </p>
                                </div>

                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
