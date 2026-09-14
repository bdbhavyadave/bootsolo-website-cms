'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { BootsoloLogo } from '@/components/Brand'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Login failed')
      }

      router.push('/admin')
      router.refresh()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f5f5f5' }}>
      <div style={{ background: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <BootsoloLogo height={34} color="#0E1A2B" planeColor="#FF6B35" />
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0E1A2B' }}>Agency CMS</h1>
          <p style={{ color: '#666', marginTop: '0.25rem' }}>Secure Admin Dashboard Access</p>
        </div>

        {error && (
          <div style={{ background: '#fee2e2', color: '#dc2626', padding: '0.75rem', borderRadius: '6px', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }}
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '0.75rem', paddingRight: '2.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                placeholder="••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              background: '#1a1a1a',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '6px',
              border: 'none',
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '0.5rem'
            }}
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/" style={{ color: '#666', fontSize: '0.9rem', textDecoration: 'none' }}>
            &larr; Back to Website
          </Link>
        </div>
      </div>
    </div>
  )
}
