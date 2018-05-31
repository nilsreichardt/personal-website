import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render = () => (
    <ul className="FooterWrapper">
      <li>
        <a target="_blank" rel="noopener noreferrer" className="icon social" href="https://github.com/guidezpl">
          <i className="fa fa-github fa-2x"></i>
        </a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" className="icon social" href="https://linkedin.com/in/pierrelouisguidez">
          <i className="fa fa-linkedin fa-2x"></i>
        </a>
      </li>
      <li>
        <a className="icon social" href="mailto:guidez.pl+inquiries@gmail.com">
          <i className="fa fa-envelope fa-2x"></i>
        </a>
      </li>
      <li>
        <a className="icon social" href="https://blog.guidez.pl">
          <i className="fa fa-tumblr fa-2x"></i>
        </a>
      </li>
    </ul>
  )
}

export default Footer;
