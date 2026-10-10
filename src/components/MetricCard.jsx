import styles from '@/styles/MetricCard.module.css'

/**
 * Tarjeta de métrica: CSS Modules para estructura, inline para el color dinámico.
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.value
 * @param {string} props.change
 * @param {'up'|'down'} props.trend - 'up' = favorable, 'down' = desfavorable
 * @param {string} [props.icon]
 */
function MetricCard({ title, value, change, trend, icon }) {
  const color = trend === 'up' ? '#10b981' : '#ef4444'

  return (
    <article className={styles.card} style={{ borderTopColor: color }}>
      <div className={styles.top}>
        <span className={styles.title}>{title}</span>
        <span className={styles.icon}>{icon}</span>
      </div>
      <strong className={styles.value}>{value}</strong>
      <span style={{ color, fontSize: '0.85rem' }}>
        {trend === 'up' ? '↑' : '↓'} {change} vs mes anterior
      </span>
    </article>
  )
}

export default MetricCard
