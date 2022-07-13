import './ProjectCard.css'
import githubIcon from '../../images/githubIcon.png'

export default function ProjectCard({ project }) {
    console.log(project)
    return (
        <div className="projectCardDiv">
            <h2>{project.name}</h2>
            <h5>Description: {project.description}</h5>
            <h5>Technologies Used: {project.technologies}</h5>
            <div className='linksContainer'>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className='projectBtn'>Browse To Project</button>
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
            </div>
        </div>
    )
}