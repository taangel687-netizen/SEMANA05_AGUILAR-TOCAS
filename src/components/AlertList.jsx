const DOT = { critical: '#ef4444', warning: '#f59e0b', info: '#0ea5e9' }

/**
 * Lista de alertas.
 * @param {Object} props
 * @param {Array<{id:number,level:'critical'|'warning'|'info',text:string,time:string}>} props.alerts
 */
function AlertList({ alerts }) {
  return (
    <ul className="flex flex-col gap-3">
      {alerts.map((a) => (
        <li key={a.id} className="flex gap-3">
          <span
            style={{ background: DOT[a.level], width: 10, height: 10, borderRadius: '50%', marginTop: 6, flexShrink: 0 }}
          />
          <div>
            <p className="text-sm text-slate-800">{a.text}</p>
            <p className="text-xs text-slate-400">{a.time}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default AlertList
