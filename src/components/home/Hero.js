import React from 'react';
import logo1 from '../../assets/logo-1.png';
import stack from '../../assets/logo-stacked.png';
import { links } from '../../lib';

const Hero = () => {
    return (
        <section id="hero" className="hero section">
            <div className="hero-body">
                <div className="container has-text-centered content">
                    <img
                        className="logo is-hidden-mobile"
                        src={logo1}
                        alt="make/build logo"
                    />
                    <img
                        className="logo is-hidden-tablet"
                        src={stack}
                        alt="make/build logo"
                    />
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
