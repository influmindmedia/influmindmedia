/* eslint-disable react/prop-types */

import "./FeedbackCard.css"

const FeedbackCard = ({ _name, _profession, _title, _message, _avatar, _instagram_link }) => {

    return (
        <div className="feedback-card">
            <div className="upper-section">
                {/* Title */}
                <p className="title">{_title}</p>

                {/* Message */}
                <p className="message">{_message}</p>
            </div>
            <a
                href={_instagram_link}
                className="lower-section"
                rel="noopener noreferrer"
                target="_blank"
            >
                {/* Avatar */}
                <img src={_avatar} alt={_name} className="avatar" />

                {/* Name Section */}
                <div className="name-section">
                    <p className="name">{_name}</p>
                    <p className="profession">{_profession}</p>
                </div>
            </a>
        </div>
    )
}

export default FeedbackCard
