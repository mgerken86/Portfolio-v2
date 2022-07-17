import './HomePage.css'
import projectsImg from '../../images/mediaProjects.jpg'

export default function HomePage() {
    return (
        <main id="home">
            <div className="homePage page">
                <h1 className='nameH1'>Hi, I'm Mark</h1>
                <div id='outerCont'>
                    <div id="middleCont">
                        <div id="innerCont">
                            <img
                                src={projectsImg}
                                id="homeImg"
                                alt="property of https://wallpapersafari.com/w/ZcVzSn" />
                        </div>
                    </div>
                </div>
                <h1 className='typewriter'>
                    I am a
                </h1>
            </div>
        </main >
    )
}