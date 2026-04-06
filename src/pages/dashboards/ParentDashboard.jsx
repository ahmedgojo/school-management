import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { CreditCard, MessageSquare, TrendingUp, AlertCircle } from 'lucide-react';

export default function ParentDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Parent Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Child Profile Cards */}
        <Card hoverEffect={true} style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--color-primary)' }}></div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--color-bg)', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Child Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem' }}>Alex Johnson</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>10th Grade • Section A</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.875rem', background: 'var(--color-success)20', color: 'var(--color-success)', padding: '0.25rem 0.5rem', borderRadius: '1rem' }}>92% Attendance</span>
                <span style={{ fontSize: '0.875rem', background: 'var(--color-primary)20', color: 'var(--color-primary)', padding: '0.25rem 0.5rem', borderRadius: '1rem' }}>Overall A-</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <Button variant="outline" size="sm" style={{ flex: 1 }}><MessageSquare size={16} style={{ marginRight: 8 }}/> Message Teacher</Button>
            <Button variant="primary" size="sm" style={{ flex: 1 }}><TrendingUp size={16} style={{ marginRight: 8 }}/> Full Report</Button>
          </div>
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <Card style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CreditCard size={20} color="var(--color-primary)" /> Fees & Payments
            </h3>
            <Button variant="primary" size="sm">Pay Due Amount</Button>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
              <div>
                <h4>Fall Semester Tuition</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Due by Oct 30, 2026</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>$2,450.00</div>
                <div style={{ color: 'var(--color-warning)', fontSize: '0.875rem' }}>Pending</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem' }}>
              <div>
                <h4>Bus Transportation</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Paid on Sep 1, 2026</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-text-muted)' }}>$300.00</div>
                <div style={{ color: 'var(--color-success)', fontSize: '0.875rem' }}>Paid</div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <AlertCircle size={20} color="var(--color-warning)" />
            <h3>Recent Notifications</h3>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { title: 'Parent-Teacher Meeting', desc: 'Scheduled for Nov 15th at 4:00 PM via Zoom.', time: '2 hours ago' },
              { title: 'Math Exam Results', desc: 'Alex scored 95% on the mid-term exams. Amazing job!', time: '1 day ago' },
              { title: 'School Closed', desc: 'School will be closed next Monday for national holiday.', time: '3 days ago' },
            ].map((notice, idx) => (
              <li key={idx} style={{ 
                paddingLeft: '1rem', borderLeft: '2px solid var(--color-primary-light)',
                position: 'relative'
              }}>
                <div style={{ position: 'absolute', left: '-5px', top: '5px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)' }}></div>
                <h4 style={{ marginBottom: '0.25rem' }}>{notice.title}</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{notice.desc}</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{notice.time}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
