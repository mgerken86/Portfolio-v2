import { useState } from 'react'
import './ProjectsPage.css'
import { projectsArr } from '../../utilities/projectData'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import projectsImg from '../../images/mediaProjects.jpg'


export default function ProjectsPage() {
    const [projects, setProjects] = useState(projectsArr)
    return (
        <main id="projects">
            <div className="projectsPage page">
                <div className="projectsImg">
                <h1>My work</h1>
                <img src={projectsImg} alt="" />
                </div>
                
                <div className='skillIcons'>
                    <i class="devicon-javascript-plain"></i>
                    <i class="devicon-react-original-wordmark"></i>
                    <i class="devicon-mongodb-plain-wordmark"></i>
                    <i class="devicon-express-original"></i>
                    <i class="devicon-nodejs-plain"></i>                    
                    <i class="devicon-bootstrap-plain-wordmark"></i>
                    <i class="devicon-python-plain-wordmark"></i>
                    <i class="devicon-django-plain"></i>
                    <i class="devicon-postgresql-plain-wordmark"></i>
                    <i class="devicon-html5-plain-wordmark"></i>
                    <i class="devicon-heroku-original-wordmark"></i>
                    <i class="devicon-github-original-wordmark"></i>
                    <i class="devicon-css3-plain-wordmark"></i>
                    <i class="devicon-vscode-plain"></i>
                    <i class="devicon-typescript-plain"></i>
                    <i class="devicon-slack-plain"></i>
                    <i class="devicon-jquery-plain-wordmark"></i>
                </div>
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