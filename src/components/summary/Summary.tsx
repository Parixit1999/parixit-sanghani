import React from 'react';
import './Summary.css';

const Summary: React.FC = () => {
    return (
        <div className="profile-summary">
            <p className="summary-copy">
                Software engineer building data-intensive backend systems for AI products. Currently shipping
                BlueprintAI at MSMM Engineering — an AWS Bedrock platform that lets municipal engineers query
                millions of design blueprints in natural language. Previously founding engineer at Nebula-NLU
                (semantic search for legal discovery) and SDE at Amazon Robotics (MLOps for warehouse robots).
            </p>
            <p className="summary-copy secondary">
                I care about distributed systems design, cloud automation, and shipping platforms that are
                reliable, measurable, and easy for teams to operate.
            </p>
        </div>
    );
};

export default Summary;
