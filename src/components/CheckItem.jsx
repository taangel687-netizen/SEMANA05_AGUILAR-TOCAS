/**
 * Fila de validación.
 * @param {Object} props
 * @param {boolean} props.ok
 * @param {string} props.title
 * @param {string} props.detail
 */
function CheckItem({ ok, title, detail }) {
  return (
    <li
      className="flex gap-3 rounded-lg p-3"
      style={{ background: ok ? '#ecfdf5' : '#fef2f2', borderLeft: `4px solid ${ok ? '#10b981' : '#ef4444'}` }}
    >
      <span>{ok ? '✅' : '❌'}</span>
      <div>
        <p className="font-semibold text-slate-800">{title}</p>
        <p className="break-all text-sm text-slate-500">{detail}</p>
      </div>
    </li>
  )
}

export default CheckItem
