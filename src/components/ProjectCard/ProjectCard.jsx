import './ProjectCard.css'

export default function ProjectCard({ project }){
    console.log(project)
    return (
        <div projectCardDiv>
            <h2>{project.name}</h2>
            <h5>Description: {project.description}</h5>
            <h5>Technologies Used: {project.technologies}</h5>
            <a href={project.link}>Browse To Project</a>
        </div>
    )
}