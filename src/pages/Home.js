import React from 'react';
import DefaultLayout from '../layouts/default';
import {
    Hero,
    Details,
    Statement,
    Schedule,
    Sponsors,
    FAQ,
} from '../components/home';

const Home = () => (
    <DefaultLayout>
        <Hero />
        <Details />
        <Statement />
        <Schedule />
        <Sponsors />
        <FAQ />
    </DefaultLayout>
);

export default Home;
