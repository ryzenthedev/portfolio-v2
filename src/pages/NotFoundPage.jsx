// ryzenthedev & swarthy
function NotFoundPage({ goToHome, goToProjects, t }) {
  return (
    <main className="notfound-page">
      <div className="notfound-card">
        <div className="notfound-hero">
          <div className="notfound-copy">
            <p className="notfound-eyebrow">{t.notFound.eyebrow}</p>
            <h1>{t.notFound.title}</h1>
            <p>
              {t.notFound.description}
            </p>
          </div>
          <div className="notfound-illustration" role="img" aria-label="Üzgün 404 sayfası görseli">
            <svg width="280" height="280" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#15151a" offset="0%" />
                  <stop stopColor="#151521" offset="100%" />
                </linearGradient>
                <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#f8e6b0" offset="0%" />
                  <stop stopColor="#d7b16e" offset="100%" />
                </linearGradient>
                <linearGradient id="shineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="rgba(248,230,176,0.3)" offset="0%" />
                  <stop stopColor="transparent" offset="100%" />
                </linearGradient>
              </defs>
              <rect x="22" y="22" width="256" height="256" rx="42" fill="#0A0A0F" stroke="rgba(248,230,176,0.12)" strokeWidth="2" />
              <path d="M42 56H258" stroke="rgba(248,230,176,0.12)" strokeWidth="2" />
              <circle cx="70" cy="46" r="6" fill="#f8e6b0" />
              <circle cx="92" cy="46" r="6" fill="#51a4ff" />
              <circle cx="114" cy="46" r="6" fill="#d7b16e" />
              <rect x="52" y="82" width="196" height="146" rx="24" fill="url(#screenGrad)" />
              <path d="M82 110H218" stroke="rgba(248,230,176,0.18)" strokeWidth="14" strokeLinecap="round" opacity="0.55" />
              <path d="M82 146H178" stroke="rgba(248,230,176,0.24)" strokeWidth="10" strokeLinecap="round" opacity="0.55" />
              <path d="M82 182H158" stroke="rgba(248,230,176,0.24)" strokeWidth="10" strokeLinecap="round" opacity="0.55" />
              <path d="M154 126C154 116 146 108 136 108H118C108 108 100 116 100 126V146C100 156 108 164 118 164H136C146 164 154 156 154 146V126Z" fill="#111118" />
              <circle cx="118" cy="134" r="8" fill="#f8e6b0" />
              <circle cx="136" cy="134" r="8" fill="#f8e6b0" />
              <path d="M110 160C118 170 136 170 144 160" stroke="#f8e6b0" strokeWidth="5" strokeLinecap="round" />
              <path d="M72 210H228" stroke="rgba(248,230,176,0.08)" strokeWidth="14" strokeLinecap="round" />
              <path d="M188 192L214 216" stroke="rgba(81,164,255,0.24)" strokeWidth="6" strokeLinecap="round" />
              <path d="M102 192L76 216" stroke="rgba(248,230,176,0.22)" strokeWidth="6" strokeLinecap="round" />
              <circle cx="194" cy="76" r="14" fill="rgba(248,230,176,0.1)" />
              <circle cx="74" cy="74" r="10" fill="rgba(81,164,255,0.14)" />
              <path d="M255 52C229 44 211 60 194 80" stroke="rgba(248,230,176,0.14)" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
              <path d="M140 252C156 264 188 260 204 244" stroke="rgba(248,230,176,0.12)" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
              <text x="150" y="60" textAnchor="middle" fontSize="54" fontWeight="800" fill="url(#accentGrad)" fontFamily="Inter, sans-serif">404</text>
            </svg>
          </div>
        </div>
        <div className="notfound-actions">
          <button type="button" className="lang-btn notfound-action-btn" onClick={goToHome}>
            {t.notFound.home}
          </button>
          <button type="button" className="lang-btn notfound-action-btn" onClick={goToProjects}>
            {t.notFound.projects}
          </button>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
