export const site = {
  name: "Parixit Sanghani",
  url: "https://parixitsanghani.com",
  roleLine: "Software Engineer / Distributed Systems / AI Platforms",
  tagline:
    "AI Developer at MSMM Engineering, building AI systems for engineering workflows. Previously founding engineer at Nebula-NLU and SDE at Amazon Robotics.",
  email: "ps9903@g.rit.edu",
  location: "Boston, MA",
  links: {
    linkedin: "https://www.linkedin.com/in/parixit-sanghani/",
    github: "https://github.com/Parixit1999",
    x: "https://x.com/ParixitSanghani",
  },
} as const;

export const about = [
  "Software engineer building data-intensive backend systems for AI products. Currently at MSMM Engineering, building AWS Bedrock-powered systems that make complex engineering documents searchable in natural language. Previously founding engineer at Nebula-NLU (semantic search for legal discovery) and SDE at Amazon Robotics (MLOps for warehouse robots).",
  "I care about distributed systems design, cloud automation, and shipping platforms that are reliable, measurable, and easy for teams to operate.",
];

export const exploring = [
  "Frontier model evaluation",
  "LLM agent design",
  "RAG & retrieval",
  "MLOps and platform engineering",
  "Developer tooling",
  "Distributed data systems",
];

export type ExperienceTheme = "msmm" | "nebula" | "amazon" | "crest";

export type Role = {
  title: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
};

export type Experience = {
  company: string;
  theme: ExperienceTheme;
  roles: Role[];
};

export const experience: Experience[] = [
  {
    company: "MSMM Engineering",
    theme: "msmm",
    roles: [
      {
        title: "AI Developer",
        period: "Aug 2026 - Present",
        location: "New Orleans, USA",
        current: true,
        bullets: [
          "Shipped an AI knowledge base end-to-end with AWS Bedrock, Python, and TypeScript, turning complex engineering documents into something engineers can query in natural language, now in production with municipal clients.",
          "Made millions of design documents searchable in natural language, so engineers can surface design flaws and improvement opportunities instantly instead of hunting through PDFs.",
          "Re-architected AWS infrastructure for an existing production application, cutting cloud costs by ~60% and letting the team lower the product's price point for clients.",
        ],
      },
    ],
  },
  {
    company: "Nebula-NLU",
    theme: "nebula",
    roles: [
      {
        title: "Lead Founding Engineer",
        period: "Jan 2026 - Jul 2026",
        location: "Boston, USA",
        bullets: [
          "Architected the semantic search engine for Nebula-NLU's legal discovery product on Vertex AI and AlloyDB, with 90% higher accuracy than keyword search for identifying critical case disclosures.",
          "Built the distributed RAG pipeline in Python and FastAPI, containerized with Docker and deployed on Cloud Run with sub-second latency under bursty traffic.",
          "Designed an asynchronous document ingestion workflow on GCP Pub/Sub, keeping large-scale legal-dataset vectorization resilient without bottlenecks.",
          "Automated 100% of cloud infrastructure in Terraform, with reproducible staging and prod environments that cut deployment lead times by 40%.",
          "Built the Vue.js frontend with search-result visualizations that improved legal researcher productivity by 30%.",
        ],
      },
    ],
  },
  {
    company: "Amazon Robotics",
    theme: "amazon",
    roles: [
      {
        title: "Software Development Engineer",
        period: "Jul 2024 - Oct 2025",
        location: "Boston, USA",
        bullets: [
          "Shipped the distributed MLOps pipeline for a production PyTorch model powering warehouse robotics, with 99.9% real-time inference uptime and deployment-pipeline-driven resource allocation.",
          "Built the backend on Step Functions, DynamoDB, EMR, and Docker, cutting model training time by 30% and cloud spend by $1.1M annually.",
          "Designed the ML artifact versioning system on ECS, S3, and DynamoDB, accelerating research-team release cycles by 25%.",
          "Built internal CI/CD tooling in AWS CDK, CloudFormation, and CodeBuild, cutting build and deployment time in half.",
          "Shipped serverless pipelines (Java Lambda, SQS) for ML-powered robotics, saving $50K/month on operating costs while keeping global deployments reliable.",
        ],
      },
      {
        title: "Software Development Engineer Co-op",
        period: "Jan 2023 - Aug 2023",
        location: "Boston, USA",
        bullets: [
          "Built the Spring Boot / Kotlin microservices for robotics simulation, exposing high-throughput REST APIs behind Amazon API Gateway.",
          "Designed simulation pipelines and automation scripts that streamlined experimentation workflows for applied research teams.",
          "Shipped AWS Lambda functions in Python for Data Lake ingestion, cutting data processing latency by 45% for internal customers.",
        ],
      },
    ],
  },
  {
    company: "Crest Data",
    theme: "crest",
    roles: [
      {
        title: "Software Developer Engineer",
        period: "Dec 2019 - Oct 2021",
        location: "Ahmedabad, India",
        bullets: [
          "Shipped full-stack applications (Python, React.js) for enterprise clients including Cisco, Splunk, Sophos, and HashiCorp.",
          "Built large-scale security data pipelines and vendor-facing analysis tools that improved processing speed by 60% and accelerated product discovery by 40% for 2,000+ users.",
          "Designed GraphQL API architectures that minimized latency and payload size across distributed services.",
        ],
      },
    ],
  },
];

export type ProjectVisualKey = "docs" | "pipeline" | "similarity" | "storage" | "imaging" | "intrusion";

export type Project = {
  title: string;
  period: string;
  org: string;
  description: string;
  stack: string[];
  visual: ProjectVisualKey;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Intelligent Document Extraction",
    period: "2025",
    org: "Independent Project",
    description:
      "OCR + GenAI pipeline that parses unstructured PDFs, normalizes extracted insights into SQL records, and streams real-time data to frontend applications via REST APIs.",
    stack: ["OCR", "GenAI", "Python", "SQL", "REST API"],
    visual: "docs",
  },
  {
    title: "Telemetry & Data Pipeline Automation",
    period: "2024",
    org: "Independent Project",
    description:
      "Python microservices backed by Kafka that stream and visualize Kubernetes pod metrics, giving ML pipelines end-to-end observability and traceability.",
    stack: ["Python", "Kafka", "Kubernetes", "Microservices", "Observability"],
    visual: "pipeline",
  },
  {
    title: "Image Similarity using Neural Network",
    period: "May 2024 - Aug 2024",
    org: "Rochester Institute of Technology",
    description:
      "Benchmarked VGG, ResNet, and SimCLR and confirmed cosine similarity as the most reliable retrieval metric.",
    stack: ["Machine Learning", "Computer Vision", "Neural Networks", "Python"],
    visual: "similarity",
  },
  {
    title: "Efficient HPC Storage in Kubernetes",
    period: "Jan 2024 - May 2024",
    org: "Rochester Institute of Technology",
    description:
      "Re-architected the Lustre filesystem into Kubernetes-based microservices with self-healing and pod recovery using Go, improving scalability, availability, and deployment efficiency in cloud environments.",
    stack: ["Kubernetes", "Go", "Lustre", "Microservices"],
    visual: "storage",
  },
  {
    title: "Pneumonia Prediction and Detection",
    period: "Aug 2023 - Dec 2023",
    org: "Rochester Institute of Technology",
    description:
      "Developed and tuned SVM/CNN models for pneumonia detection with augmentation, imbalance handling, and strong evaluation metrics.",
    stack: ["Machine Learning", "SVM", "TensorFlow", "Python", "Computer Vision"],
    visual: "imaging",
  },
  {
    title: "Intrusion Detection System",
    period: "Aug 2023 - Dec 2023",
    org: "Rochester Institute of Technology",
    description:
      "Built multi-class intrusion detection with LSTM/RNN/CNN models and deployed real-time inference via REST API.",
    stack: ["Deep Learning", "PyTorch", "NumPy", "Scikit-Learn", "REST API"],
    visual: "intrusion",
  },
];

export const earlierWork = [
  "Online Agriculture Trading (2020)",
  "Stock Market Simulation (2019)",
  "Fingerprint Recognition (2019)",
  "Face Detection and Recognition (2018)",
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["Python", "Java", "Kotlin", "TypeScript", "Go", "Rust", "C++", "Shell Scripting", "PL/SQL", "Linux"] },
  { category: "AI and LLM", items: ["AWS Bedrock", "Vertex AI", "RAG", "Vector Search", "Semantic Search", "PyTorch", "MLOps", "OCR"] },
  { category: "Backend and Frameworks", items: ["Spring Boot", "FastAPI", "Node.js", "Django", "Flask", "Vue.js", "React.js", "NGINX", "gRPC", "REST"] },
  { category: "Data and Platforms", items: ["Kafka", "Redis", "PostgreSQL", "AlloyDB", "MySQL", "DynamoDB", "MongoDB", "Oracle DB", "MS SQL Server"] },
  { category: "Cloud and DevOps", items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "CloudFormation", "Jenkins", "CI/CD"] },
  { category: "Engineering Practices", items: ["Distributed Systems", "Microservices", "Pipeline Automation", "OOP", "Code Review", "SDLC", "Debugging"] },
];

export const education = [
  {
    school: "Rochester Institute of Technology",
    degree: "M.S. in Computer Science",
    period: "Jan 2022 - Aug 2024",
    location: "New York, USA",
    link: "https://www.rit.edu/",
  },
  {
    school: "Birla Vishvakarma Mahavidyalya",
    degree: "B.Tech in Computer Engineering",
    period: "Aug 2016 - Aug 2020",
    location: "Gujarat, India",
    link: "https://bvmengineering.ac.in/",
  },
];
