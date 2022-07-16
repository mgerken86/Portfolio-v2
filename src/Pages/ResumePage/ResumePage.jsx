import { Link } from 'react-router-dom'
import './ResumePage.css'
import resume from '../../images/resume.jpeg'

export default function ResumePage() {
    return (
        <main id="resume"> 
        <div className="resumePage page">
            <h1>Resume</h1>
            <img
                className='resumeImg'
                src={resume}
                alt="resume" />
        </div>
        </main>
    )
}