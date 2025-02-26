import { System_Administrator, Kubernetes_Administrator,  Site_Reliability_Engineer , Kubernetes_Developer, Platform_Engineer, DevOps_Engineer, Cloud_Engineer,  Devops , AWSCloud, Linux, Python, Java, AWS, MySQL, AzureCloud, GCP, ChatGPT, AIML, MEAN, MERN, SRE, AppSec, GitHub, Docker, Kubernetes, Jenkins, Grafana, Ansible, Terraform, MongoDB, ExpressJS, AngularJS, NodeJS, ReactJS, Internship, WebSite, Cloudops,  } from './coursedata';

export type CourseName =
  | 'DevOps'
  | 'AWSCloud'
  | 'AzureCloud'
  | 'GCP'
  | 'AI/ML'
  | 'MEANStack'
  | 'MERNStack'
  | 'SRE'
  | 'AppSecurity'
  | 'GitHub'
  | 'Docker'
  | 'Kubernetes'
  | 'Jenkins'
  | 'Grafana'
  | 'Ansible'
  | 'Terraform'
  | 'MongoDB'
  | 'ExpressJS'
  | 'AngularJS'
  | 'NodeJS'
  | 'ReactJS'
  | 'Internship'
  | 'Cloudops'
  | 'Linux'
  | 'Python'
  | 'Java'
  | 'MySQL'
  | 'AWS'
  | 'ChatGPT'
  | 'WebSite'
  | 'System_Administrator'
  | 'Kubernetes_Administrator'
  | 'Site_Reliability_Engineer'
  | 'Kubernetes_Developer'
  | 'Platform_Engineer'
  | 'DevOps_Engineer'
  | 'Cloud_Engineer';

type CourseContent = {
  chapter: string;
  details: string | string[]; 
  subpoints?: string[]; // Optional subpoints field
  details1?: string | string[];
  subpoints1?: string[];
  details2?: string | string[];
  subpoints2?: string[];
  details3?: string | string[];
  subpoints3?: string[];
};

export type CourseData = {
  learnings: string[];
  courseContent: CourseContent[];
};

const courseOptions: Record<CourseName, CourseData> = {
  DevOps: Devops,
  AWSCloud: AWSCloud,
  AzureCloud: AzureCloud,
  GCP: GCP,
  'AI/ML': AIML,
  MEANStack: MEAN,
  MERNStack: MERN,
  SRE: SRE,
  AppSecurity: AppSec,
  GitHub: GitHub,
  Docker: Docker,
  Kubernetes: Kubernetes,
  Jenkins: Jenkins,
  Grafana: Grafana,
  Ansible: Ansible,
  Terraform: Terraform,
  MongoDB: MongoDB,
  ExpressJS: ExpressJS,
  AngularJS: AngularJS,
  NodeJS: NodeJS,
  ReactJS: ReactJS,
  Internship: Internship,
  WebSite: WebSite,
  Cloudops: Cloudops,
  Linux: Linux,
  ChatGPT: ChatGPT,
  Java: Java,
  Python: Python,
  AWS: AWS,
  MySQL: MySQL,
  System_Administrator: System_Administrator,
  Kubernetes_Administrator: Kubernetes_Administrator,
  Site_Reliability_Engineer: Site_Reliability_Engineer,
  Kubernetes_Developer:Kubernetes_Developer,
  Platform_Engineer:Platform_Engineer,
  DevOps_Engineer: DevOps_Engineer,
  Cloud_Engineer: Cloud_Engineer,
};

export const getCourseData = (courseName: CourseName): CourseData => {
  return courseOptions[courseName] ?? Devops; // Ensure it never returns undefined
};
