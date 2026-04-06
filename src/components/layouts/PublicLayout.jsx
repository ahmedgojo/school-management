import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import Button from '../ui/Button';

export default function PublicLayout() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 5%',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    boxShadow: 'var(--shadow-sm)',
  };

  const navStyle = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    fontWeight: '500',
  };

  const linkStyle = {
    color: 'var(--color-text-main)',
    transition: 'color var(--transition-fast)',
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ background: 'var(--gradient-primary)', padding: '0.5rem', borderRadius: 'var(--radius-md)', color: 'white' }}>
            <GraduationCap size={24} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-family-heading)' }}>
            EduSaaS
          </span>
        </div>
        
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/programs" style={linkStyle}>Programs</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Button variant="primary">Get Started</Button>
        </div>
      </header>

      <main style={{ flex: 1, marginTop: '80px' }}>
        <Outlet />
      </main>

      <footer style={{ background: 'var(--color-text-main)', color: 'white', padding: '4rem 5%', marginTop: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>EduSaaS</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Empowering the next generation of digital learning and school management.</p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--color-text-muted)' }}>
              <li>About Us</li>
              <li>Careers</li>
              <li>News & Events</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--color-text-muted)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
          © 2026 EduSaaS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
