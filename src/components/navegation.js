import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navegation = ({ bgColor }) => {
    return <nav className={`navbar ${bgColor} navbar-expand-lg navbar-light fixed-top`} id="mainNav">
        <div className="container">
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
