import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/authSlice';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '../ui/PageTransition';
import { 
  LogOut, 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Calendar, 
  Settings,
  Bell,
  DollarSign,
  FileText,
  BarChart,
  MessageSquare,
  User,
  CheckCircle,
  Upload
} from 'lucide-react';

export default function DashboardLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
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

  const getMenuItems = (role) => {
    switch(role) {
      case 'admin':
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard/admin' },
          { icon: <Users size={20} />, label: 'Directory', path: '/dashboard/admin/directory' },
          { icon: <BookOpen size={20} />, label: 'Classes', path: '/dashboard/admin/classes' },
          { icon: <Calendar size={20} />, label: 'Schedule', path: '/dashboard/admin/schedule' },
          { icon: <DollarSign size={20} />, label: 'Payments', path: '/dashboard/admin/payments' },
          { icon: <FileText size={20} />, label: 'Reports', path: '/dashboard/admin/reports' },
          { icon: <BarChart size={20} />, label: 'Analytics', path: '/dashboard/admin/analytics' },
          { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/admin/messages' },
          { icon: <Bell size={20} />, label: 'Notifications', path: '/dashboard/admin/notifications' },
          { icon: <User size={20} />, label: 'Profile', path: '/dashboard/admin/profile' },
          { icon: <Settings size={20} />, label: 'Settings', path: '/dashboard/admin/settings' },
        ];
      case 'teacher':
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard/teacher' },
          { icon: <BookOpen size={20} />, label: 'My Classes', path: '/dashboard/teacher/classes' },
          { icon: <Users size={20} />, label: 'Students', path: '/dashboard/teacher/students' },
          { icon: <CheckCircle size={20} />, label: 'Attendance', path: '/dashboard/teacher/attendance' },
          { icon: <FileText size={20} />, label: 'Grades', path: '/dashboard/teacher/grades' },
          { icon: <BookOpen size={20} />, label: 'Assignments', path: '/dashboard/teacher/assignments' },
          { icon: <Upload size={20} />, label: 'Materials', path: '/dashboard/teacher/materials' },
          { icon: <Calendar size={20} />, label: 'Calendar', path: '/dashboard/teacher/calendar' },
          { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/teacher/messages' },
          { icon: <Bell size={20} />, label: 'Notifications', path: '/dashboard/teacher/notifications' },
          { icon: <User size={20} />, label: 'Profile', path: '/dashboard/teacher/profile' },
          { icon: <Settings size={20} />, label: 'Settings', path: '/dashboard/teacher/settings' },
        ];
      case 'student':
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard/student' },
          { icon: <BookOpen size={20} />, label: 'My Courses', path: '/dashboard/student/courses' },
          { icon: <FileText size={20} />, label: 'Grades', path: '/dashboard/student/grades' },
          { icon: <CheckCircle size={20} />, label: 'Attendance', path: '/dashboard/student/attendance' },
          { icon: <Calendar size={20} />, label: 'Assignments', path: '/dashboard/student/assignments' },
          { icon: <Calendar size={20} />, label: 'Schedule', path: '/dashboard/student/schedule' },
          { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/student/messages' },
          { icon: <Bell size={20} />, label: 'Notifications', path: '/dashboard/student/notifications' },
          { icon: <BarChart size={20} />, label: 'Reports', path: '/dashboard/student/reports' },
          { icon: <User size={20} />, label: 'Profile', path: '/dashboard/student/profile' },
          { icon: <Settings size={20} />, label: 'Settings', path: '/dashboard/student/settings' },
        ];
      case 'parent':
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard/parent' },
          { icon: <Users size={20} />, label: 'My Children', path: '/dashboard/parent/children' },
          { icon: <FileText size={20} />, label: 'Grades', path: '/dashboard/parent/grades' },
          { icon: <CheckCircle size={20} />, label: 'Attendance', path: '/dashboard/parent/attendance' },
          { icon: <DollarSign size={20} />, label: 'Fees', path: '/dashboard/parent/fees' },
          { icon: <MessageSquare size={20} />, label: 'Messages', path: '/dashboard/parent/messages' },
          { icon: <Bell size={20} />, label: 'Notifications', path: '/dashboard/parent/notifications' },
          { icon: <BarChart size={20} />, label: 'Reports', path: '/dashboard/parent/reports' },
          { icon: <User size={20} />, label: 'Profile', path: '/dashboard/parent/profile' },
          { icon: <Settings size={20} />, label: 'Settings', path: '/dashboard/parent/settings' },
        ];
      default:
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
        ];
    }
  };

  const menuItems = getMenuItems(user?.role);

  return (
    <div style={layoutStyle}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div 
          onClick={() => navigate(`/dashboard/${user?.role || ''}`)}
          style={{ padding: '0 1.5rem', marginBottom: '2rem', cursor: 'pointer' }}
        >
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>EduSaaS</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', textTransform: 'capitalize' }}>
            {user?.role} Portal
          </span>
        </div>

        <nav style={{ flex: 1, padding: '0 1rem' }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map((item, idx) => {
              const isActive = window.location.pathname === item.path || window.location.pathname.startsWith(item.path + '/');
              // Exact match for the base dashboard to avoid highlighting multiple items
              const isStrictActive = window.location.pathname === item.path;
              // If it's the base dashboard path, use strict match, otherwise use startsWith
              const active = item.label === 'Dashboard' ? isStrictActive : isActive;
              
              return (
              <li 
                key={idx} 
                onClick={() => navigate(item.path)}
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '1rem', 
                  padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
                  color: active ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  background: active ? 'var(--color-primary-light)' : 'transparent',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'background 0.2s, color 0.2s'
                }}>
                {item.icon}
                {item.label}
              </li>
            )})}
          </ul>
        </nav>

        <div style={{ padding: '1rem' }}>
          <button 
            onClick={handleLogout}
            style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%',
              padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
              color: 'var(--color-danger)', cursor: 'pointer',
              border: 'none', background: 'var(--color-danger)10'
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

        <main style={{ padding: '2rem', flex: 1, background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
