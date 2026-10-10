/**
 * Tarjeta contenedora reutilizable con título; el contenido llega por children.
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
function Panel({ title, className = '', children }) {
  return (
    <section className={`rounded-xl bg-white p-5 shadow-sm ${className}`}>
      <h2 className="mb-4 text-lg font-semibold text-slate-800">{title}</h2>
      {children}
    </section>
  )
}

export default Panel
