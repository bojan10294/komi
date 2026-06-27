import { WEDDING } from '../../content'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section
      className={`relative flex min-h-screen items-center justify-center ${styles.hero}`}
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center max-md:pb-44">
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
          className="font-light tracking-wide md:text-xl md:tracking-[0.2em]"
          style={{ color: 'rgba(255, 253, 247, 0.8)' }}
        >
          {WEDDING.arrivalTime} dolazak · {WEDDING.ceremonyTime} venčanje · {WEDDING.venueName}
        </p>

        <p
          className="mt-6 max-w-md text-2xl font-normal leading-normal md:text-3xl"
          style={{ color: 'rgba(255, 253, 247, 0.75)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
        >
          {WEDDING.invitationText}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-40 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span 
          className="tracking-widest uppercase opacity-70"
          style={{ color: '#fffdf7', fontFamily: 'var(--font-display)' }}
        >
          Skrolujte
        </span>
        <svg 
          className="w-6 h-6 opacity-70" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          viewBox="0 0 24 24" 
          style={{ color: 'var(--color-primary)' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  )
}