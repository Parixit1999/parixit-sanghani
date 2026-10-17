import React from 'react';
import './Summary.css';

const Summary: React.FC = () => {
    return (
        <div className="profile-summary">
            <p className="summary-copy">
                Software Engineer focused on building scalable backend and data-intensive systems for AI-driven products.
                I currently build AI developer tooling at MSMM Engineering, previously led engineering at Nebula-NLU
                and built MLOps and robotics infrastructure at Amazon Robotics.
            </p>
            <p className="summary-copy secondary">
                I care about distributed systems design, cloud automation, and shipping production-ready platforms
                that are reliable, measurable, and easy for teams to operate.
            </p>
        </div>
    );
};

export default Summary;
