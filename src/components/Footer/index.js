import Button from '../elements/Button';
import './footer-style.css';
import { FaGithub } from 'react-icons/fa'

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
                <div className="footer-options-wrapper">
                <Button onClick={() => window.open('https://discord.gg/cge6rB9RXm')}>
                    <FaGithub /> Join Discord
                </Button>
                </div>
            </div>
        </footer>
    )
}