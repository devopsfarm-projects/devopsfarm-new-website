import { System_Administrator, Kubernetes_Administrator,  Site_Reliability_Engineer , Kubernetes_Developer, Platform_Engineer, DevOps_Engineer, Cloud_Engineer, Backstage , DSALGO, Devops , CICD,  Linux, Python, Java, AWS, MySQL, Azure, GCP, ChatGPT, AIML, MEAN, MERN, SRE, AppSec, GitHub, Docker, Kubernetes, Jenkins, Grafana, Ansible, Terraform, Cloud_Computing, MongoDB, ExpressJS, AngularJS, NodeJS, ReactJS, Internship, WebSite, Cloudops,  } from './coursedata';

export type CourseName =
  | 'DevOps'
  | 'Azure'
  | 'GCP'
  | 'AI/ML'
  | 'MEAN'
  | 'MERN'
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
  | 'DS/ALGO'
  | 'Cloud_Computing'
  | 'Linux'
  | 'Python'
  | 'Java'
  | 'CI/CD'
  | 'MySQL'
  | 'AWS'
  | 'ChatGPT'
  | 'WebSite'
  | 'Backstage'
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
  Azure: Azure,
  GCP: GCP,
  'AI/ML': AIML,
  MEAN: MEAN,
  MERN: MERN,
  SRE: SRE,
  'CI/CD' : CICD,
  'DS/ALGO': DSALGO,
  Backstage: Backstage,
  AppSecurity: AppSec,
  GitHub: GitHub,
  Docker: Docker,
  Kubernetes: Kubernetes,
  Jenkins: Jenkins,
  Grafana: Grafana,
  Ansible: Ansible,
  Cloud_Computing: Cloud_Computing,
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
