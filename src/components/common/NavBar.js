import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const navLinks = [
    ['MAKE/BUILD', '/'],
    ['Details', '/#details'],
    ['Schedule', '/#schedule'],
    ['Sponsors', '/#sponsors'],
    ['FAQ', '/#faq'],
];

const NavBar = () => (
    <nav className="container brand">
        <div className="columns is-mobile is-multiline">
            {navLinks.map(([name, href]) => (
                <Link
                    key={name}
                    className="column has-text-centered"
                    href={href}
                    to={href}
                >
                    <h4>{name}</h4>
                </Link>
            ))}
        </div>
    </nav>
);

export default NavBar;
