import React from 'react';

import github from '../../assets/sponsors/github.png';

const Sponsors = () => {
    return (
        <section id="sponsors" className="section">
            <div className="container content">
                <h1>Sponsors</h1>

                <div className="columns is-multiline is-centered has-text-centered">
                    {/* <!-- TODO remove "is hidden mobile" when you add a picture --> */}

                    <div className="column is-6">
                        <div
                            className="box github"
                            style={{
                                backgroundColor: 'white',
                                paddingRight: '1.75rem',
                            }}
                        >
                            <img src={github} />
                        </div>
                    </div>
                    <div className="column is-6">
                        <div className="box">
                            <p className="brand">More coming soon!</p>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="box" />
                    </div>
                    <div className="column is-4">
                        <div className="box">
                            {/* <h3>Coming Soon!!</h3> */}
                        </div>
                    </div>
                    <div className="column is-4">
                        <div className="box" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
