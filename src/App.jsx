// ryzenthedev & swarthy
import { useState, useEffect } from 'react'
import { SiGithub, SiInstagram, SiYoutube, SiX } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import TopBar from './components/TopBar'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import { content, createRepoTitle, normalizeSlug, projectSummaries, projectDurations } from './data/siteContent'

function App() {
  const [typedName, setTypedName] = useState('')
  const [route, setRoute] = useState(window.location.pathname || '/')
  const [loading, setLoading] = useState(true)
  const [transitioning, setTransitioning] = useState(false)
  const [pendingRoute, setPendingRoute] = useState(null)
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'tr'
    const savedLanguage = window.localStorage.getItem('portfolioLanguage')
    return savedLanguage && content[savedLanguage] ? savedLanguage : 'tr'
  })
  const [githubRepos, setGithubRepos] = useState([])
  const [githubRepoLanguages, setGithubRepoLanguages] = useState({})
  const [githubError, setGithubError] = useState('')

  const githubUsername = 'example-user'
  // ryzenthedev & swarthy
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN
  const githubApiUrl = `https://api.github.com/users/${githubUsername}/repos?type=public&per_page=100`
  const t = content[language]

  const getLanguageUsage = (repoName) => {
    const languages = githubRepoLanguages[repoName]

    if (!languages || !Object.keys(languages).length) {
      return []
    }

    return Object.entries(languages)
      .sort(([, a], [, b]) => b - a)
      .map(([language]) => language.replace(/\s*\d+%$/, ''))
  }

  const visibleProjects = githubRepos
    .filter((repo) => repo?.owner?.login === githubUsername)
    .map((repo) => {
      const projectKey = normalizeSlug(repo.name)
      return {
        title: createRepoTitle(repo.name),
        slug: projectKey,
        category: repo.language || (language === 'tr' ? 'GitHub Projesi' : 'GitHub Project'),
        description: repo.description || t.projects.defaultProjectDescription,
        duration:
          projectDurations[projectKey]?.[language] ||
          projectDurations[projectKey]?.tr ||
          (language === 'tr' ? 'Bilinmiyor' : 'Unknown'),
        githubUrl: repo.html_url,
        githubStars: repo.stargazers_count,
        githubForks: repo.forks_count,
        technologies: getLanguageUsage(repo.name),
        details:
          projectSummaries[projectKey] ||
          'Bu projeye ait özel açıklama henüz eklenmemiş. siteContent içinde projectSummaries öğesini ekleyerek burayı düzenleyebilirsin.',
      }
    })

  const isProjectDetail = route.startsWith('/projects/') && route !== '/projects'
  const activeProject = visibleProjects.find((project) => route === `/projects/${project.slug}`)
  const validRoutes = ['/', '/projects', '/about', '/contact']
  const isNotFound = (isProjectDetail && !activeProject) || (!validRoutes.includes(route) && !isProjectDetail)

  useEffect(() => {
    const fullName = content[language].hero.name
    setTypedName('')
    let index = 0

    const interval = setInterval(() => {
      if (index >= fullName.length) {
        clearInterval(interval)
        return
      }

      setTypedName(fullName.slice(0, index + 1))
      index += 1
    }, 90)

    return () => clearInterval(interval)
  }, [language])

  useEffect(() => {
    localStorage.setItem('portfolioLanguage', language)
  }, [language])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 160)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const headers = {
          Accept: 'application/vnd.github.v3+json',
          ...(githubToken ? { Authorization: `token ${githubToken}` } : {}),
        }

        const response = await fetch(githubApiUrl, { headers })
        if (!response.ok) {
          const errorBody = await response.text().catch(() => '')
          const message = response.status === 403
            ? 'GitHub API sınırlamayı geçti. Lütfen bir süre sonra tekrar deneyin.'
            : `GitHub API isteği başarısız oldu: ${response.status}`
          console.error(message, errorBody)
          setGithubError(message)
          return
        }

        const repos = await response.json()
        if (!Array.isArray(repos)) {
          const message = 'GitHub API yanıtı beklenmedik formatta geldi.'
          console.error(message, repos)
          setGithubError(message)
          return
        }

        setGithubRepos(
          repos.filter((repo) => repo?.owner?.login === githubUsername && repo?.private === false)
        )
      } catch (error) {
        const message = 'GitHub reposu yüklenirken hata oluştu.'
        console.error(message, error)
        setGithubError(message)
      }
    }

    fetchRepos()
  }, [])

  useEffect(() => {
    if (!githubRepos.length) return

    const fetchLanguages = async () => {
      try {
        const languageEntries = await Promise.all(
          githubRepos.map(async (repo) => {
            if (!repo.languages_url) return [repo.name, {}]

            const response = await fetch(repo.languages_url)
            if (!response.ok) return [repo.name, {}]

            const languages = await response.json()
            return [repo.name, languages]
          })
        )

        setGithubRepoLanguages(Object.fromEntries(languageEntries))
      } catch (error) {
        console.error(error)
      }
    }

    fetchLanguages()
  }, [githubRepos])

  useEffect(() => {
    const preventRightClick = (event) => event.preventDefault()
    document.addEventListener('contextmenu', preventRightClick)
    return () => document.removeEventListener('contextmenu', preventRightClick)
  }, [])

  useEffect(() => {
    if (!transitioning || !pendingRoute) return

    const timer = setTimeout(() => {
      setRoute(pendingRoute)
      setPendingRoute(null)
      setTransitioning(false)
    }, 220)

    return () => clearTimeout(timer)
  }, [transitioning, pendingRoute])

  useEffect(() => {
    const handlePop = () => {
      const nextRoute = window.location.pathname || '/'
      if (nextRoute !== route) {
        setPendingRoute(nextRoute)
        setTransitioning(true)
      }
    }

    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [route])

  const navigate = (event, nextRoute) => {
    event.preventDefault()
    if (route === nextRoute || transitioning) return

    setPendingRoute(nextRoute)
    setTransitioning(true)
    window.history.pushState({}, '', nextRoute)
  }

  const goToHome = (event) => navigate(event, '/')
  const goToProjects = (event) => navigate(event, '/projects')
  const goToAbout = (event) => navigate(event, '/about')
  const goToContact = (event) => navigate(event, '/contact')

  const goToProjectDetail = (event, projectSlug) => {
    event.preventDefault()
    navigate(event, `/projects/${projectSlug}`)
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()

    const subject = `${t.contact.mailSubject}: ${contactName}`
    const bodyLines = [
      `${t.contact.labels.name}: ${contactName}`,
      `${t.contact.labels.email}: ${contactEmail}`,
      '',
      `${t.contact.labels.message}:`,
      contactMessage,
    ]
    const body = bodyLines.join('\n')
    const mailto = `mailto:contact@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <div className={`page ${!loading ? 'loaded' : ''} ${transitioning ? 'transitioning' : ''} ${isNotFound ? 'notfound-shell' : ''}`}>
      {!isNotFound && (
        <TopBar
          goToHome={goToHome}
          goToAbout={goToAbout}
          goToProjects={goToProjects}
          goToContact={goToContact}
          selectedLanguage={language}
          onLanguageChange={setLanguage}
        />
      )}

      {isProjectDetail && activeProject ? (
        <ProjectDetailPage activeProject={activeProject} goToProjects={goToProjects} t={t} />
      ) : isProjectDetail && !activeProject ? (
        <NotFoundPage goToHome={goToHome} goToProjects={goToProjects} t={t} />
      ) : route === '/projects' ? (
        <ProjectsPage
          visibleProjects={visibleProjects}
          goToProjectDetail={goToProjectDetail}
          githubError={githubError}
          t={t}
        />
      ) : route === '/about' ? (
        <AboutPage t={t} />
      ) : route === '/contact' ? (
        <ContactPage
          contactName={contactName}
          contactEmail={contactEmail}
          contactMessage={contactMessage}
          setContactName={setContactName}
          setContactEmail={setContactEmail}
          setContactMessage={setContactMessage}
          handleContactSubmit={handleContactSubmit}
          t={t}
        />
      ) : route === '/' ? (
        <HomePage
          typedName={typedName}
          visibleProjects={visibleProjects}
          goToAbout={goToAbout}
          goToProjects={goToProjects}
          goToProjectDetail={goToProjectDetail}
          t={t}
        />
      ) : (
        <NotFoundPage goToHome={goToHome} goToProjects={goToProjects} t={t} />
      )}

      {!isNotFound && (
        <footer className="site-footer">
          <p className="footer-copy">{t.footer.copy}</p>
          <div className="footer-links">
          <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer" className="footer-link" aria-label="GitHub">
            <SiGithub />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="footer-link" aria-label="Instagram">
            <SiInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-link" aria-label="YouTube">
            <SiYoutube />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer-link" aria-label="Twitter">
            <SiX />
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="footer-link" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
        <a href="mailto:iletisim@benserif.com" className="footer-email">iletisim@benserif.com</a>
      </footer>
      )}
    </div>
  )
}

export default App
