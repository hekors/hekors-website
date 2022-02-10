import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";

import "./header-style.css";
import { FaGithub } from "react-icons/fa";

const HeaderOptionsList = [
  { type: "link", value: "Home", route: "/" },
  { type: "link", value: "Previous Hackathons", route: "/previous-hackathons" },
  { type: "link", value: "Community Members", route: "/members" },
  { type: "dropdown", value: "Featured", options: [
      { type: "link", value: "Community Stories", route: "/stories" },
      { type: "link", value: "Testimonials", route: "/testimonials" },
      { type: "link", value: "Featured Community Members", route: "/featured-community-members" }
  ]}
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
                                if (option.type === 'link') {
                                    return (
                                        <Link to={option.route} key={index}>
                                            <li className="header-option">{option.value}</li>
                                        </Link>
                                    )
                                } else if (option.type === 'dropdown') {
                                    return (
                                        <Dropdown 
                                            key={index}
                                            title={option.value}
                                            options={option.options}
                                        />
                                    )
                                }
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

function Dropdown({title, options}) {
    const [dropdownRef, setDropdown] = useState('none');
    return (
        <React.Fragment>
            <div className="dropdown-wrapper"
                style={{
                    background: 'transparent',
                    width: 'fit-content',
                    height: 'fit-content',
                    padding: '0',
                    margin: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '0.3rem',
                    position: 'relative'
                }}
            >
                <Button type="plain" style={{
                    // boxShadow: 'none',
                    color: 'var(--h-purple)',
                    fontWeight: '600',
                    fontSize: '16px'
                }}
                    onClick={() => {
                        if (dropdownRef === 'none') {
                            setDropdown('block');
                        } else {
                            setDropdown('none');
                        }
                    }}
                >{title}</Button>
                <div className="dropdown-content-wrapper" style={{
                    zIndex: '9',
                    position: 'absolute',
                    bottom: '-10.2rem',
                    left: '0',
                    width: '320px',
                    display: dropdownRef
                }}
                >   
                    <h4 style={{ marginBottom: '1.2rem' }}>Featured Sections</h4>
                    <ul className="dropdown-options-list"  style={{ listStyle: 'none', display: 'flex',
                        flexDirection: 'column', alignItems: 'flex-start', gap: '0.2rem'
                    }}>
                        {options.map((option, index) => (
                            <Link to={option.route} key={index}>
                                <Button type="plain" className="header-option">{option.value}</Button>
                            </Link> 
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}