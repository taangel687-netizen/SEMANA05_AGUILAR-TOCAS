import styles from '@/styles/Header.module.css'

/**
 * Cabecera con navegación.
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 */
function Header({ title, subtitle }) {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>📡 {title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <span className={styles.live}>● En vivo</span>
    </header>
  )
}

export default Header
