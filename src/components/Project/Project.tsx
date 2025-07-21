import React from 'react';
import './Project.css';

interface ProjectProps {
    title: string;
    role: string;
    description: string;
    images: string[];
}

const Project: React.FC<ProjectProps> = ({ title, role, description, images }) => {
    return (
        <div className="project">
            <h2 className="project-title">{title}</h2>
            <h3 className="project-role">Role: {role}</h3>
            <p className="project-description">{description}</p>
            <div className="project-carousel">
                {images.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <img src={image} alt={`${title} screenshot ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;