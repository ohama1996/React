import Graduation from "./Graduation";
import Section from "./Section";
import { BookOpen  } from 'lucide-react';

const Education = () => {
  return <Section icon={<BookOpen />} sectionTitle="Education">
    <Graduation title="国際ビジネス" school="日本グローバル専門学校" year="201８ー2020" />

    <Graduation title="MERN and DSA" school="Knowlage gate" year="2025" />
  </Section>
}

export default Education;