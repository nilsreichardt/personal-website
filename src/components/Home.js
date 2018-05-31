import React from 'react';
import './Home.css'

const Home = () => (
    <div>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='title' className="animate fadeInUp two">
            Pierre-Louis Guidez
            <p className="animate-short slideInLeft two">
              Waterloo Computer Science student, currently searching for a Fall 2018 internship opportunity
            </p>
        </div>
        <div style={{height: '2000px'}}>

        </div>
    </div>
)

export default Home;
