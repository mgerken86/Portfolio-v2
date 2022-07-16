import './HomePage.css'
import wallpaper from '../../images/coding-wallpaper.jpeg'

export default function HomePage() {
    return (
        <main id="home">
            <div className="homePage page">
                <div id='outerCont'>
                    <h1 className='nameH1'>Hi, I'm Mark</h1>
                    <div id="middleCont">
                        <div id="innerCont">
                            <img
                                src={wallpaper}
                                id="homeImg"
                                alt="property of https://wallpapersafari.com/w/ZcVzSn" />
                        </div>
                    </div>
                    <h1 className='typewriter'>
                        I am a 
                    </h1>
                </div>
            </div>
        </main >
    )
}