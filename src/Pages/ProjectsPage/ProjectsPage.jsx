import { useState } from 'react'
import './ProjectsPage.css'
import { projectsArr } from '../../utilities/projectData'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
// import projectsImg from '../../images/mediaProjects.jpg'
import projectsImg from '../../images/projectsNoBg.png'


export default function ProjectsPage() {
    const [projects, setProjects] = useState(projectsArr)
    return (
        <main id="projects">
            <div className="projectsPage page">
                <h1 className='normalH1'>Projects</h1>

                <div className="projectsImg">
                    <img src={projectsImg} alt="" />
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
                        <i class="devicon-redux-original"></i>
                        <i class="devicon-docker-plain"></i>
                        {/* <i class="devicon-typescript-plain"></i> */}
                        <i class="devicon-slack-plain"></i>
                        <i class="devicon-jquery-plain-wordmark"></i>
                    </div>
                </div>


                <div className='projectsContainer'>
                    {projects.map((project, idx) => {
                        return <ProjectCard
                            project={project}
                            key={idx}
                            id={idx}
                        />
                    })}
                </div>
            </div>
        </main>
    )
}