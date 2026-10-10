import StatusBadge from '@/components/StatusBadge'
import styles from '@/styles/ZoneTable.module.css'

/**
 * Tabla de zonas / OLT.
 * @param {Object} props
 * @param {Array<{zone:string,olt:string,onus:number,status:string,power:string}>} props.rows
 */
function ZoneTable({ rows }) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Zona</th>
            <th>OLT</th>
            <th>ONUs</th>
            <th>Potencia Rx</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.olt}>
              <td>{r.zone}</td>
              <td>{r.olt}</td>
              <td>{r.onus}</td>
              <td>{r.power}</td>
              <td>
                <StatusBadge status={r.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ZoneTable
