// ryzenthedev & swarthy
import { aboutTechnologies } from '../data/siteContent'

function AboutPage({ t }) {

  return (
    <main className="about-page">
      <section className="section projects-page-hero">
        <h1>{t.about.pageTitle}</h1>
           </section>

      <section className="section about-details">
        <h2>{t.about.title}</h2>
        {t.about.body.split('\n\n').map((block, index) => {
          const [heading, ...rest] = block.split('\n')
          const body = rest.join(' ').trim()

          if (rest.length > 0 && heading.length < 60) {
            return (
              <div key={index} className="about-section">
                <h3>{heading}</h3>
                <p>{body}</p>
              </div>
            )
          }

          return <p key={index}>{block}</p>
        })}
      </section>

      <section className="section technologies-section">
        <h2>{t.about.technologiesTitle}</h2>
        <div className="technologies-grid">
          {aboutTechnologies.map((tech) => (
            <span key={tech.title} className="tech-pill">
              <span className="tech-icon">{tech.icon}</span>
              <span>{tech.title}</span>
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AboutPage
