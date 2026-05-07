import Link from 'next/link'
import { Code2, Rocket, Briefcase } from 'lucide-react'

export default function ServiceCard({ title, description, subservices, icon, link, pricing }) {
  
  const getIcon = () => {
    switch(icon) {
      case 'code': return <Code2 size={32} />
      case 'rocket': return <Rocket size={32} />
      case 'briefcase': return <Briefcase size={32} />
      default: return <Code2 size={32} />
    }
  }

  return (
    <div className="service-card">
      <div className="service-icon-wrapper">
        {getIcon()}
      </div>
      <h3>{title}</h3>
      <p className="service-desc">{description}</p>
      
      {subservices && (
        <ul className="service-list">
          {subservices.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      
      {pricing && <p className="service-pricing">{pricing}</p>}
      
      <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
        <Link href={link} className="btn btn-outline" style={{ width: '100%' }}>
          Learn More
        </Link>
      </div>
    </div>
  )
}
