import styles from '@/styles/Topbar.module.css'

const today = new Date().toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

/**
 * Barra superior.
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 */
function Topbar({ title, subtitle }) {
  return (
    <header className={styles.bar}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.right}>
        <span className={styles.date}>{today}</span>
        <span className={styles.live}>● En vivo</span>
      </div>
    </header>
  )
}

export default Topbar
