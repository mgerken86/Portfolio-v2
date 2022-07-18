import { useState } from 'react'
import './ProjectsPage.css'
import { projectsArr } from '../../utilities/projectData'
import ProjectCard from '../../components/ProjectCard/ProjectCard'


export default function ProjectsPage() {
    const [projects, setProjects] = useState(projectsArr)
    return (
        <main id="projects">
            <div className="projectsPage page">
                <h1>My work</h1>
                <div className='projectsContainer'>
                    {projects.map((project, idx) => {
                        return <ProjectCard
                            project={project}
                            key={idx}
                        />
                    })}
                </div>
            </div>
        </main>
    )
}