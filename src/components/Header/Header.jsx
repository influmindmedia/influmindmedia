
import Logo from "../../assets/header-logo.svg"

import "./Header.css"

const Header = () => {
    return (
        <nav className="header">
            {/* Left Section */}
            <div className="left-section">
                {/* Logo */}
                <img src={Logo} alt="influmind-logo" />
            </div>

            {/* Right Section */}
            <div className="right-section">
                {/* Our Services */}
                <button className="feature-button">Our Services</button>

                {/* Our Work */}
                <button className="feature-button">Our Work</button>

                {/* Contact Us */}
                <button className="contact-button">Contact Us</button>
            </div>
        </nav>
    )
}

export default Header
