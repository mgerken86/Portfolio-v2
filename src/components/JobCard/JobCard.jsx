import './JobCard.css'
import { useState } from 'react'

export default function ProjectCard({ job, id }) {
    const [showJob, setShowJob] = useState(false)

    return (
        <div className={id % 2 === 0 ? "evenJob" : "oddJob"}>
            {!showJob ?
                <div className='jobImgContainer'>
                    <img className='jobImage' src={job.img} alt="" />
                    <div className='jobTitle'>
                        <h5 className='jobH5'>{job.title}</h5>
                        <button className='jobsBtn' onClick={() => setShowJob(!showJob)}>More Info</button>
                    </div>

                </div>
                :
                <div className='jobDetailsContainer'>
                    <div className='jobTitle2'>
                        <h5 className='jobH5'>{job.title}</h5>
                        <h3>{job.employer}</h3>
                        <h3>{job.dates}</h3>
                    </div>
                    <div className='jobDuties'>
                        <h3>Duties:</h3>
                        {job.duties.map(duty => {
                            return <li>{duty}</li>
                        })}
                    </div>
                    <button className='jobsBtn' onClick={() => setShowJob(!showJob)}>Go Back</button>
                </div>
            }
        </div>
    )
}