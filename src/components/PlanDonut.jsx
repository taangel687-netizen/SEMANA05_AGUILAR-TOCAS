import styles from '@/styles/PlanDonut.module.css'

/**
 * Distribución de clientes por plan (donut con conic-gradient).
 * @param {Object} props
 * @param {Array<{name:string,value:number,color:string}>} props.data
 */
function PlanDonut({ data }) {
  const total = data.reduce((acc, d) => acc + d.value, 0)
  const stops = data
    .map((d, i) => {
      const before = data.slice(0, i).reduce((sum, x) => sum + x.value, 0)
      return `${d.color} ${(before / total) * 100}% ${((before + d.value) / total) * 100}%`
    })
    .join(', ')

  return (
    <div className={styles.wrap}>
      <div className={styles.donut} style={{ background: `conic-gradient(${stops})` }}>
        <div className={styles.hole}>
          <strong>{total.toLocaleString('es-PE')}</strong>
          <span>clientes</span>
        </div>
      </div>
      <ul className={styles.legend}>
        {data.map((d) => (
          <li key={d.name}>
            <span className={styles.dot} style={{ background: d.color }} />
            {d.name} <b>{d.value}</b>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlanDonut
