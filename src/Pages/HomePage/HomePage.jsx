import './HomePage.css'
import Aos from 'aos'
import { useEffect } from 'react'

export default function HomePage() {

    //initialize animate-on-scroll
    useEffect(() => {
        Aos.init({duration: 3000})
    }, [])

    return (
        <main id="home">
            <div className="homePage page">
                <h1 
                data-aos='zoom-in'
                className='nameH1'>
                    Hi, I'm <span id="teal">Mark</span>
                    </h1>
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
                        id="homeImg" />
                </div>
                <h1 className='typewriter'>
                    I am a
                </h1>
            </div>
        </main >
    )
}