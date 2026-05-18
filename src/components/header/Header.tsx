import React from 'react';
import { Linkedin, Github, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import './Header.css';
import profile from '../../static/profile/profile.png';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-photo-wrap">
                    <img className="header-photo" src={profile} alt="Parixit Sanghani" />
                </div>
                <div className="header-main">
                    <p className="header-role">Software Engineer · Distributed Systems · AI Platforms</p>
                    <h1 className="header-name">Parixit Sanghani</h1>
                    <p className="header-tagline">
                        Lead Founding Engineer at Nebula-NLU, previously Software Developer Engineer at Amazon Robotics.
                    </p>
                    <div className='header-contact'>
                        <span className="header-pill"><MapPin size={14} aria-hidden="true" /> Boston, MA</span>
                        <a className="header-pill" href="tel:+5859103634" aria-label="Phone"><Phone size={14} aria-hidden="true" /> +1 (585) 910-3634</a>
                        <a className="header-pill" href="mailto:ps9903@g.rit.edu" aria-label="Email"><Mail size={14} aria-hidden="true" /> ps9903@g.rit.edu</a>
                    </div>
                    <div className='header-links'>
                        <a className="header-social" href="https://www.linkedin.com/in/parixit-sanghani/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={15} aria-hidden="true" /> LinkedIn
                        </a>
                        <a className="header-social" href="https://github.com/Parixit1999" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={15} aria-hidden="true" /> GitHub
                        </a>
                        <a className="header-social" href="https://x.com/ParixitSanghani" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                            <Twitter size={15} aria-hidden="true" /> X
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
