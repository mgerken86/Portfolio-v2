import './Footer.css'
import { SocialMediaIconsReact } from 'social-media-icons-react';


export default function Footer() {
    return (
        <nav className='footer'>
            <div className='navRoutes2'>
                <a className='footerIcon'>
                    <SocialMediaIconsReact borderColor="var(--cultured)" icon="linkedin" iconColor="var(--pink)" backgroundColor="var(--teal2)" url="https://www.linkedin.com/in/markgerken86/" size="2em" />
                </a>
                <a className='footerIcon'>
                    <SocialMediaIconsReact borderColor="var(--cultured)" icon="github" iconColor="var(--pink)" backgroundColor="var(--teal2)" url="https://github.com/mgerken86" size="2em" />
                </a>
                <a className='footerIcon'>
                    <SocialMediaIconsReact borderColor="var(--cultured)" icon="facebook" iconColor="var(--pink)" backgroundColor="var(--teal2)" url="https://www.facebook.com/mark.gerken.33/" size="2em" />
                </a>
                <a className='footerIcon'>
                    <SocialMediaIconsReact borderColor="var(--cultured)" icon="instagram" iconColor="var(--pink)" backgroundColor="var(--teal2)" url="https://www.instagram.com/markgerken/" size="2em" />
                </a>
            </div>
            <div id='footerGradient'></div>
        </nav>
    )
}