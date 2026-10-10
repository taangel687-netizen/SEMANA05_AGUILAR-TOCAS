/**
 * Contenedor/layout del dashboard (Tailwind). Compone con children.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
function Dashboard({ children }) {
  return <div className="flex flex-col gap-6">{children}</div>
}

export default Dashboard
