import Sidebar from '@/components/Sidebar'
import Layout from '@/components/Layout'
import Topbar from '@/components/Topbar'
import Section from '@/components/Section'
import MetricCard from '@/components/MetricCard'
import Panel from '@/components/Panel'
import BarChart from '@/components/BarChart'
import AlertList from '@/components/AlertList'
import PlanDonut from '@/components/PlanDonut'
import ZoneTable from '@/components/ZoneTable'
import OnuTable from '@/components/OnuTable'
import { metrics, traffic, zones, alerts, plans, onus } from '@/data/network'

const links = [
  { href: '#resumen', label: 'Resumen', icon: '📊' },
  { href: '#trafico', label: 'Tráfico y alertas', icon: '🌐' },
  { href: '#zonas', label: 'Zonas y OLT', icon: '🗺️' },
  { href: '#onus', label: 'ONUs recientes', icon: '📶' },
]

/** Orquestador: solo compone componentes hijos y les pasa datos. */
function App() {
  return (
    <>
      <Sidebar brand="FiberNet" links={links} />
      <Layout>
        <Topbar title="Centro de operaciones de red" subtitle="Red FTTH · Huancayo y alrededores" />
        <div className="mx-auto flex max-w-6xl flex-col gap-8 p-6">
          <Section id="resumen" title="Resumen">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((m) => (
                <MetricCard key={m.title} {...m} />
              ))}
            </div>
          </Section>

          <Section id="trafico" title="Tráfico y alertas">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <Panel title="Tráfico semanal (Gbps)" className="lg:col-span-2">
                <BarChart data={traffic} />
              </Panel>
              <Panel title="Alertas recientes">
                <AlertList alerts={alerts} />
              </Panel>
            </div>
          </Section>

          <Section id="zonas" title="Zonas y OLT">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <Panel title="Estado por zona" className="lg:col-span-2">
                <ZoneTable rows={zones} />
              </Panel>
              <Panel title="Clientes por plan">
                <PlanDonut data={plans} />
              </Panel>
            </div>
          </Section>

          <Section id="onus" title="ONUs recientes">
            <Panel title="Últimos registros en OLT">
              <OnuTable rows={onus} />
            </Panel>
          </Section>

          <footer className="pb-4 text-center text-xs text-slate-400">FiberNet · Desarrollo de Aplicaciones Web (IS093A) · Semana 05</footer>
        </div>
      </Layout>
    </>
  )
}

export default App
