import StatusBadge from '@/components/StatusBadge'
import styles from '@/styles/ZoneTable.module.css'

/**
 * Tabla de ONUs registradas recientemente.
 * @param {Object} props
 * @param {Array<{serial:string,client:string,plan:string,zone:string,power:string,status:string}>} props.rows
 */
function OnuTable({ rows }) {
  return (
    <div className={styles.wrap}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Serial ONU</th>
            <th>Cliente</th>
            <th>Plan</th>
            <th>Zona</th>
            <th>Potencia Rx</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.serial}>
              <td className="font-mono text-xs">{r.serial}</td>
              <td>{r.client}</td>
              <td>{r.plan}</td>
              <td>{r.zone}</td>
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

export default OnuTable
