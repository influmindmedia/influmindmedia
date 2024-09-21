import Logo from "../../assets/query-logo.svg"
// import InstagramLogo from "../../assets/instagram-social.svg"
// import YoutubeLogo from "../../assets/youtube-social.svg"
import LinkedInLogo from "../../assets/linkedin-social.svg"

import "./Query.css"

const Query = () => {
    return (
        <div className="query">
            <div className="glassy-container">
                <h5>Any Queries?</h5>
                <p>Contact our expert and solve any kind of queries</p>
                <a
                    href="https://calendly.com/influmindmedia/joinus"
                    className="get-in-touch"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Get in Touch
                </a>
            </div>

            {/* Social */}
            <div className="social">
                {/* Logo */}
                <img src={Logo} alt="influmind" className="logo" />

                {/* Social Links */}
                <div className="social-links">
                    {/* Instagram */}
                    {/* <img src={InstagramLogo} alt="instagram" /> */}

                    {/* Youtube */}
                    {/* <img src={YoutubeLogo} alt="youtube" /> */}

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/company/influmindmedia"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img src={LinkedInLogo} alt="linkedin" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Query
