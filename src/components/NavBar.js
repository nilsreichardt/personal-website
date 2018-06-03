import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  state = {
    isTop: window.scrollY === 0
  }

  handleScroll = () => {
    this.setState({isTop: !(window.scrollY > 0)})
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render = () => (
    <nav className={"NavBar" + (this.state.isTop ? ' top' : '')}>
      <div id="logo"></div>
      <div id="links">
        {
          this.props.items.map((item) =>
          <NavLink className="NavLink" key={item.title} exact activeClassName="is-active" to={`${item.path}`}>
            {item.title}
          </NavLink>)
        }
      </div>
    </nav>
  )
}
export default NavBar;
