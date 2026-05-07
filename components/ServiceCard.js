import Link from 'next/link'

export default function ServiceCard({ title, description, icon, link }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link} className="learn-more">
        Learn More →
      </Link>
    </div>
  )
}
