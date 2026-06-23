// ryzenthedev & swarthy
import { FaCodeBranch } from 'react-icons/fa'

function ProjectCard({ project, goToProjectDetail }) {
  return (
    <article className="project-card">
      <a
        href={`/projects/${project.slug}`}
        onClick={(event) => goToProjectDetail(event, project.slug)}
        className="project-card-link"
      >
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-card-meta">
          <span>{project.githubStars} ★</span>
          <span>
            <FaCodeBranch /> {project.githubForks}
          </span>
          <span>{project.technologies.join(' · ')}</span>
        </div>
      </a>
    </article>
  )
}

export default ProjectCard
