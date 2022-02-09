import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";

import "./header-style.css";
import { FaGithub } from "react-icons/fa";

const HeaderOptionsList = [
  { type: "link", value: "Home", route: "/" },
  { type: "link", value: "Community Stories", route: "/stories" },
  { type: "link", value: "Previous Hackathons", route: "/previous-hackathons" },
  { type: "link", value: "Community Members", route: "/members" }
];

export default function Header() {
    const [headerOptions] = useState(HeaderOptionsList);
    return (
        <div className="header-announcement-wrapper">
            {/* <div className="announcement-bar" 
                style={{
                    padding: '0.6rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.2rem'
                }}
            >
                <p>
                    We are participating in MLH Local Hack Day: Build 2022. 
                </p>
                <Link to="/mlh-localhackday-build-2022">
                    <Button>Learn more</Button>
                </Link>
            </div> */}
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
                            <Button type="plain" style={{ backgroundColor: 'black', color: 'white' }}
                                onClick={() => window.open('https://hekors.substack.com')}
                            >
                                Subscribe to Newsletter
                            </Button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}
