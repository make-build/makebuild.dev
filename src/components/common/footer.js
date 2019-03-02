import React from 'react';

const Footer = () => {
    return (
        <footer className="footer is-dark has-text-light has-background-dark">
            <div className="container">
                <div className="columns">
                    <div className="column is-3">
                        <aside className="menu has-text-light">
                            <p className="menu-label brand">MAKE/BUILD</p>
                            <ul className="menu-list">
                                <li>
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a>Team</a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div className="column is-3">
                        <aside className="menu has-text-light">
                            <p className="menu-label brand">HackFSU</p>
                            <ul className="menu-list">
                                <li>
                                    <a href="https://hackfsu.com">Home</a>
                                </li>
                                <li>
                                    <a href="mailto:hackfsu.team@gmail.com">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
                <div className="footnote has-text-centered">
                    <a href="mailto:team@makebuild.dev">team@makebuild.dev</a> —
                    Copyright © 2019. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
