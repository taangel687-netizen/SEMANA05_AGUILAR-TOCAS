/**
 * Sección anclada del dashboard.
 * @param {Object} props
 * @param {string} props.id - Ancla de navegación
 * @param {string} props.title
 * @param {React.ReactNode} props.children
 */
function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">{title}</h2>
      {children}
    </section>
  )
}

export default Section
