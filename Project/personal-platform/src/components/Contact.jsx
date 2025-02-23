import Section from "./Section";
import { Globe } from 'lucide-react';
import {Linkedin} from 'lucide-react';
import Media from "./Media";
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';


const Contact = () => {

  const socialLinks = [
    {icon: <Linkedin/>, title:"Linkedin", url:"https://linkedin.com"},
    {icon: <Github/>, title:"Github", url:"https://github.com/"},
    {icon: <Twitter/>, title:"Twiter", url:"https://twittr.com"}
  ];

  return <div className="pb-6">
  <Section icon={<Globe/>} sectionTitle="Contact & Social Media">
    <p className="text-sm text-gray-700 mb-4">
    Email: mahato23@emaple.com <br />
    Phone: (123)3452-5654
  </p>

    {socialLinks.map(social => <Media icon={social.icon} title={social.title} key={social.title} url={social.url} />)}

  </Section>
  </div>
}

export default Contact;