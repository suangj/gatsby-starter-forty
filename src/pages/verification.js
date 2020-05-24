
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic13 from '../assets/images/pic13.webp'
import pic14 from '../assets/images/pic14.webp'
import pic15 from '../assets/images/pic15.webp'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Verification!</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Verification</h1>
                    </header>
                    
                    <p> In order to continue you need to verificate you're not a robot</p>
                    
                    <div data-captcha-enable="true"></div>
               
    
                </div>
            </section>
        </div>
    </Layout>
<script src="//www.verifyzone.net/cp/js/captcha.js.php?id=8eeb42e1fb543629f4a840d26dcd3598"></script>
       
)

export default 
