
import Logo from "../../assets/header-logo.svg"
import InstagramLogo from "../../assets/instagram-social.svg"
import YoutubeLogo from "../../assets/youtube-social.svg"
import LinkedInLogo from "../../assets/linkedin-social.svg"

import "./Query.css"

const Query = () => {
    return (
        <div className="query">
            <div className="glassy-container">
                <h5>Any Queries?</h5>
                <p>Contact our expert and solve any kind of queries</p>
                <button className="get-in-touch">Get in Touch</button>
            </div>

            {/* Social */}
            <div className="social">

                {/* Logo */}
                <img src={Logo} alt="influmind" className="logo" />

                {/* Social Links */}
                <div className="social-links">

                    {/* Instagram */}
                    <img src={InstagramLogo} alt="instagram" />

                    {/* Youtube */}
                    <img src={YoutubeLogo} alt="youtube" />

                    {/* LinkedIn */}
                    <img src={LinkedInLogo} alt="linkedin" />

                </div>
            </div>
        </div>
    )
}

export default Query
