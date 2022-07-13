import './HomePage.css'
import { Link } from 'react-router-dom'
import markImg from '../../images/mark.png'

export default function HomePage() {
    return (
        <div className="homePage">
            <h1>Mark Gerken</h1>
            <div className='markImgContainer'>
                <img
                    className='markImg'
                    src={markImg}
                    alt="mark" />
            </div>
            <div className='brandStatement'>
                I'm a Software Engineer with a background in Administrative Management, Program Development, and Facilitation.
                My insatiable curiosity keeps me seeking out puzzles, problems, and challenges that force me to find solutions through creativity, critical thinking, perseverance, and collaboration.
                The speed of evolution in the tech industry excites me, and my passion for knowledge motivates me to adapt my skill-set to match the demands of the industry.

            </div>
            <Link to="/projects" style={{ textDecoration: 'none' }}>
                <span className='arrowIcon'>⬇︎</span>
            </Link>
        </div>
    )
}