import './HomePage.css'

export default function HomePage() {
    return (
        <main id="home">
            <div className="homePage page">
                <div id="imgCont">
                    <div id="topRightGradient"></div>
                    <div id="rightGradient"></div>
                    <div id="bottomLeftGradient"></div>
                    <div id="leftGradient"></div>
                    <h1 className='nameH1'>Hi, I'm <span id="teal">Mark</span></h1>
                    <img
                        src='/pubImages/flatiron.png'
                        id="homeImg"
                        alt="property of https://wallpapersafari.com/w/ZcVzSn" 
                    />
                    <h1 className='typewriter'>
                        I am a
                    </h1>
                </div>
            </div>
        </main >
    )
}