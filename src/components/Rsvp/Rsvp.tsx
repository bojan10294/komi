import { RSVP_FORM_URL } from '../../content'
import styles from './Rsvp.module.css'

export default function Rsvp() {
  return (
    <section id="rsvp" className="py-16 px-6 md:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="mx-auto max-w-2xl text-center">

        <p
          className="font-light uppercase tracking-[0.3em]"
          style={{ color: 'var(--color-primary)' }}
        >
          Molimo Vas da popunite
        </p>

        <h2
          className="mt-4 text-4xl font-light italic md:text-5xl"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
        >
          Potvrda dolaska
        </h2>

        <div
          className="mx-auto mt-6 h-px w-16"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />

        {/* Paste your Google Form embed URL into RSVP_FORM_URL in src/content.ts */}
        {RSVP_FORM_URL ? (
          <div className={styles.iframeWrapper}>
            <iframe
              src={RSVP_FORM_URL}
              className={styles.iframe}
              width="500"
              height="1144"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="RSVP forma"
            >
              Loading…
            </iframe>
          </div>
        ) : (
          <p
            className="mt-10 text-lg font-light"
            style={{ color: 'var(--color-muted)' }}
          >
            Forma dolazi uskoro
          </p>
        )}

      </div>
    </section>
  )
}
