import { useState } from 'react'
import styles from '@/styles/Tabs.module.css'

/**
 * Navegación por pestañas. El estado de la pestaña activa vive aquí
 * (los componentes de datos siguen sin estado).
 * @param {Object} props
 * @param {Array<{id:string,label:string,icon:string,content:React.ReactNode}>} props.tabs
 */
function Tabs({ tabs }) {
  const [active, setActive] = useState(tabs[0].id)
  const current = tabs.find((t) => t.id === active)

  return (
    <>
      <nav className={styles.nav}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`${styles.tab} ${t.id === active ? styles.active : ''}`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </nav>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 p-6">{current.content}</div>
    </>
  )
}

export default Tabs
