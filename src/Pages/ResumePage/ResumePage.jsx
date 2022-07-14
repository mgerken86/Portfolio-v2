import { Link } from 'react-router-dom'
import './ResumePage.css'
import resume from '../../images/resume.jpeg'

export default function ResumePage() {
    return (
        <div className="resumePage">
            {/* <Link to="/projects" style={{ textDecoration: 'none' }}>
                <span className='arrowIcon'>⬆︎</span>
            </Link> */}
            <img 
            className='resumeImg'
            src={resume} 
            alt="resume" />
            {/* <Link to="/about" style={{ textDecoration: 'none' }}>
                <span className='arrowIcon'>⬇︎</span>
            </Link> */}
        </div>
    )
}