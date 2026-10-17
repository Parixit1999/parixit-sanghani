import React from 'react';
import { Briefcase, Compass, FileText, FolderGit2, GraduationCap, LucideIcon, Wrench } from 'lucide-react';
import './Profile.css';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Interests from '../interests/Interests';
import Projects from '../projects/Projects';
import Summary from '../summary/Summary';
import TechnicalSkills from '../technicalSkills/TechnicalSkills';

const SectionTitle: React.FC<{ icon: LucideIcon; children: React.ReactNode }> = ({ icon: Icon, children }) => (
    <h2 className="section-title">
        <Icon size={18} aria-hidden="true" className="section-title-icon" />
        <span>{children}</span>
    </h2>
);

const MSMM_EXPERIENCE = "- Shipped an AI knowledge base end-to-end with AWS Bedrock, Python, and TypeScript — turning complex engineering documents into something engineers can query in natural language, now in production with municipal clients.\n- Made millions of design documents searchable in natural language, so engineers can surface design flaws and improvement opportunities instantly instead of hunting through PDFs.\n- Re-architected AWS infrastructure for an existing production application, cutting cloud costs by ~60% and letting the team lower the product's price point for clients."
const NEBULA_NLU_EXPERIENCE = "- Architected the semantic search engine for Nebula-NLU's legal discovery product on Vertex AI and AlloyDB — 90% higher accuracy than keyword search for identifying critical case disclosures.\n- Built the distributed RAG pipeline in Python and FastAPI, containerized with Docker and deployed on Cloud Run with sub-second latency under bursty traffic.\n- Designed an asynchronous document ingestion workflow on GCP Pub/Sub, keeping large-scale legal-dataset vectorization resilient without bottlenecks.\n- Automated 100% of cloud infrastructure in Terraform — reproducible staging and prod environments that cut deployment lead times by 40%.\n- Built the Vue.js frontend with search-result visualizations that improved legal researcher productivity by 30%."
const AMAZON_ROBOTICS_SDE = "- Shipped the distributed MLOps pipeline for a production PyTorch model powering warehouse robotics — 99.9% real-time inference uptime with deployment-pipeline-driven resource allocation.\n- Built the backend on Step Functions, DynamoDB, EMR, and Docker, cutting model training time by 30% and cloud spend by $1.1M annually.\n- Designed the ML artifact versioning system on ECS, S3, and DynamoDB, accelerating research-team release cycles by 25%.\n- Built internal CI/CD tooling in AWS CDK, CloudFormation, and CodeBuild, cutting build and deployment time in half.\n- Shipped serverless pipelines (Java Lambda, SQS) for ML-powered robotics, saving $50K/month on operating costs while keeping global deployments reliable."
const AMAZON_ROBOTICS_COOP = "- Built the Spring Boot / Kotlin microservices for robotics simulation, exposing high-throughput REST APIs behind Amazon API Gateway.\n- Designed simulation pipelines and automation scripts that streamlined experimentation workflows for applied research teams.\n- Shipped AWS Lambda functions in Python for Data Lake ingestion, cutting data processing latency by 45% for internal customers."
const CREST_DATA_SYSTEMS = "- Shipped full-stack applications (Python, React.js) for enterprise clients including Cisco, Splunk, Sophos, and HashiCorp.\n- Built large-scale security data pipelines and vendor-facing analysis tools that improved processing speed by 60% and accelerated product discovery by 40% for 2,000+ users.\n- Designed GraphQL API architectures that minimized latency and payload size across distributed services."

const Profile: React.FC = () => {
    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="profile">
            <div className="profile-layout">
                <main className="profile-main">
                    <section className='profile-section summary'>
                        <SectionTitle icon={FileText}>Professional Summary</SectionTitle>
                        <Summary />
                    </section>
                    <section className='profile-section work-experience'>
                        <SectionTitle icon={Briefcase}>Work Experience</SectionTitle>
                        <Experience company='MSMM Engineering' position='AI Developer' year="Aug, 2026 - Present" location='New Orleans, USA' details={MSMM_EXPERIENCE}/>
                        <Experience company='Nebula-NLU' position='Lead Founding Engineer' year="Jan, 2026 - July, 2026" location='Boston, USA' details={NEBULA_NLU_EXPERIENCE}/>
                        <Experience company='Amazon Robotics' position='Software Developer Engineer' year="July, 2024 - Oct, 2025" location='Boston, USA' details={AMAZON_ROBOTICS_SDE}/>
                        <Experience company='Amazon Robotics' position='Software Developer Engineer Co-op' year="Jan, 2023 - Aug, 2023" location='Boston, USA' details={AMAZON_ROBOTICS_COOP}/>
                        <Experience company='Crest Data' position='Software Developer Engineer' year="Dec, 2019 - Oct, 2021" location='Ahmedabad, India' details={CREST_DATA_SYSTEMS}/>
                    </section>
                </main>
                <aside className="profile-side">
                    <section className='profile-section technical-skills'>
                        <SectionTitle icon={Wrench}>Technical Skills</SectionTitle>
                        <TechnicalSkills />
                    </section>
                    <section className='profile-section education'>
                        <SectionTitle icon={GraduationCap}>Education</SectionTitle>
                        <Education schoolName='Rochester Institute of Technology' degree='M.S. in Computer Science' year="Jan, 2022 - Aug, 2024" location='New York, USA' link="https://www.rit.edu/"/>
                        <Education schoolName='Birla Vishvakarma Mahavidyalya' degree='B.Tech in Computer Engineering' year="Aug, 2016 - Aug, 2020" location='Gujarat, India' link="https://bvmengineering.ac.in/"/>
                    </section>
                    <section className='profile-section interests'>
                        <SectionTitle icon={Compass}>Currently Exploring</SectionTitle>
                        <Interests />
                    </section>
                </aside>
            </div>
            <section className='profile-section projects projects-full-width'>
                <SectionTitle icon={FolderGit2}>Projects</SectionTitle>
                <Projects />
            </section>
            <div className="back-to-top-wrap">
                <button type="button" className="back-to-top-button" onClick={handleBackToTop}>
                    Back to Top
                </button>
            </div>
        </div>
    );
};

export default Profile;
