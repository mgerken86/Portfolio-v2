import './AboutMePage.css'
import markImg from '../../images/mark.png'
import { IconContext } from 'react-icons'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'


export default function AboutMePage() {

    //initialize animate-on-scroll
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <main id="about">
            <div className="aboutMePage page">
                <h1 className='normalH1'>About me</h1>
                <div
                    data-aos='fade-up'
                    className='markImgContainer'>
                    <IconContext.Provider
                        value={{ size: '1em' }}
                    >
                        <img
                            className='markImg'
                            src={markImg}
                            alt="mark" />
                    </IconContext.Provider>
                </div>
                <div className='brandStatement'>
                    "A Full Stack Software Engineer most at home with the MERN stack and experienced in the full Software Development Life Cycle, from ideation to design to development to maintenance. Committed to writing maintainable code for software solutions and improving product functionality. Adept at working in team environments and participating in quality assurance activities. Possesses a technical foundation, a passion for knowledge, and a love for software development, which expedite the learning of new technologies. 
                    <br /><br />Programming requires the level of critical thinking that I love, it feels like the closest thing to magic to me; through the power of my mind, I'm able to translate my knowledge of computer languages into a manifestation of my imagination.
                    <br /><br />As a climber, I enjoy breaking large problems into smaller 'moves' and calculating the most efficient way of linking them together. I'm inspired by challenge and feel the highest sense of accomplishment from climbs that take years of pushing my mental and physical limits until I reach the top. Software development is climbing for my brain." 
                </div>
                <h1 id='smallerH1'></h1>
                <h1 id='smallerH1'></h1>
                <h1 id='smallerH1'>
                    Want to know what I can bring to your team? <br />
                    <hr />
                    Have a freelance project for me to assist you with? <br />
                    <hr />
                    Let's chat!</h1>
                    
                <div
                    data-aos='slide-up'
                    className='contactInfo'>
                    <h3 className="aboutContact pink">
                        <FaEnvelope className='pinkIcon' />  mgerken86@gmail.com
                    </h3>
                    <br />
                    <h3 className='aboutContact'>
                        <FaPhoneAlt className='tealIcon' />  (240)750-0263
                    </h3>
                </div>
                <ContactForm />
            </div>
        </main>
    )
}