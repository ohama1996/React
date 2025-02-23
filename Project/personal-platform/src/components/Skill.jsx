import Pill from "./Pill";
import Section from "./Section";
import { Code } from 'lucide-react';

const Skill = () => {
  const skillTitles = ["JavaScript", "React"," Node.js","Python","SQL","Git","AWS","Docker"]
  return <Section icon={<Code/>} sectionTitle="Skill">
    {skillTitles.map(title => <Pill key={title} title={title} />)}
  </Section>
}

export default Skill;