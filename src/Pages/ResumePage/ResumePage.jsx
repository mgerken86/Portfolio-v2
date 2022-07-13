import './ResumePage.css'
import resume from '../../images/resume.jpeg'

export default function ResumePage() {
    return (
        <div className="resumePage">
            <img 
            className='resumeImg'
            src={resume} 
            alt="resume" />
        </div>
    )
}