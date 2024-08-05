
import FeedbackCard from "./FeedbackCard"

import NiladriAvatar from "../../assets/niladri-avatar.png"
import TulikaAvatar from "../../assets/tulika-avatar.png"

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
                    _avatar={NiladriAvatar}
                    _message={
                        "Millions of people have viewed my Instagram content because to Influmind Media Agency! They are unparalleled in their growth plan knowledge. Strongly advised!"
                    }
                    _name={"Niladri Das"}
                    _profession={"Influencer"}
                    _title={"India's Niladri became viral right away!"}
                    _instagram_link={"https://www.instagram.com/niladridasofficial/"}
                />
                <FeedbackCard
                    key={"tulika-chatterjee"}
                    _avatar={TulikaAvatar}
                    _message={
                        "Thanks to the skills of Influmind Media Agency, my Instagram post received thousands of views after becoming viral! Their expansion tactics are unmatched. Extremely recommend!"
                    }
                    _name={"Tulika Chatterjee"}
                    _profession={"Influencer"}
                    _title={"Tulika from India went viral from scratch!"}
                    _instagram_link={"https://www.instagram.com/miss_chatterjeeee/"}
                />
            </div>
        </div>
    )
}

export default Feedback
