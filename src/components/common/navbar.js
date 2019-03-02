import React from 'react';

const navLinks = [
    ['MAKE/BUILD', '#'],
    ['Details', '#details'],
    ['Schedule', '#schedule'],
    ['Sponsors', '#sponsors'],
    ['FAQ', '#faq'],
];

const NavBar = () => (
    <nav className="container brand">
        <div className="columns is-mobile is-multiline">
            {navLinks.map(([name, href]) => (
                <a key={name} className="column has-text-centered" href={href}>
                    <h4>{name}</h4>
                </a>
            ))}
        </div>
    </nav>
);

export default NavBar;
