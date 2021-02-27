import React from 'react'
import ResultsItem from "./ResultsItem"

const InstructionalText = ({ segment, text, showApplyCTA }) => {
    return (
        <div className="instr-text">
            <p className="instr-text__segment">{segment}</p>
            <p className="instr-text__text">{text}</p>
            {showApplyCTA ? <a className="instr-text__cta-secondary" href="">Apply to the University </a> : null}
        </div>
    )
}

const ResultsList = ({ resultsItems = [], segment, text, showApplyCTA }) => {
    return (
        <div className="results-list">
            <InstructionalText segment={segment} text={text} showApplyCTA={showApplyCTA} />
            <ul>
                {resultsItems.map(item => {
                    return <ResultsItem item={item} />
                })}
            </ul>
        </div>
    )
}



export default ResultsList
