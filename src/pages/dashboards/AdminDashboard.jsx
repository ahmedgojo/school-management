import React from 'react';
import Card from '../../components/ui/Card';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { Users, DollarSign, Activity, BookOpen } from 'lucide-react';

const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 2000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
];

const attendanceData = [
  { name: 'Mon', percent: 95 },
  { name: 'Tue', percent: 92 },
  { name: 'Wed', percent: 98 },
  { name: 'Thu', percent: 90 },
  { name: 'Fri', percent: 97 },
];

export default function AdminDashboard() {
  const statCards = [
    { title: 'Total Students', value: '3,245', icon: <Users size={24} />, color: 'var(--color-primary)' },
    { title: 'Total Teachers', value: '142', icon: <BookOpen size={24} />, color: 'var(--color-secondary)' },
    { title: 'Revenue (Monthly)', value: '$124,500', icon: <DollarSign size={24} />, color: 'var(--color-success)' },
    { title: 'Active Classes', value: '86', icon: <Activity size={24} />, color: 'var(--color-accent)' },
  ];

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Overview</h1>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {statCards.map((stat, idx) => (
          <Card key={idx} hoverEffect={true}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>{stat.title}</p>
                <h3 style={{ fontSize: '1.875rem', color: 'var(--color-text-main)' }}>{stat.value}</h3>
              </div>
              <div style={{ 
                background: `${stat.color}20`, 
                padding: '1rem', 
                borderRadius: 'var(--radius-lg)', 
                color: stat.color 
              }}>
                {stat.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <Card>
          <h3 style={{ marginBottom: '1.5rem' }}>Revenue Overview</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="revenue" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 style={{ marginBottom: '1.5rem' }}>Weekly Attendance</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="percent" stroke="var(--color-secondary)" strokeWidth={3} dot={{ fill: 'var(--color-secondary)', strokeWidth: 2, r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Recent Activity Table */}
      <Card>
        <h3 style={{ marginBottom: '1.5rem' }}>Recent Admissions</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
                <th style={{ padding: '1rem 0', fontWeight: '500' }}>Student Name</th>
                <th style={{ padding: '1rem 0', fontWeight: '500' }}>ID Number</th>
                <th style={{ padding: '1rem 0', fontWeight: '500' }}>Grade/Class</th>
                <th style={{ padding: '1rem 0', fontWeight: '500' }}>Date</th>
                <th style={{ padding: '1rem 0', fontWeight: '500' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Sarah Wilson', id: 'STD-1002', grade: '10th Grade', date: 'Oct 24, 2026', status: 'Approved' },
                { name: 'James Thompson', id: 'STD-1003', grade: '8th Grade', date: 'Oct 23, 2026', status: 'Pending' },
                { name: 'Emily Davis', id: 'STD-1004', grade: '12th Grade', date: 'Oct 23, 2026', status: 'Approved' },
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1rem 0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem' }}>
                      {row.name.charAt(0)}
                    </div>
                    {row.name}
                  </td>
                  <td style={{ padding: '1rem 0' }}>{row.id}</td>
                  <td style={{ padding: '1rem 0' }}>{row.grade}</td>
                  <td style={{ padding: '1rem 0' }}>{row.date}</td>
                  <td style={{ padding: '1rem 0' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.875rem',
                      background: row.status === 'Approved' ? 'var(--color-success)20' : 'var(--color-warning)20',
                      color: row.status === 'Approved' ? 'var(--color-success)' : 'var(--color-warning)',
                    }}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
