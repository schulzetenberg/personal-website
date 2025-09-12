export interface Project {
  id: number;
  title: string;
  url: string;
  description: string;
  image?: string;
  icon?: string;
  backgroundColor?: string;
  titleColor?: string;
  technologies: string[];
  features: string[];
}
