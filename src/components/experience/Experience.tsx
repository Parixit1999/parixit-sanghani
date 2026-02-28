import React from 'react';
import './Experience.css';

type ExperienceProps = {
    company: string;
    position: string;
    year: string;
    location: string;
    details: string;
};

const Experience: React.FC<ExperienceProps> = ({ company, position, year, location, details }: ExperienceProps) => {
    const detailLines: string[] = details
        .split('\n')
        .map((line: string) => line.trim())
        .filter(Boolean);
    const hasMultipleLines: boolean = detailLines.length > 1;

    return (
        <article className="experience-card">
            <div className="experience-section">
                <h2 className="company-name">{company}</h2>
                <p className="role-name">{position}</p>
                <p className="year-location">{year} | {location}</p>
            </div>
            <div>
                {hasMultipleLines ? (
                    <ul className="details-list">
                        {detailLines.map((line: string, index: number) => (
                            <li key={`${company}-${position}-${index}`} className="details-list-item">
                                {line.replace(/^-+\s*/, '')}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="details">{details}</p>
                )}
            </div>
        </article>
        
    );
};

export default Experience;
