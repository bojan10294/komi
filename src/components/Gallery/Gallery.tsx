import styles from './Gallery.module.css'

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.strip}>
        <div className={styles.imageWrapper}>
          <img
            src="/mirko-ksenija-2.jpeg"
            alt="Mirko i Ksenija"
            className={styles.image}
          />
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="/more.jpeg"
            alt="Mirko i Ksenija"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}
