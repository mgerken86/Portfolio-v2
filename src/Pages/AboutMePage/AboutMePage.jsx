import './AboutMePage.css'
import markImg from '../../images/mark.png'

export default function AboutMePage() {
    return (
        <main id="about">
            <div className="aboutMePage page">
                <h1>About Me Page</h1>
                <div className='markImgContainer'>
                    <img
                        className='markImg'
                        src={markImg}
                        alt="mark" />
                </div>
            </div>
        </main>
    )
}