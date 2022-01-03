import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";

import './header-style.css';

const HeaderOptionsList = [
    { type: 'link', value: 'Home', route: '/' },
    { type: 'link', value: 'About Us', route: '/about-us' },
    { type: 'link', value: 'Previous Hackathons', route: '/previous-hackathons' },
]

export default function Header() {
    const [headerOptions] = useState(HeaderOptionsList);
    return (
        <div className="header-component">
            <div className="header-content-wrapper content-center">
                <div className="header-logo-wrapper">
                    <Link to="/">
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
                            Join Discord
                        </Button>
                    </ul>
                </div>
            </div>
        </div>
    )
}