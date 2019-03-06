import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { host } from '../../lib';
import desktop from '../../assets/desktop.png';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = { schedule: [] };
    }

    componentDidMount() {
        axios.get(`${host}/api/schedule`).then(res => {
            this.setState({ schedule: res.data });
        });
    }

    render() {
        return (
            <section id="schedule" className="section">
                <div className="content container">
                    <div className="columns is-mobile is-vcentered is-multiline is-centered">
                        <div className="column content is-narrow-mobile is-6-desktop">
                            <h1>Schedule</h1>
                            <table>
                                <tbody>
                                    {this.state.schedule.map(event => (
                                        <tr key={event.Activity}>
                                            <td className="brand">
                                                <b>
                                                    {moment(
                                                        event['Date & Time'],
                                                    ).format('hh:mm a')}
                                                </b>
                                            </td>
                                            <td>{event.Activity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
    }
}

export default Schedule;
