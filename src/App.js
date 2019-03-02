import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/team" exact component={Team} />
        </Router>
    );
};

export default App;
