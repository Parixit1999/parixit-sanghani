import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for footer styles

const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <p>&copy; {new Date().getFullYear()} Parixit Sanghani. All rights reserved.</p>
            <div>
                <a href="https://twitter.com/parixitsanghani" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                    Twitter
                </a>
                <a href="https://linkedin.com/in/parixitsanghani" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                    LinkedIn
                </a>
                <a href="https://github.com/parixitsanghani" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
                    GitHub
                </a>
            </div>
        </footer>
    );
};

export default Footer;