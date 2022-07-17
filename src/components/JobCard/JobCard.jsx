import './JobCard.css'
import { useState } from 'react'

export default function ProjectCard({ job, id }) {
    const [showJob, setShowJob] = useState(false)

    return (
        <div className={id % 2 === 0 ? "evenJob" : "oddJob"}>
            {!showJob ?
                    <div className='jobImgContainer'>
                        <img className='jobImage' src={job.img} alt="" />
                        <h5 id='jobTitle'>{job.title}</h5>
                    </div>
            :
                <>

                </>
            }
        </div>
    )
}