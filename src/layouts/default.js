import React from 'react';
import NavBar from '../components/common/NavBar';
import Footer from '../components/common/Footer';

const DefaultLayout = ({ children }) => (
    <div>
        <NavBar />
        <div>{children}</div>
        <Footer />
    </div>
);

export default DefaultLayout;
