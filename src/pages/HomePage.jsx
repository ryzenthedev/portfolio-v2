// ryzenthedev & swarthy
import ProjectCard from '../components/ProjectCard'

function HomePage({ typedName, visibleProjects, goToAbout, goToProjects, goToProjectDetail, t }) {

  return (
    <div className="home-page">
      <main className="hero" id="anasayfa">
        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="typewriter">{typedName}</h1>
          <p className="tagline">{t.hero.tagline}</p>
          <a href="/about" className="more-link hero-cta" onClick={goToAbout}>
            {t.hero.cta}
            <span className="arrow">→</span>
          </a>
        </div>

        <div className="hero-graphic" aria-hidden="true">
          <div className="rings">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </main>

      <section className="section" id="projelerim">
        <h2>{t.projects.title}</h2>
        <p>{t.projects.body}</p>
        <div className="projects-grid">
          {visibleProjects.length > 0 ? (
            visibleProjects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                goToProjectDetail={goToProjectDetail}
              />
            ))
          ) : (
            <p>{t.projects.noProjects}</p>
          )}
        </div>
        <a href="/projects" className="more-link" onClick={goToProjects}>
          {t.projects.seeMore}
          <span className="arrow">→</span>
        </a>
      </section>
    </div>
  )
}

export default HomePage
