const rawMetrics = [
  { title: 'ONUs activas', value: '1,248', change: '+3.2%', trend: 'up', icon: '📶' },
  { title: 'Tráfico total', value: '8.4 Gbps', change: '+7.9%', trend: 'up', icon: '🌐' },
  { title: 'Incidencias', value: '17', change: '-12.0%', trend: 'up', icon: '🛠️' },
  { title: 'Disponibilidad', value: '99.82%', change: '-0.1%', trend: 'down', icon: '✅' },
]

export const traffic = [
  { label: 'Lun', value: 6.2 },
  { label: 'Mar', value: 6.8 },
  { label: 'Mié', value: 7.1 },
  { label: 'Jue', value: 7.4 },
  { label: 'Vie', value: 8.4 },
  { label: 'Sáb', value: 7.9 },
  { label: 'Dom', value: 5.9 },
]

export const zones = [
  { zone: 'Huancayo Centro', olt: 'OLT-01', onus: 412, status: 'online', power: '-19.8 dBm' },
  { zone: 'El Tambo', olt: 'OLT-02', onus: 356, status: 'online', power: '-21.2 dBm' },
  { zone: 'Chilca', olt: 'OLT-03', onus: 287, status: 'warning', power: '-25.6 dBm' },
  { zone: 'Sapallanga', olt: 'OLT-04', onus: 193, status: 'offline', power: '—' },
]

export const alerts = [
  { id: 1, level: 'critical', text: 'OLT-04 sin respuesta (Sapallanga)', time: 'Hace 6 min' },
  { id: 2, level: 'warning', text: 'Potencia óptica baja en 14 ONUs de Chilca', time: 'Hace 32 min' },
  { id: 3, level: 'info', text: 'Mantenimiento programado OLT-02 a las 02:00', time: 'Hace 2 h' },
]

// Las props son inmutables: congelamos los datos que viajan hacia los hijos
export const metrics = Object.freeze(rawMetrics.map((m) => Object.freeze(m)))

export const plans = [
  { name: 'Residencial 200M', value: 812, color: '#0ea5e9' },
  { name: 'Residencial 500M', value: 301, color: '#6366f1' },
  { name: 'Empresarial 200M', value: 96, color: '#10b981' },
  { name: 'Empresarial 500M', value: 39, color: '#f59e0b' },
]

export const onus = [
  { serial: 'ZTEGC0A1F3B2', client: 'Ferretería Los Andes', plan: 'Empresarial 500M', zone: 'Huancayo Centro', power: '-19.4 dBm', status: 'online' },
  { serial: 'ZTEGC0A1F7D9', client: 'María Quispe Rojas', plan: 'Residencial 200M', zone: 'El Tambo', power: '-21.0 dBm', status: 'online' },
  { serial: 'ZTEGC0A2B114', client: 'Carlos Huamán León', plan: 'Residencial 500M', zone: 'Chilca', power: '-25.8 dBm', status: 'warning' },
  { serial: 'ZTEGC0A2C890', client: 'Clínica Santa Rosa', plan: 'Empresarial 200M', zone: 'Huancayo Centro', power: '-20.2 dBm', status: 'online' },
  { serial: 'ZTEGC0A3E455', client: 'Lucía Paucar Meza', plan: 'Residencial 200M', zone: 'Sapallanga', power: '—', status: 'offline' },
  { serial: 'ZTEGC0A3F021', client: 'Colegio San Martín', plan: 'Empresarial 500M', zone: 'El Tambo', power: '-22.1 dBm', status: 'online' },
]
