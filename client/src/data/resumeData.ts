export const resumeData = {
  meta: {
    title: "Disha Verma - Professional Portfolio",
    description:
      "Professional portfolio of Disha Verma, a Data Specialist with expertise in data engineering, healthcare analytics, and big data technologies.",
    url: "https://dishaverma-portfolio.com",
  },
  about: {
    name: "Disha Verma",
    title: "Data Engineering & Healthcare Professional",
    avatar: "/src/assets/disha-profile-new.jpg",
    paragraphs: [
      "Hello! I'm Disha, a Data Engineering and Healthcare professional with over 10 years of experience utilizing Python, SQL, and Big Data technologies on Azure and AWS. I specialize in implementing end-to-end data solutions and have a strong background in healthcare analytics.",
      "My approach combines technical expertise with deep healthcare domain knowledge. I'm passionate about transforming complex data into actionable insights that drive business decisions while maintaining compliance with industry standards like HIPAA.",
      "I hold multiple certifications including Databricks Associate, AWS Cloud Foundations, and Azure Data Fundamentals. I excel at managing data pipelines, performing advanced analytics, and creating compelling visualizations that tell a compelling story from data.",
    ],
    location: "Chicago, Illinois",
    availability: "Open to new opportunities",
    languages: ["English", "Hindi"],
  },
  experience: [
    {
      title: "Data Engineering Lead",
      company: "Tabore IT Info Tech",
      period: {
        start: "2023-01-01",
        end: null,
      },
      description: [
        "Conducted risk assessment analysis for cancer patients by leveraging HCC coding and evaluating family history data",
        "Designed and implemented a scalable data architecture to process and store HIPAA compliant healthcare data in Azure ADLS and Cosmos DB",
        "Implemented ETL processes in Azure for data transformation and mounting of blob storage in Databricks",
        "Implemented role-based access controls (RBAC) and data masking in Snowflake to ensure compliance with HIPAA policies",
        "Utilized Medallion architecture to streamline data ingestion, cleaning, and organization in a data lake",
      ],
      skills: [
        "Python",
        "SQL",
        "Azure",
        "Databricks",
        "Snowflake",
        "ETL",
        "HIPAA",
      ],
    },
    {
      title: "Full Stack AI Engineer",
      company: "University of Illinois - Urbana Champaign",
      period: {
        start: "2022-06-01",
        end: "2022-12-31",
      },
      description: [
        "Executed a comprehensive students data collection plan to create an AI grader pipeline",
        "Designed and implemented an LLM chatbot for university faculty using web scraping with BeautifulSoup",
        "Developed student assignment processing functionality using a vector store database powered by FAISS",
        "Created a GitHub repository for CI/CD implementation and integrated with Azure Web Application service",
      ],
      skills: ["Python", "Node.js", "LLM", "FAISS", "Azure", "CI/CD", "AI"],
    },
    {
      title: "Data Specialist",
      company: "Philips",
      period: {
        start: "2016-10-24",
        end: "2021-12-05",
      },
      description: [
        "Engineered custom API endpoints for secure access to HCC scoring data and risk assessments",
        "Validated REST API payloads against FHIR standards, ensuring interoperability across healthcare applications",
        "Created Azure Data Factory (ADF) pipeline for data curation and transformations of large complex datasets",
        "Optimized real-time data flow using Kafka for high-throughput streaming",
        "Created Tableau reports and dashboards to provide assessment of patients' clinical outcomes",
      ],
      skills: [
        "Azure",
        "Kafka",
        "Tableau",
        "REST API",
        "FHIR",
        "HL7",
        "Healthcare Data",
      ],
    },
    {
      title: "Interface Analyst",
      company: "Accenture",
      period: {
        start: "2015-09-15",
        end: "2016-10-20",
      },
      description: [
        "Upload data into build and production environments that involve updates to master records in healthcare systems",
        "I analyzed different data sources using MS SQL and Python.",
        "Established batch connections (SFTP/FTP) between hospital systems.",
        "Worked on troubleshooting issues with electronic medical record systems resulting in a 25% increase in efficiency.",
      ],
      skills: ["Python", "SQL", "Healthcare Analytics", "Data Governance"],
    },
    {
      title: "Software Engineer",
      company: "Deloitte",
      period: {
        start: "2013-06-13",
        end: "2015-09-10",
      },
      description: [
        "Development and maintenance of medical record source systems and identifying discrepancies by querying patient’s data on SQL platforms.",
        "•	Proficient in Epic EMR system implementation and optimization, including Bridges module workflow analysis and ADT, ORM and ORU interface analysis to improve clinical efficiency.",
      ],
      skills: ["HL7", "FHIR", "Data Modeling"],
    },
  ],
  education: [
    {
      degree: "Master of Science in Data Analytics",
      institution:
        "University of Illinois Urbana-Champaign, Gies College of Business",
      period: "2022 - 2022",
      description:
        "Specialized in data analytics with focus on machine learning and AI applications in healthcare and business domains.",
      skills: ["Data Analytics", "Machine Learning", "Healthcare Analytics"],
    },
    {
      degree: "Bachelor of Electronics and Telecommunication",
      institution: "Rajiv Gandhi Technical University",
      period: "2008 - 2012",
      description:
        "Foundations in electronics and telecommunications engineering with emphasis on systems design and signal processing.",
      skills: ["Systems Engineering", "Signal Processing", "Electronics"],
    },
  ],
  certifications: [
    {
      name: "Databricks Associate",
      issuer: "Databricks",
      year: "2023",
    },
    {
      name: "AWS Cloud Foundations",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      name: "Azure Data Fundamentals",
      issuer: "Microsoft",
      year: "2022",
    },
    {
      name: "Python Data Analysis",
      issuer: "DataCamp",
      year: "2021",
    },
    {
      name: "KNIME for Data Wranglers",
      issuer: "KNIME",
      year: "2021",
    },
    {
      name: "SAFe Agile",
      issuer: "Scaled Agile",
      year: "2020",
    },
  ],
  skills: {
    technicalSkills: [
      {
        name: "Data Engineering",
        level: "Advanced",
        percentage: 95,
        technologies: [
          "Python (Pandas, NumPy)",
          "SQL",
          "ETL",
          "Data Pipelines",
          "Databricks",
          "Delta Lake",
        ],
      },
      {
        name: "Cloud Platforms",
        level: "Advanced",
        percentage: 90,
        technologies: [
          "Azure",
          "AWS",
          "Azure Data Factory",
          "ADLS",
          "Cosmos DB",
          "Redshift",
        ],
      },
      {
        name: "Big Data & Analytics",
        level: "Advanced",
        percentage: 85,
        technologies: [
          "Snowflake",
          "Kafka",
          "Data Warehousing",
          "HIPAA Compliance",
          "Healthcare Data",
        ],
      },
      {
        name: "Machine Learning",
        level: "Intermediate",
        percentage: 75,
        technologies: [
          "Scikit-learn",
          "TensorFlow",
          "PyTorch",
          "Linear Regression",
          "Random Forest",
        ],
      },
    ],
    professionalSkills: [
      {
        name: "Data Architecture",
        level: "Advanced",
        percentage: 95,
      },
      {
        name: "Healthcare Informatics",
        level: "Advanced",
        percentage: 90,
      },
      {
        name: "Project Management",
        level: "Advanced",
        percentage: 85,
      },
      {
        name: "Problem Solving",
        level: "Advanced",
        percentage: 95,
      },
      {
        name: "Cross-functional Collaboration",
        level: "Advanced",
        percentage: 90,
      },
    ],
    languages: [
      {
        name: "English",
        level: "Professional",
        percentage: 95,
      },
      {
        name: "Hindi",
        level: "Native",
        percentage: 100,
      },
    ],
  },
  projects: [
    {
      title: "Healthcare Risk Assessment Platform",
      description:
        "A data-driven platform for analyzing cancer patient risk levels using HCC coding and family history data to predict cost of care",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: [
        "Python",
        "Azure",
        "Databricks",
        "Healthcare Analytics",
        "HIPAA",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "AI-Powered Grading System",
      description:
        "An LLM-based solution for university faculty that processes student assignments and grades them using natural language processing",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["Python", "FAISS", "LLM", "Node.js", "BeautifulSoup"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Clinical Data Pipeline",
      description:
        "A scalable data architecture for healthcare systems that processes patient data for analytics while maintaining compliance with industry standards",
      image:
        "https://images.unsplash.com/photo-1576670392542-eb180b1e0182?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: [
        "Azure Data Factory",
        "FHIR",
        "Kafka",
        "Tableau",
        "Snowflake",
      ],
      demoLink: "#",
      githubLink: "#",
    },
  ],
  contact: {
    email: "disha.vermaa@gmail.com",
    phone: "(732) 640-3479",
    location: "Chicago, Illinois",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/disha-verma-11352b71/",
    github: "https://github.com/dishaverma",
    twitter: "https://twitter.com/dishaverma",
    dribbble: "#",
  },
};
