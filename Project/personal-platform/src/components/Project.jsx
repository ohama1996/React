import Projects from "./Projects";
import Section from "./Section";
import { Briefcase } from 'lucide-react';

const Project = () => {

  const projectList = [
    {title: "E-Commerce Platform", desc:"Devloped a fully-functional e-commerce platform with user authentication, product management, and payment intergration.", techUsed: ["React", "Node.js", "MongoDB", "Stripe"],},

    {title: "Social Media DashBoard", desc:"Created a Responsive dashboard for social media analytics, featuring real-time visualization and reporting.", techUsed: ["Vue.js", "D3.js", "Express", "PostgreSQL"],},
  ]

  return (
  <Section icon={<Briefcase/>} sectionTitle="Project">
   {projectList.map(projects => <Projects title={projects.title} key={projects.title} desc={projects.desc} techUsed={projects.techUsed}/>)}
  </Section>
  );
};

export default Project;