import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Bell, CheckCircle, AlertCircle, Info, DollarSign } from 'lucide-react';

export default function ParentNotifications() {
  const notifications = [
    { title: 'Alex\'s Physics Grade Posted', desc: 'Alex received 92% on "Newton\'s Laws Quiz" in Physics 101.', type: 'success', date: 'Today, 10:00 AM', unread: true },
    { title: 'Fee Payment Due Reminder', desc: 'Fall semester tuition of $2,450 for Alex is due by October 30.', type: 'alert', date: 'Today, 08:00 AM', unread: true },
    { title: 'Parent-Teacher Meeting', desc: 'Annual parent-teacher conference scheduled for Nov 5 at 3:00 PM.', type: 'info', date: 'Yesterday, 02:00 PM', unread: false },
    { title: 'Payment Received', desc: 'Bus transportation fee of $600 has been successfully processed.', type: 'payment', date: 'Oct 22, 2026', unread: false },
  ];

  const getIcon = (type) => ({
    success: <CheckCircle size={22} color="var(--color-success)" />,
    alert: <AlertCircle size={22} color="var(--color-warning)" />,
    info: <Info size={22} color="var(--color-primary)" />,
    payment: <DollarSign size={22} color="var(--color-success)" />,
  }[type] || <Bell size={22} />);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Notifications</h1>
        <Button variant="outline">Mark All as Read</Button>
      </div>
      <Card style={{ padding: 0 }}>
        {notifications.map((n, idx) => (
          <div key={idx} style={{
            padding: '1.5rem', borderBottom: '1px solid var(--color-border)',
            display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
            background: n.unread ? 'var(--color-primary-light)' : 'white',
          }}>
            <div style={{ background: 'white', padding: '0.65rem', borderRadius: '50%', boxShadow: 'var(--shadow-sm)', flexShrink: 0 }}>{getIcon(n.type)}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <h4 style={{ margin: 0, fontWeight: '600' }}>{n.title}</h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', flexShrink: 0 }}>{n.date}</span>
              </div>
              <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{n.desc}</p>
            </div>
            {n.unread && <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-primary)', marginTop: '4px', flexShrink: 0 }}></div>}
          </div>
        ))}
      </Card>
    </div>
  );
}
