import './NavBar.css'
import { Link } from 'react-scroll'

export default function NavBar() {
    return (
        <nav className="navBar">
            <div className='navRoutes'>
                <Link
                    activeClass='active'
                    smooth
                    spy
                    to="home">
                    <button className='navBtn'>
                        Home
                    </button>
                </Link>
                <Link
                    activeClass='active'
                    smooth
                    spy
                    to="projects">
                    <button className='navBtn'>
                        Projects
                    </button>
                </Link>
                <Link
                    activeClass='active'
                    smooth
                    spy
                    to="resume">
                    <button className='navBtn'>
                        Resume
                    </button>
                </Link>
                <Link
                    activeClass='active'
                    smooth
                    spy
                    to="about">
                    <button className='navBtn'>
                        About
                    </button>
                </Link>
            </div>
            <div className='navRoutes'>
                <a href="">In</a>
                <a href="">GH</a>
                <a href="">FB</a>
                <a href="">IG</a>
            </div>
        </nav>
    )
}