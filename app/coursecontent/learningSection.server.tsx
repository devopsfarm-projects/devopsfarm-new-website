// LearningSection.server.js
import { Devops, AWSCloud,Linux, Python, Java, AWS, MySQL, AzureCloud, GCPCloud, ChatGPT, AIML, MEAN, MERN, SRE , AppSec , GitHub , Docker, Kubernetes, Jenkins , Grafana , Ansible ,Terraform , MongoDB , ExpressJS , AngularJS , NodeJS, ReactJS ,Internship, WebSite ,Cloudops} from './coursedata';

type CourseName = 
  | 'DevOps'
  | 'AWSCloud'
  | 'AzureCloud'
  | 'GCPCloud'
  | 'AI&ML'
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
  | 'WebSite';

type CourseData = {
  learnings: string[];
  courseContent: {
    chapter: string;
    details: string;
    subpoints: string[];
    details1?: string;
    subpoints1?: string[];
    details2?: string;
    subpoints2?: string[];
    details3?: string;
    subpoints3?: string[];
  }[];
};

const courseOptions: Record<CourseName, CourseData> = {
  DevOps: Devops,
  AWSCloud: AWSCloud,
  AzureCloud: AzureCloud,
  GCPCloud: GCPCloud,
  'AI&ML': AIML,
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
  MySQL:MySQL,
};

export const getCourseData = (courseName: CourseName) => {
  return courseOptions[courseName] || Devops;
};
