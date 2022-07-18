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
            </div>
        </main>
    )
}