import Link from 'next/link'
import { Mountain, Rocket, TrendingUp, Compass, Radar, Bot, Route } from 'lucide-react'

export default function ServiceCard({ title, description, subservices, icon, link, pricing, badge }) {
  
  const getIcon = () => {
    switch(icon) {
      case 'mountain': return <Mountain size={21} />
      case 'rocket': return <Rocket size={21} />
      case 'trending-up': return <TrendingUp size={21} />
      case 'radar': return <Radar size={21} />
      case 'bot': return <Bot size={21} />
      case 'route': return <Route size={21} />
      case 'compass': return <Compass size={21} />
      default: return <Mountain size={21} />
    }
  }

  return (
    <div className="card">
      <div className="ci">
        {getIcon()}
      </div>
      <div className="ct" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {title}
        {badge && <span className="badge" style={{ background: '#E9F4FE', color: '#1E97DB' }}>{badge}</span>}
      </div>
      <p className="cd">{description}</p>
      
      {subservices && (
        <ul className="muted" style={{ margin: 0, paddingLeft: '18px', fontSize: '14px', lineHeight: '1.7', marginBottom: 'var(--s-6)', flexGrow: 1 }}>
          {subservices.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      
      {pricing && <p className="text-mono" style={{ fontSize: '13px', color: 'var(--fg2)', marginBottom: 'var(--s-4)', marginTop: subservices ? '0' : 'auto' }}>{pricing}</p>}
      
      <div>
        <Link href={link} className="btn btn-ghost btn-sm" style={{ width: '100%', borderColor: 'var(--border-strong)' }}>
          See the route
        </Link>
      </div>
    </div>
  )
}
