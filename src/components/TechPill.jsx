// ryzenthedev & swarthy
function TechPill({ tech, icon }) {
  return (
    <span className="project-tech-pill">
      {icon}
      <span>{tech}</span>
    </span>
  )
}

export default TechPill
