import { WEDDING } from '../../content'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section
      className={`relative flex min-h-screen items-center justify-center ${styles.hero}`}
    >
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <p
          className="text-lg font-light uppercase tracking-[0.3em]"
          style={{ color: 'var(--color-primary)' }}
        >
          Venčanje
        </p>

        <h1
          className="text-4xl font-light italic leading-none sm:text-6xl md:text-8xl"
          style={{ fontFamily: 'var(--font-display)', color: '#fffdf7' }}
        >
          {WEDDING.groomName}
          <span
            className="mx-2 font-thin sm:mx-4"
            style={{ color: 'var(--color-primary)' }}
          >
            &
          </span>
          {WEDDING.brideName}
        </h1>

        <div className="flex items-center gap-4">
          <div className={styles.divider} />
          <div className={styles.dividerDiamond} />
          <div className={styles.divider} />
        </div>

        <p
          className="text-xl font-light tracking-widest md:text-2xl"
          style={{ fontFamily: 'var(--font-display)', color: '#fffdf7' }}
        >
          {WEDDING.date}
        </p>

        <p
          className="text-xs font-light tracking-wide md:text-base md:tracking-[0.2em]"
          style={{ color: 'rgba(255, 253, 247, 0.8)' }}
        >
          {WEDDING.arrivalTime} dolazak · {WEDDING.ceremonyTime} venčanje · {WEDDING.venueName}
        </p>

        <p
          className="mt-2 max-w-md text-lg font-light leading-relaxed md:text-base"
          style={{ color: 'rgba(255, 253, 247, 0.75)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
        >
          {WEDDING.invitationText}
        </p>
      </div>
    </section>
  )
}
