
import Platforms from "../../assets/platforms.svg"
import Divider from "../../assets/divider.svg"
import InflumindIcon from "../../assets/about-icon.svg"

// import { useEffect, useState } from "react"

import "./Introduction.css"

const Introduction = () => {

    // const [view, setView] = useState(0)

    return (
        <div className="introduction">
            {/* Jumbo Banner */}
            <h1 className="jumbo-banner">
                <p>Grow Brand Awareness,</p>
                <p>Engagement & Traffic</p>
                <p>
                    With <span className="company-name">Influmind Media</span>
                </p>
            </h1>

            {/* Get in Touch */}
            <a
                href="https://calendly.com/influmindmedia/joinus"
                className="get-in-touch"
                rel="noopener noreferrer"
                target="_blank"
            >
                Get in Touch
            </a>

            {/* Platforms */}
            <div className="platform">
                <p>The platforms that we operate on</p>
                <img src={Platforms} alt="platform-list" />
            </div>

            {/* Horizontal Line */}
            <img src={Divider} className="divider" alt="divider" />

            {/* Counters */}
            <div className="counter">
                <div className="count">
                    <h3 id="counter">100M+</h3>
                    <p>Views</p>
                </div>

                <div className="count">
                    <h3 id="counter">30M+</h3>
                    <p>Accounts Reached</p>
                </div>

                <div className="count">
                    <h3 id="counter">30M+</h3>
                    <p>Happy Clients</p>
                </div>
            </div>

            {/* About */}
            <div className="about">
                <img
                    className="icon"
                    src={InflumindIcon}
                    alt="influmind-icon"
                />
                <div className="about-text">
                    <h5 className="sub-heading">About Influmind</h5>
                    <p>
                        Welcome to Influmind Media, where creativity meets
                        influence and brands thrive in the digital landscape. We
                        specialize in crafting compelling social media
                        strategies for influencers and brands alike, leveraging
                        our expertise in account management, influencer
                        marketing, and bespoke content creation. From designing
                        captivating visuals to expert video editing, we empower
                        our clients to stand out and succeed in today&apos;s
                        competitive market. Join us on a journey where
                        innovation drives engagement, and every story is told
                        with impact.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Introduction
