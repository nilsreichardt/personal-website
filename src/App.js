import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import './App.css';

import arrow from './images/curved_arrow.png'

const items = [
  {
    'path': '/',
    'title': 'Home',
    'component': Home
  },
  {
    'path': '/about',
    'title': 'About',
    'component': About
  },
  {
    'path': '/projects',
    'title': 'Projects',
    'component': Projects
  },
  {
    'path': '/contact',
    'title': 'Contact',
  },
]

class App extends Component {
  render = () => (
    <div className="App">
      <NavBar items={items} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" render={() => <img src={arrow} alt='arrow' style={{position: 'absolute', left: '4%', top: '44%'}}/>} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
