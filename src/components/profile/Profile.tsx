import React from 'react';
import { Briefcase, Compass, FileText, FolderGit2, GraduationCap, LucideIcon, Target, Wrench } from 'lucide-react';
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

const MSMM_EXPERIENCE = "- Built BlueprintAI end-to-end with AWS Bedrock, Python, and TypeScript, turning engineering design blueprints into a queryable AI knowledge base for the City of New Orleans and the Sewerage & Water Board of New Orleans.\n- Enabled engineers to query designs in natural language to surface flaws and improvement opportunities, delivering accurate results across millions of design documents.\n- Re-architected AWS infrastructure for an existing production application, cutting cloud costs by ~60% and lowering the product's price point for clients."
const NEBULA_NLU_EXPERIENCE = "- Architected a high-performance semantic search engine for legal discovery using Vertex AI and AlloyDB, enabling lawyers to identify critical case disclosures with 90% higher accuracy than keyword-based systems.\n- Developed a scalable distributed RAG pipeline with Python and FastAPI, containerized with Docker and deployed on Google Cloud Run to handle bursty traffic with sub-second latency.\n- Engineered an asynchronous document processing workflow with GCP Pub/Sub for resilient ingestion and vectorization of large-scale legal datasets without system bottlenecks.\n- Automated 100% of cloud infrastructure with Terraform, establishing reproducible staging and production environments that cut deployment lead times by 40%.\n- Designed a data-intensive Vue.js frontend with complex search result visualizations that improved legal researcher productivity by 30%."
const AMAZON_ROBOTICS_SDE = "- Engineered a cloud-native distributed MLOps pipeline for a high-performance PyTorch model, achieving 99.9% uptime for real-time inference with scalable deployment-pipeline-driven resource allocation.\n- Developed AWS backend infrastructure with Step Functions, DynamoDB, EMR, and Docker that reduced model training time by 30% and cut cloud infrastructure cost by $1.1M annually.\n- Designed a robust artifact versioning system leveraging distributed ECS, S3, and DynamoDB for managing and deploying ML models, accelerating the research-team release cycle by 25%.\n- Built internal CI/CD tooling with AWS CDK, CloudFormation, and CodeBuild, reducing build and deployment time by 50%.\n- Built cost-efficient distributed pipelines for ML-powered robotics using serverless architecture (Java Lambda, SQS), reducing operating costs by $50K per month while ensuring high reliability for global deployments."
const AMAZON_ROBOTICS_COOP = "- Developed scalable microservices for robotics simulation with Spring Boot and Kotlin, exposing high-throughput REST APIs via Amazon API Gateway for secure and efficient service discovery.\n- Designed and executed simulation pipelines via custom APIs and automation scripts, streamlining experimentation workflows for applied research teams.\n- Implemented AWS Lambda serverless functions in Python with comprehensive unit tests to process Data Lake ingestion events, reducing data processing latency by 45% for customers."
const CREST_DATA_SYSTEMS = "- Architected large-scale data ingestion pipelines for Google Chronicle and optimized data structures for high-speed retrieval, laying the foundation for automated analysis and visibility.\n- Engineered high-performance developer-facing surfaces for competitive analysis, streamlining workflows for 2,000+ users through intuitive UI/UX integration.\n- Designed scalable GraphQL API architectures that minimized latency and payload size, ensuring reliable communication across distributed system environments."
const OPEN_TO_ROLES = [
    'Software Engineer',
    'Backend Engineer',
    'Distributed Systems Engineer',
    'MLOps Engineer',
    'AI Platform Engineer',
];

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
                    <section className='profile-section open-to-roles'>
                        <SectionTitle icon={Target}>Open to Roles</SectionTitle>
                        <p className="open-to-roles-copy">
                            Open to full-time opportunities in Boston, New York, and remote U.S. teams.
                            Strong match for software, backend, distributed systems, and MLOps engineering roles.
                        </p>
                        <div className="open-to-roles-list">
                            {OPEN_TO_ROLES.map((role: string) => (
                                <span key={role} className="open-to-roles-pill">{role}</span>
                            ))}
                        </div>
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
