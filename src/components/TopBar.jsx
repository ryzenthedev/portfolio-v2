import { content } from '../data/siteContent'
// ryzenthedev & swarthy

function TopBar({ goToHome, goToAbout, goToProjects, goToContact, selectedLanguage, onLanguageChange }) {
  const t = content[selectedLanguage]

  return (
    <header className="topbar">
      <div className="topbar-left">
        <a href="reinabot.com.tr" className="brand-link" target="_blank" rel="noreferrer">
          benserif.com
        </a>
      </div>

      <nav className="nav">
        <a href="/" onClick={goToHome}>{t.nav.home}</a>
        <a href="/about" onClick={goToAbout}>{t.nav.about}</a>
        <a href="/projects" onClick={goToProjects}>{t.nav.projects}</a>
        <a href="/contact" onClick={goToContact}>{t.nav.contact}</a>
      </nav>

      <div className="topbar-actions topbar-right">
        <div className="language-switch">
          <button
            type="button"
            className={`lang-btn ${selectedLanguage === 'tr' ? 'active' : ''}`}
            aria-label="Türkçe"
            onClick={() => onLanguageChange('tr')}
          >
            TR
          </button>
          <button
            type="button"
            className={`lang-btn ${selectedLanguage === 'en' ? 'active' : ''}`}
            aria-label="English"
            onClick={() => onLanguageChange('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopBar
