import React from 'react';
import './TechnicalSkills.css';

type SkillGroup = {
    category: string;
    skills: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
    {
        category: 'Languages',
        skills: ['Python', 'Java', 'Kotlin', 'TypeScript', 'Go', 'Rust', 'C++', 'Shell Scripting', 'SQL'],
    },
    {
        category: 'Backend and APIs',
        skills: ['Spring Boot', 'FastAPI', 'Node.js', 'Django', 'Flask', 'GraphQL', 'gRPC', 'REST'],
    },
    {
        category: 'Data and Platforms',
        skills: ['Kafka', 'Redis', 'MySQL', 'PostgreSQL', 'DynamoDB', 'MongoDB', 'Oracle DB'],
    },
    {
        category: 'Cloud and DevOps',
        skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CloudFormation', 'CI/CD', 'Jenkins'],
    },
    {
        category: 'Engineering Practices',
        skills: ['Distributed Systems', 'MLOps', 'Pipeline Automation', 'Microservices', 'Code Review', 'Debugging'],
    },
];

const TechnicalSkills: React.FC = () => {
    return (
        <div className="skills-grid">
            {SKILL_GROUPS.map((group: SkillGroup) => (
                <section key={group.category} className="skills-card">
                    <h2 className="skills-category">{group.category}</h2>
                    <div className="skills-list">
                        {group.skills.map((skill: string) => (
                            <span key={skill} className="skill-pill">{skill}</span>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default TechnicalSkills;
