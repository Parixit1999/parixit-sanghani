import React from 'react';
import './Interests.css';

const INTERESTS: string[] = [
    'Distributed systems design',
    'Cloud-native backend engineering',
    'MLOps for robotics and automation',
    'Data-driven product development',
    'High-quality developer tooling and CI/CD',
    'Building useful full-stack user experiences',
];

const Interests: React.FC = () => {
    return (
        <div className="interests-container">
            <p className="interests-intro">
                Areas I am actively interested in exploring through work, side projects, and continuous learning:
            </p>
            <div className="interests-list">
                {INTERESTS.map((interest: string) => (
                    <span key={interest} className="interest-pill">{interest}</span>
                ))}
            </div>
        </div>
    );
};

export default Interests;
