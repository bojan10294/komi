import { useEffect, useState } from 'react'
import { WEDDING } from '../../content'
import styles from './Countdown.module.css'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft | null {
  const target = new Date(WEDDING.weddingDateISO).getTime()
  const now = Date.now()
  const diff = target - now

  if (diff <= 0) return null

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-16 px-6 md:py-24" style={{ backgroundColor: 'var(--color-text)' }}>
      <div className="mx-auto max-w-2xl text-center">

        <p
          className="text-xs font-light uppercase tracking-[0.3em]"
          style={{ color: 'var(--color-primary)' }}
        >
          Odbrojavanje
        </p>

        {timeLeft === null ? (
          <p
            className="mt-8 text-3xl font-light italic md:text-4xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bg)' }}
          >
            Venčanje je počelo!
          </p>
        ) : (
          <div className="mt-10 flex justify-center gap-2 md:gap-8">
            {[
              { value: timeLeft.days, label: 'dana' },
              { value: timeLeft.hours, label: 'sati' },
              { value: timeLeft.minutes, label: 'minuta' },
              { value: timeLeft.seconds, label: 'sekundi' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.unit}>
                <span
                  className="text-5xl font-light tabular-nums md:text-7xl"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-bg)' }}
                >
                  {String(value).padStart(2, '0')}
                </span>
                <span
                  className="mt-2 text-xs uppercase tracking-widest"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
