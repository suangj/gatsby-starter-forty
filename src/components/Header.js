import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>FarAwayJobs</strong> <span>Get your remote job now!</span></Link>
        
        <meta name="google-site-verification" content="-3T6cBhl6-3lN_O74f-E4gtwUCaBHJlcdxZsDrKsiak" />
    
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
        
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
