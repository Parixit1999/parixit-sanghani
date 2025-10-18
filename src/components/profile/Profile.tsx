import React from 'react';
import './Profile.css';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Summary from '../summary/Summary';

const ALTEN_EXPERIENCE = "I worked on the StowLion project at Amazon Robotics, focused on improving stowing efficiency across Amazon fulfillment centers worldwide. My primary responsibility was building and maintaining MLOps infrastructure for training, deployment, and monitoring of machine learning models that assisted scientists in model evaluation and fine-tuning.  I contributed to designing data, training, and inference pipelines in a distributed environment spanning North America, Europe, Japan, and the APAC regions. My work involved developing with Java, Python, and TypeScript, leveraging AWS CDK for automated deployments and serverless compute for scalable execution.  I also developed dashboards to track model performance and supported continuous model improvement. Additionally, I helped design a model versioning and tracking system using AWS Step Functions, S3, and DynamoDB to manage ML artifacts at scale. Collaborating with talented engineers and scientists, I helped ensure reliable global ML operations that enhanced robotics performance and fulfillment efficiency."
const AMAZON_ROBOTICS = "During my co-op at Amazon Robotics, I worked on building the infrastructure for internal scientific robotics simulations, enabling scientists to efficiently test and validate robotic behaviors at scale. The system followed a microservices-based architecture, designed for smooth parallel and batch operations.   Most services were developed in Java using Spring Boot, where I contributed to writing unit and integration tests to ensure reliability. I also developed serverless components using AWS Lambda and resolved several production issues related to simulation execution.   Additionally, I was responsible for automating infrastructure deployment and maintaining CI/CD pipelines, improving release reliability. I wrote simulation scripts to augment scientists’ workflows, aligning simulation outcomes closely with production environments for better validation and iteration."
const CREST_DATA_SYSTEMS = "At Crest Data Systems, I delivered end-to-end solutions for clients such as Sophos, Cisco, and Google Chronicle. For Sophos, I worked on integration applications and deployed AWS infrastructure using Terraform, building interactive dashboards with ReactJS, D3.js, and Python backends. For Cisco, I developed ReactJS components for a competitive analysis tool and implemented REST APIs with FastAPI. For Google Chronicle, I built a log forwarder and real-time ETL pipeline with nested, UI-driven filters, leading the complex UI development that processed logs from Google APIs for analytics dashboards. Additionally, I worked on the Splunk Observability project, automating tests with Cypress to reduce testing time and cost."
const CREST_DATA_SYSTEMS_INTERN = "As an intern at Crest Data Systems, I worked with Sophos to integrate APIs with Kaseya, helping Sophos manage their clients’ internal systems through a unified cloud-based monitoring dashboard to enhance customer protection. I was involved in full-stack development, using ReactJS for the frontend and Python for the backend. In addition, I contributed to the development of an internal HRMS application for Crest Data Systems, which maintained employee records and organizational data. My work included building backend services using GraphQL and FastAPI, along with frontend components using ReactJS."

const Profile: React.FC = () => {
    return (
        <div className="profile">
            <div className='summary'>
                <h1><u>Summary</u></h1>
                <Summary />
            </div>
            <div className='education'>
                <h1><u>Education</u></h1>
                <Education schoolName='Rochester Institute of Technology' degree='M.S. in Computer Science' year="Jan, 2022 - Aug, 2024" location='New York, USA' link="https://www.rit.edu/"/>
                <Education schoolName='Birla Vishvakarma Mahavidyalya' degree='B.Tech in Computer Engineering' year="Aug, 2016 - Aug, 2020" location='Gujarat, India' link="https://bvmengineering.ac.in/"/>
            </div>
            <div className='work-experience'>
                <h1><u>Work Experience</u></h1>
                <Experience company='ALTEN Technology' position='Software Engineer' year="July, 2024 - Present" location='Boston, USA' details={ALTEN_EXPERIENCE}/>
                <Experience company='Amazon Robotics' position='Software Engineer Co-op' year="Jan, 2023 - Aug, 2023" location='Boston, USA' details={AMAZON_ROBOTICS}/>
                <Experience company='Crest Data Systems' position='Software Engineer' year="Aug, 2020 - Oct, 2021" location='Ahmedabad, India' details={CREST_DATA_SYSTEMS}/>
                <Experience company='Crest Data Systems' position='Software Engineer Intern' year="Dec, 2019 - Aug, 2020" location='Ahmedabad, India' details={CREST_DATA_SYSTEMS_INTERN}/>
            </div>
           
            
        </div>
    );
};

export default Profile;