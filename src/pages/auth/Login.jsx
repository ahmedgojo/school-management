import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/authSlice';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BookOpen, GraduationCap, Users } from 'lucide-react';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);

  const roles = [
    { id: 'admin', label: 'Admin', icon: <Shield size={32} />, color: 'var(--color-primary)' },
    { id: 'teacher', label: 'Teacher', icon: <BookOpen size={32} />, color: 'var(--color-secondary)' },
    { id: 'student', label: 'Student', icon: <GraduationCap size={32} />, color: 'var(--color-accent)' },
    { id: 'parent', label: 'Parent', icon: <Users size={32} />, color: 'var(--color-success)' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (!selectedRole) return;
    
    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      dispatch(login({
        id: Math.random().toString(36).substr(2, 9),
        name: `Demo ${selectedRole}`,
        role: selectedRole.toLowerCase(),
      }));
      setLoading(false);
      navigate(`/dashboard/${selectedRole.toLowerCase()}`);
    }, 1000);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Left side - Dynamic Visuals */}
      <div style={{
        flex: 1,
        background: 'var(--gradient-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        color: 'white'
      }}>
        {/* Decorative background circles */}
        <div style={{ position: 'absolute', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', top: '-10%', right: '-10%' }}></div>
        <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', bottom: '-10%', left: '-10%' }}></div>
        
        <div style={{ maxWidth: '400px', position: 'relative', zIndex: 10, padding: '2rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Welcome back to EduSaaS.</h1>
          <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
            Sign in to access your personalized educational dashboard and stay connected with your institution.
          </p>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ maxWidth: '450px', width: '100%' }}>
          
          {!selectedRole ? (
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            >
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Select your role</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>Choose how you want to log in to the system</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {roles.map((role) => (
                  <Card 
                    key={role.id} 
                    hoverEffect={true}
                    onClick={() => setSelectedRole(role.label)}
                    style={{ 
                      cursor: 'pointer', textAlign: 'center', 
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
                      padding: '2rem 1.5rem'
                    }}
                  >
                    <div style={{ color: role.color }}>{role.icon}</div>
                    <span style={{ fontWeight: '600' }}>{role.label}</span>
                  </Card>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              style={{ background: 'white', padding: '3rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}
            >
              <button 
                onClick={() => setSelectedRole(null)} 
                style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.875rem' }}
              >
                ← Back to roles
              </button>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Sign In</h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Continue as <strong>{selectedRole}</strong></p>
              
              <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Email Address</label>
                  <input 
                    type="email" 
                    defaultValue={`demo@${selectedRole.toLowerCase()}.com`}
                    style={{ 
                      width: '100%', padding: '0.75rem 1rem', 
                      borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)',
                      outline: 'none', fontSize: '1rem'
                    }} 
                  />
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Password</label>
                    <a href="/forgot-password" onClick={(e) => { e.preventDefault(); navigate('/forgot-password'); }} style={{ color: 'var(--color-primary)', fontSize: '0.8rem', textDecoration: 'none', fontWeight: '500' }}>Forgot password?</a>
                  </div>
                  <input 
                    type="password" 
                    defaultValue="password123"
                    style={{ 
                      width: '100%', padding: '0.75rem 1rem', 
                      borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)',
                      outline: 'none', fontSize: '1rem'
                    }} 
                  />
                </div>
                
                <Button variant="primary" size="lg" style={{ width: '100%', marginTop: '1rem' }}>
                  {loading ? 'Authenticating...' : 'Sign In'}
                </Button>

                <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    Don't have an account? <a href="/register" onClick={(e) => { e.preventDefault(); navigate('/register'); }} style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none' }}>Register here</a>
                </div>
              </form>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
