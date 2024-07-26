/* eslint-disable react/prop-types */

import "./ExpertiseCard.css"

const ExpertiseCard = ({
    _background_image,
    _card_image,
    _card_title,
    _card_content,
}) => {
    return (
        <div className="expertise-card">
            <div className="front-side">
                {/* Card Image */}
                <img src={_card_image} alt={_card_title?.toLowerCase() || ""} />

                {/* Card Title */}
                <h6 className="title">{_card_title}</h6>
            </div>

            <div className="back-side">
                {/* Background Image */}
                <img
                    src={_background_image}
                    alt="background-image"
                    className="background-image"
                />

                <div className="back-content">
                    {/* Card Title */}
                    <h6 className="title">{_card_title}</h6>

                    {/* Card Content */}
                    <p className="content">{_card_content}</p>
                </div>
            </div>
        </div>
    )
}

export default ExpertiseCard
