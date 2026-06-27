import styles from './FixedRsvpButton.module.css'

export default function FixedRsvpButton() {
  const scrollToRsvp = () => {
    const element = document.getElementById('rsvp')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button className={styles.button} onClick={scrollToRsvp}>
      Potvrdite dolazak
    </button>
  )
}
