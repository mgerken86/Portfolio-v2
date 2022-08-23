import { useState, useEffect } from 'react'
import { experienceArr } from '../../utilities/experienceData'
import './ResumePage.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import JobCard from '../../components/JobCard/JobCard'


export default function ResumePage() {
    const [jobs, setJobs] = useState(experienceArr)
    const [index, setIndex] = useState(0)

    //initialize animate-on-scroll
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <main id="resume">
            <div className="resumePage page">
                <h1 className='normalH1'>Resume</h1>
                <div className='jobsContainer'>
                    <JobCard
                        job={jobs[index]}
                        id={index}
                        key={index}
                    />
                    {/* {jobs.map((job, idx) => {
                        return <JobCard
                            job={job}
                            id={idx}
                            key={idx}
                        />
                    })} */}
                    <div id='changeJobCont'>
                        {index > 0 &&
                            <button
                                data-aos='fade-up-right'
                                onClick={() => setIndex(index - 1)}
                                className="jobsBtn"
                                id='previousJobBtn'>
                                <span className='arrowIcon'>⬅︎</span><br /> {jobs[index - 1].title}
                            </button>}
                        {index < jobs.length - 1 &&
                            <button
                                data-aos='fade-up-left'
                                onClick={() => setIndex(index + 1)}
                                className="jobsBtn"
                                id='nextJobBtn'>
                                <span className='arrowIcon'>⮕</span><br /> {jobs[index + 1].title}
                            </button>}
                    </div>
                </div>
                <a 
                data-aos='zoom-in-down'
                href="Resume/Mark-Gerken-resume.pdf" download id='resumeDownload'>
                    <img src="pubImages/download.png" alt="" /><br />
                    Download my resume
                </a>
            </div>
        </main>
    )
}