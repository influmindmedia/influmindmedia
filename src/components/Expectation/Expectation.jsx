
import Point from "./Point"

import "./Expectation.css"

const Expectation = () => {
    return (
        <div className="expectation">
            <div className="expectation-content">
                <h4 className="expectation-heading">What can you expect?</h4>

                <div className="data-section">
                    {/* Problems */}
                    <div className="problems">
                        {/* Problem Heading */}
                        <h6>Problems</h6>

                        {/* List of problems */}
                        <Point
                            key={"low-engagement-problem"}
                            _item_type={"problem"}
                            _text={"Low Engagement"}
                        />
                        <Point
                            key={"inconsistent-branding-problem"}
                            _item_type={"problem"}
                            _text={"Inconsistent Branding"}
                        />
                        <Point
                            key={"growing-followers-problem"}
                            _item_type={"problem"}
                            _text={"Growing Followers"}
                        />
                        <Point
                            key={"poor-content-quality-problem"}
                            _item_type={"problem"}
                            _text={"Poor Content Quality"}
                        />
                        <Point
                            key={"ineffective-campaigns-problem"}
                            _item_type={"problem"}
                            _text={"Ineffective Campaigns"}
                        />
                        <Point
                            key={"time-management-problem"}
                            _item_type={"problem"}
                            _text={"Time Management"}
                        />
                        <Point
                            key={"influencer-connection-problem"}
                            _item_type={"problem"}
                            _text={"Influencer Connection"}
                        />
                        <Point
                            key={"analytics-tracking-problem"}
                            _item_type={"problem"}
                            _text={"Analytics Tracking"}
                        />
                        <Point
                            key={"ad-management-problem"}
                            _item_type={"problem"}
                            _text={"Ad Management"}
                        />
                        <Point
                            key={"limited-reach-problem"}
                            _item_type={"problem"}
                            _text={"Limited Reach"}
                        />
                    </div>

                    {/* Solutions */}
                    <div className="solutions">
                        {/* Solution Heading */}
                        <h6>Solutions</h6>

                        {/* List of solutions */}
                        <Point
                            key={"low-engagement-solution"}
                            _item_type={"solution"}
                            _text={"Targeted content strategies, audience analysis"}
                        />
                        <Point
                            key={"inconsistent-branding-solution"}
                            _item_type={"solution"}
                            _text={"Cohesive brand identity and visual guidelines"}
                        />
                        <Point
                            key={"growing-followers-solution"}
                            _item_type={"solution"}
                            _text={"Collaborations, targeted promotions"}
                        />
                        <Point
                            key={"poor-content-quality-solution"}
                            _item_type={"solution"}
                            _text={"Professional design, video editing"}
                        />
                        <Point
                            key={"ineffective-campaigns-solution"}
                            _item_type={"solution"}
                            _text={"Data-driven marketing for better ROI"}
                        />
                        <Point
                            key={"time-management-solution"}
                            _item_type={"solution"}
                            _text={"Comprehensive social media management"}
                        />
                        <Point
                            key={"influencer-connection-solution"}
                            _item_type={"solution"}
                            _text={"Strategic partnerships"}
                        />
                        <Point
                            key={"analytics-tracking-solution"}
                            _item_type={"solution"}
                            _text={"Detailed reports, optimization recommendations"}
                        />
                        <Point
                            key={"ad-management-solution"}
                            _item_type={"solution"}
                            _text={"Optimized ad campaigns"}
                        />
                        <Point
                            key={"limited-reach-solution"}
                            _item_type={"solution"}
                            _text={"Targeted advertising, SEO strategies"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expectation
