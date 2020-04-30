import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Disclaimer</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Disclaimer</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    
                    <p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at sunwright2110@gmail.com</p>

                    <h2>Disclaimers for FarAwayJobs</h2>

                       <p>All the information on this website - Https://farawayjobs.ga - is published in good faith and for general information purpose only. FarAwayJobs does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (FarAwayJobs), is strictly at your own risk. FarAwayJobs will not be liable for any losses and/or damages in connection with the use of our website.</p>

                       <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>

                       <p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.</p>

                    <h2>Consent</h2>

                       <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

                    <h2>Update</h2>

                       <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>

                </div>
            </section>
        </div>

    </Layout>
)

export default Generic