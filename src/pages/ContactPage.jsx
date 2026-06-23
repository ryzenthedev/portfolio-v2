// ryzenthedev & swarthy
function ContactPage({
  contactName,
  contactEmail,
  contactMessage,
  setContactName,
  setContactEmail,
  setContactMessage,
  handleContactSubmit,
  t,
}) {
  return (
    <main className="contact-page">
      <section className="section projects-page-hero">
        <h1>{t.contact.title}</h1>
        <p>{t.contact.heroDescription}</p>
      </section>

      <section className="section contact-details">
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <div className="form-row">
            <label htmlFor="contact-name">{t.contact.formLabels.name}</label>
            <input
              id="contact-name"
              className="contact-form-input"
              type="text"
              value={contactName}
              onChange={(event) => setContactName(event.target.value)}
              placeholder={t.contact.placeholders.name}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="contact-email">{t.contact.formLabels.email}</label>
            <input
              id="contact-email"
              className="contact-form-input"
              type="email"
              value={contactEmail}
              onChange={(event) => setContactEmail(event.target.value)}
              placeholder={t.contact.placeholders.email}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="contact-message">{t.contact.formLabels.message}</label>
            <textarea
              id="contact-message"
              className="contact-form-textarea"
              value={contactMessage}
              onChange={(event) => setContactMessage(event.target.value)}
              placeholder={t.contact.placeholders.message}
              rows={6}
              required
            />
          </div>

          <button type="submit" className="contact-form-submit">
            {t.contact.submit}
          </button>
        </form>
      </section>
    </main>
  )
}

export default ContactPage
