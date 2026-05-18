import React from 'react';
import './Interests.css';

const EXPLORING: string[] = [
    'Frontier model evaluation',
    'LLM agent design',
    'RAG & retrieval',
    'Observability for ML',
    'Developer tooling',
    'Distributed data systems',
];

const Interests: React.FC = () => {
    return (
        <div className="interests-container">
            <div className="interests-list">
                {EXPLORING.map((item: string) => (
                    <span key={item} className="interest-pill">{item}</span>
                ))}
            </div>
        </div>
    );
};

export default Interests;
