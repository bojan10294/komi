import { MAP_EMBED_URL } from '../../content'
import styles from './Map.module.css'

export default function Map() {
  return (
    <section className="py-16 px-6 md:py-24" style={{ backgroundColor: 'var(--color-border)' }}>
      <div className="mx-auto max-w-4xl text-center">

        <p
          className="font-light uppercase tracking-[0.3em]"
          style={{ color: 'var(--color-primary)' }}
        >
          Lokacija
        </p>

        <h2
          className="mt-4 text-4xl font-light italic md:text-5xl"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
        >
          Kako do nas
        </h2>

        <div
          className="mx-auto mt-6 h-px w-16"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />

        {/* Paste your Google Maps embed URL into MAP_EMBED_URL in src/content.ts */}
        {MAP_EMBED_URL ? (
          <div className={styles.iframeWrapper}>
            <iframe
              src={MAP_EMBED_URL}
              className={styles.iframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacija venčanja"
            />
          </div>
        ) : (
          <p
            className="mt-10 text-lg font-light"
            style={{ color: 'var(--color-muted)' }}
          >
            Mapa dolazi uskoro
          </p>
        )}

      </div>
    </section>
  )
}
