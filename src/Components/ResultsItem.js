import React from 'react'
import DetailsPanel from "../Components/DetailsPanel"

const ResultsItem = ({item}) => {
    const { name, categories, month, url, description, degreeLevel, deadline, awardAmount } = item;
    return (
        <li className="results-item">
            
            <h3 className="results-item__name"><a href={url} target="_blank">{name}</a></h3>
            
            <div className="results-item__details">
                <p className="results-item__description">{description}</p>
                <DetailsPanel degreeLevel={degreeLevel} deadline={deadline} awardAmount={awardAmount}/>
                
            </div>
            <a className="instr-text__cta" href={url} target="_blank">View scholarship details <span className="tertiary-arrow"></span></a>
        </li>
    )
}

export default ResultsItem
