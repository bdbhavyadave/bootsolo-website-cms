'use client'

export default function Settings() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 700 }}>Settings</h1>
        <p style={{ color: '#666', marginTop: '0.25rem' }}>Manage your account and team preferences.</p>
      </div>

      <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
        {/* Profile Settings */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Profile Settings</h3>
          <div style={{ display: 'flex', gap: '1.5rem', flexDirection: 'column' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>First Name</label>
                <input type="text" defaultValue="Bhavya" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Last Name</label>
                <input type="text" defaultValue="Dave" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Email Address</label>
              <input type="email" defaultValue="admin@example.com" style={{ width: '100%', padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} />
            </div>
            <button style={{ background: 'var(--accent)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '6px', border: 'none', fontWeight: 600, cursor: 'pointer', width: 'fit-content' }}>
              Update Profile
            </button>
          </div>
        </div>

        {/* API Keys */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>API Integration Keys</h3>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Manage API keys for AI generation and Analytics.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>OpenAI API Key (For AI Writer)</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input type="password" placeholder="sk-..." style={{ flex: 1, padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px' }} />
                <button style={{ background: '#f1f5f9', color: '#475569', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #ddd', fontWeight: 600, cursor: 'pointer' }}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
