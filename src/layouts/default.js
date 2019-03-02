import React from 'react';
import NavBar from '../components/common/navbar';
import Footer from '../components/common/footer';

const DefaultLayout = ({ children }) => (
    <div>
        <NavBar />
        <div>{children}</div>
        <Footer />
    </div>
);

export default DefaultLayout;
