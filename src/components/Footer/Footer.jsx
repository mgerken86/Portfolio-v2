import './Footer.css'
import { SocialMediaIconsReact } from 'social-media-icons-react';


export default function Footer() {
    return (
        <nav className='footer'>
            <div className='navRoutes2'>
                <a className='footerIcon'>
                    <SocialMediaIconsReact borderColor="var(--pink)" icon="linkedin" iconColor="var(--violet)" backgroundColor="var(--teal)" url="https://www.linkedin.com/in/markgerken86/" size="2em" />
                </a>
                <a className='footerIcon'>
                    <SocialMediaIconsReact borderColor="var(--pink)" icon="github" iconColor="var(--violet)" backgroundColor="var(--teal)" url="https://github.com/mgerken86" size="2em" />
                </a>
                <a className='footerIcon'>
                    <SocialMediaIconsReact borderColor="var(--pink)" icon="facebook" iconColor="var(--violet)" backgroundColor="var(--teal)" url="https://www.facebook.com/mark.gerken.33/" size="2em" />
                </a>
                <a className='footerIcon'>
                    <SocialMediaIconsReact borderColor="var(--pink)" icon="instagram" iconColor="var(--violet)" backgroundColor="var(--teal)" url="https://www.instagram.com/markgerken/" size="2em" />
                </a>
            </div>
            <div id='footerGradient'></div>
        </nav>
    )
}