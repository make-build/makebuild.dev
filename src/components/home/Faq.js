import React from 'react';
import links from '../links';

const FAQ = () => {
    return (
        <section id="faq" className="section">
            <div className="container content">
                <h1>FAQ</h1>
                <h2>What's a Hackathon?</h2>
                <p>
                    A hackathon brings together tech enthusiasts and
                    professionals from diverse industries to identify and solve
                    problems through technology - usually all in the course of a
                    weekend.
                    <br />
                    <br />
                    If this your first hackathon, don’t worry! This is a great
                    place to start building. We will have mentors here to help
                    you every step of the way. We will have prizes for newcomers
                    too.
                </p>
                <h2>SOUNDS COOL! HOW MUCH DOES ADMISSION COST?</h2>
                <p>
                    Nothing! Thanks to our industry sponsors,&nbsp;
                    <span className="brand">MAKE/BUILD</span> is completely
                    free.
                </p>
                <h2>NICE! BUT WILL I NEED TO KNOW HOW TO CODE?</h2>
                <p>
                    Nope! Code newbies and seasoned veterans alike are
                    encouraged to join us.
                </p>

                <h2>SO WHO CAN ATTEND?</h2>
                <p>
                    Anyone is invited! Software developers, designers, and tech
                    warriors of all skill sets, ages and backgrounds are welcome
                    to hack. If you are a high school student go ahead and apply
                    and we will notify you if any problems arise.
                </p>

                <h2>OKAY, BUT WHAT ABOUT FOOD?</h2>
                <p>
                    Don't worry, we've got that covered too. There will be
                    plenty of meals, snacks, and coffee for hungry hackers.
                </p>

                <h2>SHOULD I BRING ANYTHING?</h2>
                <p>Your laptop, and any hardware or equipment you may need.</p>

                <h2>WHAT CAN I BUILD?</h2>
                <p>
                    Whatever you can think up! We’ll have mentors to help you
                    with the web, mobile, hardware, design, and any development
                    in between!
                </p>

                <h2>HOW DO TEAMS WORK?</h2>
                <p>
                    Teams will have a maximum of 4. If you don't have a team, no
                    problem, we will have a mixer to discuss ideas and find a
                    team.
                </p>

                <h2>Other Questions?</h2>
                <p>
                    Feel free to <a href={links.mailTeam}>email us</a> or
                    message us on
                    <a href="#">our event page.</a>
                </p>
            </div>
        </section>
    );
};

export default FAQ;
