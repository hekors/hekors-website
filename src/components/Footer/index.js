import Button from '../elements/Button';
import './footer-style.css';
import { FaDiscord, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="footer-component">
            <div className="footer-content-wrapper content-center"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <h4>Made by HEKORS. for HEKORS 💜</h4>
                <div className="footer-options-wrapper"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.4rem'
                    }}
                >
                <Button onClick={() => window.open('https://discord.gg/cge6rB9RXm')}>
                    <FaDiscord /> Join Discord
                </Button>
                <Button type="plain" 
                    onClick={() => window.open('https://github.com/hekors/hekors-website/issues')}>
                    <FaGithub /> Found issues? Contribute
                </Button>
                <Button type="plain" 
                    style={{ backgroundColor: 'black', color: 'white' }}
                    onClick={() => window.open('https://mlh.io/seasons/2022/events')}
                >
                    Hackathons @MLH <FaExternalLinkAlt />
                </Button>
                </div>
            </div>
        </footer>
    )
}