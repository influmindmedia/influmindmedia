/* eslint-disable react/prop-types */

import "./ServiceCard.css"

const ServiceCard = ({ _logo, _name, _detail }) => {
    return <div className="service-card">

        {/* Service Logo */}
        <img className="service-logo" src={_logo} alt={`${_name}-logo`} />

        {/* Service Name */}
        <h5 className="service-name">
            {_name}
        </h5>

        {/* Service Details */}
        <p className="service-detail">
            {_detail}
        </p>
    </div>
}

export default ServiceCard
