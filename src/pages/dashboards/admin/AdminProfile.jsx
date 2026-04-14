import React, { useState, useRef } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { User, Shield, Key, Bell, Upload, Camera, Save, RotateCcw } from 'lucide-react';
import { useToast } from '../../../components/ui/Toast';

const initialData = {
  firstName: 'Principal',
  lastName: 'Director',
  email: 'superadmin@edusaas.com',
  phone: '+1 (555) 999-0000',
  assignment: 'Main Administration Building',
  role: 'System Administrator',
  avatar: null
};

export default function AdminProfile() {
  const { success, warning } = useToast();
  const [formData, setFormData] = useState(initialData);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setFormData(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setTimeout(() => {
      success("Profile settings updated successfully.");
    }, 500);
  };

  const handleDiscard = () => {
    setFormData(initialData);
    setPreviewUrl(null);
    warning("Unsaved changes discarded.");
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Administrator Account Settings</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 3fr', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2.5rem 1.5rem' }}>
                <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                    <div style={{ width: '130px', height: '130px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', fontWeight: '800', overflow: 'hidden', border: '5px solid var(--color-surface)', boxShadow: 'var(--shadow-lg)' }}>
                        {previewUrl ? (
                            <img src={previewUrl} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                            'AD'
                        )}
                    </div>
                    <button 
                      onClick={() => fileInputRef.current.click()}
                      style={{ position: 'absolute', bottom: '8px', right: '8px', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-md)', transition: 'transform 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <Camera size={20} />
                    </button>
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} hidden accept="image/*" />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', fontWeight: '800', color: 'var(--color-text-main)' }}>{formData.firstName} {formData.lastName}</h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>{formData.email}</span>
                <div style={{ marginTop: '1.5rem', width: '100%' }}>
                    <span style={{ display: 'inline-block', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--color-primary)', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: '800', border: '1px solid rgba(79, 70, 229, 0.2)' }}>{formData.role}</span>
                </div>
            </Card>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { id: 'personal', icon: <User size={18}/>, label: 'Profile Settings', active: true },
                  { id: 'security', icon: <Key size={18}/>, label: 'Security & Auth', active: false },
                  { id: 'notifications', icon: <Bell size={18}/>, label: 'Alert Preferences', active: false }
                ].map((item) => (
                    <button 
                      key={item.id}
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', 
                        background: item.active ? 'var(--color-bg)' : 'transparent', 
                        border: item.active ? '1px solid var(--color-border)' : '1px solid transparent', 
                        borderRadius: 'var(--radius-lg)', textAlign: 'left', fontWeight: '700', cursor: 'pointer', 
                        color: item.active ? 'var(--color-primary)' : 'var(--color-text-muted)',
                        transition: 'all 0.2s'
                      }}
                    >
                        {item.icon} {item.label}
                    </button>
                ))}
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Card style={{ padding: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)', fontWeight: '800', color: 'var(--color-text-main)' }}>Institutional Profile</h2>
                
                <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <label className="form-label">First Name</label>
                            <input name="firstName" type="text" value={formData.firstName} onChange={handleChange} className="form-input" required />
                        </div>
                        <div>
                            <label className="form-label">Last Name</label>
                            <input name="lastName" type="text" value={formData.lastName} onChange={handleChange} className="form-input" required />
                        </div>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <label className="form-label">Super Admin Email</label>
                            <input type="email" value={formData.email} readOnly className="form-input" style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)', cursor: 'not-allowed' }} />
                        </div>
                        <div>
                            <label className="form-label">Phone Connectivity</label>
                            <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="form-input" />
                        </div>
                    </div>

                    <div>
                        <label className="form-label">Campus Building Assignment</label>
                        <select name="assignment" value={formData.assignment} onChange={handleChange} className="form-input" style={{ background: 'var(--color-bg)', color: 'var(--color-text-main)', cursor: 'pointer' }}>
                            <option>Main Administration Building</option>
                            <option>Science Block</option>
                            <option>West Wing</option>
                        </select>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '2.5rem' }}>
                        <Button variant="outline" type="button" onClick={handleDiscard} style={{ gap: '0.6rem', fontWeight: '700' }}>
                            <RotateCcw size={18}/> Discard Changes
                        </Button>
                        <Button variant="primary" type="submit" style={{ gap: '0.6rem', fontWeight: '700' }}>
                            <Save size={18}/> Save Institutional Profile
                        </Button>
                    </div>
                </form>
            </Card>

            <Card style={{ borderLeft: '4px solid var(--color-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%' }}>
                        <Shield size={24} color="var(--color-secondary)" />
                    </div>
                    <div>
                        <h4 style={{ margin: 0, fontWeight: '800', color: 'var(--color-text-main)' }}>Secure Multi-Factor Authentication</h4>
                        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-body)', fontWeight: '500' }}>Your account is currently protected by enterprise-grade 2FA.</p>
                    </div>
                    <Button variant="outline" size="sm" style={{ marginLeft: 'auto', fontWeight: '700' }}>Manage Security</Button>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
}
