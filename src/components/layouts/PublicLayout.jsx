import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import Button from '../ui/Button';

export default function PublicLayout() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scrollspy logic
      const sections = ['home', 'about', 'programs', 'teachers', 'gallery', 'testimonials', 'news', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleNavClick = (e, section) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${section}`);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Update URL hash without jumping
      window.history.pushState(null, '', `/#${section}`);
      setActiveSection(section);
    }
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scrolled ? '1rem 5%' : '1.5rem 5%',
    background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
    boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
  };

  const navStyle = {
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'center',
    fontWeight: '500',
  };

  const getLinkStyle = (section) => ({
    color: activeSection === section ? 'var(--color-primary)' : 'var(--color-text-main)',
    transition: 'all var(--transition-fast)',
    position: 'relative',
    cursor: 'pointer',
    fontWeight: activeSection === section ? '600' : '500'
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }} onClick={(e) => handleNavClick(e, 'home')}>
          <div style={{ background: 'var(--gradient-primary)', padding: '0.5rem', borderRadius: 'var(--radius-md)', color: 'white' }}>
            <GraduationCap size={24} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-family-heading)' }}>
            EduSaaS
          </span>
        </div>
        
        <nav style={navStyle}>
          {['home', 'about', 'programs', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => handleNavClick(e, item)}
              style={getLinkStyle(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {activeSection === item && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'var(--color-primary)',
                  borderRadius: '2px'
                }} />
              )}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="outline" onClick={() => navigate('/login')}>Sign In</Button>
          <Button variant="primary" onClick={(e) => handleNavClick(e, 'home')}>Get Started</Button>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer style={{ background: '#0F172A', color: 'white', padding: '4rem 5% 2rem', marginTop: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--gradient-primary)', padding: '0.5rem', borderRadius: 'var(--radius-md)', color: 'white' }}>
                <GraduationCap size={24} />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-family-heading)' }}>
                EduSaaS
              </span>
            </div>
            <p style={{ color: '#94A3B8', lineHeight: '1.6' }}>
              Empowering the next generation of digital learning and completely integrated school management systems.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#94A3B8' }}>
              <li style={{ cursor: 'pointer' }} onClick={(e) => handleNavClick(e, 'about')}>About Us</li>
              <li style={{ cursor: 'pointer' }} onClick={(e) => handleNavClick(e, 'programs')}>Programs</li>
              <li style={{ cursor: 'pointer' }} onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</li>
              <li style={{ cursor: 'pointer' }} onClick={(e) => handleNavClick(e, 'contact')}>Contact</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Legal</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#94A3B8' }}>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#475569', borderTop: '1px solid #1E293B', paddingTop: '2rem' }}>
          © 2026 EduSaaS. All rights reserved. Designed for excellence.
        </div>
      </footer>
    </div>
  );
}
