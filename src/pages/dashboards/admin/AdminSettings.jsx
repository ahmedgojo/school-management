import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Settings as SettingsIcon, Bell, Shield, PaintBucket, Database, Layout } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Platform Settings</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 3fr', gap: '2rem' }}>
        {/* Settings Navigation Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
                { icon: <Layout size={18}/>, label: 'General Information', active: true },
                { icon: <PaintBucket size={18}/>, label: 'Branding & Theme', active: false },
                { icon: <Bell size={18}/>, label: 'Notifications', active: false },
                { icon: <Shield size={18}/>, label: 'Security & Roles', active: false },
                { icon: <Database size={18}/>, label: 'Data Management', active: false },
            ].map((item, idx) => (
                <button key={idx} style={{ 
                    display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', 
                    borderRadius: 'var(--radius-md)', border: 'none', cursor: 'pointer', textAlign: 'left',
                    background: item.active ? 'var(--color-primary-light)' : 'transparent',
                    color: item.active ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    fontWeight: item.active ? '600' : '500'
                }}>
                    {item.icon} {item.label}
                </button>
            ))}
        </div>

        {/* Settings Content Area */}
        <Card style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>General Information</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Update your institution's profile and contact details.</p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Institution Name</label>
                  <input type="text" defaultValue="EduSaaS Global High School" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Registration Number</label>
                  <input type="text" defaultValue="REG-2026-9938" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }} />
                </div>
            </div>

            <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>About Institution</label>
                <textarea rows="4" defaultValue="A leading institution dedicated to fostering innovation, critical thinking, and academic excellence in an interconnected world." style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', resize: 'vertical' }}></textarea>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Contact Email</label>
                  <input type="email" defaultValue="admin@edusaas.com" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Phone Number</label>
                  <input type="text" defaultValue="+1 (555) 123-4567" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }} />
                </div>
            </div>

            <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Address</label>
                <input type="text" defaultValue="742 Evergreen Terrace, Springfield, EduState 45890" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                <Button variant="outline">Cancel</Button>
                <Button variant="primary">Save Changes</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
