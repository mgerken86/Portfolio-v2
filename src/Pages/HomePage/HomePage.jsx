import './HomePage.css'
import markImg from '../../images/mark.png'

export default function HomePage() {
    return (
        <div className="homePage">
            <div className='markImgContainer'>
                <img 
                className='markImg'
                src={markImg} 
                alt="mark" />
            </div>
        </div>
    )
}