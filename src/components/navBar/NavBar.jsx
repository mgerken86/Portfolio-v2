import './NavBar.css'
import { Link } from 'react-scroll'
import { FaHome, FaCode, FaFileAlt, FaUserAlt } from 'react-icons/fa'


export default function NavBar() {
    return (
        <nav className="navBar">
            <div className='navRoutes1'>
                <Link
                    activeClass='active'
                    smooth
                    spy
                    to="home">
                    <span className='navBtn'>
                        <FaHome /> Home
                    </span>
                </Link>
                <Link
                    activeClass='active'
                    smooth
                    spy
                    to="projects">
                    <span className='navBtn'>
                        <FaCode /> Projects
                    </span>
                </Link>
                <Link
                    activeClass='active'
                    smooth
                    spy
                    to="resume">
                    <span className='navBtn'>
                        <FaFileAlt /> Resume
                    </span>
                </Link>
                <Link
                    activeClass='active'
                    smooth
                    spy
                    to="about">
                    <span className='navBtn'>
                        <FaUserAlt /> About
                    </span>
                </Link>
            </div>
        </nav>
    )
}