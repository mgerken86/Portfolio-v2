import './JobCard.css'
import { useState, useRef, useEffect } from 'react'


export default function ProjectCard({ job, id }) {
    const [showJob, setShowJob] = useState(false)
    const [index, setIndex] = useState(0)
    const timeout = useRef(null)
    const images = job.imgs

    const resetTimeout = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
    }
    //continously clear and re-set timeout
    useEffect(() => {
        resetTimeout();
        timeout.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ), 5000)
        return () => {
            resetTimeout()
        };
    }, [index])


    return (
        <div className={id % 2 === 0 ? "evenJob" : "oddJob"}>
            {!showJob ?
                <div className='jobImgContainer'>
                    <img className='jobImage fade' src={images[index]} alt="" />
                    <div className='jobTitle'>
                        <h5 className='jobH5'>{job.title}</h5>
                        <div className="jobBtnCont">
                            <button className='jobsBtn' onClick={() => setShowJob(!showJob)}>More Info</button>
                        </div>
                    </div>

                </div>
                :
                <div className='jobDetailsContainer'>
                    <div className='jobTitle2'>
                        <h4 className='dutiesH1'>{job.title}</h4>
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