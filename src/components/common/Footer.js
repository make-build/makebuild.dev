import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { links } from '../../lib';

const HomeLink = () => <NavLink to="/">Home</NavLink>;
const HomeAnchor = () => <a href="/#">Home</a>;

const Menu = ({ label, children }) => (
    <aside className="menu has-text-light">
        <p className="menu-label brand">{label}</p>
        <ul className="menu-list">
            {children.map(child => (
                // eslint-disable-next-line react/jsx-key
                <li>{child}</li>
            ))}
        </ul>
    </aside>
);

const Footer = () => {
    return (
        <footer className="footer is-dark has-text-light has-background-dark">
            <div className="container">
                <div className="columns">
                    <div className="column is-3">
                        <Menu label="MAKE/BUILD">
                            <a href={links.registration}>Apply</a>
                            <a href={links.facebookEvent}>Event</a>
                            <a href={links.mailTeam}>Contact</a>
                            <a href={links.coc}>Code of Conduct</a>
                        </Menu>
                    </div>
                    <div className="column is-3">
                        <Menu label="HackFSU">
                            <a href={links.webHackFSU}>Home</a>
                            <a href={links.emailHackFSU}>Email</a>
                            <a href={links.facebookHackFSU}>Facebook</a>
                            <a href={links.twitterHackFSU}>Twitter</a>
                        </Menu>
                    </div>
                    {/* <div className="column is-3">
                        <Menu label="Media">
                            <a href={links.facebookEvent}>Facebook</a>
                            <a href={links.github}>Github</a>
                        </Menu>
                    </div> */}
                </div>
                <div className="footnote has-text-centered">
                    <a href={links.mailTeam}>team@makebuild.dev</a> — Copyright
                    © 2019. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
