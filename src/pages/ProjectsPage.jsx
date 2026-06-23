// ryzenthedev & swarthy
import ProjectCard from '../components/ProjectCard'

function ProjectsPage({ visibleProjects, goToProjectDetail, githubError, t }) {
  return (
    <main className="projects-page">
      <section className="section projects-page-hero">
        <h1>{t.projects.pageTitle}</h1>
        <p>{t.projects.heroDescription}</p>
      </section>

      <section className="section projects-grid">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              goToProjectDetail={goToProjectDetail}
            />
          ))
        ) : githubError ? (
          <p>{githubError}</p>
        ) : (
          <p>{t.projects.noProjects}</p>
        )}
      </section>
    </main>
  )
}

export default ProjectsPage
