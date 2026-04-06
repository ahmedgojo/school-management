import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Users, FileText, CheckCircle, PieChart } from 'lucide-react';

export default function TeacherDashboard() {
  const classes = [
    { name: 'Mathematics 10A', students: 32, time: '09:00 AM' },
    { name: 'Physics 11B', students: 28, time: '11:00 AM' },
    { name: 'Advanced Calculus', students: 24, time: '02:00 PM' },
  ];

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Teacher Portal</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <Card hoverEffect={true} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'var(--color-primary-light)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
            <Users size={32} />
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>84</div>
            <div style={{ color: 'var(--color-text-muted)' }}>Total Students</div>
          </div>
        </Card>
        
        <Card hoverEffect={true} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--color-success)' }}>
            <FileText size={32} />
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>12</div>
            <div style={{ color: 'var(--color-text-muted)' }}>Assignments to Grade</div>
          </div>
        </Card>

        <Card hoverEffect={true} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(244, 63, 94, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--color-accent)' }}>
            <PieChart size={32} />
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>78%</div>
            <div style={{ color: 'var(--color-text-muted)' }}>Class Average</div>
          </div>
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3>Today's Classes & Attendance</h3>
            <Button variant="outline" size="sm">View All Calendar</Button>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {classes.map((cls, idx) => (
              <div key={idx} style={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)'
              }}>
                <div>
                  <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{cls.name}</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                    {cls.time} • {cls.students} Students
                  </p>
                </div>
                <Button variant="primary" size="sm">
                  <CheckCircle size={16} style={{ marginRight: '0.5rem' }} /> Mark Attendance
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 style={{ marginBottom: '1.5rem' }}>Recent Submissions</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[1, 2, 3, 4].map((item) => (
              <li key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--color-primary-light)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <FileText size={20} />
                </div>
                <div>
                  <h5 style={{ fontWeight: '600' }}>Math Homework #{item}</h5>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Submitted by John Doe</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
