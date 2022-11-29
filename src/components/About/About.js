import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import Fade from 'react-reveal/Fade';


function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="skills" style={{backgroundColor: theme.secondary80}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{ color: theme.primary }}>{aboutData.title}
                        <span>{aboutData.titleko}</span>
                    </h2>

                    <p style={{ color: theme.tertiary80 }}>{aboutData.skill1}</p>
                    <div className="meter">
                        <Fade left><span style={{ width: 90 + '%' }}></span></Fade>
                    </div>

                    <p style={{ color: theme.tertiary80 }}>{aboutData.skill2}</p>
                    <div className="meter">
                        <Fade left><span style={{ width: 80 + '%' }}></span></Fade>
                    </div>

                    <p style={{ color: theme.tertiary80 }}>{aboutData.skill3}</p>
                    <div className="meter">
                        <Fade left><span style={{ width: 95 + '%' }}></span></Fade>
                    </div>

                    <p style={{ color: theme.tertiary80 }}>{aboutData.skill4}</p>
                    <div className="meter">
                        <Fade left><span style={{ width: 90 + '%' }}></span></Fade>
                    </div>

                    <p style={{ color: theme.tertiary80 }}>{aboutData.skill5}</p>
                    <div className="meter">
                        <Fade left><span style={{ width: 85 + '%' }}></span>
                        </Fade>
                    </div>

                    <p style={{ color: theme.tertiary80 }}>{aboutData.skill6}</p>
                    <div className="meter">
                        <Fade left><span style={{ width: 70 + '%' }}></span>
                        </Fade>
                    </div>

                </div>
                <div className="about-img">
                    <img src={theme.eduimg} alt=""/>
                </div>
            </div>
            </div>

    )
}

export default About
