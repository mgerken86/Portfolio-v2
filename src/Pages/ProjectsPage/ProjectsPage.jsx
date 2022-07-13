import { useState } from 'react'
import './ProjectsPage.css'
import { projectsArr } from '../../utilities/projectData'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

export default function ProjectsPage() {
    const [projects, setProjects] = useState(projectsArr)
    return (
        <div className="projectsPage">
            <div className='projectsContainer'>
            <h1>Projects</h1>
            {projects.map((project, idx) => {
                return <ProjectCard
                    project={project}
                    key={idx}
                />
            })}
            </div>
        </div>
    )
}