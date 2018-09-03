import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';

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
    'path': '/contact',
    'title': 'Contact',
  },
]

class App extends Component {
  render = () => (
    <div className="App">
      <ScrollToTop>
        <NavBar items={items} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" render={() => <div></div>}/>
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </ScrollToTop>

    </div>
  )
}

export default App;
