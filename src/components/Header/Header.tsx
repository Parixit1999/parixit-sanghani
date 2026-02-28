import React from 'react';
import './Header.css';
import profile from '../../static/profile/profile.png';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <img className="header-photo" src={profile} alt="Parixit Sanghani" />
                <div className="header-main">
                    <h1 className="header-name">Parixit Sanghani</h1>
                    <p className="header-role">Software Engineer | Distributed Systems | AI Platforms</p>
                    <p className="header-tagline">
                        Lead Founding Engineer at Nebula-NLU, previously Software Developer Engineer at Amazon Robotics.
                    </p>
                    <div className='header-contact'>
                        <span>Boston, MA</span>
                        <a href="tel:+5859103634" aria-label="Phone">+1 (585)-910-3634</a>
                        <a href="mailto:ps9903@g.rit.edu" aria-label="Email">ps9903@g.rit.edu</a>
                    </div>
                    <div className='header-links'>
                        <a href="https://www.linkedin.com/in/parixit-sanghani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
                        <a href="https://github.com/Parixit1999" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
                        <a href="https://x.com/ParixitSanghani" target="_blank" rel="noopener noreferrer" aria-label="Twitter">X</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
