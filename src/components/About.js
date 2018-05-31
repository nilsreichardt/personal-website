import React, { PureComponent } from 'react';
import './About.css';

import resume_img from '../images/resume.png'
import resume_pdf from '../assets/resume.pdf'

class About extends PureComponent {
  onClick = () => {
    window.location = 'https://google.com';
  }
  render = () => (
    <div className="AboutWrapper">
      <a href={resume_pdf} onClick={this.onClick}>
        <img src={resume_img} alt="resume" />
        <i className="fa fa-download fa-5x"></i>
      </a>
    </div>
  )
}

export default About;
