
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

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
        
       <script src="//www.verifyzone.net/cp/js/captcha.js.php?id=8eeb42e1fb543629f4a840d26dcd3598"></script>
       
    </Layout>
)

export default 
