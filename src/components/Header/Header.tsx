import React from 'react';
import './Header.css';
import profile from '../../static/profile/profile.png';

const Header: React.FC = () => {
    return (
        <header className="header">
            <img src={profile} alt="Parixit" />
            <h1>Parixit Sanghani</h1>
            <p>Software Engineer | Tech Enthusiast </p>
            <div className='social-icons'>
                <a href="tel:+5859103634" aria-label="Phone">+1 (585-910-3634)</a> |
                <a href="mailto:parixit1999@gmail.com" aria-label="Email" >ps9903@g.rit.edu</a> |
                <a href="https://www.linkedin.com/in/parixit-sanghani/" target="_blank" aria-label="LinkedIn">linkedin.com/in/parixit-sanghani</a> |
                <a href="https://github.com/Parixit1999" target="_blank" aria-label="GitHub">github.com/Parixit1999</a> |
                <a href="https://x.com/ParixitSanghani" target="_blank" aria-label="Twitter">x.com/ParixitSanghani</a>
            </div>
        </header>
    );
};

export default Header;