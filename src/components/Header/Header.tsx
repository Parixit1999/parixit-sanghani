import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import Button from '../Button/Button';
import profilePic from '../../static/profile/profile.png';
import './Header.css'; // Assuming you have a CSS file for header styles

const Header: React.FC = () => {
    return (
        <header className='header'>

            <div className='header-profile-pic'>
                <ProfilePicture 
                    src={profilePic}
                    alt="Profile Picture" 
                    size={100} 
                />
            </div>
            <div className='header-container'>
                <Button 
                    label="Portfolio" 
                    onClick={() => window.open('https://twitter.com/parixitsanghani', '_blank')} 
                    className="header-button"
                    />
                    <Button 
                    label="Education" 
                    onClick={() => window.open('https://twitter.com/parixitsanghani', '_blank')} 
                    className="header-button"
                    />
                    <Button 
                    label="About Me" 
                    onClick={() => window.open('https://twitter.com/parixitsanghani', '_blank')} 
                    className="header-button"
                    />
            </div>
        </header>
    );
};


export default Header;