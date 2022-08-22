import './HomePage.css'

export default function HomePage() {
    return (
        <main id="home">
            <div className="homePage page">
            <h1 className='nameH1'><span id="teal">Mark Gerken</span></h1>
                <div id="imgCont">
                    <div id="topRightGradient"></div>
                    <div id="rightGradient"></div>
                    <div id="bottomLeftGradient"></div>
                    <div id="leftGradient"></div>
                    <div id="topLeftGradient"></div>
                    <div id="leftLeftGradient"></div>
                    <div id="bottomRightGradient"></div>
                    <div id="rightRightGradient"></div>
                    <img
                        src='/pubImages/flatiron.jpeg'
                        id="homeImg" 
                    />
                </div>
                <h1 className='typewriter'>
                        I am a
                    </h1>
            </div>
        </main >
    )
}