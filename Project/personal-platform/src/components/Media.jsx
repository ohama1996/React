const Media = ({icon, title, url}) => {
  return <a className="flex mb-2 text-blue-600 hover:text-blue-800" href={url}>{icon} 
  <span className="ml-2">{title}</span> </a>;
}

export default Media;