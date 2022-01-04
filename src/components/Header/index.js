import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";

import './header-style.css';
import { FaGithub } from 'react-icons/fa'

const HeaderOptionsList = [
    { type: 'link', value: 'Home', route: '/' },
    { type: 'link', value: 'About Us', route: '/about-us' },
    { type: 'link', value: 'Previous Hackathons', route: '/previous-hackathons' },
]

export default function Header() {
    const [headerOptions] = useState(HeaderOptionsList);
    return (
        <div className="header-announcement-wrapper">
            <div className="announcement-bar">
                <p>
                    We are participating in MLH Local Hack Day: Build 2022. <Link to="/mlh-localhackday-build-2022">Learn more</Link>
                </p>
            </div>
            <div className="header-component">
                <div className="header-content-wrapper content-center">
                    <div className="header-logo-wrapper">
                        <Link to="/" style={{ color: 'var(--h-dark)' }}>
                            <h4>Hekors Community</h4>
                        </Link>
                    </div>
                    <div className="header-options-list-wrapper">
                        <ul className="header-options-list" style={{ listStyle: "none" }}>
                            {headerOptions.map((option, index) => {
                                return (
                                    <Link to={option.route} key={index}>
                                        <li className="header-option">{option.value}</li>
                                    </Link>
                                )
                            })}
                            <Button onClick={() => window.open('https://discord.gg/cge6rB9RXm')}>
                                <FaGithub /> Join Discord
                            </Button>
                            <Button type="plain" onClick={() => window.open('https://github.com/hekors')}>
                                <FaGithub /> Checkout our GitHub
                            </Button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}