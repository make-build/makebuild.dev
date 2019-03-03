import React from 'react';
import planetEarth from '../../assets/svg/006-planet-earth.svg';
import links from '../links';

const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="hero-body">
                <div className="container has-text-centered content">
                    <img
                        className="logo"
                        src={planetEarth}
                        alt="make/build logo"
                    />
                    <h2>HackFSU presents:</h2>
                    <h1>MAKE/BUILD</h1>
                    <h3>
                        A Hackathon Event
                        <br />
                        April 12th 2019
                    </h3>
                    <div className="buttons is-centered">
                        <a className="button" href={links.registration}>
                            Apply
                        </a>
                        <a className="button is-outlined" href={links.mailTeam}>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
