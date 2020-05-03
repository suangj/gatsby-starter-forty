import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.webp'
import pic02 from '../assets/images/pic02.webp'
import pic03 from '../assets/images/pic03.webp'
import pic04 from '../assets/images/pic04.webp'
import pic05 from '../assets/images/pic05.webp'
import pic06 from '../assets/images/pic06.webp'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="FarAwayJobs - Remote Jobs For You"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Online Marketing</h3>
                                <p>Online Marketing is one of the most popular and varied career <br /> 
                                   option these days, here you can find Jobs related to <br/>
                                   affiliate marketing, inbound marketing, PPC and SEO.</p>
                            </header>
                            <Link to="/job-list" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Developer</h3>
                                <p>This category is where a huge variety of highly-tech friendly <br />
                                   jobs wait for you. Can include anything from software engineering <br />
                                   to app development and web design.</p>
                            </header>
                            <Link to="/job-list" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Designer</h3>
                                <p>One of the most biggest career out there. High demand. A wide variety of Jobs <br />
                                   ranging from graphic design to web design, to UX and UI desig and a lot more.</p>
                            </header>
                            <Link to="/job-list" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Writer</h3>
                                <p>Copywriting and blog writing are one of the most popular ways to get started <br />
                                   with this career, also this is one of the best option if you're a traveler <br />
                                   and like to share their experience and a lot more of writing oportunities.</p>
                            </header>
                            <Link to="/job-list" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Customer Support</h3>
                                <p>One of the most country flexible career, all you need to start is a <br />
                                   laptop with internet conecction, chat and call software, and great <br /> 
                                   Customer Service.</p>
                            </header>
                            <Link to="/job-list" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Data Entry</h3>
                                <p>A high demand skill that keep growing everyday, is practical and <br />
                                   let you work from almost anywhere with a pretty flex work flow. <br />
                                   Jobs can vary from tracking inventory and shipment to plan creations.</p>
                            </header>
                            <Link to="/job-list" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Find your dream job</h2>
                            </header>
                            <p> These days many companies are offering remote jobs opportunities, be it a virtual assistant <br /> 
                                or a freelancer, a professional worker. It is your turn to work more comfortably, from your home!.</p>
                            <ul className="actions">
                                <li><Link to="/job-list" className="button next">Start here!</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
