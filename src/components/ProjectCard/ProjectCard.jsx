import './ProjectCard.css'
import githubIcon from '../../images/githubIcon.png'
import { useState } from 'react'

export default function ProjectCard({ project }) {
    const [showVideo, setShowVideo] = useState(false)

    return (
        <div className="projectCardDiv">
            {showVideo == false ? <>
                <div id="lColumn">
                    <h2>{project.name}</h2>
                    <h5>{project.description}</h5>
                    <h5>Technologies Used: {project.technologies}</h5>
                    <div className='linksContainer'>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='projectBtn'>See Deployed Project</button>
                        </a>
                        <button
                            onClick={() => setShowVideo(!showVideo)}
                            className='projectBtn'>See Sample of Project
                        </button>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className='githubIcon'
                                src={githubIcon} alt=""
                            />
                        </a>
                    </div>
                </div>
                <div id="rColumn">
                    <img src={project.img} alt="" />
                </div>
            </> : <>
            <button
                            onClick={() => setShowVideo(!showVideo)}
                            className='projectBtn'>See Sample of Project
                        </button>
                </>
                }
        </div>
    )
}