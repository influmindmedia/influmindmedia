
import { Link } from "react-scroll"

// import Logo from "../../assets/header-logo.png"
import Logo from "../../assets/query-logo.svg"

import "./Header.css"

const Header = () => {
    return (
        <nav className="header">
            {/* Left Section */}
            <div className="left-section">
                {/* Logo */}
                <img
                    src={Logo}
                    alt="influmind-logo"
                    className="influmind-logo"
                />
            </div>

            {/* Right Section */}
            <div className="right-section">
                {/* Our Services */}
                <Link smooth to="service" duration={1000}>
                    <button className="feature-button">Our Services</button>
                </Link>

                {/* Our Work */}
                <Link smooth to="work" duration={1000}>
                    <button className="feature-button">Our Work</button>
                </Link>

                {/* Contact Us */}
                <Link smooth to="query" duration={1200}>
                    <button className="contact-button">Contact Us</button>
                </Link>
            </div>
        </nav>
    )
}

export default Header
