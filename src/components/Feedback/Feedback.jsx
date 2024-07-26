
import FeedbackCard from "./FeedbackCard"

import SampleAvatar from "../../assets/sample-avatar.png"

import "./Feedback.css"

const Feedback = () => {
    return (
        <div className="feedback">
            {/* Heading */}
            <h4 className="feedback-heading">What People Say</h4>

            {/* Feedback Card */}
            <div className="feedback-list">
                <FeedbackCard
                    key={"niladri_das"}
                    _avatar={SampleAvatar}
                    _message={
                        "Thanks to Influmind Media Agency, my Instagram content went viral with millions of views! Their expertise in growth strategy is unmatched. Highly recommend!"
                    }
                    _name={"Niladri Das"}
                    _profession={"Influencer"}
                    _title={"Niladri From India went viral from scratch!"}
                />
                <FeedbackCard
                    key={"tulika-chatterjee"}
                    _avatar={SampleAvatar}
                    _message={
                        "With Influmind Media Agency's expertise, my Instagram content went viral, amassing millions of views! Their growth strategies are unparalleled. Highly recommend!"
                    }
                    _name={"Tulika Chatterjee"}
                    _profession={"Influencer"}
                    _title={"Tulika from India went viral from scratch!"}
                />
            </div>
        </div>
    )
}

export default Feedback
