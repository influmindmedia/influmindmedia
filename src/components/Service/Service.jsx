
import ServiceCard from "./ServiceCard"

import InstagramLogo from "../../assets/instagram_logo.svg"
import GoogleAdsLogo from "../../assets/google_ads_logo.svg"
import YouTubeLogo from "../../assets/youtube_logo.svg"
import LinkedInLogo from "../../assets/linkedIn_logo.svg"

import "./Service.css"

const Service = () => {
    return (
        <div className="service">
            {/* Text Section */}
            <div className="text-section">
                <h4 className="service-heading">
                    Discover <br />
                    Our Services
                </h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    egestas sodales facilisis. Curabitur in egestas justo. Fusce
                    sed mi leo. Etiam feugiat justo bibendum velit venenatis,
                    vel facilisis diam maximus. Nullam eget nunc fringilla,
                    aliquet urna eget, mollis magna. Nam id nisi vulputate,
                    dignissim arcu nec, fermentum libero.
                </p>
            </div>

            {/* Service Card */}
            <div className="service-cards">
                <div className="left-section">
                    {/* Instagram */}
                    <ServiceCard
                        key={"instagram"}
                        _name={"Instagram"}
                        _logo={InstagramLogo}
                        _detail={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sodales facilisis. Curabitur in egestas justo. Fusce sed mi leo."}
                    />

                    {/* Google Ads */}
                    <ServiceCard
                        key={"google-ads"}
                        _name={"Google Ads"}
                        _logo={GoogleAdsLogo}
                        _detail={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sodales facilisis. Curabitur in egestas justo. Fusce sed mi leo."}
                    />
                </div>

                <div className="right-section">
                    {/* YouTube */}
                    <ServiceCard
                        key={"youtube"}
                        _name={"YouTube"}
                        _logo={YouTubeLogo}
                        _detail={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sodales facilisis. Curabitur in egestas justo. Fusce sed mi leo."}
                    />

                    {/* LinkedIn */}
                    <ServiceCard
                        key={"linkedin"}
                        _name={"LinkedIn"}
                        _logo={LinkedInLogo}
                        _detail={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas sodales facilisis. Curabitur in egestas justo. Fusce sed mi leo."}
                    />
                </div>
            </div>
        </div>
    )
}

export default Service
