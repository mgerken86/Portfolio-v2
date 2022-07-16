import './Footer.css'
import { SocialMediaIconsReact } from 'social-media-icons-react';


export default function Footer() {
    return (
        <nav className='footer'>
            <div className='navRoutes2'>
                <a
                    href="https://www.linkedin.com/in/markgerken86/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="linkedin" iconColor="var(--violet)" backgroundColor="var(--lavender)" url="https://some-website.com/my-social-media-url" size="2em" />
                </a>
                <a
                    href="https://github.com/mgerken86"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="github" iconColor="var(--violet)" backgroundColor="var(--lavender)" url="https://some-website.com/my-social-media-url" size="2em" />
                </a>
                <a
                    href="https://www.facebook.com/mark.gerken.33/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="facebook" iconColor="var(--violet)" backgroundColor="var(--lavender)" url="https://some-website.com/my-social-media-url" size="2em" />
                </a>
                <a
                    href="https://www.instagram.com/markgerken/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="instagram" iconColor="var(--violet)" backgroundColor="var(--lavender)" url="https://some-website.com/my-social-media-url" size="2em" />
                </a>
            </div>
        </nav>
    )
}