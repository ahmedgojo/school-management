import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Upload, User, Shield, Bell } from 'lucide-react';

export default function ParentProfile() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>My Profile</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--color-secondary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', position: 'relative' }}>
              JD
              <button style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Upload size={14}/>
              </button>
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>John Doe</h3>
            <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.875rem' }}>Parent / Guardian</p>
            <p style={{ color: 'var(--color-text-muted)', margin: '0.5rem 0 0', fontSize: '0.8rem' }}>2 Children Enrolled</p>
          </Card>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[{ icon: <User size={18}/>, label: 'Personal Info', active: true }, { icon: <Shield size={18}/>, label: 'Security', active: false }, { icon: <Bell size={18}/>, label: 'Preferences', active: false }].map((item, i) => (
              <button key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.875rem 1rem', background: item.active ? 'var(--color-bg)' : 'transparent', border: item.active ? '1px solid var(--color-border)' : '1px solid transparent', borderRadius: 'var(--radius-md)', cursor: 'pointer', color: item.active ? 'var(--color-text-main)' : 'var(--color-text-muted)', fontWeight: item.active ? '600' : '500' }}>
                {item.icon} {item.label}
              </button>
            ))}
          </div>
        </div>

        <Card>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>Personal Information</h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>First Name</label>
                <input type="text" defaultValue="John" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Last Name</label>
                <input type="text" defaultValue="Doe" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Email</label>
                <input type="email" defaultValue="demo@parent.com" readOnly style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg)', color: 'var(--color-text-muted)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Phone</label>
                <input type="tel" defaultValue="+1 (555) 000-1234" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Home Address</label>
              <input type="text" defaultValue="123 Education Lane, Apt 4B, Academiacity, AC 12345" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <Button variant="outline">Discard</Button>
              <Button variant="primary">Save Changes</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
