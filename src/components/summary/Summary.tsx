import React from 'react';
import './Summary.css';

const Summary: React.FC = () => {
    return (
        <div className="profile-summary">
            <p className="summary-copy">
                Software Engineer focused on building scalable backend and data-intensive systems for AI-driven products.
                I currently lead engineering at Nebula-NLU and previously built MLOps and robotics infrastructure at
                Amazon Robotics.
            </p>
            <p className="summary-copy secondary">
                My core strengths are distributed systems design, cloud automation, and delivering production-ready
                platforms that are reliable, measurable, and easy for teams to operate.
            </p>
        </div>
    );
};

export default Summary;
