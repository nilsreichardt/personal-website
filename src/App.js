import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import ComingSoon from './components/ComingSoon'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={ComingSoon} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
