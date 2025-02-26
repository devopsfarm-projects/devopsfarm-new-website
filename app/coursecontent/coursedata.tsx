

export const Devops = {
  learnings: [
    "Introduction to DevOps: Understanding the DevOps culture and principles",
    "Continuous Integration and Continuous Deployment (CI/CD): Setting up pipelines with tools like Jenkins and GitLab CI",
    "Infrastructure as Code (IaC): Automating infrastructure management using tools like Terraform and Ansible",
    "Containerization with Docker: Packaging applications using Docker containers",
    "Orchestration with Kubernetes: Managing containerized workloads and services",
    "Monitoring and Logging: Implementing monitoring, logging, and alerting with Prometheus, Grafana, and ELK stack",
    "Version Control with Git: Managing source code and collaborating using Git and GitHub",
    "Security in DevOps: Implementing DevSecOps practices for secure software delivery",
    "Cloud Integration: Deploying applications on cloud platforms like AWS, GCP, and Azure"
  ],

  courseContent: [
    {
      chapter: "1. Introduction to DevOps",
      details: "What is DevOps?",
      subpoints: [
        "Definition and key concepts.",
        "History and evolution."
      ],
      details1: "Benefits of DevOps",
      subpoints1: [
        "Improved deployment frequency.",
        "Faster time to market.",
        "Lower failure rate of new releases.",
        "Shortened lead time between fixes."
      ],
      details2: "DevOps Lifecycle",
      subpoints2: [
        "Development, testing, integration, deployment, monitoring."
      ]
    },
    {
      chapter: "2. DevOps Culture and Mindset",
      details: "Collaboration and Communication",
      subpoints: [
        "Breaking down silos between development and operations."
      ],
      details1: "Agile and Lean Principles",
      subpoints1: [
        "Continuous improvement and flexibility."
      ],
      details2: "Metrics and Measurement",
      subpoints2: [
        "Key performance indicators (KPIs) and monitoring."
      ]
    },
    {
      chapter: "3. Version Control with Git and GitHub",
      details: "Introduction to Git",
      subpoints: [
        "Installation and setup.",
        "Basic commands (clone, commit, push, pull)."
      ],
      details1: "Branching and Merging",
      subpoints1: [
        "Working with branches.",
        "Resolving merge conflicts."
      ],
      details2: "GitHub",
      subpoints2: [
        "Pull requests and code reviews.",
        "Integrating with CI/CD tools."
      ]
    },
    {
      chapter: "4. Continuous Integration (CI)",
      details: "CI Concepts",
      subpoints: [
        "Definition and importance.",
        "Automated builds and tests."
      ],
      details1: "CI Tools",
      subpoints1: [
        "Jenkins, Travis CI, CircleCI."
      ],
      details2: "Setting Up a CI Pipeline",
      subpoints2: [
        "Configuring build triggers and notifications.",
        "Integrating with version control systems."
      ]
    },
    {
      chapter: "5. Continuous Delivery (CD) and Continuous Deployment",
      details: "CD Concepts",
      subpoints: [
        "Difference between Continuous Delivery and Continuous Deployment.",
        "Benefits and challenges."
      ],
      details1: "CD Tools",
      subpoints1: [
        "Jenkins, GitLab CI/CD, Bamboo."
      ],
      details2: "Setting Up a CD Pipeline",
      subpoints2: [
        "Deployment strategies (blue-green, canary, rolling)."
      ]
    },
    {
      chapter: "6. Configuration Management",
      details: "Introduction",
      subpoints: [
        "Importance of configuration management."
      ],
      details1: "Tools",
      subpoints1: [
        "Ansible, Chef, Puppet, SaltStack."
      ],
      details2: "Writing Playbooks and Recipes",
      subpoints2: [
        "Managing infrastructure as code."
      ]
    },
    {
      chapter: "7. Infrastructure as Code (IaC)",
      details: "Concepts",
      subpoints: [
        "Importance and benefits of IaC."
      ],
      details1: "Tools",
      subpoints1: [
        "Terraform, AWS CloudFormation."
      ],
      details2: "Writing and Managing Infrastructure Code",
      subpoints2: [
        "Provisioning and managing cloud resources."
      ]
    },
    {
      chapter: "8. Containerization with Docker",
      details: "Introduction to Docker",
      subpoints: [
        "Concepts and components (images, containers, Dockerfile)."
      ],
      details1: "Building and Managing Containers",
      subpoints1: [
        "Writing Dockerfiles.",
        "Managing container lifecycle."
      ],
      details2: "Docker Compose",
      subpoints2: [
        "Defining and running multi-container applications."
      ]
    },
    {
      chapter: "9. Orchestration with Kubernetes",
      details: "Introduction to Kubernetes",
      subpoints: [
        "Concepts and architecture (pods, services, deployments)."
      ],
      details1: "Setting Up a Kubernetes Cluster",
      subpoints1: [
        "Minikube, Kubernetes on cloud providers."
      ],
      details2: "Managing Applications in Kubernetes",
      subpoints2: [
        "Deployments, scaling, rolling updates."
      ],
      details3: "Helm",
      subpoints3: [
        "Package management for Kubernetes."
      ]
    },
    {
      chapter: "10. Monitoring and Logging",
      details: "Importance of Monitoring and Logging",
      subpoints: [
        "Key metrics to monitor."
      ],
      details1: "Tools",
      subpoints1: [
        "Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana)."
      ],
      details2: "Setting Up Monitoring and Logging",
      subpoints2: [
        "Configuring and integrating monitoring tools.",
        "Setting up alerting and dashboards."
      ]
    },
    {
      chapter: "11. Security in DevOps",
      details: "DevSecOps Concepts",
      subpoints: [
        "Shifting security left in the development process."
      ],
      details1: "Security Tools",
      subpoints1: [
        "SAST, DAST, vulnerability scanning (Aqua, Clair)."
      ],
      details2: "Best Practices",
      subpoints2: [
        "Secure coding practices, secrets management."
      ]
    },
    {
      chapter: "12. Cloud Providers and Services",
      details: "Introduction to Cloud Computing",
      subpoints: [
        "Types of cloud services (IaaS, PaaS, SaaS)."
      ],
      details1: "Major Cloud Providers",
      subpoints1: [
        "AWS, Azure, Google Cloud."
      ],
      details2: "Deploying and Managing Applications on Cloud",
      subpoints2: [
        "Using cloud services and tools."
      ]
    },
    {
      chapter: "13. DevOps Tools and Automation",
      details: "Toolchain",
      subpoints: [
        "Overview of common DevOps tools."
      ],
      details1: "Automation Scripts",
      subpoints1: [
        "Writing scripts for automation tasks."
      ],
      details2: "Best Practices",
      subpoints2: [
        "Efficient use of tools and avoiding common pitfalls."
      ]
    },
    {
      chapter: "14. DevOps Best Practices and Case Studies",
      details: "Real-World Examples",
      subpoints: [
        "Case studies of successful DevOps implementations."
      ],
      details1: "Best Practices",
      subpoints1: [
        "Continuous improvement, collaboration, and innovation."
      ]
    },
    {
      chapter: "15. Capstone Project",
      details: "End-to-End DevOps Project",
      subpoints: [
        "Applying learned concepts to a real-world project."
      ],
      details1: "Assessment and Feedback",
      subpoints1: [
        "Review and feedback on the capstone project."
      ]
    }
  ]
};





export const AWSCloud = {
  learnings: [
    "Introduction to AWS",
    "AWS Core Services",
    "AWS Security and Identity",
    "AWS Management and Governance",
    "Monitoring and Logging",
    "AWS DevOps Tools",
    "High Availability and Scalability",
    "AWS Cost Management and Optimization",
    "Serverless Architectures",
    "Migration to AWS",
    "Big Data and Analytics",
    "Machine Learning and AI",
    "IoT on AWS",
    "AWS Certification Preparation",
    "Capstone Project"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to AWS",
      details: "Overview of AWS",
      subpoints: [
        "History and evolution of AWS.",
        "Global infrastructure (regions, availability zones)."
      ],
      details1: "Benefits of AWS Cloud",
      subpoints1: [
        "Scalability, flexibility, cost efficiency, global reach."
      ]
    },
    {
      chapter: "Chapter 2: AWS Core Services",
      details: "Compute Services",
      subpoints: [
        "EC2 (Elastic Compute Cloud): Instance types, pricing models, key pairs, AMIs, launching and managing instances.",
        "Lambda: Serverless computing, creating and managing Lambda functions.",
        "Elastic Beanstalk: Deploying and scaling web applications."
      ],
      details1: "Storage Services",
      subpoints1: [
        "S3 (Simple Storage Service): Buckets, objects, storage classes, versioning, lifecycle policies.",
        "EBS (Elastic Block Store): Volume types, snapshots, and management.",
        "Glacier: Archival storage, retrieval policies."
      ],
      details2: "Database Services",
      subpoints2: [
        "RDS (Relational Database Service): Database engines, instance classes, backups, multi-AZ deployments.",
        "DynamoDB: NoSQL database, tables, indexes, capacity modes.",
        "Aurora: High-performance relational database, clusters, replication."
      ],
      details3: "Networking Services",
      subpoints3: [
        "VPC (Virtual Private Cloud): Subnets, route tables, internet gateways, NAT gateways.",
        "Route 53: DNS management, routing policies.",
        "CloudFront: Content delivery network (CDN), distributions, caching."
      ]
    },
    {
      chapter: "Chapter 3: AWS Security and Identity",
      details: "IAM (Identity and Access Management)",
      subpoints: [
        "Users, groups, roles, policies, best practices."
      ],
      details1: "KMS (Key Management Service)",
      subpoints1: [
        "Creating and managing encryption keys."
      ],
      details2: "CloudTrail",
      subpoints2: [
        "Logging and monitoring account activity."
      ],
      details3: "AWS Shield and WAF",
      subpoints3: [
        "DDoS protection, web application firewall."
      ]
    },
    {
      chapter: "Chapter 4: AWS Management and Governance",
      details: "AWS Management Console",
      subpoints: [
        "Overview and navigation."
      ],
      details1: "AWS CLI (Command Line Interface)",
      subpoints1: [
        "Installation, configuration, and basic commands."
      ],
      details2: "AWS SDKs",
      subpoints2: [
        "Integrating AWS services into applications."
      ],
      details3: "CloudFormation",
      subpoints3: [
        "Infrastructure as Code (IaC), stacks, templates."
      ]
    },
    {
      chapter: "Chapter 5: Monitoring and Logging",
      details: "CloudWatch",
      subpoints: [
        "Metrics, alarms, dashboards, logs."
      ],
      details1: "CloudTrail",
      subpoints1: [
        "Logging API calls and changes."
      ],
      details2: "AWS Config",
      subpoints2: [
        "Resource configuration history and compliance."
      ]
    },
    {
      chapter: "Chapter 6: AWS DevOps Tools",
      details: "CodeCommit",
      subpoints: [
        "Source control, repositories, branching."
      ],
      details1: "CodeBuild",
      subpoints1: [
        "Continuous integration, build projects."
      ],
      details2: "CodeDeploy",
      subpoints2: [
        "Automated deployment to EC2, Lambda."
      ],
      details3: "CodePipeline",
      subpoints3: [
        "Continuous delivery pipelines, stages, actions."
      ]
    },
    {
      chapter: "Chapter 7: High Availability and Scalability",
      details: "Elastic Load Balancing (ELB)",
      subpoints: [
        "Load balancers, target groups, listeners."
      ],
      details1: "Auto Scaling",
      subpoints1: [
        "Launch configurations, scaling policies, lifecycle hooks."
      ],
      details2: "Global Accelerator",
      subpoints2: [
        "Global traffic management, improving availability and performance."
      ]
    },
    {
      chapter: "Chapter 8: AWS Cost Management and Optimization",
      details: "AWS Pricing Models",
      subpoints: [
        "On-demand, reserved, spot instances."
      ],
      details1: "Cost Explorer",
      subpoints1: [
        "Analyzing and visualizing costs and usage."
      ],
      details2: "AWS Budgets",
      subpoints2: [
        "Setting and tracking budget thresholds."
      ],
      details3: "Trusted Advisor",
      subpoints3: [
        "Cost optimization recommendations, security best practices."
      ]
    },
    {
      chapter: "Chapter 9: Serverless Architectures",
      details: "AWS Lambda",
      subpoints: [
        "Event-driven compute service."
      ],
      details1: "API Gateway",
      subpoints1: [
        "Creating and managing APIs."
      ],
      details2: "Step Functions",
      subpoints2: [
        "Orchestrating microservices and workflows."
      ]
    },
    {
      chapter: "Chapter 10: Migration to AWS",
      details: "AWS Migration Hub",
      subpoints: [
        "Tracking and managing migrations."
      ],
      details1: "Server Migration Service (SMS)",
      subpoints1: [
        "Migrating on-premises servers to AWS."
      ],
      details2: "Database Migration Service (DMS)",
      subpoints2: [
        "Migrating databases to AWS."
      ]
    },
    {
      chapter: "Chapter 11: Big Data and Analytics",
      details: "EMR (Elastic MapReduce)",
      subpoints: [
        "Big data processing, Hadoop, Spark."
      ],
      details1: "Redshift",
      subpoints1: [
        "Data warehousing, clusters, queries."
      ],
      details2: "Athena",
      subpoints2: [
        "Serverless query service for S3."
      ],
      details3: "Kinesis",
      subpoints3: [
        "Real-time data streaming and analytics."
      ]
    },
    {
      chapter: "Chapter 12: Machine Learning and AI",
      details: "SageMaker",
      subpoints: [
        "Building, training, and deploying ML models."
      ],
      details1: "Rekognition",
      subpoints1: [
        "Image and video analysis."
      ],
      details2: "Polly",
      subpoints2: [
        "Text-to-speech service."
      ],
      details3: "Lex",
      subpoints3: [
        "Building conversational interfaces."
      ]
    },
    {
      chapter: "Chapter 13: IoT on AWS",
      details: "IoT Core",
      subpoints: [
        "Connecting IoT devices, managing device data."
      ],
      details1: "Greengrass",
      subpoints1: [
        "Local compute, messaging, data management for IoT."
      ]
    },
    {
      chapter: "Chapter 14: AWS Certification Preparation",
      details: "Certification Paths",
      subpoints: [
        "Overview of AWS certifications (Foundational, Associate, Professional, Specialty)."
      ],
      details1: "Exam Preparation Tips",
      subpoints1: [
        "Study resources, practice exams, hands-on labs."
      ],
      details2: "Mock Exams",
      subpoints2: [
        "Simulated exams to test knowledge and readiness."
      ]
    },
    {
      chapter: "Chapter 15: Capstone Project",
      details: "End-to-End AWS Project",
      subpoints: [
        "Applying learned concepts to a real-world project."
      ],
      details1: "Assessment and Feedback",
      subpoints1: [
        "Review and feedback on the capstone project."
      ]
    }
  ]
};




export const AzureCloud = {
  learnings: [
    "Introduction to Azure",
    "Azure Core Services",
    "Azure Security and Identity",
    "Azure Management and Governance",
    "Monitoring and Logging",
    "Azure DevOps Tools",
    "High Availability and Scalability",
    "Azure Cost Management and Optimization",
    "Serverless Architectures",
    "Migration to Azure",
    "Big Data and Analytics",
    "Artificial Intelligence and Machine Learning in Azure",
    "IoT on Azure",
    "Azure Certification Preparation",
    "Capstone Project"
  ],

  courseContent: [
    {
      chapter: "1. Introduction to Azure",
      details: "Overview of Microsoft Azure",
      subpoints: [
        "History and evolution of Azure.",
        "Global infrastructure (regions, availability zones)."
      ],
      details1: "Benefits of Azure Cloud",
      subpoints1: [
        "Scalability, flexibility, cost efficiency, global reach."
      ],
      details2: "Azure Service Models",
      subpoints2: [
        "IaaS, PaaS, SaaS."
      ]
    },
    {
      chapter: "2. Azure Core Services",
      details: "Compute Services",
      subpoints: [
        "Azure Virtual Machines: VM types, pricing models, resource groups, availability sets. Creating and managing VMs.",
        "Azure App Services: Web apps, mobile apps, API apps.",
        "Azure Functions: Serverless computing, creating and managing functions.",
        "Azure Kubernetes Service (AKS): Container orchestration, deployment, scaling."
      ],
      details1: "Storage Services",
      subpoints1: [
        "Azure Blob Storage: Containers, blobs, access tiers, lifecycle management.",
        "Azure Disk Storage: Managed disks, snapshots.",
        "Azure File Storage: File shares, synchronization."
      ],
      details2: "Database Services",
      subpoints2: [
        "Azure SQL Database: Managed databases, elastic pools, backups.",
        "Azure Cosmos DB: Globally distributed database, consistency models.",
        "Azure Database for MySQL/PostgreSQL/MariaDB: Managed open-source databases."
      ],
      details3: "Networking Services",
      subpoints3: [
        "Azure Virtual Network (VNet): Subnets, route tables, VPN gateways, NSGs.",
        "Azure DNS: Domain management, custom DNS records.",
        "Azure CDN: Content delivery network, caching, acceleration."
      ]
    },
    {
      chapter: "3. Azure Security and Identity",
      details: "Azure Active Directory (Azure AD)",
      subpoints: [
        "Users, groups, roles, policies, single sign-on (SSO)."
      ],
      details1: "Role-Based Access Control (RBAC)",
      subpoints1: [
        "Assigning roles, creating custom roles."
      ],
      details2: "Azure Key Vault",
      subpoints2: [
        "Managing secrets, keys, and certificates."
      ],
      details3: "Azure Security Center",
      subpoints3: [
        "Security posture management, threat protection."
      ]
    },
    {
      chapter: "4. Azure Management and Governance",
      details: "Azure Portal",
      subpoints: [
        "Overview and navigation."
      ],
      details1: "Azure CLI",
      subpoints1: [
        "Installation, configuration, and basic commands."
      ],
      details2: "Azure PowerShell",
      subpoints2: [
        "Cmdlets for managing Azure resources."
      ],
      details3: "Azure Resource Manager (ARM)",
      subpoints3: [
        "Templates, resource groups, deployment."
      ]
    },
    {
      chapter: "5. Monitoring and Logging",
      details: "Azure Monitor",
      subpoints: [
        "Metrics, logs, alerts, dashboards."
      ],
      details1: "Azure Log Analytics",
      subpoints1: [
        "Querying and analyzing log data."
      ],
      details2: "Azure Application Insights",
      subpoints2: [
        "Monitoring application performance and diagnostics."
      ]
    },
    {
      chapter: "6. Azure DevOps Tools",
      details: "Azure DevOps Services",
      subpoints: [
        "Repos, Pipelines, Boards, Test Plans, Artifacts."
      ],
      details1: "Azure Repos",
      subpoints1: [
        "Source control, branching strategies."
      ],
      details2: "Azure Pipelines",
      subpoints2: [
        "CI/CD pipelines, build and release pipelines."
      ],
      details3: "Azure Artifacts",
      subpoints3: [
        "Package management."
      ]
    },
    {
      chapter: "7. High Availability and Scalability",
      details: "Azure Load Balancer",
      subpoints: [
        "Load balancing, health probes, rules."
      ],
      details1: "Azure Traffic Manager",
      subpoints1: [
        "Traffic routing, geographic distribution."
      ],
      details2: "Azure Autoscale",
      subpoints2: [
        "Scaling based on metrics, schedules."
      ]
    },
    {
      chapter: "8. Azure Cost Management and Optimization",
      details: "Azure Pricing Models",
      subpoints: [
        "Pay-as-you-go, reserved instances, spot VMs."
      ],
      details1: "Azure Cost Management + Billing",
      subpoints1: [
        "Analyzing and visualizing costs and usage."
      ],
      details2: "Azure Budgets and Recommendations",
      subpoints2: [
        "Setting and tracking budget thresholds, cost-saving recommendations."
      ]
    },
    {
      chapter: "9. Serverless Architectures",
      details: "Azure Functions",
      subpoints: [
        "Event-driven compute service."
      ],
      details1: "Azure Logic Apps",
      subpoints1: [
        "Automating workflows, integration."
      ],
      details2: "Azure Event Grid",
      subpoints2: [
        "Event routing service."
      ]
    },
    {
      chapter: "10. Migration to Azure",
      details: "Azure Migrate",
      subpoints: [
        "Discovering and assessing on-premises resources."
      ],
      details1: "Azure Site Recovery",
      subpoints1: [
        "Disaster recovery, replication."
      ],
      details2: "Database Migration Service",
      subpoints2: [
        "Migrating databases to Azure."
      ]
    },
    {
      chapter: "11. Big Data and Analytics",
      details: "Azure Synapse Analytics",
      subpoints: [
        "Integrated analytics service, data warehousing."
      ],
      details1: "Azure Data Lake Storage",
      subpoints1: [
        "Data lakes, big data processing."
      ],
      details2: "Azure HDInsight",
      subpoints2: [
        "Managed Hadoop, Spark clusters."
      ],
      details3: "Azure Databricks",
      subpoints3: [
        "Collaborative data analytics and machine learning."
      ]
    },
    {
      chapter: "12. Artificial Intelligence and Machine Learning in Azure",
      details: "Azure Machine Learning",
      subpoints: [
        "Building, training, and deploying ML models."
      ],
      details1: "Azure Cognitive Services",
      subpoints1: [
        "Pre-built AI models for vision, speech, language."
      ],
      details2: "Azure Bot Service",
      subpoints2: [
        "Building conversational agents."
      ]
    },
    {
      chapter: "13. IoT on Azure",
      details: "Azure IoT Hub",
      subpoints: [
        "Connecting and managing IoT devices."
      ],
      details1: "Azure IoT Central",
      subpoints1: [
        "IoT solution management."
      ],
      details2: "Azure Sphere",
      subpoints2: [
        "Securing IoT devices."
      ]
    },
    {
      chapter: "14. Azure Certification Preparation",
      details: "Certification Paths",
      subpoints: [
        "Overview of Azure certifications (Fundamentals, Associate, Expert, Specialty)."
      ],
      details1: "Exam Preparation Tips",
      subpoints1: [
        "Study resources, practice exams, hands-on labs."
      ],
      details2: "Mock Exams",
      subpoints2: [
        "Simulated exams to test knowledge and readiness."
      ]
    },
    {
      chapter: "15. Capstone Project",
      details: "End-to-End Azure Project",
      subpoints: [
        "Applying learned concepts to a real-world project."
      ],
      details1: "Assessment and Feedback",
      subpoints1: [
        "Review and feedback on the capstone project."
      ]
    }
  ]
};




export const GCP = {
  learnings: [
    "Introduction to cloud computing and GCP services",
    "GCP core infrastructure components and services",
    "Set up and manage virtual machines and applications on GCP",
    "GCP networking and security features",
    "Monitor and log in to GCP",
    "Manage users and access control in GCP",
    "Understand GCP pricing and billing"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Cloud Computing",
      details: "Overview of Cloud Computing and GCP",
      subpoints: [
        "Definition and key concepts of cloud computing.",
        "Introduction to Google Cloud Platform (GCP)."
      ],
      details1: "GCP Core Services",
      subpoints1: [
        "Compute Engine, Cloud Storage, BigQuery.",
        "GCP Management and Development Tools."
      ]
    },
    {
      chapter: "Chapter 2: GCP Infrastructure Components",
      details: "GCP Virtual Machines",
      subpoints: [
        "Creating and managing VM instances.",
        "Machine types and configurations."
      ],
      details1: "GCP Networking",
      subpoints1: [
        "VPC, subnets, and firewalls.",
        "Load balancing and network monitoring."
      ],
      details2: "GCP Storage Solutions",
      subpoints2: [
        "Cloud Storage buckets and data management.",
        "Persistent disks and snapshots."
      ]
    },
    {
      chapter: "Chapter 3: Managing GCP Applications",
      details: "Deploying Applications on GCP",
      subpoints: [
        "Using App Engine and Compute Engine for deployment.",
        "Setting up and managing Kubernetes clusters with GKE."
      ],
      details1: "Application Scaling",
      subpoints1: [
        "Horizontal and vertical scaling.",
        "Auto-scaling and load balancing strategies."
      ]
    },
    {
      chapter: "Chapter 4: GCP Security and Compliance",
      details: "Security Features",
      subpoints: [
        "IAM roles and permissions.",
        "Data encryption and security practices."
      ],
      details1: "Compliance and Governance",
      subpoints1: [
        "GCP compliance certifications.",
        "Setting up and managing audit logs."
      ]
    },
    {
      chapter: "Chapter 5: Monitoring and Logging in GCP",
      details: "GCP Monitoring Tools",
      subpoints: [
        "Using Cloud Monitoring and Cloud Logging.",
        "Setting up alerts and dashboards."
      ],
      details1: "Performance Optimization",
      subpoints1: [
        "Analyzing logs and metrics.",
        "Optimizing resource usage."
      ]
    },
    {
      chapter: "Chapter 6: User Management and Access Control",
      details: "Managing Users",
      subpoints: [
        "Creating and managing GCP accounts.",
        "Setting up user roles and permissions."
      ],
      details1: "Access Control",
      subpoints1: [
        "Implementing IAM policies.",
        "Managing service accounts and access."
      ]
    },
    {
      chapter: "Chapter 7: GCP Pricing and Billing",
      details: "Understanding Pricing",
      subpoints: [
        "Overview of GCP pricing models.",
        "Cost estimation and budgeting tools."
      ],
      details1: "Billing Management",
      subpoints1: [
        "Setting up billing accounts.",
        "Monitoring and managing costs."
      ]
    },
    {
      chapter: "Chapter 8: Hands-On Labs and Projects",
      details: "Practical Exercises",
      subpoints: [
        "Deploying a sample application on GCP.",
        "Managing resources and optimizing costs."
      ],
      details1: "Capstone Project",
      subpoints1: [
        "Applying concepts to a real-world scenario.",
        "Project review and feedback."
      ]
    }
  ]
};

export const AIML = {
  learnings: [
    "Introduction to AI and Machine Learning",
    "Mathematics and Statistics for Machine Learning",
    "Data Preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Supervised Learning Algorithms",
    "Unsupervised Learning Algorithms",
    "Neural Networks and Deep Learning",
    "Advanced Machine Learning Techniques",
    "Model Evaluation and Tuning",
    "Machine Learning in Practice",
    "AI/ML Tools and Frameworks",
    "Ethics and Responsible AI",
    "Capstone Project"
  ],

  courseContent: [
    {
      chapter: "1. Introduction to AI and Machine Learning",
      details: "Overview of AI and ML",
      subpoints: [
        "History and evolution.",
        "Key concepts and terminology."
      ],
      details1: "Types of Machine Learning",
      subpoints1: [
        "Supervised, unsupervised, semi-supervised, and reinforcement learning.",
      ],
      details2: "Applications of AI and ML",
      subpoints2: [
        "Real-world use cases across various industries.",
      ]
    },
    {
      chapter: "2. Mathematics and Statistics for Machine Learning",
      details: "Linear Algebra",
      subpoints: [
        "Vectors, matrices, matrix multiplication, eigenvalues, and eigenvectors.",
      ],
      details1: "Probability and Statistics",
      subpoints1: [
        "Probability theory, distributions, hypothesis testing, p-values.",
      ],
      details2: "Calculus",
      subpoints2: [
        "Derivatives, integrals, gradients, chain rule.",
      ]
    },
    {
      chapter: "3. Data Preprocessing",
      details: "Data Collection and Cleaning",
      subpoints: [
        "Handling missing values, outliers, and noise.",
      ],
      details1: "Data Transformation",
      subpoints1: [
        "Normalization, standardization, encoding categorical variables.",
      ],
      details2: "Feature Engineering",
      subpoints2: [
        "Feature selection, feature extraction, dimensionality reduction.",
      ]
    },
    {
      chapter: "4. Exploratory Data Analysis (EDA)",
      details: "Data Visualization",
      subpoints: [
        "Plotting histograms, scatter plots, box plots.",
      ],
      details1: "Descriptive Statistics",
      subpoints1: [
        "Mean, median, mode, variance, standard deviation.",
      ],
      details2: "Correlation and Covariance",
      subpoints2: [
        "Understanding relationships between variables.",
      ]
    },
    {
      chapter: "5. Supervised Learning Algorithms",
      details: "Regression",
      subpoints: [
        "Linear regression, polynomial regression, ridge regression, LASSO.",
      ],
      details1: "Classification",
      subpoints1: [
        "Logistic regression, decision trees, random forests, support vector machines (SVM), k-nearest neighbors (k-NN).",
      ]
    },
    {
      chapter: "6. Unsupervised Learning Algorithms",
      details: "Clustering",
      subpoints: [
        "K-means, hierarchical clustering, DBSCAN.",
      ],
      details1: "Dimensionality Reduction",
      subpoints1: [
        "Principal Component Analysis (PCA), t-SNE, LDA.",
      ]
    },
    {
      chapter: "7. Neural Networks and Deep Learning",
      details: "Introduction to Neural Networks",
      subpoints: [
        "Perceptron, multi-layer perceptron, activation functions.",
      ],
      details1: "Deep Learning Architectures",
      subpoints1: [
        "Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Long Short-Term Memory (LSTM) networks, Generative Adversarial Networks (GANs).",
      ],
      details2: "Training Deep Networks",
      subpoints2: [
        "Backpropagation, gradient descent, learning rate, overfitting, and regularization.",
      ]
    },
    {
      chapter: "8. Advanced Machine Learning Techniques",
      details: "Ensemble Learning",
      subpoints: [
        "Bagging, boosting, stacking, gradient boosting machines (GBM), XGBoost.",
      ],
      details1: "Natural Language Processing (NLP)",
      subpoints1: [
        "Text preprocessing, tokenization, word embeddings (Word2Vec, GloVe), transformers (BERT, GPT).",
      ],
      details2: "Reinforcement Learning",
      subpoints2: [
        "Markov decision processes, Q-learning, deep Q-networks (DQN).",
      ]
    },
    {
      chapter: "9. Model Evaluation and Tuning",
      details: "Evaluation Metrics",
      subpoints: [
        "Accuracy, precision, recall, F1-score, ROC-AUC.",
      ],
      details1: "Cross-Validation",
      subpoints1: [
        "K-fold cross-validation, leave-one-out cross-validation.",
      ],
      details2: "Hyperparameter Tuning",
      subpoints2: [
        "Grid search, random search, Bayesian optimization.",
      ]
    },
    {
      chapter: "10. Machine Learning in Practice",
      details: "Model Deployment",
      subpoints: [
        "Serving models, REST APIs, microservices.",
      ],
      details1: "Monitoring and Maintenance",
      subpoints1: [
        "Model drift, retraining, logging.",
      ],
      details2: "Scalability and Performance",
      subpoints2: [
        "Batch processing, real-time inference, distributed computing.",
      ]
    },
    {
      chapter: "11. AI/ML Tools and Frameworks",
      details: "Programming Languages",
      subpoints: [
        "Python, R.",
      ],
      details1: "Libraries and Frameworks",
      subpoints1: [
        "NumPy, pandas, scikit-learn, TensorFlow, Keras, PyTorch, spaCy, NLTK.",
      ],
      details2: "Visualization Tools",
      subpoints2: [
        "Matplotlib, Seaborn, Plotly, Tableau.",
      ]
    },
    {
      chapter: "12. Ethics and Responsible AI",
      details: "Fairness and Bias",
      subpoints: [
        "Detecting and mitigating bias, fairness metrics.",
      ],
      details1: "Explainability and Interpretability",
      subpoints1: [
        "SHAP, LIME, model-agnostic interpretability.",
      ],
      details2: "Privacy and Security",
      subpoints2: [
        "Data privacy, adversarial attacks, secure model deployment.",
      ]
    },
    {
      chapter: "13. Capstone Project",
      details: "Project Planning",
      subpoints: [
        "Defining the problem statement, collecting data, setting objectives.",
      ],
      details1: "Model Development",
      subpoints1: [
        "Building, training, and evaluating models.",
      ],
      details2: "Project Presentation",
      subpoints2: [
        "Documenting results, creating presentations, showcasing the project.",
      ]
    }
  ]
};


export const MEAN = {
  learnings: [
    "Introduction to MEAN Stack and its components",
    "Setting up the development environment",
    "Building servers with Node.js and Express.js",
    "Understanding MongoDB and CRUD operations",
    "Creating applications with Angular",
    "Authentication and Authorization techniques",
    "Connecting Angular with Node.js and Express",
    "Testing and debugging MEAN stack applications",
    "Building and deploying MEAN stack applications",
    "Best practices and performance optimization"
  ],

  courseContent: [
    {
      chapter: "1. Introduction to MEAN Stack",
      details: "Overview of the MEAN Stack",
      subpoints: [
        "Components of the MEAN stack: MongoDB, Express.js, Angular, Node.js.",
        "Benefits of using MEAN stack."
      ],
      details1: "Setting Up the Development Environment",
      subpoints1: [
        "Installing Node.js, npm, and MongoDB.",
        "Introduction to Integrated Development Environments (IDEs)."
      ]
    },
    {
      chapter: "2. Node.js and Express.js",
      details: "Introduction to Node.js",
      subpoints: [
        "Event-driven architecture, asynchronous programming.",
        "Node.js modules, npm (Node Package Manager)."
      ],
      details1: "Building a Server with Node.js",
      subpoints1: [
        "Creating a basic server, handling HTTP requests and responses."
      ],
      details2: "Introduction to Express.js",
      subpoints2: [
        "Express.js basics, creating an Express application.",
        "Middleware, routing, and handling requests."
      ],
      details3: "RESTful API Development with Express",
      subpoints3: [
        "Designing RESTful APIs, CRUD operations.",
        "Connecting to MongoDB from an Express application."
      ]
    },
    {
      chapter: "3. MongoDB",
      details: "Introduction to MongoDB",
      subpoints: [
        "NoSQL database concepts, MongoDB architecture.",
        "Installation and configuration of MongoDB."
      ],
      details1: "CRUD Operations with MongoDB",
      subpoints1: [
        "Creating, reading, updating, and deleting documents.",
        "MongoDB queries and indexing."
      ],
      details2: "Mongoose for MongoDB",
      subpoints2: [
        "Introduction to Mongoose, defining schemas and models.",
        "Validations, hooks, and advanced Mongoose features."
      ]
    },
    {
      chapter: "4. Angular",
      details: "Introduction to Angular",
      subpoints: [
        "Angular architecture, components, and modules.",
        "Setting up an Angular project using Angular CLI."
      ],
      details1: "Angular Components and Templates",
      subpoints1: [
        "Creating and using components, data binding, directives."
      ],
      details2: "Services and Dependency Injection",
      subpoints2: [
        "Creating services, dependency injection, and providers."
      ],
      details3: "Routing and Navigation",
      subpoints3: [
        "Setting up Angular routing, lazy loading, route guards."
      ],
      details4: "Forms in Angular",
      subpoints4: [
        "Template-driven forms, reactive forms, form validation."
      ],
      details5: "HTTP Client Module",
      subpoints5: [
        "Making HTTP requests, handling responses, interceptors."
      ],
      details6: "State Management with NgRx",
      subpoints6: [
        "Introduction to NgRx, setting up NgRx store, actions, reducers, selectors."
      ]
    },
    {
      chapter: "5. Authentication and Authorization",
      details: "User Authentication",
      subpoints: [
        "Implementing user registration and login.",
        "Password hashing, JWT (JSON Web Token) authentication."
      ],
      details1: "Authorization",
      subpoints1: [
        "Role-based access control, protecting routes."
      ]
    },
    {
      chapter: "6. Full-Stack Development with MEAN",
      details: "Connecting Angular with Node.js and Express",
      subpoints: [
        "Making HTTP requests from Angular to Express API.",
        "Handling data in Angular services and components."
      ],
      details1: "Real-Time Applications with Socket.io",
      subpoints1: [
        "Setting up Socket.io in a Node.js application.",
        "Real-time data updates between server and client."
      ]
    },
    {
      chapter: "7. Testing and Debugging",
      details: "Unit Testing with Jasmine and Karma",
      subpoints: [
        "Writing unit tests for Angular components and services."
      ],
      details1: "End-to-End Testing with Protractor",
      subpoints1: [
        "Setting up Protractor, writing e2e tests."
      ],
      details2: "Testing Express APIs with Mocha and Chai",
      subpoints2: [
        "Setting up Mocha and Chai, writing API tests."
      ],
      details3: "Debugging Techniques",
      subpoints3: [
        "Debugging Node.js applications, using browser developer tools for Angular."
      ]
    },
    {
      chapter: "8. Build and Deployment",
      details: "Building the Angular Application",
      subpoints: [
        "Angular build configurations, production builds."
      ],
      details1: "Deploying MEAN Applications",
      subpoints1: [
        "Deploying Node.js applications to cloud providers (e.g., AWS, Heroku).",
        "Deploying Angular applications to static hosting (e.g., Netlify, Vercel)."
      ]
    },
    {
      chapter: "9. Best Practices and Performance Optimization",
      details: "Code Organization and Modularization",
      subpoints: [
        "Structuring a MEAN stack project, organizing code."
      ],
      details1: "Performance Optimization",
      subpoints1: [
        "Caching, lazy loading, optimizing database queries."
      ],
      details2: "Security Best Practices",
      subpoints2: [
        "Securing Express applications, protecting against common vulnerabilities."
      ]
    },
    {
      chapter: "10. Capstone Project",
      details: "Project Planning and Design",
      subpoints: [
        "Defining project scope, requirements, and architecture."
      ],
      details1: "Full-Stack Application Development",
      subpoints1: [
        "Building a complete MEAN stack application from scratch."
      ],
      details2: "Project Presentation",
      subpoints2: [
        "Demonstrating the project, discussing challenges and solutions."
      ]
    }
  ]
};


export const MERN = {
  learnings: [
    "Introduction to the MERN Stack",
    "Setting Up the Development Environment",
    "Node.js and Express.js",
    "MongoDB",
    "React.js",
    "Connecting React with Node.js and Express",
    "Authentication and Authorization",
    "Advanced React Topics",
    "Testing and Debugging",
    "Build and Deployment",
    "Best Practices and Performance Optimization",
    "Capstone Project"
  ],

  courseContent: [
    {
      chapter: "1. Introduction to MERN Stack",
      details: "Overview of the MERN Stack",
      subpoints: [
        "Components of the MERN stack: MongoDB, Express.js, React, Node.js.",
        "Benefits of using the MERN stack."
      ],
      details1: "Setting Up the Development Environment",
      subpoints1: [
        "Installing Node.js, npm, and MongoDB.",
        "Introduction to Integrated Development Environments (IDEs)."
      ]
    },
    {
      chapter: "2. Node.js and Express.js",
      details: "Introduction to Node.js",
      subpoints: [
        "Event-driven architecture, asynchronous programming.",
        "Node.js modules, npm (Node Package Manager)."
      ],
      details1: "Building a Server with Node.js",
      subpoints1: [
        "Creating a basic server, handling HTTP requests and responses."
      ],
      details2: "Introduction to Express.js",
      subpoints2: [
        "Express.js basics, creating an Express application.",
        "Middleware, routing, and handling requests."
      ],
      details3: "RESTful API Development with Express",
      subpoints3: [
        "Designing RESTful APIs, CRUD operations.",
        "Connecting to MongoDB from an Express application."
      ]
    },
    {
      chapter: "3. MongoDB",
      details: "Introduction to MongoDB",
      subpoints: [
        "NoSQL database concepts, MongoDB architecture.",
        "Installation and configuration of MongoDB."
      ],
      details1: "CRUD Operations with MongoDB",
      subpoints1: [
        "Creating, reading, updating, and deleting documents.",
        "MongoDB queries and indexing."
      ],
      details2: "Mongoose for MongoDB",
      subpoints2: [
        "Introduction to Mongoose, defining schemas and models.",
        "Validations, hooks, and advanced Mongoose features."
      ]
    },
    {
      chapter: "4. React.js",
      details: "Introduction to React",
      subpoints: [
        "React architecture, components, JSX.",
        "Setting up a React project using Create React App."
      ],
      details1: "React Components and Props",
      subpoints1: [
        "Functional and class components, passing props."
      ],
      details2: "State and Lifecycle",
      subpoints2: [
        "Managing state, lifecycle methods, hooks (useState, useEffect)."
      ],
      details3: "Event Handling",
      subpoints3: [
        "Handling user inputs, forms, and events."
      ],
      details4: "React Router",
      subpoints4: [
        "Setting up React Router, navigating between pages."
      ],
      details5: "State Management with Redux",
      subpoints5: [
        "Introduction to Redux, setting up the store, actions, reducers."
      ]
    },
    {
      chapter: "5. Connecting React with Node.js and Express",
      details: "Making HTTP Requests from React",
      subpoints: [
        "Using fetch API and axios for API calls.",
        "Handling data in React components and state."
      ],
      details1: "Creating Full-Stack Applications",
      subpoints1: [
        "Integrating React frontend with Express backend.",
        "Managing routes, state, and data flow."
      ]
    },
    {
      chapter: "6. Authentication and Authorization",
      details: "User Authentication",
      subpoints: [
        "Implementing user registration and login.",
        "Password hashing, JWT (JSON Web Token) authentication."
      ],
      details1: "Authorization",
      subpoints1: [
        "Role-based access control, protecting routes."
      ]
    },
    {
      chapter: "7. Advanced React Topics",
      details: "Context API",
      subpoints: [
        "Global state management using Context API."
      ],
      details1: "React Hooks",
      subpoints1: [
        "Custom hooks, advanced hook patterns."
      ],
      details2: "Performance Optimization",
      subpoints2: [
        "Memoization, code splitting, lazy loading."
      ]
    },
    {
      chapter: "8. Testing and Debugging",
      details: "Testing React Applications",
      subpoints: [
        "Unit testing with Jest, testing-library/react."
      ],
      details1: "End-to-End Testing with Cypress",
      subpoints1: [
        "Setting up Cypress, writing e2e tests."
      ],
      details2: "Testing Express APIs with Mocha and Chai",
      subpoints2: [
        "Setting up Mocha and Chai, writing API tests."
      ],
      details3: "Debugging Techniques",
      subpoints3: [
        "Debugging Node.js applications, using browser developer tools for React."
      ]
    },
    {
      chapter: "9. Build and Deployment",
      details: "Building the React Application",
      subpoints: [
        "React build configurations, production builds."
      ],
      details1: "Deploying MERN Applications",
      subpoints1: [
        "Deploying Node.js applications to cloud providers (e.g., AWS, Heroku).",
        "Deploying React applications to static hosting (e.g., Netlify, Vercel)."
      ]
    },
    {
      chapter: "10. Best Practices and Performance Optimization",
      details: "Code Organization and Modularization",
      subpoints: [
        "Structuring a MERN stack project, organizing code."
      ],
      details1: "Performance Optimization",
      subpoints1: [
        "Caching, lazy loading, optimizing database queries."
      ],
      details2: "Security Best Practices",
      subpoints2: [
        "Securing Express applications, protecting against common vulnerabilities."
      ]
    },
    {
      chapter: "11. Capstone Project",
      details: "Project Planning and Design",
      subpoints: [
        "Defining project scope, requirements, and architecture."
      ],
      details1: "Full-Stack Application Development",
      subpoints1: [
        "Building a complete MERN stack application from scratch."
      ],
      details2: "Project Presentation",
      subpoints2: [
        "Demonstrating the project, discussing challenges and solutions."
      ]
    }
  ]
};




export const AppSec = {
  learnings: [
    "Introduction to Application Security",
    "Common Security Threats and Vulnerabilities",
    "Secure Software Development",
    "Static Application Security Testing (SAST)",
    "Dynamic Application Security Testing (DAST)",
    "Interactive Application Security Testing (IAST)",
    "Security Testing Automation",
    "Penetration Testing",
    "Secure DevOps (DevSecOps)",
    "Cloud Security",
    "Application Security Policies and Compliance",
    "Incident Response and Recovery",
    "Capstone Project"
  ],

  courseContent: [
    {
      chapter: "Introduction to Application Security",
      details: "Overview of AppSec",
      subpoints: [
        "Definition and importance of application security.",
        "Key concepts and principles.",
        "The role of AppSec in the software development lifecycle (SDLC)."
      ]
    },
    {
      chapter: "Common Security Threats and Vulnerabilities",
      details: "Understanding OWASP Top 10",
      subpoints: [
        "Injection attacks (SQL, NoSQL, OS command injection).",
        "Broken authentication.",
        "Sensitive data exposure.",
        "XML External Entities (XXE).",
        "Broken access control.",
        "Security misconfigurations.",
        "Cross-Site Scripting (XSS).",
        "Insecure deserialization.",
        "Using components with known vulnerabilities.",
        "Insufficient logging and monitoring."
      ],
      details1: "Other Common Vulnerabilities",
      subpoints1: [
        "Cross-Site Request Forgery (CSRF).",
        "Server-Side Request Forgery (SSRF)."
      ]
    },
    {
      chapter: "Secure Software Development",
      details: "Secure Coding Practices",
      subpoints: [
        "Input validation and output encoding.",
        "Proper error handling and logging.",
        "Secure session management."
      ],
      details1: "Security by Design",
      subpoints1: [
        "Principles of least privilege and defense in depth.",
        "Secure architecture and design patterns."
      ],
      details2: "Threat Modeling",
      subpoints2: [
        "Identifying and prioritizing potential threats.",
        "Creating and analyzing threat models."
      ]
    },
    {
      chapter: "Static Application Security Testing (SAST)",
      details: "Introduction to SAST",
      subpoints: [
        "How SAST works and its benefits.",
        "Common SAST tools (e.g., SonarQube, Fortify, Checkmarx)."
      ],
      details1: "Integrating SAST into CI/CD",
      subpoints1: [
        "Automating security scans in the development pipeline.",
        "Analyzing and triaging SAST findings."
      ]
    },
    {
      chapter: "Dynamic Application Security Testing (DAST)",
      details: "Introduction to DAST",
      subpoints: [
        "How DAST works and its benefits.",
        "Common DAST tools (e.g., OWASP ZAP, Burp Suite)."
      ],
      details1: "Integrating DAST into CI/CD",
      subpoints1: [
        "Automating dynamic security scans.",
        "Analyzing and mitigating DAST findings."
      ]
    },
    {
      chapter: "Interactive Application Security Testing (IAST)",
      details: "Introduction to IAST",
      subpoints: [
        "How IAST combines SAST and DAST.",
        "Common IAST tools (e.g., Contrast Security, Veracode)."
      ],
      details1: "Benefits and Use Cases of IAST",
      subpoints1: [
        "Real-time vulnerability detection and analysis."
      ]
    },
    {
      chapter: "Security Testing Automation",
      details: "Automating Security Tests",
      subpoints: [
        "Scripting security tests and integrating them into CI/CD pipelines.",
        "Using automated tools for continuous security testing."
      ],
      details1: "Continuous Security Monitoring",
      subpoints1: [
        "Setting up security alerts and monitoring systems."
      ]
    },
    {
      chapter: "Penetration Testing",
      details: "Introduction to Penetration Testing",
      subpoints: [
        "Purpose and methodology.",
        "Types of penetration tests (white-box, black-box, grey-box)."
      ],
      details1: "Conducting Penetration Tests",
      subpoints1: [
        "Planning and scoping.",
        "Exploiting vulnerabilities and documenting findings."
      ],
      details2: "Penetration Testing Tools",
      subpoints2: [
        "Common tools (e.g., Metasploit, Nmap, Nikto)."
      ]
    },
    {
      chapter: "Secure DevOps (DevSecOps)",
      details: "Integrating Security into DevOps",
      subpoints: [
        "Principles of DevSecOps.",
        "Shifting left in the SDLC."
      ],
      details1: "DevSecOps Tools and Practices",
      subpoints1: [
        "Automating security checks in CI/CD pipelines.",
        "Using container security tools (e.g., Docker Bench, Clair)."
      ]
    },
    {
      chapter: "Cloud Security",
      details: "Introduction to Cloud Security",
      subpoints: [
        "Cloud security challenges and best practices.",
        "Securing Cloud Applications."
      ],
      details1: "Identity and access management (IAM)",
      subpoints1: [
        "Data encryption and key management.",
        "Monitoring and incident response."
      ]
    },
    {
      chapter: "Application Security Policies and Compliance",
      details: "Creating Security Policies",
      subpoints: [
        "Defining and enforcing security policies."
      ],
      details1: "Compliance Requirements",
      subpoints1: [
        "Understanding and adhering to regulations (e.g., GDPR, PCI-DSS, HIPAA)."
      ]
    },
    {
      chapter: "Incident Response and Recovery",
      details: "Incident Response Planning",
      subpoints: [
        "Preparing for and responding to security incidents."
      ],
      details1: "Post-Incident Recovery",
      subpoints1: [
        "Lessons learned and improving security posture."
      ]
    },
    {
      chapter: "Capstone Project",
      details: "Project Planning and Design",
      subpoints: [
        "Defining project scope, requirements, and objectives."
      ],
      details1: "Implementing Security Practices",
      subpoints1: [
        "Applying security measures in a real-world application."
      ],
      details2: "Project Presentation",
      subpoints2: [
        "Demonstrating the project, discussing challenges and solutions."
      ]
    }
  ]
};



export const GitHub = {
  learnings: [
    "Introduction to Version Control",
    "Getting Started with Git",
    "Basic Git Commands",
    "Hands-On Lab: Working with Git",
    "Introduction to GitHub",
    "Collaborating with GitHub",
    "Hands-On Lab: Collaborating on GitHub",
    "Advanced Git/GitHub Concepts",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Version Control",
      details: "What is Version Control?",
      subpoints: [
        "Explain the concept of version control and its importance in software development."
      ],
      details1: "Types of Version Control Systems",
      subpoints1: [
        "Overview of centralized vs. distributed version control systems."
      ],
      details2: "Introduction to Git",
      subpoints2: [
        "History of Git and its significance as a distributed version control system."
      ]
    },
    {
      chapter: "Chapter 2: Getting Started with Git",
      details: "Installing Git",
      subpoints: [
        "Walkthrough of installing Git on different operating systems (Windows, macOS, Linux)."
      ],
      details1: "Configuring Git",
      subpoints1: [
        "Basic configuration commands to set up user name and email."
      ],
      details2: "Git Basics",
      subpoints2: [
        "Introduction to Git repositories, cloning, and basic Git commands."
      ]
    },
    {
      chapter: "Chapter 3: Basic Git Commands",
      details: "Creating a Repository",
      subpoints: [
        "Initializing a new repository and understanding the .git directory."
      ],
      details1: "Staging and Committing Changes",
      subpoints1: [
        "Using git add and git commit to track changes."
      ],
      details2: "Viewing History",
      subpoints2: [
        "Using git log to view commit history."
      ],
      details3: "Branching and Merging",
      subpoints3: [
        "Basics of creating branches, switching between branches, and merging changes."
      ]
    },
    {
      chapter: "Chapter 4: Hands-On Lab: Working with Git",
      details: "Setting Up a Repository",
      subpoints: [
        "Initialize a new repository and add some files."
      ],
      details1: "Committing Changes",
      subpoints1: [
        "Make changes to the files and commit those changes."
      ],
      details2: "Branching and Merging",
      subpoints2: [
        "Create a new branch, make changes, and merge the branch back into the main branch."
      ],
      details3: "Resolving Conflicts",
      subpoints3: [
        "Demonstrate how to handle merge conflicts."
      ]
    },
    {
      chapter: "Chapter 5: Introduction to GitHub",
      details: "What is GitHub?",
      subpoints: [
        "Overview of GitHub as a hosting service for Git repositories."
      ],
      details1: "GitHub Interface",
      subpoints1: [
        "Introduction to the GitHub interface and key features."
      ],
      details2: "Creating a Repository on GitHub",
      subpoints2: [
        "Step-by-step guide to creating a new repository on GitHub."
      ]
    },
    {
      chapter: "Chapter 6: Collaborating with GitHub",
      details: "Pushing to GitHub",
      subpoints: [
        "How to push local commits to a GitHub repository."
      ],
      details1: "Cloning a Repository",
      subpoints1: [
        "Cloning an existing GitHub repository to the local machine."
      ],
      details2: "Pull Requests",
      subpoints2: [
        "Introduction to pull requests and how to create them."
      ],
      details3: "Reviewing and Merging Pull Requests",
      subpoints3: [
        "Process of reviewing, discussing, and merging pull requests."
      ]
    },
    {
      chapter: "Chapter 7: Hands-On Lab: Collaborating on GitHub",
      details: "Forking a Repository",
      subpoints: [
        "Fork a repository and make changes to it."
      ],
      details1: "Creating a Pull Request",
      subpoints1: [
        "Submit a pull request with the changes made."
      ],
      details2: "Reviewing and Merging",
      subpoints2: [
        "Collaboratively review and merge pull requests."
      ]
    },
    {
      chapter: "Chapter 8: Advanced Git/GitHub Concepts",
      details: "Git Tags",
      subpoints: [
        "Creating and using tags to mark specific points in history."
      ],
      details1: "Rebasing",
      subpoints1: [
        "Introduction to rebasing and how it differs from merging."
      ],
      details2: "GitHub Actions",
      subpoints2: [
        "Brief overview of GitHub Actions for CI/CD."
      ]
    },
    {
      chapter: "Chapter 9: Q&A and Wrap-Up",
      details: "Questions and Answers",
      subpoints: [
        "Open floor for participants to ask questions and clarify doubts."
      ],
      details1: "Summary and Key Takeaways",
      subpoints1: [
        "Recap of what was covered in the masterclass."
      ],
      details2: "Resources for Further Learning",
      subpoints2: [
        "Provide additional resources for participants to continue learning Git and GitHub."
      ]
    }
  ]
};


export const Docker = {
  learnings: [
    "Overview of Containerization",
    "Introduction to Docker",
    "Docker CLI and GUI",
    "Docker Images and Containers",
    "Creating a Dockerfile",
    "Building and Running Containers",
    "Docker Networking",
    "Docker Volumes and Storage",
    "Docker Compose",
    "Docker Swarm",
    "Docker Security",
    "Best Practices",
    "Capstone Project"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Docker",
      details: "Overview of Containerization",
      subpoints: [
        "Explain what containerization is and how it differs from virtualization."
      ],
      details1: "What is Docker?",
      subpoints1: [
        "Introduction to Docker, its history, and its role in modern DevOps."
      ],
      details2: "Why Use Docker?",
      subpoints2: [
        "Benefits of using Docker for developers and organizations."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up Docker",
      details: "Installing Docker",
      subpoints: [
        "Walkthrough of installing Docker on different operating systems (Windows, macOS, Linux)."
      ],
      details1: "Docker CLI and GUI",
      subpoints1: [
        "Introduction to Docker Command Line Interface (CLI) and Docker Desktop GUI."
      ]
    },
    {
      chapter: "Chapter 3: Docker Basics",
      details: "Docker Images and Containers",
      subpoints: [
        "Explain the concepts of Docker images and containers."
      ],
      details1: "Creating a Dockerfile",
      subpoints1: [
        "How to write a Dockerfile to build a custom image."
      ],
      details2: "Building and Running Containers",
      subpoints2: [
        "Commands to build Docker images and run containers from those images."
      ]
    },
    {
      chapter: "Chapter 4: Hands-On Lab: Building and Running a Simple Web Application",
      details: "Dockerfile Creation",
      subpoints: [
        "Create a Dockerfile for a simple web application (e.g., a Node.js app)."
      ],
      details1: "Building the Image",
      subpoints1: [
        "Build the Docker image from the Dockerfile."
      ],
      details2: "Running the Container",
      subpoints2: [
        "Run a container from the built image and access the web application."
      ]
    },
    {
      chapter: "Chapter 5: Docker Networking",
      details: "Introduction to Docker Networking",
      subpoints: [
        "Basics of how networking works in Docker."
      ],
      details1: "Container Communication",
      subpoints1: [
        "How containers can communicate with each other."
      ],
      details2: "Docker Network Commands",
      subpoints2: [
        "Common Docker network commands and their usage."
      ]
    },
    {
      chapter: "Chapter 6: Docker Volumes and Storage",
      details: "Data Persistence",
      subpoints: [
        "Explain the need for data persistence in Docker."
      ],
      details1: "Managing Data with Volumes",
      subpoints1: [
        "How to use Docker volumes to manage data."
      ],
      details2: "Volume Commands",
      subpoints2: [
        "Common commands to create, list, and manage Docker volumes."
      ]
    },
    {
      chapter: "Chapter 7: Docker Compose",
      details: "What is Docker Compose?",
      subpoints: [
        "Introduction to Docker Compose and its benefits."
      ],
      details1: "Compose File Syntax",
      subpoints1: [
        "Overview of the YAML syntax used in Docker Compose files."
      ],
      details2: "Building a Multi-Container Application",
      subpoints2: [
        "Create and run a multi-container application using Docker Compose."
      ]
    },
    {
      chapter: "Chapter 8: Advanced Docker Concepts",
      details: "Docker Swarm",
      subpoints: [
        "Brief introduction to Docker Swarm for container orchestration."
      ],
      details1: "Docker Security",
      subpoints1: [
        "Basic security practices to follow when using Docker."
      ],
      details2: "Best Practices",
      subpoints2: [
        "Tips and best practices for creating Docker images and managing containers."
      ]
    },
    {
      chapter: "Chapter 9: Capstone Project",
      details: "End-to-End Docker Project",
      subpoints: [
        "Applying learned concepts to a real-world project."
      ],
      details1: "Assessment and Feedback",
      subpoints1: [
        "Review and feedback on the capstone project."
      ]
    }
  ]
};


export const Kubernetes = {
  learnings: [
    "Introduction to Kubernetes",
    "Kubernetes Architecture",
    "Setting Up Kubernetes",
    "Kubernetes Basics",
    "Deploying Applications",
    "Kubernetes Configuration and Storage",
    "Kubernetes Networking",
    "Advanced Kubernetes Concepts",
    "Hands-On Lab",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Kubernetes",
      details: "What is Kubernetes?",
      subpoints: [
        "Overview of Kubernetes.",
        "History and role in container orchestration."
      ],
      details1: "Why Kubernetes?",
      subpoints1: [
        "Benefits of using Kubernetes for containerized applications."
      ],
      details2: "Core Concepts",
      subpoints2: [
        "Clusters, nodes, pods, and the Kubernetes API."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up Kubernetes",
      details: "Kubernetes Architecture",
      subpoints: [
        "Control plane and worker nodes."
      ],
      details1: "Installation Options",
      subpoints1: [
        "Minikube, Kubernetes on cloud providers, etc."
      ],
      details2: "Hands-On: Setting Up Minikube",
      subpoints2: [
        "Step-by-step guide to installing and configuring Minikube."
      ]
    },
    {
      chapter: "Chapter 3: Kubernetes Basics",
      details: "Pods",
      subpoints: [
        "Basic unit of deployment in Kubernetes."
      ],
      details1: "Deployments",
      subpoints1: [
        "Managing the desired state of pods."
      ],
      details2: "Services",
      subpoints2: [
        "Enabling communication between different parts of the application."
      ]
    },
    {
      chapter: "Chapter 4: Hands-On Lab: Deploying a Simple Application",
      details: "Containerizing the Application",
      subpoints: [
        "Creating a Docker image for a simple application."
      ],
      details1: "Deploying the Application",
      subpoints1: [
        "Deploy the Docker image as a pod in Kubernetes."
      ],
      details2: "Scaling the Application",
      subpoints2: [
        "Scaling the application using Kubernetes deployments."
      ],
      details3: "Exposing the Application",
      subpoints3: [
        "Using a service to expose the application to external traffic."
      ]
    },
    {
      chapter: "Chapter 5: Kubernetes Configuration and Storage",
      details: "ConfigMaps and Secrets",
      subpoints: [
        "Managing configuration data and sensitive information."
      ],
      details1: "Volumes and Persistent Storage",
      subpoints1: [
        "Introduction to volumes and persistent storage options."
      ]
    },
    {
      chapter: "Chapter 6: Kubernetes Networking",
      details: "Cluster Networking",
      subpoints: [
        "Overview of networking in a Kubernetes cluster."
      ],
      details1: "Network Policies",
      subpoints1: [
        "Controlling traffic flow between pods."
      ]
    },
    {
      chapter: "Chapter 7: Advanced Kubernetes Concepts",
      details: "Ingress",
      subpoints: [
        "Managing external access to services in a cluster."
      ],
      details1: "Helm",
      subpoints1: [
        "Package manager for Kubernetes, simplifies deployment."
      ]
    },
    {
      chapter: "Chapter 8: Q&A and Wrap-Up",
      details: "Questions and Answers",
      subpoints: [
        "Open floor for questions and clarifications."
      ],
      details1: "Summary and Key Takeaways",
      subpoints1: [
        "Recap of what was covered in the masterclass."
      ],
      details2: "Resources for Further Learning",
      subpoints2: [
        "Provide additional resources for continued learning."
      ]
    }
  ]
};


export const Jenkins = {
  learnings: [
    "Introduction to Jenkins",
    "Setting Up Jenkins",
    "Jenkins Basics",
    "Hands-On Lab: Setting Up a CI/CD Pipeline",
    "Jenkins Plugins and Integrations",
    "Jenkins Configuration and Security",
    "Advanced Jenkins Concepts",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Jenkins",
      details: "What is Jenkins?",
      subpoints: [
        "Overview of Jenkins.",
        "History and role in CI/CD pipelines."
      ],
      details1: "Why Jenkins?",
      subpoints1: [
        "Benefits of using Jenkins for continuous integration and deployment."
      ],
      details2: "Core Concepts",
      subpoints2: [
        "Jobs, builds, pipelines, and nodes."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up Jenkins",
      details: "Installing Jenkins",
      subpoints: [
        "Walkthrough of installation on different operating systems (Windows, macOS, Linux)."
      ],
      details1: "Jenkins Dashboard",
      subpoints1: [
        "Overview of the Jenkins dashboard and its key features."
      ],
      details2: "Initial Configuration",
      subpoints2: [
        "Basic configuration steps, including setting up users, security, and plugins."
      ]
    },
    {
      chapter: "Chapter 3: Jenkins Basics",
      details: "Freestyle Projects",
      subpoints: [
        "Creating and configuring freestyle projects."
      ],
      details1: "Build Triggers",
      subpoints1: [
        "Manual, SCM polling, and scheduled builds."
      ],
      details2: "Build Steps and Post-Build Actions",
      subpoints2: [
        "Adding build steps and configuring post-build actions."
      ]
    },
    {
      chapter: "Chapter 4: Hands-On Lab: Setting Up a CI/CD Pipeline",
      details: "Pipeline as Code",
      subpoints: [
        "Introduction to Jenkins Pipeline (Jenkinsfile) and its benefits."
      ],
      details1: "Declarative vs. Scripted Pipelines",
      subpoints1: [
        "Overview of declarative and scripted pipeline syntax."
      ],
      details2: "Creating a Jenkinsfile",
      subpoints2: [
        "Step-by-step guide to creating a Jenkinsfile for a simple application."
      ],
      details3: "Running the Pipeline",
      subpoints3: [
        "Execute the pipeline and monitor its progress through the Jenkins dashboard."
      ],
      details4: "Pipeline Stages",
      subpoints4: [
        "Adding stages for build, test, and deploy."
      ]
    },
    {
      chapter: "Chapter 5: Jenkins Plugins and Integrations",
      details: "Managing Plugins",
      subpoints: [
        "How to install and manage Jenkins plugins."
      ],
      details1: "Common Plugins",
      subpoints1: [
        "Overview of commonly used plugins (Git, GitHub, Maven, Docker, etc.)."
      ],
      details2: "Integrations",
      subpoints2: [
        "Integrating Jenkins with version control systems (e.g., Git), build tools (e.g., Maven), and other services."
      ]
    },
    {
      chapter: "Chapter 6: Jenkins Configuration and Security",
      details: "Global Configuration",
      subpoints: [
        "Overview of global configuration settings in Jenkins."
      ],
      details1: "Managing Credentials",
      subpoints1: [
        "Best practices for managing credentials and sensitive data."
      ],
      details2: "Security Best Practices",
      subpoints2: [
        "Tips for securing your Jenkins installation."
      ]
    },
    {
      chapter: "Chapter 7: Advanced Jenkins Concepts",
      details: "Distributed Builds",
      subpoints: [
        "Introduction to Jenkins agents and how to set up distributed builds."
      ],
      details1: "Blue Ocean",
      subpoints1: [
        "Overview of Blue Ocean, the modern Jenkins UI, and its features."
      ],
      details2: "Jenkins Shared Libraries",
      subpoints2: [
        "Using shared libraries to reuse common pipeline code."
      ]
    },
    {
      chapter: "Chapter 8: Q&A and Wrap-Up",
      details: "Questions and Answers",
      subpoints: [
        "Open floor for participants to ask questions and clarify doubts."
      ],
      details1: "Summary and Key Takeaways",
      subpoints1: [
        "Recap of what was covered in the masterclass."
      ],
      details2: "Resources for Further Learning",
      subpoints2: [
        "Provide additional resources for participants to continue learning Jenkins."
      ]
    }
  ]
};


export const Grafana = {
  learnings: [
    "Introduction to Grafana",
    "Setting Up Grafana",
    "Grafana Dashboard Basics",
    "Data Sources and Queries",
    "Advanced Dashboard Features",
    "Alerts and Notifications",
    "Integrating Grafana with Other Tools",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Grafana",
      details: "What is Grafana?",
      subpoints: [
        "Overview of Grafana.",
        "Purpose and role in data visualization and monitoring."
      ],
      details1: "Key Features",
      subpoints1: [
        "Dashboards, panels, and alerts."
      ],
      details2: "Supported Data Sources",
      subpoints2: [
        "Prometheus, InfluxDB, Elasticsearch, etc."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up Grafana",
      details: "Installation Options",
      subpoints: [
        "Installing Grafana on different platforms (Windows, macOS, Linux)."
      ],
      details1: "Accessing Grafana",
      subpoints1: [
        "Accessing the Grafana dashboard after installation."
      ],
      details2: "Initial Configuration",
      subpoints2: [
        "Setting up data sources and user management."
      ]
    },
    {
      chapter: "Chapter 3: Grafana Dashboard Basics",
      details: "Creating a Dashboard",
      subpoints: [
        "Step-by-step guide to creating a new dashboard."
      ],
      details1: "Adding Panels",
      subpoints1: [
        "How to add various types of panels (graph, table, single stat, etc.)."
      ],
      details2: "Panel Configuration",
      subpoints2: [
        "Configuring panel settings, data queries, and visualization options."
      ]
    },
    {
      chapter: "Chapter 4: Data Sources and Queries",
      details: "Connecting to Data Sources",
      subpoints: [
        "Adding and configuring data sources in Grafana."
      ],
      details1: "Understanding Queries",
      subpoints1: [
        "Writing queries for different data sources (e.g., Prometheus, InfluxDB)."
      ],
      details2: "Variables in Grafana",
      subpoints2: [
        "Using variables to create dynamic dashboards and queries."
      ]
    },
    {
      chapter: "Chapter 5: Advanced Dashboard Features",
      details: "Dashboard Settings",
      subpoints: [
        "Overview of dashboard settings, permissions, and sharing options."
      ],
      details1: "Annotations",
      subpoints1: [
        "Adding annotations to graphs for context."
      ],
      details2: "Dashboard Templates",
      subpoints2: [
        "Creating and using dashboard templates for consistency."
      ]
    },
    {
      chapter: "Chapter 6: Alerts and Notifications",
      details: "Setting Up Alerts",
      subpoints: [
        "Introduction to Grafana alerts and how to set them up."
      ],
      details1: "Alert Rules",
      subpoints1: [
        "Configuring alert rules and thresholds based on data queries."
      ],
      details2: "Notification Channels",
      subpoints2: [
        "Overview of notification channels (email, Slack, etc.) and setup."
      ]
    },
    {
      chapter: "Chapter 7: Integrating Grafana with Other Tools",
      details: "Grafana Plugins",
      subpoints: [
        "Overview of Grafana plugins and installation for extended functionality."
      ],
      details1: "Integrating with Prometheus",
      subpoints1: [
        "Basic integration of Grafana with Prometheus for monitoring and visualization."
      ],
      details2: "Using Grafana with CI/CD Tools",
      subpoints2: [
        "Integrating Grafana into CI/CD pipelines for monitoring."
      ]
    },
    {
      chapter: "Chapter 8: Q&A and Wrap-Up",
      details: "Questions and Answers",
      subpoints: [
        "Open floor for participants to ask questions and clarify doubts."
      ],
      details1: "Summary and Key Takeaways",
      subpoints1: [
        "Recap of what was covered in the masterclass."
      ],
      details2: "Resources for Further Learning",
      subpoints2: [
        "Provide additional resources for continued learning."
      ]
    }
  ]
};


export const Ansible = {
  learnings: [
    "Introduction to Ansible",
    "Setting Up Ansible",
    "Ansible Basics",
    "Ansible Roles and Reusability",
    "Advanced Ansible Concepts",
    "Integrating Ansible with Other Tools",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Ansible",
      details: "What is Ansible?",
      subpoints: [
        "Overview of Ansible.",
        "Purpose and role in automation and configuration management."
      ],
      details1: "Key Features",
      subpoints1: [
        "Agentless architecture.",
        "Idempotency.",
        "Playbooks."
      ],
      details2: "Use Cases",
      subpoints2: [
        "Configuration management.",
        "Application deployment.",
        "Orchestration."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up Ansible",
      details: "Installation Options",
      subpoints: [
        "Installing Ansible on Linux, macOS, and Windows (WSL)."
      ],
      details1: "Configuring Ansible",
      subpoints1: [
        "Setting up the Ansible hosts file and inventory."
      ],
      details2: "Understanding the Directory Structure",
      subpoints2: [
        "Playbooks, roles, and inventories."
      ]
    },
    {
      chapter: "Chapter 3: Ansible Basics",
      details: "Inventory Files",
      subpoints: [
        "Static and dynamic inventory files."
      ],
      details1: "Ansible Ad-Hoc Commands",
      subpoints1: [
        "Quick tasks and basic operations."
      ],
      details2: "Playbooks",
      subpoints2: [
        "Structure and YAML syntax."
      ]
    },
    {
      chapter: "Chapter 4: Hands-On Lab: Writing and Running Playbooks",
      details: "Creating a Simple Playbook",
      subpoints: [
        "Configuring a web server (e.g., installing Apache)."
      ],
      details1: "Variables and Facts",
      subpoints1: [
        "Using variables and facts in playbooks."
      ],
      details2: "Conditionals and Loops",
      subpoints2: [
        "Dynamic task execution."
      ],
      details3: "Running the Playbook",
      subpoints3: [
        "Executing and verifying results."
      ]
    },
    {
      chapter: "Chapter 5: Ansible Roles and Reusability",
      details: "What are Roles?",
      subpoints: [
        "Organizing playbooks and tasks."
      ],
      details1: "Creating and Using Roles",
      subpoints1: [
        "Creating roles and integrating them into playbooks."
      ],
      details2: "Best Practices for Role Structure",
      subpoints2: [
        "Recommended practices for reusability."
      ]
    },
    {
      chapter: "Chapter 6: Advanced Ansible Concepts",
      details: "Ansible Vault",
      subpoints: [
        "Managing sensitive data and secrets."
      ],
      details1: "Handlers",
      subpoints1: [
        "Managing task execution."
      ],
      details2: "Ansible Galaxy",
      subpoints2: [
        "Sharing and reusing community roles and playbooks."
      ]
    },
    {
      chapter: "Chapter 7: Integrating Ansible with Other Tools",
      details: "Using Ansible with CI/CD",
      subpoints: [
        "Integration into CI/CD pipelines."
      ],
      details1: "Ansible Tower",
      subpoints1: [
        "Managing Ansible deployments and jobs."
      ],
      details2: "Example Integrations",
      subpoints2: [
        "Integration with cloud providers (AWS, Azure) and container orchestration (Docker, Kubernetes)."
      ]
    },
    {
      chapter: "Chapter 8: Q&A and Wrap-Up",
      details: "Questions and Answers",
      subpoints: [
        "Open floor for questions and clarification."
      ],
      details1: "Summary and Key Takeaways",
      subpoints1: [
        "Recap of the masterclass."
      ],
      details2: "Resources for Further Learning",
      subpoints2: [
        "Additional resources for continued learning."
      ]
    }
  ]
};


export const Terraform = {
  learnings: [
    "Introduction to Terraform",
    "Setting Up Terraform",
    "Terraform Basics",
    "Terraform State Management",
    "Advanced Terraform Concepts",
    "Integrating Terraform with CI/CD",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Terraform",
      details: "What is Terraform?",
      subpoints: [
        "Overview of Terraform and its purpose.",
        "Role in infrastructure as code (IaC)."
      ],
      details1: "Key Features",
      subpoints1: [
        "State management, providers, modules."
      ],
      details2: "Use Cases",
      subpoints2: [
        "Common use cases in cloud provisioning and infrastructure management."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up Terraform",
      details: "Installation Options",
      subpoints: [
        "Installing Terraform on Windows, macOS, Linux."
      ],
      details1: "Configuring Terraform",
      subpoints1: [
        "Basic configuration steps and directory structure."
      ],
      details2: "Understanding Providers",
      subpoints2: [
        "Overview of Terraform providers and their interaction with cloud services."
      ]
    },
    {
      chapter: "Chapter 3: Terraform Basics",
      details: "Terraform Configuration Files",
      subpoints: [
        "Introduction to HCL (HashiCorp Configuration Language)."
      ],
      details1: "Variables",
      subpoints1: [
        "Defining and using variables in configurations."
      ],
      details2: "Resources",
      subpoints2: [
        "Defining resources and understanding their lifecycle."
      ]
    },
    {
      chapter: "Chapter 4: Hands-On: Creating a Simple Terraform Configuration",
      details: "Creating a Basic Configuration",
      subpoints: [
        "Practical exercise to provision a cloud resource (e.g., AWS EC2 instance)."
      ]
    },
    {
      chapter: "Chapter 5: Hands-On Lab: Managing Infrastructure with Terraform",
      details: "Initializing Terraform",
      subpoints: [
        "Explanation of terraform init and setting up the working directory."
      ],
      details1: "Planning Changes",
      subpoints1: [
        "Using terraform plan to preview changes."
      ],
      details2: "Applying Changes",
      subpoints2: [
        "Running terraform apply to create infrastructure."
      ],
      details3: "Modifying Resources",
      subpoints3: [
        "Making changes to configurations and updating resources."
      ],
      details4: "Destroying Infrastructure",
      subpoints4: [
        "Using terraform destroy to remove infrastructure."
      ]
    },
    {
      chapter: "Chapter 6: Terraform State Management",
      details: "Understanding State",
      subpoints: [
        "Importance of Terraform state in tracking resource changes."
      ],
      details1: "Remote State Storage",
      subpoints1: [
        "Storing state in remote backends (e.g., S3, Terraform Cloud)."
      ],
      details2: "State Locking and Versioning",
      subpoints2: [
        "Managing state versions and locking."
      ]
    },
    {
      chapter: "Chapter 7: Advanced Terraform Concepts",
      details: "Modules",
      subpoints: [
        "Organizing and reusing code with modules."
      ],
      details1: "Data Sources",
      subpoints1: [
        "Referencing existing resources with data sources."
      ],
      details2: "Output Values",
      subpoints2: [
        "Extracting information from resources with output values."
      ]
    },
    {
      chapter: "Chapter 8: Hands-On: Creating and Using Modules",
      details: "Creating and Using Modules",
      subpoints: [
        "Practical exercise to create and use a module in Terraform."
      ]
    },
    {
      chapter: "Chapter 9: Integrating Terraform with CI/CD",
      details: "Infrastructure as Code (IaC)",
      subpoints: [
        "Overview of IaC principles and Terraform’s role."
      ],
      details1: "Using Terraform in CI/CD Pipelines",
      subpoints1: [
        "Integrating Terraform with CI/CD tools (e.g., GitHub Actions, Jenkins)."
      ],
      details2: "Best Practices for Version Control",
      subpoints2: [
        "Managing Terraform code with version control systems."
      ]
    },
    {
      chapter: "Chapter 10: Q&A and Wrap-Up",
      details: "Questions and Answers",
      subpoints: [
        "Open floor for participant questions."
      ],
      details1: "Summary and Key Takeaways",
      subpoints1: [
        "Recap of the masterclass content."
      ],
      details2: "Resources for Further Learning",
      subpoints2: [
        "Additional resources for continued learning."
      ]
    }
  ]
};



export const MongoDB = {
  learnings: [
    "Introduction to MongoDB",
    "Core Concepts of MongoDB",
    "Advanced MongoDB Features",
    "MongoDB Administration and Best Practices",
    "Real-World Applications of MongoDB",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to MongoDB",
      details: "What is MongoDB?",
      subpoints: [
        "Overview of MongoDB as a NoSQL database.",
        "Purpose and key features."
      ],
      details1: "Document-Oriented Storage",
      subpoints1: [
        "Explanation of data storage in flexible, JSON-like documents."
      ],
      details2: "Comparison with Relational Databases",
      subpoints2: [
        "Advantages of using MongoDB over traditional relational databases."
      ]
    },
    {
      chapter: "Chapter 2: Core Concepts of MongoDB",
      details: "Data Model",
      subpoints: [
        "Understanding the document model, collections, and databases."
      ],
      details1: "CRUD Operations",
      subpoints1: [
        "Introduction to Create, Read, Update, and Delete operations."
      ],
      details2: "Indexes",
      subpoints2: [
        "Explanation of indexing in MongoDB and its importance for performance."
      ]
    },
    {
      chapter: "Chapter 3: Hands-On Lab: Setting Up MongoDB",
      details: "Installation",
      subpoints: [
        "Step-by-step guide to installing MongoDB on various platforms (Windows, macOS, Linux)."
      ],
      details1: "MongoDB Shell",
      subpoints1: [
        "Introduction to the MongoDB shell and its command-line interface."
      ],
      details2: "Creating a Database and Collection",
      subpoints2: [
        "Practical exercise to create a database, add a collection, and insert documents."
      ],
      details3: "Performing CRUD Operations",
      subpoints3: [
        "Hands-on exercises to perform CRUD operations using the shell."
      ]
    },
    {
      chapter: "Chapter 4: Advanced MongoDB Features",
      details: "Aggregation Framework",
      subpoints: [
        "Introduction to the aggregation framework for data processing and analysis."
      ],
      details1: "Data Modeling",
      subpoints1: [
        "Discussion on data modeling techniques, including embedding vs. referencing."
      ],
      details2: "Schema Validation",
      subpoints2: [
        "Overview of schema validation and how to enforce data integrity."
      ]
    },
    {
      chapter: "Chapter 5: Hands-On Lab: Aggregation and Advanced Queries",
      details: "Using the Aggregation Pipeline",
      subpoints: [
        "Practical exercise to perform aggregation operations on a sample dataset."
      ],
      details1: "Complex Queries",
      subpoints1: [
        "Hands-on practice with complex queries, including filtering, sorting, and projecting fields."
      ],
      details2: "Indexing for Performance",
      subpoints2: [
        "Demonstration of creating indexes and analyzing query performance."
      ]
    },
    {
      chapter: "Chapter 6: MongoDB Administration and Best Practices",
      details: "Backup and Restore",
      subpoints: [
        "Overview of backup and restore strategies for MongoDB."
      ],
      details1: "Monitoring and Performance Tuning",
      subpoints1: [
        "Introduction to monitoring tools and techniques for optimizing performance."
      ],
      details2: "Security Best Practices",
      subpoints2: [
        "Discussion on securing MongoDB deployments and implementing authentication."
      ]
    },
    {
      chapter: "Chapter 7: Real-World Applications of MongoDB",
      details: "Industry Use Cases",
      subpoints: [
        "Overview of real-world applications in various industries (e.g., e-commerce, social media, data analytics)."
      ],
      details1: "Emerging Trends",
      subpoints1: [
        "Discussion on trends in NoSQL databases and the future of MongoDB."
      ]
    },
    {
      chapter: "Chapter 8: Q&A and Wrap-Up",
      details: "Questions and Answers",
      subpoints: [
        "Open floor for participants to ask questions and clarify doubts."
      ],
      details1: "Summary and Key Takeaways",
      subpoints1: [
        "Recap of what was covered in the masterclass."
      ],
      details2: "Resources for Further Learning",
      subpoints2: [
        "Provide additional resources for continued learning."
      ]
    }
  ]
};


export const ExpressJS = {
  learnings: [
    "Introduction to ExpressJS",
    "Setting Up the Development Environment",
    "Core Concepts of ExpressJS",
    "Template Engines and Dynamic Rendering",
    "Error Handling and Validation",
    "Connecting to a Database",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to ExpressJS",
      details: "What is ExpressJS?",
      subpoints: [
        "Overview of ExpressJS as a web application framework for Node.js.",
        "Key features like middleware, routing, and template engines."
      ],
      details1: "When to Use ExpressJS",
      subpoints1: [
        "Use cases and advantages of Express for building web applications."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up the Development Environment",
      details: "Node.js and NPM",
      subpoints: [
        "Introduction to Node.js and the Node Package Manager (NPM)."
      ],
      details1: "Installing ExpressJS",
      subpoints1: [
        "Step-by-step guide to setting up a new Express project using NPM."
      ],
      details2: "Project Structure",
      subpoints2: [
        "Explanation of the typical directory structure of an Express application."
      ]
    },
    {
      chapter: "Chapter 3: Core Concepts of ExpressJS",
      details: "Middleware",
      subpoints: [
        "Understanding middleware functions and their role in Express applications."
      ],
      details1: "Routing",
      subpoints1: [
        "Introduction to routing, defining routes, and handling requests."
      ],
      details2: "Request and Response Objects",
      subpoints2: [
        "Overview of request and response objects, and how to manipulate them."
      ]
    },
    {
      chapter: "Chapter 4: Hands-On Lab: Building a Simple Express Application",
      details: "Creating Routes",
      subpoints: [
        "Practical exercise to create basic routes for a web application."
      ],
      details1: "Handling GET and POST Requests",
      subpoints1: [
        "Demonstrating how to handle different types of HTTP requests."
      ],
      details2: "Serving Static Files",
      subpoints2: [
        "Setting up middleware to serve static files (e.g., images, CSS, JavaScript)."
      ]
    },
    {
      chapter: "Chapter 5: Template Engines and Dynamic Rendering",
      details: "Introduction to Template Engines",
      subpoints: [
        "Overview of popular template engines (e.g., EJS, Pug)."
      ],
      details1: "Setting Up a Template Engine",
      subpoints1: [
        "Hands-on exercise to integrate EJS into the Express application."
      ],
      details2: "Dynamic Rendering",
      subpoints2: [
        "Demonstration of rendering dynamic content using templates."
      ]
    },
    {
      chapter: "Chapter 6: Error Handling and Validation",
      details: "Error Handling Middleware",
      subpoints: [
        "Understanding how to implement error handling in Express."
      ],
      details1: "Input Validation",
      subpoints1: [
        "Introduction to input validation using libraries like Joi or express-validator."
      ],
      details2: "Best Practices for Error Handling",
      subpoints2: [
        "Discussing best practices for managing errors in an Express application."
      ]
    },
    {
      chapter: "Chapter 7: Connecting to a Database",
      details: "Introduction to Databases",
      subpoints: [
        "Overview of databases commonly used with Express (e.g., MongoDB, PostgreSQL)."
      ],
      details1: "Connecting to MongoDB",
      subpoints1: [
        "Hands-on exercise to connect the Express application to a MongoDB database using Mongoose."
      ],
      details2: "CRUD Operations",
      subpoints2: [
        "Demonstrating how to perform Create, Read, Update, and Delete operations on data."
      ]
    },
    {
      chapter: "Chapter 8: Q&A and Wrap-Up",
      details: "Questions and Answers",
      subpoints: [
        "Open floor for participants to ask questions and clarify doubts."
      ],
      details1: "Summary and Key Takeaways",
      subpoints1: [
        "Recap of what was covered in the masterclass."
      ],
      details2: "Resources for Further Learning",
      subpoints2: [
        "Provide additional resources for participants to continue learning ExpressJS."
      ]
    }
  ]
};


export const AngularJS = {
  learnings: [
    "Introduction to AngularJS",
    "Setting Up the Development Environment",
    "Core Concepts of AngularJS",
    "Working with Services",
    "Routing in AngularJS",
    "Handling Forms and Validation",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to AngularJS",
      details: "What is AngularJS?",
      subpoints: [
        "Overview of AngularJS as a front-end JavaScript framework.",
        "History and evolution of AngularJS."
      ],
      details1: "Key Features",
      subpoints1: [
        "Two-way data binding, dependency injection, and directives."
      ],
      details2: "When to Use AngularJS",
      subpoints2: [
        "Advantages and use cases for AngularJS in web development."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up the Development Environment",
      details: "Prerequisites",
      subpoints: [
        "Basic requirements: HTML, CSS, JavaScript."
      ],
      details1: "Creating an AngularJS Project",
      subpoints1: [
        "Step-by-step guide to setting up a new AngularJS project.",
        "Understanding file structure and library inclusion."
      ],
      details2: "Development Tools",
      subpoints2: [
        "Recommended tools and IDEs (e.g., Visual Studio Code, Chrome DevTools)."
      ]
    },
    {
      chapter: "Chapter 3: Core Concepts of AngularJS",
      details: "Modules",
      subpoints: [
        "Understanding modules and their role in organizing applications."
      ],
      details1: "Controllers",
      subpoints1: [
        "Introduction to controllers and their role in managing data."
      ],
      details2: "Scope",
      subpoints2: [
        "Explanation of the scope object and its significance in data binding."
      ]
    },
    {
      chapter: "Chapter 4: Hands-On Lab: Building a Simple AngularJS Application",
      details: "Creating an Application",
      subpoints: [
        "Practical exercise to create a basic AngularJS application."
      ],
      details1: "Two-Way Data Binding",
      subpoints1: [
        "Demonstration of two-way data binding through input fields."
      ],
      details2: "Directives",
      subpoints2: [
        "Introduction to built-in directives (e.g., ng-model, ng-repeat) and their usage."
      ]
    },
    {
      chapter: "Chapter 5: Working with Services",
      details: "What are Services?",
      subpoints: [
        "Overview of services and their role in managing shared data and logic."
      ],
      details1: "Creating Custom Services",
      subpoints1: [
        "Hands-on exercise to create a custom service for data management."
      ],
      details2: "Injecting Services into Controllers",
      subpoints2: [
        "Demonstration of dependency injection to access services in controllers."
      ]
    },
    {
      chapter: "Chapter 6: Routing in AngularJS",
      details: "Introduction to Routing",
      subpoints: [
        "Overview of routing for single-page applications (SPAs)."
      ],
      details1: "Setting Up Routes",
      subpoints1: [
        "Practical exercise to set up routing using the ngRoute module."
      ],
      details2: "Creating Multiple Views",
      subpoints2: [
        "Demonstration of creating and navigating between multiple views."
      ]
    },
    {
      chapter: "Chapter 7: Handling Forms and Validation",
      details: "Creating Forms",
      subpoints: [
        "Overview of form handling in AngularJS, including ng-form."
      ],
      details1: "Form Validation",
      subpoints1: [
        "Explanation of built-in and custom validation techniques."
      ],
      details2: "Displaying Validation Messages",
      subpoints2: [
        "Practical exercise to display error messages and handle form submissions."
      ]
    },
    {
      chapter: "Chapter 8: Q&A and Wrap-Up",
      details: "Questions and Answers",
      subpoints: [
        "Open floor for participants to ask questions and clarify doubts."
      ],
      details1: "Summary and Key Takeaways",
      subpoints1: [
        "Recap of what was covered in the masterclass."
      ],
      details2: "Resources for Further Learning",
      subpoints2: [
        "Provide additional resources for continued learning."
      ]
    }
  ]
};


export const NodeJS = {
  learnings: [
    "Introduction to Node.js",
    "Setting Up the Development Environment",
    "Core Concepts of Node.js",
    "Hands-On Lab: Building a Simple Node.js Application",
    "Express.js Overview",
    "Working with Databases",
    "Error Handling and Best Practices",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Node.js",
      details: "What is Node.js?",
      subpoints: [
        "Overview of Node.js as a JavaScript runtime built on Chrome's V8 engine.",
        "Key features: non-blocking I/O, event-driven architecture, and the npm ecosystem."
      ],
      details1: "Use Cases",
      subpoints1: [
        "When to use Node.js, including web applications, APIs, and real-time applications."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up the Development Environment",
      details: "Prerequisites",
      subpoints: [
        "Overview of basic requirements such as JavaScript and JSON."
      ],
      details1: "Installing Node.js and npm",
      subpoints1: [
        "Step-by-step guide to installing Node.js and npm on various platforms."
      ],
      details2: "Project Structure",
      subpoints2: [
        "Explanation of the typical directory structure of a Node.js application."
      ]
    },
    {
      chapter: "Chapter 3: Core Concepts of Node.js",
      details: "Modules and npm",
      subpoints: [
        "Understanding Node.js modules, the CommonJS module system, and using npm to manage packages."
      ],
      details1: "Event Loop and Callbacks",
      subpoints1: [
        "Explanation of the event loop, asynchronous programming, and callback functions."
      ],
      details2: "File System Operations",
      subpoints2: [
        "Introduction to the Node.js File System (fs) module for reading and writing files."
      ]
    },
    {
      chapter: "Chapter 4: Hands-On Lab: Building a Simple Node.js Application",
      details: "Creating a Basic Server",
      subpoints: [
        "Practical exercise to create a simple HTTP server using Node.js."
      ],
      details1: "Handling Requests and Responses",
      subpoints1: [
        "Demonstrating how to handle incoming requests and send responses."
      ],
      details2: "Serving Static Files",
      subpoints2: [
        "Setting up middleware to serve static files (e.g., HTML, CSS, JavaScript)."
      ]
    },
    {
      chapter: "Chapter 5: Express.js Overview",
      details: "What is Express.js?",
      subpoints: [
        "Introduction to Express.js as a web application framework for Node.js."
      ],
      details1: "Setting Up Express",
      subpoints1: [
        "Hands-on exercise to set up an Express application and create routes."
      ],
      details2: "Middleware in Express",
      subpoints2: [
        "Explanation of middleware functions and how to use them in Express applications."
      ]
    },
    {
      chapter: "Chapter 6: Working with Databases",
      details: "Introduction to Databases",
      subpoints: [
        "Overview of databases commonly used with Node.js (e.g., MongoDB, MySQL)."
      ],
      details1: "Connecting to MongoDB",
      subpoints1: [
        "Hands-on exercise to connect the Node.js application to a MongoDB database using Mongoose."
      ],
      details2: "Performing CRUD Operations",
      subpoints2: [
        "Demonstrating how to perform Create, Read, Update, and Delete operations on data."
      ]
    },
    {
      chapter: "Chapter 7: Error Handling and Best Practices",
      details: "Error Handling in Node.js",
      subpoints: [
        "Overview of error handling techniques in Node.js applications."
      ],
      details1: "Best Practices",
      subpoints1: [
        "Discussion on best practices for writing maintainable and scalable Node.js applications."
      ],
      details2: "Testing Node.js Applications",
      subpoints2: [
        "Introduction to testing frameworks (e.g., Mocha, Chai) and writing tests for Node.js applications."
      ]
    },
    {
      chapter: "Chapter 8: Q&A and Wrap-Up",
      details: "Questions and Answers",
      subpoints: [
        "Open floor for participants to ask questions and clarify doubts."
      ],
      details1: "Summary and Key Takeaways",
      subpoints1: [
        "Recap of what was covered in the masterclass."
      ],
      details2: "Resources for Further Learning",
      subpoints2: [
        "Provide additional resources for participants to continue learning Node.js."
      ]
    }
  ]
};


export const ReactJS = {
  learnings: [
    "Introduction to ReactJS",
    "Setting Up the Development Environment",
    "Core Concepts of ReactJS",
    "React Router and Navigation",
    "Working with Forms and Validation",
    "Introduction to Hooks",
    "State Management in React",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to ReactJS",
      details: "What is ReactJS?",
      subpoints: [
        "Overview of ReactJS as a JavaScript library for building user interfaces.",
        "Key features: Component-based architecture, virtual DOM, and JSX."
      ],
      details1: "When to Use ReactJS",
      subpoints1: [
        "Discussion on use cases and advantages of using React for web applications."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up the Development Environment",
      details: "Prerequisites",
      subpoints: [
        "Basic requirements: HTML, CSS, JavaScript."
      ],
      details1: "Creating a React Project",
      subpoints1: [
        "Step-by-step guide to setting up a new React project using Create React App."
      ],
      details2: "Project Structure",
      subpoints2: [
        "Explanation of the typical directory structure of a React application."
      ]
    },
    {
      chapter: "Chapter 3: Core Concepts of ReactJS",
      details: "Components",
      subpoints: [
        "Understanding functional and class components and their lifecycle."
      ],
      details1: "Props and State",
      subpoints1: [
        "Explanation of props for passing data and state for managing component data."
      ],
      details2: "Event Handling",
      subpoints2: [
        "Overview of event handling in React and managing user interactions."
      ]
    },
    {
      chapter: "Chapter 4: Hands-On Lab: Building a Simple React Application",
      details: "Creating Components",
      subpoints: [
        "Practical exercise to create functional and class components."
      ],
      details1: "Using Props",
      subpoints1: [
        "Demonstrating how to pass props to components and access them."
      ],
      details2: "Managing State",
      subpoints2: [
        "Hands-on exercise to manage state in components using the useState hook."
      ]
    },
    {
      chapter: "Chapter 5: React Router and Navigation",
      details: "Introduction to React Router",
      subpoints: [
        "Overview of routing in single-page applications (SPAs)."
      ],
      details1: "Setting Up Routes",
      subpoints1: [
        "Practical exercise to set up routing using React Router."
      ],
      details2: "Creating Navigation",
      subpoints2: [
        "Demonstrating how to create navigation links and handle route changes."
      ]
    },
    {
      chapter: "Chapter 6: Working with Forms and Validation",
      details: "Creating Forms",
      subpoints: [
        "Overview of form handling in React, including controlled components."
      ],
      details1: "Form Validation",
      subpoints1: [
        "Introduction to form validation techniques using libraries like Formik or Yup."
      ],
      details2: "Handling Submissions",
      subpoints2: [
        "Practical exercise to handle form submissions and manage input states."
      ]
    },
    {
      chapter: "Chapter 7: Introduction to Hooks",
      details: "What are Hooks?",
      subpoints: [
        "Overview of hooks and their purpose in functional components."
      ],
      details1: "Using useEffect",
      subpoints1: [
        "Explanation of the useEffect hook for managing side effects in components."
      ],
      details2: "Custom Hooks",
      subpoints2: [
        "Introduction to creating custom hooks for reusable logic."
      ]
    },
    {
      chapter: "Chapter 8: State Management in React",
      details: "Introduction to Context API",
      subpoints: [
        "Overview of the Context API for state management across components."
      ],
      details1: "Using Context",
      subpoints1: [
        "Hands-on exercise to create and consume context in a React application."
      ],
      details2: "Introduction to Redux (optional)",
      subpoints2: [
        "Brief overview of Redux for managing global state (depending on time)."
      ]
    },
    {
      chapter: "Chapter 9: Q&A and Wrap-Up",
      details: "Questions and Answers",
      subpoints: [
        "Open floor for participants to ask questions and clarify doubts."
      ],
      details1: "Summary and Key Takeaways",
      subpoints1: [
        "Recap of what was covered in the masterclass."
      ],
      details2: "Resources for Further Learning",
      subpoints2: [
        "Provide additional resources for continued learning."
      ]
    }
  ]
};


export const Linux = {
  learnings: [
    "Introduction to Linux",
    "Setting Up the Linux Environment",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Linux",
      details: "What is Linux?",
      subpoints: [
        "Overview of Linux as an open-source operating system.",
        "Key components: Kernel, distributions, and file system hierarchy."
      ],
      details1: "Why Use Linux?",
      subpoints1: [
        "Discussion on the benefits of using Linux: security, flexibility, and community support."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up the Linux Environment",
      details: "Prerequisites",
      subpoints: [
        "Basic requirements: Familiarity with command-line interfaces and basic computer knowledge."
      ],
      details1: "Installing Linux",
      subpoints1: [
        "Step-by-step guide to installing Linux on a virtual machine or dual-boot system."
      ],
      details2: "Linux Command Line Basics",
      subpoints2: [
        "Introduction to essential commands for navigating and managing files in Linux."
      ]
    }
  ]
};


export const Python = {
  learnings: [
    "Introduction to Python",
    "Setting Up the Development Environment",
    "Core Python Concepts",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Python",
      details: "What is Python?",
      subpoints: [
        "Overview of Python as a high-level, interpreted programming language.",
        "Key features: Simple syntax, dynamic typing, and extensive standard library."
      ],
      details1: "Why Learn Python?",
      subpoints1: [
        "Discussion on the versatility of Python in web development, data science, automation, and more."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up the Development Environment",
      details: "Prerequisites",
      subpoints: [
        "Basic requirements: Understanding of programming concepts."
      ],
      details1: "Installing Python",
      subpoints1: [
        "Step-by-step guide to installing Python on different operating systems."
      ],
      details2: "Setting Up a Python Project",
      subpoints2: [
        "Creating a new Python project and setting up a virtual environment."
      ]
    },
    {
      chapter: "Chapter 3: Core Python Concepts",
      details: "Python Syntax and Basics",
      subpoints: [
        "Introduction to Python syntax, variables, and basic data types."
      ],
      details1: "Control Structures",
      subpoints1: [
        "Understanding conditional statements, loops, and functions in Python."
      ],
      details2: "Working with Modules and Packages",
      subpoints2: [
        "Overview of Python modules, importing libraries, and using pip."
      ]
    }
  ]
};


export const Java = {
  learnings: [
    "Introduction to Java",
    "Setting Up the Development Environment",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Java",
      details: "What is Java?",
      subpoints: [
        "Overview of Java as a high-level, object-oriented programming language.",
        "Key features: Platform independence, automatic memory management, and a rich standard library."
      ],
      details1: "When to Use Java",
      subpoints1: [
        "Discussion on use cases and advantages of using Java for various types of applications."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up the Development Environment",
      details: "Prerequisites",
      subpoints: [
        "Basic requirements: Understanding of programming concepts."
      ],
      details1: "Installing Java Development Kit (JDK)",
      subpoints1: [
        "Step-by-step guide to downloading and installing the JDK."
      ],
      details2: "Setting Up an Integrated Development Environment (IDE)",
      subpoints2: [
        "Explanation of how to set up an IDE like IntelliJ IDEA, Eclipse, or NetBeans for Java development."
      ]
    },
 
  ]
};


export const ChatGPT = {
  learnings: [
    "Introduction to ChatGPT",
    "Setting Up ChatGPT in Your Applications",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to ChatGPT",
      details: "What is ChatGPT?",
      subpoints: [
        "Overview of ChatGPT as an AI model developed by OpenAI for conversational AI.",
        "Key features: Natural language processing, context understanding, and adaptability."
      ],
      details1: "Applications of ChatGPT",
      subpoints1: [
        "Discussion on various use cases such as chatbots, content generation, and customer support."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up ChatGPT in Your Applications",
      details: "Prerequisites",
      subpoints: [
        "Basic requirements: Understanding of AI concepts, familiarity with APIs."
      ],
      details1: "Integrating ChatGPT with Your Application",
      subpoints1: [
        "Step-by-step guide to using ChatGPT API in web or mobile applications."
      ],
      details2: "Best Practices",
      subpoints2: [
        "Recommendations for optimizing the use of ChatGPT in different scenarios."
      ]
    },
  ]
};



export const Internship = {
  learnings: [
    "Introduction to Internship Program",
    "Setting Expectations and Goals",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Internship Program",
      details: "What is an Internship?",
      subpoints: [
        "Overview of internships as a structured work experience in a professional setting.",
        "Key benefits: Gaining practical experience, networking opportunities, and skill development."
      ],
      details1: "Types of Internships",
      subpoints1: [
        "Discussion on various types of internships: paid, unpaid, full-time, part-time, virtual, and in-person."
      ]
    },
    {
      chapter: "Chapter 2: Setting Expectations and Goals",
      details: "Setting Personal and Professional Goals",
      subpoints: [
        "Guidance on defining clear goals for the internship experience."
      ],
      details1: "Understanding Company Expectations",
      subpoints1: [
        "Overview of typical expectations from interns: professionalism, work ethic, and communication."
      ],
      details2: "Creating a Work Plan",
      subpoints2: [
        "Step-by-step guide to developing a work plan that aligns with both personal goals and company expectations."
      ]
    }
  ]
};

export const WebSite = {
  learnings: [
    "Introduction to Website Development",
    "Setting Up the Development Environment",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Website Development",
      details: "What is Website Development?",
      subpoints: [
        "Overview of website development: Frontend, Backend, Full Stack.",
        "Key components: HTML, CSS, JavaScript, and server-side technologies."
      ],
      details1: "Types of Websites",
      subpoints1: [
        "Static vs Dynamic websites.",
        "Single-page applications (SPA) vs Multi-page applications (MPA)."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up the Development Environment",
      details: "Prerequisites",
      subpoints: [
        "Basic requirements: Text editor, browser, basic understanding of HTML, CSS, and JavaScript."
      ],
      details1: "Creating a Basic Website",
      subpoints1: [
        "Step-by-step guide to setting up a basic HTML/CSS/JavaScript website."
      ],
      details2: "Project Structure",
      subpoints2: [
        "Explanation of a typical directory structure for a web development project."
      ]
    },
    {
      chapter: "Chapter 3: Advanced Website Features",
      details: "Responsive Design",
      subpoints: [
        "Introduction to responsive design and why it's important.",
        "Using media queries and flexible layouts to create responsive websites."
      ],
      details1: "Adding Interactivity",
      subpoints1: [
        "Using JavaScript to add interactive features to your website.",
        "Introduction to DOM manipulation and event handling."
      ],
      details2: "Deployment",
      subpoints2: [
        "Overview of website deployment options.",
        "Introduction to hosting services and domain registration."
      ]
    }
  ]
};


export const SRE = {
  learnings: [
    "Introduction to Site Reliability Engineering",
    "Service Level Objectives (SLOs), Service Level Agreements (SLAs), and Service Level Indicators (SLIs)",
    "Monitoring and Observability",
    "Incident Management and Response",
    "Capacity Planning and Performance Management",
    "Automation and Infrastructure as Code (IaC)",
    "Reliability Engineering Practices",
    "Continuous Integration and Continuous Deployment (CI/CD)",
    "Security and Compliance",
    "Tooling and Technologies",
    "Soft Skills for SREs",
    "Capstone Project"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Site Reliability Engineering",
      details: "Overview of SRE",
      subpoints: [
        "Definition and history of SRE.",
        "Key concepts and principles.",
        "Differences between SRE and traditional IT operations."
      ],
      details1: "The Role of an SRE",
      subpoints1: [
        "Responsibilities and skillsets.",
        "SRE team structure and collaboration with other teams."
      ]
    },
    {
      chapter: "Chapter 2: Service Level Objectives (SLOs), Service Level Agreements (SLAs), and Service Level Indicators (SLIs)",
      details: "Defining SLIs",
      subpoints: [
        "Key metrics for reliability.",
        "Choosing and measuring SLIs."
      ],
      details1: "Setting SLOs",
      subpoints1: [
        "Importance of SLOs.",
        "Strategies for setting and achieving SLOs."
      ],
      details2: "Understanding SLAs",
      subpoints2: [
        "Difference between SLAs and SLOs.",
        "Negotiating and maintaining SLAs."
      ]
    },
    {
      chapter: "Chapter 3: Monitoring and Observability",
      details: "Introduction to Monitoring",
      subpoints: [
        "Importance of monitoring in SRE.",
        "Key monitoring metrics and tools."
      ],
      details1: "Logging and Tracing",
      subpoints1: [
        "Effective logging practices.",
        "Distributed tracing."
      ],
      details2: "Building Observability",
      subpoints2: [
        "Principles of observability.",
        "Implementing observability in systems."
      ]
    },
    {
      chapter: "Chapter 4: Incident Management and Response",
      details: "Incident Lifecycle",
      subpoints: [
        "Detection, response, resolution, and post-incident review."
      ],
      details1: "On-Call Practices",
      subpoints1: [
        "Structuring on-call rotations.",
        "Best practices for managing on-call duties."
      ],
      details2: "Postmortems",
      subpoints2: [
        "Conducting blameless postmortems.",
        "Learning from incidents and preventing recurrence."
      ]
    },
    {
      chapter: "Chapter 5: Capacity Planning and Performance Management",
      details: "Capacity Planning",
      subpoints: [
        "Forecasting and managing capacity needs.",
        "Scaling systems effectively."
      ],
      details1: "Performance Tuning",
      subpoints1: [
        "Identifying performance bottlenecks.",
        "Techniques for optimizing performance."
      ]
    },
    {
      chapter: "Chapter 6: Automation and Infrastructure as Code (IaC)",
      details: "Automating Operations",
      subpoints: [
        "Benefits of automation in SRE.",
        "Common automation tools and frameworks."
      ],
      details1: "Infrastructure as Code",
      subpoints1: [
        "Principles of IaC.",
        "Tools for IaC (e.g., Terraform, Ansible, Puppet, Chef)."
      ]
    },
    {
      chapter: "Chapter 7: Reliability Engineering Practices",
      details: "Error Budgets",
      subpoints: [
        "Concept of error budgets.",
        "Balancing innovation and reliability."
      ],
      details1: "Chaos Engineering",
      subpoints1: [
        "Introduction to chaos engineering.",
        "Tools and practices for chaos experiments."
      ]
    },
    {
      chapter: "Chapter 8: Continuous Integration and Continuous Deployment (CI/CD)",
      details: "CI/CD Pipelines",
      subpoints: [
        "Building and maintaining CI/CD pipelines.",
        "Tools for CI/CD (e.g., Jenkins, CircleCI, GitLab CI)."
      ],
      details1: "Deployment Strategies",
      subpoints1: [
        "Blue-green deployments, canary releases, rolling updates."
      ]
    },
    {
      chapter: "Chapter 9: Security and Compliance",
      details: "Security Best Practices",
      subpoints: [
        "Securing infrastructure and applications.",
        "Monitoring for security incidents."
      ],
      details1: "Compliance Requirements",
      subpoints1: [
        "Understanding regulatory requirements.",
        "Implementing compliance measures."
      ]
    },
    {
      chapter: "Chapter 10: Tooling and Technologies",
      details: "SRE Toolchain",
      subpoints: [
        "Overview of essential tools (e.g., Prometheus, Grafana, ELK Stack)."
      ],
      details1: "Containerization and Orchestration",
      subpoints1: [
        "Introduction to Docker and Kubernetes.",
        "Managing containerized applications."
      ]
    },
    {
      chapter: "Chapter 11: Soft Skills for SREs",
      details: "Communication and Collaboration",
      subpoints: [
        "Working effectively with other teams.",
        "Incident communication strategies."
      ],
      details1: "Problem-Solving and Decision-Making",
      subpoints1: [
        "Analytical thinking and root cause analysis.",
        "Making informed decisions under pressure."
      ]
    },
    {
      chapter: "Chapter 12: Capstone Project",
      details: "Project Planning and Design",
      subpoints: [
        "Defining project scope, requirements, and architecture."
      ],
      details1: "Implementing SRE Practices",
      subpoints1: [
        "Applying SRE principles in a real-world scenario."
      ],
      details2: "Project Presentation",
      subpoints2: [
        "Demonstrating the project, discussing challenges and solutions."
      ]
    }
  ]
};

export const Cloudops = {
  learnings: [
    "Introduction to Site Reliability Engineering",
    "Service Level Objectives (SLOs), Service Level Agreements (SLAs), and Service Level Indicators (SLIs)",
    "Monitoring and Observability",
    "Incident Management and Response",
    "Capacity Planning and Performance Management",
    "Automation and Infrastructure as Code (IaC)",
    "Reliability Engineering Practices",
    "Continuous Integration and Continuous Deployment (CI/CD)",
    "Security and Compliance",
    "Tooling and Technologies",
    "Soft Skills for SREs",
    "Capstone Project"
  ],
  courseContent: [
    {
      chapter: "Chapter 1: Introduction to Site Reliability Engineering",
      details: "Overview of SRE",
      subpoints: [
        "Definition and history of SRE.",
        "Key concepts and principles.",
        "Differences between SRE and traditional IT operations."
      ]
    },
    {
      chapter: "Chapter 2: SLOs, SLAs, and SLIs",
      details: "Understanding Service Level Agreements and Objectives",
      subpoints: [
        "Defining SLOs, SLAs, and SLIs.",
        "How to set realistic SLOs.",
        "Measuring and monitoring SLIs."
      ]
    },
    {
      chapter: "Chapter 3: Monitoring and Observability",
      details: "Building an Observability-Driven Culture",
      subpoints: [
        "Introduction to monitoring and observability.",
        "Key metrics and alerting strategies.",
        "Tools and platforms for observability."
      ]
    },
    {
      chapter: "Chapter 4: Incident Management and Response",
      details: "Handling Incidents Effectively",
      subpoints: [
        "Incident lifecycle and response strategies.",
        "Post-incident analysis and learning.",
        "Building an incident response plan."
      ]
    },
    {
      chapter: "Chapter 5: Capacity Planning and Performance Management",
      details: "Ensuring System Reliability and Performance",
      subpoints: [
        "Techniques for capacity planning.",
        "Performance optimization strategies.",
        "Scalability and load balancing."
      ]
    },
    {
      chapter: "Chapter 6: Automation and Infrastructure as Code (IaC)",
      details: "Automating Operations",
      subpoints: [
        "Introduction to IaC.",
        "Popular tools (Terraform, Ansible, etc.).",
        "Automating workflows and deployments."
      ]
    },
    {
      chapter: "Chapter 7: Reliability Engineering Practices",
      details: "Ensuring High Availability",
      subpoints: [
        "Designing for failure.",
        "Chaos engineering and resilience testing.",
        "Ensuring fault tolerance."
      ]
    },
    {
      chapter: "Chapter 8: CI/CD for Reliability",
      details: "Streamlining Deployments",
      subpoints: [
        "CI/CD pipelines and tools.",
        "Best practices for reliable deployments.",
        "Rollback and failover strategies."
      ]
    },
    {
      chapter: "Chapter 9: Security and Compliance",
      details: "Securing SRE Processes",
      subpoints: [
        "Security best practices for SRE.",
        "Compliance and regulatory considerations.",
        "Incident response for security events."
      ]
    },
    {
      chapter: "Chapter 10: Tooling and Technologies",
      details: "Tools Every SRE Should Know",
      subpoints: [
        "Monitoring and observability tools.",
        "Incident management platforms.",
        "Automation and orchestration tools."
      ]
    },
    {
      chapter: "Chapter 11: Soft Skills for SREs",
      details: "Communication and Collaboration",
      subpoints: [
        "Effective communication during incidents.",
        "Collaboration with development teams.",
        "Continuous learning and adaptability."
      ]
    },
    {
      chapter: "Chapter 12: Capstone Project",
      details: "Practical Application of SRE Skills",
      subpoints: [
        "Building a complete SRE project.",
        "Applying SRE principles in a real-world scenario.",
        "Presentation and feedback."
      ]
    }
  ]
};



export const AWS = {
  learnings: [
    "Introduction to AWS",
    "Core AWS Services",
    "Setting Up and Managing Resources on AWS",
    "AWS Security Best Practices",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to AWS",
      details: "What is AWS?",
      subpoints: [
        "Overview of AWS as a cloud computing platform by Amazon.",
        "Key benefits: Scalability, cost-efficiency, and reliability."
      ],
      details1: "AWS Global Infrastructure",
      subpoints1: [
        "Regions, Availability Zones, and Edge Locations."
      ]
    },
    {
      chapter: "Chapter 2: Core AWS Services",
      details: "Compute Services",
      subpoints: [
        "Amazon EC2: Virtual servers in the cloud.",
        "AWS Lambda: Serverless computing."
      ],
      details1: "Storage Services",
      subpoints1: [
        "Amazon S3: Scalable object storage.",
        "Amazon EBS: Block storage for EC2 instances."
      ],
      details2: "Networking Services",
      subpoints2: [
        "Amazon VPC: Virtual Private Cloud for secure networking.",
        "Elastic Load Balancing: Distribute traffic across instances."
      ]
    },
    {
      chapter: "Chapter 3: Setting Up and Managing Resources on AWS",
      details: "Creating and Managing EC2 Instances",
      subpoints: [
        "Launching, configuring, and managing EC2 instances."
      ],
      details1: "Managing S3 Buckets",
      subpoints1: [
        "Creating buckets, uploading objects, and setting permissions."
      ],
      details2: "Deploying and Monitoring Applications",
      subpoints2: [
        "Using AWS CloudFormation for infrastructure as code.",
        "Monitoring resources with AWS CloudWatch."
      ]
    },
    {
      chapter: "Chapter 4: AWS Security Best Practices",
      details: "Identity and Access Management (IAM)",
      subpoints: [
        "Setting up users, groups, and roles in AWS IAM.",
        "Implementing the principle of least privilege."
      ],
      details1: "Data Encryption and Security",
      subpoints1: [
        "Using AWS KMS for encryption.",
        "Best practices for securing data in transit and at rest."
      ]
    }
  ]
};


export const MySQL = {
  learnings: [
    "Introduction to MySQL",
    "Setting Up and Managing Databases in MySQL",
    "Advanced MySQL Features",
    "Q&A and Wrap-Up"
  ],

  courseContent: [
    {
      chapter: "Chapter 1: Introduction to MySQL",
      details: "What is MySQL?",
      subpoints: [
        "Overview of MySQL as a popular open-source relational database management system.",
        "Key features: High performance, scalability, and flexibility."
      ],
      details1: "Applications of MySQL",
      subpoints1: [
        "Use cases such as web applications, data storage, and backend for CMS."
      ]
    },
    {
      chapter: "Chapter 2: Setting Up and Managing Databases in MySQL",
      details: "Installation and Configuration",
      subpoints: [
        "Step-by-step installation guide for MySQL on different platforms (Windows, macOS, Linux)."
      ],
      details1: "Creating and Managing Databases",
      subpoints1: [
        "Commands for creating databases and tables.",
        "Inserting, updating, and deleting records."
      ],
      details2: "Basic SQL Queries",
      subpoints2: [
        "Writing basic SQL queries: SELECT, INSERT, UPDATE, DELETE.",
        "Understanding WHERE clause, JOINs, and aggregation."
      ]
    },
    {
      chapter: "Chapter 3: Advanced MySQL Features",
      details: "Indexes and Performance Optimization",
      subpoints: [
        "How to use indexes to optimize query performance."
      ],
      details1: "Stored Procedures and Functions",
      subpoints1: [
        "Writing and executing stored procedures and functions for complex operations."
      ],
      details2: "Database Backup and Security",
      subpoints2: [
        "Best practices for backing up and securing MySQL databases."
      ]
    }
  ]
};


//role start from here
export const System_Administrator = {
  learnings: [
      "Foundations of System Administration",
      "Intermediate System Administration Skills",
      "Advanced System Administration Techniques",
      "Specialized Topics & Career Growth"
    ],
  
    courseContent: [
      {
        chapter: "Chapter 1: Foundations of System Administration",
        details: "Basic IT Concepts & Networking",
        subpoints: [
          "Understanding Operating Systems: Windows, Linux, macOS.",
          "Introduction to Networking: TCP/IP, DNS, DHCP, VPNs, Firewalls, OSI Model, Network Protocols (HTTP, FTP, SSH)."
        ],
        details1: "Command-Line Basics",
        subpoints1: [
          "Linux: ls, cd, cp, mv, grep, find, chmod, chown, tar, nano, vi.",
          "Windows: PowerShell and CMD basics, ipconfig, netstat, tasklist, regedit."
        ],
        details2: "User & Permission Management",
        subpoints2: [
          "Linux: useradd, passwd, chmod, chown, sudo, groups.",
          "Windows: User Management via Active Directory, Local Group Policy, Permissions."
        ]
      },
      {
        chapter: "Chapter 2: Intermediate System Administration Skills",
        details: "System Administration Basics",
        subpoints: [
          "Installing & managing Linux (Ubuntu, CentOS, RHEL), package management (apt, yum, dnf).",
          "Managing Windows Server roles and features, Windows Registry, Task Scheduler."
        ],
        details1: "User Authentication & Security",
        subpoints1: [
          "Active Directory (AD) & Group Policy Management, Role-Based Access Control (RBAC).",
          "Linux Authentication: SSH, PAM, LDAP, fail2ban."
        ],
        details2: "Networking & Remote Access",
        subpoints2: [
          "Configuring SSH, FTP, VPN, setting up and managing network interfaces.",
          "Troubleshooting with ping, traceroute, netstat, tcpdump, Wireshark, nslookup."
        ]
      },
      {
        chapter: "Chapter 3: Advanced System Administration Techniques",
        details: "Automation & Configuration Management",
        subpoints: [
          "Using Ansible, Puppet, or Chef for automation, Infrastructure as Code (IaC).",
          "PowerShell Desired State Configuration (DSC), Bash scripting for automation."
        ],
        details1: "Virtualization & Cloud Administration",
        subpoints1: [
          "Virtualization Tools: VMware, VirtualBox, KVM, Hyper-V.",
          "Cloud Platforms: AWS, Azure, Google Cloud, setting up and managing cloud instances."
        ],
        details2: "Security & Hardening",
        subpoints2: [
          "OS Hardening: Disabling unused services, setting up firewalls, securing SSH and RDP access.",
          "Vulnerability Scanning: Nessus, OpenVAS, CIS Benchmarks, Penetration Testing basics."
        ]
      },
      {
        chapter: "Chapter 4: Specialized Topics & Career Growth",
        details: "Monitoring & Logging",
        subpoints: [
          "Linux: Nagios, Zabbix, Prometheus, Grafana for monitoring system performance.",
          "Windows: Event Viewer, Performance Monitor, configuring logging with Syslog."
        ],
        details1: "Disaster Recovery & Backup Strategies",
        subpoints1: [
          "Backup tools: rsync, tar, Windows Backup & Restore, Time Machine.",
          "Disaster recovery planning, RAID configurations, system snapshots."
        ],
        details2: "DevOps & Career Advancement",
        subpoints2: [
          "Introduction to DevOps concepts, CI/CD pipelines, Terraform, Kubernetes.",
          "Certifications: CompTIA Linux+, RHCSA, RHCE, AWS Certified SysOps Administrator, Microsoft Azure Administrator."
        ]
      }
    ]
  };
  

export const Kubernetes_Administrator = {
  learnings: [
   
  ],
};

export const Site_Reliability_Engineer = {
  learnings: [
   
  ],
};

/*export const Kubernetes_Developer = {
  learnings: [
   
  ],

  export const Platform_Engineer = {
  learnings: [
   
  ],

   export const DevOps_Engineer = {
  learnings: [
   
  ],
   export const Cloud_Engineer = {
  learnings: [
   
  ],*/