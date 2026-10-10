import styles from '@/styles/Sidebar.module.css'

/**
 * Barra lateral de navegación (anclas a las secciones).
 * @param {Object} props
 * @param {string} props.brand
 * @param {Array<{href:string,label:string,icon:string}>} props.links
 */
function Sidebar({ brand, links }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>📡 {brand}</div>
      <nav className={styles.nav}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className={styles.link}>
            <span>{l.icon}</span> {l.label}
          </a>
        ))}
      </nav>
      <div className={styles.footer}>Red FTTH · GPON</div>
    </aside>
  )
}

export default Sidebar
