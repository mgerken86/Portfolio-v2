import { useState } from 'react'
import { experienceArr } from '../../utilities/experienceData'
import './ResumePage.css'
import JobCard from '../../components/JobCard/JobCard'
import resume from '../../images/resume.jpeg'

export default function ResumePage() {
    const [jobs, setJobs] = useState(experienceArr)
    
    return (
        <main id="resume">
            <div className="resumePage page">
                <h1>Experience</h1>
                <div className='jobsContainer'>
                    {jobs.map((job, idx) => {
                        return <JobCard
                            job={job}
                            id={idx}
                            key={idx}
                        />
                    })}
                </div>
            </div>
        </main>
    )
}