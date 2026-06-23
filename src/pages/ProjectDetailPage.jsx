// ryzenthedev & swarthy
import { getTechIcon, normalizeTechLabel } from '../data/siteContent'
import { FaCodeBranch } from 'react-icons/fa'
import TechPill from '../components/TechPill'

function ProjectDetailPage({ activeProject, goToProjects, t }) {
  return (
    <main className="project-detail-page">
      <section className="section projects-page-hero">
        <h1>{activeProject.title}</h1>
        <p>{activeProject.details}</p>
      </section>

      <section className="section project-detail-meta">
        <div>
          <strong>{t.projectDetail.duration}</strong>
          <p>{activeProject.duration}</p>
        </div>
        <div>
          <strong>{t.projectDetail.github}</strong>
          <p>
            <a
              href={activeProject.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              {t.projectDetail.githubLink}
            </a>
          </p>
        </div>
        <div>
          <strong>{t.projectDetail.stats}</strong>
          <p>
            {activeProject.githubStars} ★ · <FaCodeBranch /> {activeProject.githubForks}
          </p>
        </div>
      </section>

      <section className="section project-detail-body">
        <h2>{t.projectDetail.about}</h2>
        <p>{activeProject.description}</p>
      </section>

      <section className="section project-tech-section">
        <h2>{t.projectDetail.technologies}</h2>
        <div className="project-tech-list">
          {activeProject.technologies.map((tech) => {
            const normalizedTech = normalizeTechLabel(tech)
            return (
              <TechPill key={tech} tech={normalizedTech} icon={getTechIcon(normalizedTech)} />
            )
          })}
        </div>
      </section>

      <section className="section project-detail-footer">
        <a href="/projects" onClick={goToProjects} className="more-link">
          {t.projectDetail.back}
          <span className="arrow">→</span>
        </a>
      </section>
    </main>
  )
}

export default ProjectDetailPage
