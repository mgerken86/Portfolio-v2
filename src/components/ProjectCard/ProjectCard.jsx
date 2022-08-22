import './ProjectCard.css'
import githubIcon from '../../images/githubIcon.png'
import { useState, useRef, useEffect } from 'react'


export default function ProjectCard({ project, id }) {
    const [showVideo, setShowVideo] = useState(false)
    const [showImage, setShowImage] = useState(true)
    const [index, setIndex] = useState(0)
    const timeout = useRef(null)
    const images = project.img

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
        <div>
            {!showImage ?
                <div
                    className={id % 2 === 0 ? 'projectCardDiv evenProj' : 'projectCardDiv oddProj'}>

                    {!showVideo ?
                        <>
                            <div id="lColumn">
                                <h2>{project.name}</h2>
                                <h5>{project.description}</h5>
                                <br />
                                <h5>Technologies Used: {project.technologies}</h5>
                                <div className='linksContainer'>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className='projectBtn'>Deployed Project</button>
                                    </a>
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
                                    <button
                                        onClick={() => setShowVideo(!showVideo)}
                                        className='projectBtn'>Sample Video
                                    </button>
                                </div>
                            </div>
                            <div id="rColumn">
                                <img
                                    onClick={() => {
                                        setShowImage(!showImage)
                                        setIndex(0)}}
                                    src={project.img[0]}
                                    alt=""
                                />
                            </div>
                        </> : <div className='movieContainer'>
                            <button
                                onClick={() => setShowVideo(!showVideo)}
                                className='projectBtn'>Go Back
                            </button>
                            <video src={project.video} autoPlay muted></video>
                        </div>
                    } </div> :
                <div
                    className='projClick'
                    onClick={() => setShowImage(!showImage)}
                >
                    <img
                        src={images[index]}
                        className="largeProjImg fade"
                        alt="Project"
                        key={index}
                    />
                    <h1 id="projH1">{project.name}</h1>
                </div>}
        </div>
    )
}
