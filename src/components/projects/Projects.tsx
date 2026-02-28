import React from 'react';
import './Projects.css';

type Project = {
    title: string;
    timeline: string;
    associatedWith: string;
    impact: string;
    skills: string[];
};

const PROJECTS: Project[] = [
    {
        title: 'Image Similarity using Neural Network',
        timeline: 'May 2024 - Aug 2024',
        associatedWith: 'Rochester Institute of Technology',
        impact:
            'Benchmarked VGG, ResNet, and SimCLR and confirmed cosine similarity as the most reliable retrieval metric.',
        skills: ['Machine Learning', 'Computer Vision', 'Neural Networks', 'Python'],
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
    {
        title: 'Online Agriculture Trading for Indian Farmers',
        timeline: 'Aug 2020 - Dec 2020',
        associatedWith: 'Birla Vishvakarma Mahavidyalaya',
        impact:
            'Built web/mobile marketplace connecting farmers directly to buyers with messaging, caching, and AWS-based deployment.',
        skills: ['Node.js', 'Vue.js', 'MongoDB', 'RabbitMQ', 'Redis', 'AWS', 'Nginx'],
    },
    {
        title: 'Stock Market Simulation Game',
        timeline: 'May 2019',
        associatedWith: 'Birla Vishvakarma Mahavidyalaya',
        impact:
            'Led a stock-market simulation used by 2,000+ students with scalable AWS hosting and live participant notifications.',
        skills: ['Python', 'Flask', 'AngularJS', 'AWS', 'RabbitMQ'],
    },
    {
        title: 'Fingerprint Recognition Using Deep Learning',
        timeline: 'Jan 2019 - Mar 2019',
        associatedWith: 'Birla Vishvakarma Mahavidyalaya',
        impact:
            'Implemented fingerprint-based attendance with Raspberry Pi, OpenCV/TensorFlow pipelines, and database-backed workflows.',
        skills: ['OpenCV', 'TensorFlow', 'Raspberry Pi', 'MySQL', 'Android', 'Java'],
    },
    {
        title: 'Face Detection and Recognition',
        timeline: 'May 2018 - Aug 2018',
        associatedWith: 'Birla Vishvakarma Mahavidyalaya',
        impact:
            'Built face-recognition attendance automation with dlib/OpenCV/FaceNet and React-based admin tooling.',
        skills: ['dlib', 'OpenCV', 'TensorFlow', 'React', 'JavaScript', 'MySQL'],
    },
];

const Projects: React.FC = () => {
    return (
        <div className="projects-list">
            {PROJECTS.map((project: Project) => (
                <article key={project.title} className="project-card">
                    <div className="project-header">
                        <h3 className="project-title">{project.title}</h3>
                        <span className="project-timeline">{project.timeline}</span>
                    </div>
                    <p className="project-associated">{project.associatedWith}</p>
                    <p className="project-description">{project.impact}</p>
                    <div className="project-tech-list">
                        {project.skills.map((skill: string) => (
                            <span key={skill} className="project-tech-pill">{skill}</span>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );
};

export default Projects;
