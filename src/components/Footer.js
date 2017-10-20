import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="FooterWrapper" ref={(el) => { this.contact = el; }}>
                <ul>
                    <li><a className="icon social" href="https://github.com/guidezpl"><i className="fa fa-github fa-3x"></i></a></li>
                    <li><a className="icon social" href="https://linkedin.com/in/pierrelouisguidez"><i className="fa fa-linkedin fa-3x"></i></a></li>
                    <li><a className="icon social" href="mailto:guidez.p.l+work@gmail.com"><i className="fa fa-envelope fa-3x"></i></a></li>
                </ul>
            </div>
        )
    }
}

export default Footer;
