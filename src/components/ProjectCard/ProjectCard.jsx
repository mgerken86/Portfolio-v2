import './ProjectCard.css'
import githubIcon from '../../images/githubIcon.png'
// import travel from '../../images/travel-companion.jpeg'
// import coach from "../../images/coaches-corner.jpeg"
// import trucker from "../../images/trucker.jpeg"

export default function ProjectCard({ project }) {
    console.log(project.img)
    return (
        <div className="projectCardDiv">
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
        </div>
    )
}