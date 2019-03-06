import React from 'react';
import logo1 from '../../assets/logo-1.png';
import { links } from '../../lib';

const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="hero-body">
                <div className="container has-text-centered content">
                    <img className="logo" src={logo1} alt="make/build logo" />
                    {/* <h2>HackFSU presents:</h2>
                    <h1>MAKE/BUILD</h1>
                    <h3>
                        A Hackathon Event
                        <br />
                        {dates.eventDate}
                    </h3> */}
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
