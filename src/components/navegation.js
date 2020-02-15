import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navegation = ({ bgColor }) => {
    return <nav className={`navbar ${bgColor} navbar-expand-lg navbar-light fixed-top`} id="mainNav">
        <div className="container">
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#download">Download</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#features">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>;
}
Navegation.propTypes = {
    bgColor: PropTypes.string
}
Navegation.defaultProps = {
    bgColor: ''
}
export default Navegation
