import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';

const App = () => {
    return (
        <Router onUpdate={() => window.scrollTo(0, 0)}>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/team" exact component={Team} />
            </div>
        </Router>
    );
};

export default App;
