/**
 * Área principal de contenido (deja espacio a la barra lateral en pantallas grandes).
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
function Layout({ children }) {
  return <div className="min-h-screen lg:pl-60">{children}</div>
}

export default Layout
