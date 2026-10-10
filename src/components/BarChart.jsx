import styles from '@/styles/BarChart.module.css'

/**
 * Gráfico de barras con CSS puro. La altura es un valor dinámico (inline).
 * @param {Object} props
 * @param {Array<{label:string,value:number}>} props.data
 */
function BarChart({ data }) {
  const max = Math.max(...data.map((d) => d.value))

  return (
    <div className={styles.chart}>
      {data.map((d) => (
        <div key={d.label} className={styles.col}>
          <span className={styles.value}>{d.value}</span>
          <div className={styles.bar} style={{ height: `${(d.value / max) * 100}%` }} />
          <span className={styles.label}>{d.label}</span>
        </div>
      ))}
    </div>
  )
}

export default BarChart
