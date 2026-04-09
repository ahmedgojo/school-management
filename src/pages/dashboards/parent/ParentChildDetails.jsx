import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { Activity, FileText, BookOpen, TrendingUp, ChevronRight, CheckCircle } from 'lucide-react';

export default function ParentChildDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <button onClick={() => navigate('/dashboard/parent/children')} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', marginBottom: '0.75rem', fontWeight: '500' }}>
        ← Back to Children
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1rem', border: '4px solid var(--color-primary-light)' }}>
              <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Child" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Alex Johnson</h2>
            <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>{id || 'STD-1002'} • 10th Grade, Section A</p>
            <span style={{ marginTop: '1rem', background: 'var(--color-success)20', color: 'var(--color-success)', padding: '0.25rem 1rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: '600' }}>Active Student</span>
          </Card>

          <Card>
            <h3 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Quick Actions</h3>
            {[
              { label: 'View Grades', path: '/dashboard/parent/grades' },
              { label: 'View Attendance', path: '/dashboard/parent/attendance' },
              { label: 'Contact Teacher', path: '/dashboard/parent/messages' },
              { label: 'Download Report Card', path: '/dashboard/parent/reports' },
            ].map((action, i) => (
              <button key={i} onClick={() => navigate(action.path)} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
                padding: '0.875rem', background: 'transparent', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: '500', marginBottom: '0.5rem',
                transition: 'all 0.2s'
              }}>
                {action.label} <ChevronRight size={16} color="var(--color-text-muted)"/>
              </button>
            ))}
          </Card>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {[
              { label: 'GPA', value: '3.8', icon: <TrendingUp size={20}/>, color: 'var(--color-primary)' },
              { label: 'Attendance', value: '92%', icon: <Activity size={20}/>, color: 'var(--color-success)' },
              { label: 'Courses', value: '6', icon: <BookOpen size={20}/>, color: 'var(--color-secondary)' },
              { label: 'Conduct', value: 'A+', icon: <CheckCircle size={20}/>, color: 'var(--color-warning)' },
            ].map((stat, i) => (
              <Card key={i} style={{ textAlign: 'center' }}>
                <div style={{ color: stat.color, marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: stat.color }}>{stat.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{stat.label}</div>
              </Card>
            ))}
          </div>

          <Card style={{ padding: 0 }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
              <h3 style={{ margin: 0 }}>Current Courses</h3>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Course</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Teacher</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Current Grade</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Physics 101', teacher: 'Dr. Sarah Jenkins', grade: '92% (A)' },
                  { name: 'Mathematics 10A', teacher: 'Prof. Mark Davis', grade: '88% (B+)' },
                  { name: 'World History', teacher: 'Ms. Elena Rodríguez', grade: '94% (A)' },
                  { name: 'English Literature', teacher: 'Mr. James Wilson', grade: '85% (B)' },
                ].map((c, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: '500' }}>{c.name}</td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)' }}>{c.teacher}</td>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: 'var(--color-success)' }}>{c.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
}
