import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="navBar">
            <div className='navRoutes'>
            <Link to="/">
                <button className='navBtn'>
                    Home
                </button>
            </Link>
            <Link to="/projects">
            <button className='navBtn'>
                    Projects
                </button>
            </Link>
            <Link to="/resume">
            <button className='navBtn'>
                    Resume
                </button>
            </Link>
            <Link to="/about">
            <button className='navBtn'>
                    About Me
                </button>
            </Link>
            </div>
            <div className='navRoutes'>
                <a href="">In</a>
                <a href="">GH</a>
                <a href="">FB</a>
                <a href="">IG</a>
            </div>
        </div>
    )
}