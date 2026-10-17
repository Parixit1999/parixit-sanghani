import React from 'react';
import { ExternalLink, Sparkles, Code2 } from 'lucide-react';
import './Projects.css';

type Project = {
    title: string;
    timeline: string;
    associatedWith: string;
    impact: string;
    skills: string[];
    link?: string;
    featured?: boolean;
};

const PROJECTS: Project[] = [
    {
        title: 'AI Knowledge Base for Engineering Documents',
        timeline: '2026',
        associatedWith: 'MSMM Engineering',
        impact:
            'AI-powered knowledge base that lets engineers query millions of complex design documents in natural language, surfacing flaws and improvement opportunities in seconds instead of hours. Built on AWS Bedrock with Python and TypeScript; now in production with municipal clients.',
        skills: ['AWS Bedrock', 'Python', 'TypeScript', 'RAG', 'Vector Search'],
        featured: true,
    },
    {
        title: 'Intelligent Document Extraction',
        timeline: '2025',
        associatedWith: 'Independent Project',
        impact:
            'OCR + GenAI pipeline that parses unstructured PDFs, normalizes extracted insights into SQL records, and streams real-time data to frontend applications via REST APIs.',
        skills: ['OCR', 'GenAI', 'Python', 'SQL', 'REST API'],
        featured: true,
    },
    {
        title: 'Telemetry & Data Pipeline Automation',
        timeline: '2024',
        associatedWith: 'Independent Project',
        impact:
            'Python microservices backed by Kafka that stream and visualize Kubernetes pod metrics, giving ML pipelines end-to-end observability and traceability.',
        skills: ['Python', 'Kafka', 'Kubernetes', 'Microservices', 'Observability'],
    },
    {
        title: 'Image Similarity using Neural Network',
        timeline: 'May 2024 - Aug 2024',
        associatedWith: 'Rochester Institute of Technology',
        impact:
            'Benchmarked VGG, ResNet, and SimCLR and confirmed cosine similarity as the most reliable retrieval metric.',
        skills: ['Machine Learning', 'Computer Vision', 'Neural Networks', 'Python'],
    },
    {
        title: 'Efficient HPC Storage in Kubernetes',
        timeline: 'Jan 2024 - May 2024',
        associatedWith: 'Rochester Institute of Technology',
        impact:
            'Re-architected the Lustre filesystem into Kubernetes-based microservices with self-healing and pod recovery using Go, improving scalability, availability, and deployment efficiency in cloud environments.',
        skills: ['Kubernetes', 'Go', 'Lustre', 'Microservices'],
    },
    {
        title: 'Pneumonia Prediction and Detection',
        timeline: 'Aug 2023 - Dec 2023',
        associatedWith: 'Rochester Institute of Technology',
        impact:
            'Developed and tuned SVM/CNN models for pneumonia detection with augmentation, imbalance handling, and strong evaluation metrics.',
        skills: ['Machine Learning', 'SVM', 'TensorFlow', 'Python', 'Computer Vision'],
    },
    {
        title: 'Intrusion Detection System',
        timeline: 'Aug 2023 - Dec 2023',
        associatedWith: 'Rochester Institute of Technology',
        impact:
            'Built multi-class intrusion detection with LSTM/RNN/CNN models and deployed real-time inference via REST API.',
        skills: ['Deep Learning', 'PyTorch', 'NumPy', 'Scikit-Learn', 'REST API'],
    },
];

const EARLIER_WORK: string[] = [
    'Online Agriculture Trading (2020)',
    'Stock Market Simulation (2019)',
    'Fingerprint Recognition (2019)',
    'Face Detection and Recognition (2018)',
];

const Projects: React.FC = () => {
    return (
        <>
            <div className="projects-list">
                {PROJECTS.map((project: Project) => (
                    <article
                        key={project.title}
                        className={`project-card${project.featured ? ' project-card-featured' : ''}`}
                    >
                        {project.featured && (
                            <span className="project-featured-badge">
                                <Sparkles size={12} aria-hidden="true" /> Featured
                            </span>
                        )}
                        <div className="project-header">
                            <h3 className="project-title">
                                {project.link ? (
                                    <a className="project-title-link" href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.title}
                                        <ExternalLink size={14} aria-hidden="true" />
                                    </a>
                                ) : (
                                    project.title
                                )}
                            </h3>
                            <span className="project-timeline">{project.timeline}</span>
                        </div>
                        <p className="project-associated">{project.associatedWith}</p>
                        <p className="project-description">{project.impact}</p>
                        <div className="project-tech-line">
                            <Code2 size={13} aria-hidden="true" className="project-tech-icon" />
                            <span className="project-tech-text">{project.skills.join(' · ')}</span>
                        </div>
                    </article>
                ))}
            </div>
            <div className="projects-earlier">
                <span className="projects-earlier-label">Earlier work:</span>
                <span className="projects-earlier-list">{EARLIER_WORK.join(' · ')}</span>
            </div>
        </>
    );
};

export default Projects;
