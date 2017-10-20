import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    state = {
        isTop: window.scrollY === 0
    }

    handleScroll = () => {
        let {isTop} = this.state
        let topOfNav = this.nav.offsetTop;
        // console.log(window.scrollY, topOfNav, isTop)
        if (window.scrollY > topOfNav) {
            if (isTop) {
                // console.log('no longer at top')
                this.setState({isTop:false})
            }
        } else {
            if (!isTop) {
                // console.log('now at top')
                this.setState({isTop:true})
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.nav = ReactDOM.findDOMNode(this);
        this.handleScroll();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <nav className={"NavBar" + (this.state.isTop ? ' top' : '')}>
                <div id="logo"></div>
                <div id="links">
                    <NavLink className="NavLink" exact to="/" activeClassName="is-active">Home</NavLink>
                    <NavLink className="NavLink" to={{pathname: '/about'}} activeClassName="is-active">About</NavLink>
                    <a className="NavLink" href="https://blog.guidez.pl">Blog</a>
                    <NavLink className="NavLink" to={{pathname: '/contact'}} activeClassName="is-active">Contact</NavLink>
                </div>
            </nav>
        )
    }
}
export default NavBar;
