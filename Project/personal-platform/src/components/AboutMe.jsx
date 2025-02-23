import { User } from 'lucide-react';
import Section from './Section';
const AboutMe = () => {
  return <Section icon={<User/>} sectionTitle="About Me">

          <p>
            I am passionate full stack developer with 5 Years of experience in building web applications. I love creating efficient, scalable, and user-friendly solutions to complex problems.
          </p>
        </Section>
}

export default AboutMe;