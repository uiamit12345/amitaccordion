import React from 'react'

const DetailsPanel = ({ degreeLevel, awardAmount, deadline }) => {
    return (
        <div className="details-panel">
            <div className="details-panel__field">
                <p className="details-panel__value">{degreeLevel}</p>
                <p className="details-panel__label">Degree level</p>
            </div>
            <div className="details-panel__field">
                <p className="details-panel__value">{awardAmount}</p>
                <p className="details-panel__label">Award amount</p>
            </div>
            <div className="details-panel__field">
                <p className="details-panel__value">{deadline}</p>
                <p className="details-panel__label">Application deadline</p>
            </div>
        </div>
    )
}

export default DetailsPanel
