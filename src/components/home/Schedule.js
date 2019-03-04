import React from 'react';
import desktop from '../../assets/desktop.png';

const Schedule = () => {
    return (
        <section id="schedule" className="section">
            <div className="content container">
                <div className="columns is-mobile is-vcentered is-multiline is-centered">
                    <div className="column content is-narrow-mobile is-6-desktop">
                        <h1>Schedule</h1>
                        <p>Coming soon!</p>
                        {/* <span>
                    <b>10:00am </b>
                    Check-in Starts
                </span>
                <br />
                <span>
                    <b>11:00am </b>
                    Opening Ceremony
                </span>
                <br />
                <span>
                    <b>12:00pm </b>
                    Hacking Starts
                </span>
                <br />
                <span>
                    <b>...</b>
                </span>
                <br />
                <span>
                    <b>12:00am </b>
                    Hacking Ends
                </span> */}
                    </div>
                    <div className="column">
                        <div className="img-wrap has-text-centered">
                            <img src={desktop} alt="Explore" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
