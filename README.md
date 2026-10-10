# FiberNet – Panel de Red (React + Vite)

SPA de la Guía Práctica Semana 05 (IS093A): componentes, props & children, estrategias de estilado y CSR.

## Ejecutar
```bash
npm install
npm run dev     # http://localhost:5173
```

## Estructura
- `src/App.jsx`: orquestador (compone Sidebar, Topbar, secciones y paneles)
- `src/components/`: Header, Dashboard (Tailwind), MetricCard (CSS Modules + inline)
- `src/styles/`: estilos globales y `MetricCard.module.css`
- `index.html`: meta viewport y SEO (no van en JSX)
