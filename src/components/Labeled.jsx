import styles from '@/styles/Labeled.module.css'

/**
 * Señala un componente real con un borde y su etiqueta; al pasar el mouse
 * muestra las props que recibe.
 * @param {Object} props
 * @param {string} props.label - Texto de la etiqueta
 * @param {string} props.color - Color del borde
 * @param {Object} [props.data] - Props que recibe el componente
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
function Labeled({ label, color, data, className = '', children }) {
  return (
    <div className={`${styles.box} ${className}`} style={{ '--c': color }}>
      <span className={styles.label}>{label}</span>
      {data && (
        <div className={styles.tip}>
          {Object.entries(data).map(([k, v]) => (
            <div key={k}>
              <span style={{ color: '#7dd3fc' }}>{k}</span>: {Array.isArray(v) ? `Array(${v.length})` : String(v)}
            </div>
          ))}
        </div>
      )}
      {children}
    </div>
  )
}

export default Labeled
