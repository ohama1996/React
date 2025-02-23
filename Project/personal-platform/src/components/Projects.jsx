import TechPill from "./TechPill";

const Projects = ({ title, desc, techUsed }) => {
  return (
    <div className='bg-blue-50 max-w-4xl mx-auto rounded-xl shadow-lg p-4 mb-4'>
      <h1 className="font-semibold text-xl mb-2">{title}</h1>
      <p className="text-sm text-gray-700 mb-4"> {desc} </p>
      {techUsed.map((tech) =>(<TechPill title={tech} key={tech} />))}
    </div>
  );
}

export default Projects;