import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/authSlice';
import { 
  LogOut, 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Calendar, 
  Settings,
  Bell
} from 'lucide-react';

export default function DashboardLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const layoutStyle = {
    display: 'flex',
    height: '100vh',
    background: 'var(--color-bg)',
    overflow: 'hidden'
  };

  const sidebarStyle = {
    width: '280px',
    background: 'white',
    borderRight: '1px solid var(--color-border)',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem 0'
  };

  const mainAreaStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto'
  };

  const headerStyle = {
    height: '70px',
    background: 'white',
    borderBottom: '1px solid var(--color-border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 10
  };

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { icon: <Users size={20} />, label: 'People' },
    { icon: <BookOpen size={20} />, label: 'Classes & Courses' },
    { icon: <Calendar size={20} />, label: 'Schedule' },
  ];

  return (
    <div style={layoutStyle}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div style={{ padding: '0 1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>EduSaaS</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', textTransform: 'capitalize' }}>
            {user?.role} Portal
          </span>
        </div>

        <nav style={{ flex: 1, padding: '0 1rem' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {menuItems.map((item, idx) => (
              <li key={idx} style={{ 
                display: 'flex', alignItems: 'center', gap: '1rem', 
                padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
                color: idx === 0 ? 'var(--color-primary)' : 'var(--color-text-muted)',
                background: idx === 0 ? 'var(--color-primary-light)' : 'transparent',
                cursor: 'pointer',
                fontWeight: '500'
              }}>
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ padding: '1rem' }}>
          <button 
            onClick={handleLogout}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '1rem', width: '100%',
              padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
              color: 'var(--color-danger)', cursor: 'pointer'
            }}
          >
            <LogOut size={20} />
            <span style={{ fontWeight: '500' }}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div style={mainAreaStyle}>
        <header style={headerStyle}>
          <div>
            <h3 style={{ color: 'var(--color-text-main)' }}>Welcome back, {user?.name || 'User'}! 👋</h3>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <Bell size={24} color="var(--color-text-muted)" />
              <div style={{ 
                position: 'absolute', top: -2, right: -2, width: 10, height: 10, 
                background: 'var(--color-accent)', borderRadius: '50%' 
              }}></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ 
                width: 40, height: 40, borderRadius: '50%', 
                background: 'var(--color-primary-light)', color: 'var(--color-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                {user?.name?.charAt(0) || 'U'}
              </div>
            </div>
          </div>
        </header>

        <main style={{ padding: '2rem', flex: 1, background: 'var(--color-bg)' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
