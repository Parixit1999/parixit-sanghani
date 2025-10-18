import React from 'react';
import './Education.css';

type EducationProps = {
    schoolName: string;
    degree: string;
    year: string;
    location: string;
    link: string;
}

const Education: React.FC<EducationProps> = ( props: EducationProps) => {
    return (
        <div className="education-section">
            <h2 className="school-name"><a className="school-name-ref" href={props.link} target='_blank'>{props.schoolName}</a></h2>
            <p className="degree">{props.degree}</p>
            <p className="year-location">{props.year} | {props.location}</p>
            
        </div>
    );
};

export default Education;