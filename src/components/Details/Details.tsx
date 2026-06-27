import { WEDDING } from '../../content'
import styles from './Details.module.css'

export default function Details() {
  return (
    <section className="py-16 px-6 md:py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="mx-auto max-w-xl text-center">

        <div className={styles.ornament}>
          <div className={styles.ornamentLine} />
          <div className={styles.ornamentDiamond} />
          <div className={styles.ornamentLine} />
        </div>

        <p
          className="mt-6 text-xs font-light uppercase tracking-[0.3em]"
          style={{ color: 'var(--color-primary)' }}
        >
          Mesto i vreme
        </p>

        <h2
          className="mt-4 text-4xl font-light italic md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
        >
          {WEDDING.venueName}
        </h2>

        <div className={`${styles.card} mt-10 rounded-sm`}>

          <div className={`${styles.detailItem} flex flex-col items-center gap-1 py-6`}>
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: 'var(--color-muted)' }}
            >
              Datum
            </span>
            <span
              className="text-xl font-light"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
            >
              {WEDDING.date}
            </span>
          </div>

          <div className={`${styles.detailItem} flex flex-col items-center gap-1 py-6`}>
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: 'var(--color-muted)' }}
            >
              Dolazak gostiju
            </span>
            <span
              className="text-xl font-light"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
            >
              {WEDDING.arrivalTime}
            </span>
          </div>

          <div className={`${styles.detailItem} flex flex-col items-center gap-1 py-6`}>
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: 'var(--color-muted)' }}
            >
              Venčanje
            </span>
            <span
              className="text-xl font-light"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
            >
              {WEDDING.ceremonyTime}
            </span>
          </div>

          <div className={`${styles.detailItem} flex flex-col items-center gap-1 py-6`}>
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: 'var(--color-muted)' }}
            >
              Dress code
            </span>
            <span
              className="text-xl font-light"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
            >
              {WEDDING.dressCode}
            </span>
          </div>

          <div className={`${styles.detailItem} flex flex-col items-center gap-1 py-6`}>
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: 'var(--color-muted)' }}
            >
              Misija
            </span>
            <span
              className="text-xl font-light"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
            >
              {WEDDING.tagline}
            </span>
          </div>
          <div className={`${styles.detailItem} flex flex-col items-center gap-1 py-6`}>
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: 'var(--color-muted)' }}
            >
              Prijava dolaska do
            </span>
            <span
              className="text-xl font-light"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
            >
              {WEDDING.rsvpDeadline}
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}
