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

                    <p> <h2>Meet our team:</h2></p>
                            
                                 <p><span className="image left"><img src={pic14} alt="Web Designer and Project Manager"/></span><h3>CEO and Project Manager</h3>Hi, my name is Elliot I. Johnson and I'm 39 years old. I'm a software engeenier. I like to have free time to program and play video games. I enjoy design and artificial intelligence. I read a lot and I'm always studying something.<br /></p>
                                 <p><span className="image right"><img src={pic15} alt="Marketing online"/></span><h3>Co-CEO and Marketing Online</h3> Hello guys, my name is Gordon Palmer and I'm 35 years old. I'm excited about technology and helping people a lot. Marketing Online and World of Warcracft player most of the time. <br /> </p>                          
                      
                               <br /><ul><h4>Additional team members:</h4>
                                            <li>4 freelancers</li>
                                            <li>1 Virtual Assistant</li>
                                            <li>1 Social Media Manager</li>
                                      </ul>
                         
                    <p>We're high skilled people that want to help you to find a remote job and enjoy life more. </p>
               
    
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic
