import React from 'react';
import './Profile.css';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Interests from '../interests/Interests';
import Projects from '../projects/Projects';
import Summary from '../summary/Summary';
import TechnicalSkills from '../technicalSkills/TechnicalSkills';

const NEBULA_NLU_EXPERIENCE = "- Led engineering operations for an AI legal-discovery agent that automates finding case disclosures for lawyers.\n- Built semantic search and RAG workflows using Python and FastAPI for high-accuracy retrieval across legal documents.\n- Designed asynchronous ingestion/vectorization pipelines and automated cloud infrastructure for reliable staging and production releases."
const AMAZON_ROBOTICS_SDE = "- Engineered cloud-native MLOps pipelines for robotics models, improving reliability and regional scalability.\n- Developed model artifact versioning and deployment workflows with AWS Step Functions, S3, and DynamoDB.\n- Built CI/CD and serverless automation to reduce deployment cycle time and infrastructure cost."
const AMAZON_ROBOTICS_COOP = "- Built microservices for internal robotics simulation infrastructure with Spring Boot, Kotlin, and AWS.\n- Implemented serverless data-lake event processing and automated simulation workflows to improve experimentation speed.\n- Added integration and unit tests to improve reliability and reduce iteration time for science teams."
const CREST_DATA_SYSTEMS = "- Delivered full-stack log ingestion and ETL pipelines for enterprise security analytics datasets.\n- Built React-based interfaces and backend APIs used in Cisco and Google Chronicle client workflows.\n- Modernized legacy frontend/backend modules to improve maintainability and application performance."
const CREST_DATA_SYSTEMS_INTERN = "- Built Sophos-Kaseya integration features for cloud-based monitoring workflows.\n- Contributed to internal HRMS product development with React, GraphQL, FastAPI, and Python.\n- Supported end-to-end implementation, testing, and delivery across frontend and backend layers."

const Profile: React.FC = () => {
    return (
        <div className="profile">
            <div className="profile-layout">
                <main className="profile-main">
                    <section className='profile-section summary'>
                        <h2 className="section-title">Professional Summary</h2>
                        <Summary />
                    </section>
                    <section className='profile-section work-experience'>
                        <h2 className="section-title">Work Experience</h2>
                        <Experience company='Nebula-NLU' position='Lead Founding Engineer' year="Jan, 2026 - Present" location='Boston, USA' details={NEBULA_NLU_EXPERIENCE}/>
                        <Experience company='Amazon Robotics' position='Software Developer Engineer' year="July, 2024 - Oct, 2025" location='Boston, USA' details={AMAZON_ROBOTICS_SDE}/>
                        <Experience company='Amazon Robotics' position='Software Developer Engineer Co-op' year="Jan, 2023 - Aug, 2023" location='Boston, USA' details={AMAZON_ROBOTICS_COOP}/>
                        <Experience company='Crest Data Systems' position='Software Engineer' year="Aug, 2020 - Oct, 2021" location='Ahmedabad, India' details={CREST_DATA_SYSTEMS}/>
                        <Experience company='Crest Data Systems' position='Software Engineer Intern' year="Dec, 2019 - Aug, 2020" location='Ahmedabad, India' details={CREST_DATA_SYSTEMS_INTERN}/>
                    </section>
                </main>
                <aside className="profile-side">
                    <section className='profile-section technical-skills'>
                        <h2 className="section-title">Technical Skills</h2>
                        <TechnicalSkills />
                    </section>
                    <section className='profile-section education'>
                        <h2 className="section-title">Education</h2>
                        <Education schoolName='Rochester Institute of Technology' degree='M.S. in Computer Science' year="Jan, 2022 - Aug, 2024" location='New York, USA' link="https://www.rit.edu/"/>
                        <Education schoolName='Birla Vishvakarma Mahavidyalya' degree='B.Tech in Computer Engineering' year="Aug, 2016 - Aug, 2020" location='Gujarat, India' link="https://bvmengineering.ac.in/"/>
                    </section>
                    <section className='profile-section interests'>
                        <h2 className="section-title">Interests</h2>
                        <Interests />
                    </section>
                </aside>
            </div>
            <section className='profile-section projects projects-full-width'>
                <h2 className="section-title">Projects</h2>
                <Projects />
            </section>
        </div>
    );
};

export default Profile;
