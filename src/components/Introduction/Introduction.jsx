
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
            <button className="get-in-touch">Get in Touch</button>

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed egestas sodales facilisis. Curabitur in egestas
                        justo. Fusce sed mi leo. Etiam feugiat justo bibendum
                        velit venenatis, vel facilisis diam maximus. Nullam eget
                        nunc fringilla, aliquet urna eget, mollis magna. Nam id
                        nisi vulputate, dignissim arcu nec, fermentum libero.
                        Cras rutrum, metus eu efficitur lacinia, arcu turpis
                        rhoncus massa, nec cursus turpis nunc vitae purus.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae;
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Introduction
