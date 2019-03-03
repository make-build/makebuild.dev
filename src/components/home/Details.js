import React from 'react';
import moonRover from '../../assets/svg/016-lunar-roving-vehicle.svg';
import dates from '../dates';

const Details = () => {
    return (
        <section id="details" className="section">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-6">
                        <div className="img-wrap has-text-centered">
                            <img src={moonRover} alt="Explore" />
                        </div>
                    </div>
                    <div className="column is-6 content">
                        <h1>Details</h1>
                        <p>
                            Build awesome stuff. Learn something new. Unlease
                            your creativity without spending your entire
                            weekend. This spring, join us for a 12-hour
                            hackathon here in Tallahassee to make your next big
                            project happen.
                        </p>
                        <h4>Date</h4>
                        <p>{dates.eventDate}.</p>
                        <h4>Location</h4>
                        <p>TBD.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
