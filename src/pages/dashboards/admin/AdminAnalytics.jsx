import React from 'react';
import Card from '../../../components/ui/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function AdminAnalytics() {
  const enrollmentData = [
    { name: '2021', students: 1200 },
    { name: '2022', students: 1400 },
    { name: '2023', students: 1350 },
    { name: '2024', students: 1800 },
    { name: '2025', students: 2200 },
    { name: '2026', students: 3245 },
  ];

  const genderData = [
    { name: 'Female', value: 1650 },
    { name: 'Male', value: 1595 },
  ];
  const COLORS = ['var(--color-primary)', 'var(--color-secondary)'];

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Analytics & Demographics</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <Card>
            <h3 style={{ marginBottom: '1.5rem' }}>Enrollment Trends (5 Years)</h3>
            <div style={{ height: '350px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={enrollmentData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <Tooltip />
                        <Area type="monotone" dataKey="students" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorStudents)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>

        <Card style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Gender Distribution</h3>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100%', height: '250px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={genderData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                                {genderData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem' }}>
                {genderData.map((entry, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: COLORS[idx], margin: '0 auto 0.5rem' }}></div>
                        <div style={{ fontWeight: '600' }}>{entry.name}</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{entry.value} ({Math.round(entry.value/3245 * 100)}%)</div>
                    </div>
                ))}
            </div>
        </Card>
      </div>
    </div>
  );
}
