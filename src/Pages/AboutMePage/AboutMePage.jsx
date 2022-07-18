import './AboutMePage.css'
import markImg from '../../images/mark.png'
import { IconContext } from 'react-icons'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function AboutMePage() {
    return (
        <main id="about">
            <div className="aboutMePage page">
                <h1>Some more about me</h1>
                <div className='markImgContainer'>
                    <IconContext.Provider
                        value={{ size: '1em' }}
                    >
                        <div className='contactInfo'>
                            <h3 className='aboutContact'>
                                <FaPhoneAlt /> (240)750-0263
                            </h3>

                        </div>
                        <img
                            className='markImg'
                            src={markImg}
                            alt="mark" />
                        <h3 className="aboutContact pink">
                            <FaEnvelope /> mgerken86@gmail.com
                        </h3>
                    </IconContext.Provider>
                </div>
                <div className='brandStatement'>
                I'm a Software Engineer with a background in Administrative Management, Program Development, and Facilitation. 
                <br/><br/>My insatiable curiosity keeps me seeking out puzzles, problems, and challenges that force me to find solutions through creativity, critical thinking, perseverance, and collaboration. The speed of evolution in the tech industry excites me, and my passion for knowledge motivates me to adapt my skill-set to match the demands of the industry.

                </div>
            </div>
        </main>
    )
}