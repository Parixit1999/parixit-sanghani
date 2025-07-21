import React from 'react';

const Portfolio: React.FC = () => {
    const projects = [
        { id: 1, name: 'Project One', description: 'Description of Project One' },
        { id: 2, name: 'Project Two', description: 'Description of Project Two' },
        { id: 3, name: 'Project Three', description: 'Description of Project Three' },
    ];

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>Portfolio</h1>
            <div>
                {projects.map((project) => (
                    <div key={project.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;