import React from 'react';
import { dates } from '../../lib';
import blueprint from '../../assets/blueprint.png';

const Details = () => {
    return (
        <section id="details" className="section">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-6">
                        <div className="img-wrap has-text-centered">
                            <img src={blueprint} alt="Explore" />
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
                        <p>
                            {dates.eventDate}, {dates.eventTime}.
                        </p>
                        <h4>Location</h4>
                        <p>TBD.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;
