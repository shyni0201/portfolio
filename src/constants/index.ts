

export const HERO_CONTENT = `Hey, I'm Shynitha! I'm a  software engineer who enjoys building reliable, scalable systems using Python, FastAPI, Django, and modern frontend frameworks like React and Angular.

I've worked across diverse domains, from telecommunications and healthcare to education, e-commerce, and government research, turning complex data and workflows into clean, production-ready applications.

When I’m not coding, you’ll usually find me reading books, playing badminton, or experimenting with new tech just for fun. I’m always learning, always building, and I genuinely enjoy solving problems that make systems (and lives) a little better.`;

export const ABOUT_TEXT = `Hi! I’m Shynitha, a software engineer with a strong backend foundation and a deep curiosity for how systems, data, and ideas connect.

I’ve worked across a wide range of industries, including telecommunications, healthcare, education, e-commerce, and government-backed research initiatives like the NSF, often dealing with complex datasets (including USDA data) and transforming legacy systems into scalable, cloud-ready platforms.

My technical strengths lie in Python, FastAPI, Django, SQL, and backend system design, with hands-on experience building user-facing interfaces using React, Angular, and Next.js. Recently, I’ve been exploring agentic AI workflows, designing OCR → LLM → validation pipelines that push AI features beyond demos and into production.

Outside of work, I love reading, playing badminton, and following my curiosity wherever it leads. I’m the kind of person who enjoys googling small questions and then diving deep, whether that’s learning about a movie star’s journey, understanding a new LLM architecture, or reading up on market trends. That habit of exploration shapes how I learn, think, and build.

I’m always excited to learn, grow, collaborate, and build things that make an impact (and are fun to work on too).`;

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
}

export interface Contact {
  phoneNo: string;
  email: string;
  linkedin: string;
  github: string;
}

export const EXPERIENCES: Experience[] = [
  {
    year: "Jun 2025 – Present",
    role: "Software Engineer",
    company: "National Science Foundation (NSF), Raleigh, NC",
    description: `Co-built an agentic AI ingestion pipeline orchestrating OCR, LLM extraction, validation, and reconciliation across multiple data sources. Modernized a legacy ColdFusion backend by rebuilding core services in Django REST Framework, improving reliability during peak data-import cycles. Migrated frontend workflows to Angular with reusable components and better client-side validation, reducing UI-related issues. Optimized high-traffic database queries and delivered a real-time typeahead search system, significantly improving performance and user experience.`,
    technologies: ["Python", "Django", "FastAPI", "Angular", "SQL Server", "PostgreSQL", "LLMs", "OCR", "AWS"],
  },
  {
    year: "Oct 2023 – May 2025",
    role: "Software Engineer",
    company: "North Carolina State University, Raleigh, NC",
    description: `Rebuilt a legacy departmental website into a modern Next.js application with a Python backend, improving page load performance and long-term maintainability. Refactored server-side logic into modular services with structured validation and logging. Migrated MySQL workloads to PostgreSQL, optimized slow queries, and implemented CI/CD pipelines using Jenkins and Apache Tomcat to streamline deployments.`,
    technologies: ["Python", "Next.js", "React", "PostgreSQL", "MySQL", "Jenkins", "CI/CD", "SSR/ISR"],
  },
  {
    year: "Mar 2022 – Aug 2023",
    role: "Senior Associate Software Engineer",
    company: "AT&T, Hyderabad, India",
    description: `Developed and maintained internal enterprise applications using Python (FastAPI) and React, supporting large-scale provisioning and billing workflows. Optimized high-volume PL/SQL queries and backend data-access layers to improve system reliability during peak traffic. Led and mentored interns on API design, clean architecture, and Git workflows, and owned the end-to-end development of an internal assessment platform deployed on AWS.`,
    technologies: ["Python", "FastAPI", "React", "PL/SQL", "AWS", "CI/CD", "REST APIs"],
  },
  {
    year: "Sep 2020 – Mar 2022",
    role: "Full Stack Developer",
    company: "Food Parrot, Hyderabad, India",
    description: `Worked in a fast-paced startup environment building frontend features with React and integrating backend APIs using Node.js. Developed reusable UI components for product discovery and ordering flows, and collaborated closely with the founding team to ship features quickly. Improved application responsiveness by identifying performance bottlenecks and optimizing frontend and API interactions.`,
    technologies: ["React", "JavaScript", "Node.js", "REST APIs", "Startup Environment"],
  },
];


export const PROJECTS: Project[] = [
  {
    title: "Academic Q&A System – Cloud-Native Platform",
    description:
      "Designed and developed a scalable academic Q&A platform inspired by Piazza, built to support high availability and fault tolerance. Deployed containerized services on AWS using Kubernetes and Docker, achieving 99.9% uptime through horizontal scaling, load balancing, and efficient resource utilization across environments.",
    technologies: ["AWS", "Kubernetes", "Docker", "EC2", "S3", "RDS", "CloudFront"],
  },
  {
  title: "Briefly",
  description:
    "Built a lightweight tool that generates clear, human-readable summaries of source code to help developers quickly understand unfamiliar files and functions. Focused on readable output, fast iterations, and a simple workflow for pasting code and getting structured explanations.",
  technologies: ["Python", "NLP", "LLMs", "Prompting"],
  github:"https://github.com/shyni0201/Briefly",
},
{
    title: "CheapBuy – Price Comparison Platform",
    description:
      "Created a price comparison tool that scrapes product prices from multiple e-commerce websites, compares them in real time, and highlights the lowest available price for users. Built an interactive frontend to provide a simple and intuitive shopping experience.",
    technologies: ["Python", "JavaScript", "Web Scraping", "HTML", "CSS"],
    github:"hhttps://github.com/shyni0201/Cheapbuy",
  },

   {
    title: "Sepsis Detection using NLP",
    description:
      "Built an NLP-based system to identify potential sepsis cases from electronic medical reports. Led a small team in model development and deployed the solution as a Heroku application, enabling fast predictions and demonstrating scalability for larger healthcare datasets.",
    technologies: ["Python", "NLP", "Machine Learning", "Heroku"],
    github:"https://github.com/shyni0201/Sepsis",
  },

  {
    title: "Telecom Customer Churn Prediction",
    description:
      "Built a machine learning system to predict customer churn in the telecom industry by analyzing key behavioral and usage patterns. Improved prediction accuracy to 91.5% using a Voting Classifier combining Random Forest and Gradient Boosting models, helping identify critical factors affecting customer retention.",
    technologies: ["Python", "Machine Learning", "Random Forest", "Gradient Boosting"],
  },
  {
    title: "Face Mask Detection System",
    description:
      "Developed a deep learning-based computer vision system to detect face mask usage in real-time camera feeds. Trained and evaluated models on unseen data, achieving over 90% accuracy and demonstrating reliable performance in real-world scenarios.",
    technologies: ["Python", "Deep Learning", "Computer Vision", "AI"],
  },


];


export const CONTACT: Contact = {
  phoneNo: "(919) 523-8421",
  email: "shynithavarma01@gmail.com",
  linkedin: "https://www.linkedin.com/in/shynitha-muthyam/",
  github: "https://github.com/shyni0201",
};

export const SKILLS = {
  "Programming Languages": ["Python", "JavaScript/TypeScript", "Go", "Java", "C/C++", "HTML5", "CSS3", "Bash/Shell Scripting"],
  "Frontend Development": ["React", "Next.js (SSR/ISR)", "Tailwind CSS", "Bootstrap", "Redux", "Figma"],
  "Backend and APIs": ["FastAPI", "Flask", "Django", "Node.js", "GraphQL", "REST", "gRPC", "Celery", "Redis", "Kafka", "RabbitMQ"],
  "AI & Agentic Automation": ["LLMs", "LLMOps", "n8n", "Voiceflow", "RAG", "Firecrawl", "Feature Stores"],
  "Data & Search": ["MS Fabric Lakehouse", "PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "pandas"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "GitHub Actions", "Jenkins", "AWS (EC2, Lambda, S3, RDS, EKS)", "Vercel"],
  "Security & Payments": ["OAuth2", "JWT", "Authorize.net tokenization", "Rate Limiting"],
};

export const CERTIFICATIONS = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    level: "Associate",
    issuer: "Microsoft",
    date: "Jul 2023",
  },
  {
    name: "Getting Started with Deep Learning",
    level: "Associate",
    issuer: "NVIDIA",
    date: "Jan 2024",
  }
];

export const EDUCATION = [
  {
    degree: "Master of Science, Computer Science",
    school: "North carolina State University, Raleigh, NC",
    date: "May 2025",
    gpa: "3.98/4.0"
  },
  {
    degree: "Bachelor of Technology, Computer Science and Engineering",
    school: "Jawaharlal Nehru Technological University Hyderabad, India",
    date: "June 2022",
    gpa: "4.0/4.0"
  }
];

export const AI_EXPERIENCE = [
  {
    role: "AI Advisor & Full-Stack Developer",
    company: "iSimcha Health",
    location: "Raleigh, NC",
    period: "Aug 2025 – Present",
    description: [
      "Built a patient-facing React + TypeScript application that converts dense oncology policy documents into clear, human-readable explanations for cancer patients and caregivers.",
      "Engineered a serverless backend using Firebase Cloud Functions, orchestrating multi-step agentic workflows (ingestion → extraction → summarization → validation → scoring) with under 2 seconds average end-to-end latency.",
      "Designed a structured BigQuery medical-policy dataset to track model outputs, evaluation scores, and improvement cycles; optimized SQL pipelines to reduce query time by 40%.",
      "Integrated multiple LLM providers including OpenAI, Vertex AI, and TogetherAI through a unified API layer for rapid benchmarking and A/B testing.",
      "Implemented an LLM-as-Judge evaluation framework, reducing manual review time by 70%."
    ],
    technologies: ["React", "TypeScript", "Firebase", "LLMs", "BigQuery", "Serverless"]
  },
  {
    role: "Data Science & AI Intern",
    company: "The Sparks Foundation",
    location: "Hyderabad, India",
    period: "Jan 2021 – Feb 2021",
    description: [
      "Completed a hands-on Data Science and Business Analytics internship focused on machine learning and exploratory problem-solving."
    ],
    technologies: ["Python", "Machine Learning"]
  },
  {
    role: "Machine Learning Intern",
    company: "Goal Street",
    location: "Hyderabad, India",
    period: "May 2020 – Jul 2020",
    description: [
      "Built a refurbished car price prediction model achieving 93% accuracy using XGBoost on structured vehicle data."
    ],
    technologies: ["Python", "XGBoost"]
  }
];

