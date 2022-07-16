import './Footer.css'
import { SocialMediaIconsReact } from 'social-media-icons-react';


export default function Footer() {
    return (
        <nav className='footer'>
            <div className='navRoutes2'>
                <a
                    href="https://www.linkedin.com/in/markgerken86/"
                    className='footerIcon'
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialMediaIconsReact borderColor="var(--pink)" icon="linkedin" iconColor="var(--violet)" backgroundColor="var(--teal)" url="https://some-website.com/my-social-media-url" size="2em" />
                </a>
                <a
                    href="https://github.com/mgerken86"
                    className='footerIcon'
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialMediaIconsReact borderColor="var(--pink)" icon="github" iconColor="var(--violet)" backgroundColor="var(--teal)" url="https://some-website.com/my-social-media-url" size="2em" />
                </a>
                <a
                    href="https://www.facebook.com/mark.gerken.33/"
                    className='footerIcon'
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialMediaIconsReact borderColor="var(--pink)" icon="facebook" iconColor="var(--violet)" backgroundColor="var(--teal)" url="https://some-website.com/my-social-media-url" size="2em" />
                </a>
                <a
                    href="https://www.instagram.com/markgerken/"
                    className='footerIcon'
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialMediaIconsReact borderColor="var(--pink)" icon="instagram" iconColor="var(--violet)" backgroundColor="var(--teal)" url="https://some-website.com/my-social-media-url" size="2em" />
                </a>
            </div>
            <div id='footerGradient'></div>
        </nav>
    )
}