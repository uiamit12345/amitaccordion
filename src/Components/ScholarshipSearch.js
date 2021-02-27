import React, { useState, useEffect } from 'react'
import scholarshipData from "../utils/data.json"
import { filterByCategory } from "../utils/filterByCategory"
import { filterByDegreeLevel } from "../utils/filterByDegreeLevel"
import Collapsible from "./Collapsible"
import ResultsList from "./ResultsList"
import Filter from "./Filter"

const ScholarshipSearch = () => {
    
    // const alumniScholarships = filterByCategory(scholarshipData.scholarships, "alumni");
    // const newStudentScholarships = filterByCategory(scholarshipData.scholarships, "new-student");
    // const currentStudentScholarships = filterByCategory(scholarshipData.scholarships, "current-student");
    // const returningStudentScholarships = filterByCategory(scholarshipData.scholarships, "returning-student");
    const [ degreeLevel, setDegreeLevel ] = useState("All degree levels")

    const handleChange = (event) => {
        setDegreeLevel(event.target.value);
      };

    const categories = [
        {
            title: "New student scholarships",
            id: "new-student-scholarships", 
            scholarships: filterByCategory(scholarshipData.scholarships, "new-student"),
            helperText: {
                segment: "New students:",
                text: "Make sure you apply to the university before applying for scholarships.",
                showApplyCTA: true
            }    
        },
        {
            title: "Alumni scholarships",
            id: "alumni-scholarships",  
            scholarships: filterByCategory(scholarshipData.scholarships, "alumni"),
            helperText: {
                segment: "University of Phoenix alumni:",
                text: "You need to re-apply to the University before you apply for scholarships.",
                showApplyCTA: true
            }    
        },
        {
            title: "Returning student scholarships",
            id: "returning-student-scholarships",  
            scholarships: filterByCategory(scholarshipData.scholarships, "returning-student"),
            helperText: {
                segment: "Returning students:",
                text: "You need to re-apply to the University before you apply for scholarships.",
                showApplyCTA: true
            }    
        },
        {
            title: "Current student scholarships",
            id: "current-student-scholarships",  
            scholarships: filterByCategory(scholarshipData.scholarships, "current-student"),
            helperText: {
                segment: "Current students:",
                text: "Apply for any scholarships that you believe you are eligibile for right away.",
                showApplyCTA: false
            }    
        },

    ]

    useEffect(() => {
    }, [])

    return (
        <div className="scholarship-search">
            <Filter handleChange={handleChange} degreeLevel={degreeLevel} />
            {categories.map(category => {
                const resultsItems = filterByDegreeLevel(category.scholarships, degreeLevel);
                return <Collapsible 
                        title={`${category.title} (${resultsItems.length})`}
                        id={category.id} 
                        content={<ResultsList resultsItems={resultsItems} segment={category.helperText.segment} text={category.helperText.text} showApplyCTA={category.helperText.showApplyCTA} />} 
                        />
            })
        }
        </div>
    )
}

export default ScholarshipSearch
