
import ServiceCard from "./ServiceCard"

import InstagramLogo from "../../assets/instagram_logo.svg"
import GoogleAdsLogo from "../../assets/google_ads_logo.png"
import YouTubeLogo from "../../assets/youtube_logo.png"
import LinkedInLogo from "../../assets/linked_in_logo.png"

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
                    At Influmind Media, we specialize in social media
                    management, influencer marketing, creative content
                    creation—including design and video editing—and strategic
                    brand consulting. Partner with us to elevate your digital
                    presence and achieve your business goals with precision and
                    creativity.
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
                        _detail={
                            "Unlock Instagram growth with Influmind Media. We optimize content engage audiences, and maximize visibility for impactful results."
                        }
                    />

                    {/* Google Ads */}
                    <ServiceCard
                        key={"google-ads"}
                        _name={"Google Ads"}
                        _logo={GoogleAdsLogo}
                        _detail={
                            "Scale your business with Influmind Media's Google Ads expertise. We optimize campaigns, maximize ROI, and drive targeted traffic for sustainable growth."
                        }
                    />
                </div>

                <div className="right-section">
                    {/* YouTube */}
                    <ServiceCard
                        key={"youtube"}
                        _name={"YouTube"}
                        _logo={YouTubeLogo}
                        _detail={
                            "Transform your YouTube channel with Influmind Media. We enhance content, optimize SEO, and engage viewers to drive growth and maximize impact."
                        }
                    />

                    {/* LinkedIn */}
                    <ServiceCard
                        key={"linkedin"}
                        _name={"LinkedIn"}
                        _logo={LinkedInLogo}
                        _detail={
                            "Elevate your LinkedIn presence with Influmind Media. We optimize profiles, curate engaging content, and connect you with industry leaders for strategic growth."
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Service
