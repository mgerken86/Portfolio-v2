import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProjectsPage.css'
import { projectsArr } from '../../utilities/projectData'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

export default function ProjectsPage() {
    const [projects, setProjects] = useState(projectsArr)
    return (
        <div className="projectsPage page">
            {/* <Link to="/" style={{ textDecoration: 'none' }}>
                <span className='arrowIcon'>⬆︎</span>
            </Link> */}
            <h1>Projects</h1>
            <div className='projectsContainer'>
                {projects.map((project, idx) => {
                    return <ProjectCard
                        project={project}
                        key={idx}
                    />
                })}
            </div>
            {/* <Link to="/resume" style={{ textDecoration: 'none' }}>
                <span className='arrowIcon'>⬇︎</span>
            </Link> */}
        </div>
    )
}