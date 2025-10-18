import React, { useState } from 'react';
import './Experience.css';

type ExperienceProps = {
    company: string;
    position: string;
    year: string;
    location: string;
    details: string;
};

const Experience: React.FC<ExperienceProps> = ({ company, position, year, location, details }: ExperienceProps) => {


    return (
        <div>
            <div className="experience-section">
                <h2 className="company-name">{company} - {position}</h2>
                <p className="year-location">{year} | {location}</p>
            </div>
            <div>
                <p className="details">{details}</p>
            </div>
        </div>
        
    );
};

export default Experience;
