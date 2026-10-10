const COLORS = {
  online: { bg: '#d1fae5', fg: '#047857', text: 'Operativa' },
  warning: { bg: '#fef3c7', fg: '#b45309', text: 'Degradada' },
  offline: { bg: '#fee2e2', fg: '#b91c1c', text: 'Caída' },
}

/**
 * Etiqueta de estado con colores dinámicos (inline).
 * @param {Object} props
 * @param {'online'|'warning'|'offline'} props.status
 */
function StatusBadge({ status }) {
  const c = COLORS[status]
  return (
    <span
      style={{
        background: c.bg,
        color: c.fg,
        padding: '0.15rem 0.6rem',
        borderRadius: '999px',
        fontSize: '0.75rem',
        fontWeight: 600,
      }}
    >
      {c.text}
    </span>
  )
}

export default StatusBadge
