import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Download, FileText } from 'lucide-react';

export default function ParentReports() {
  const reports = [
    { title: 'Alex – Fall 2026 Report Card', child: 'Alex Johnson', date: 'Oct 15, 2026' },
    { title: 'Mia – Fall 2026 Report Card', child: 'Mia Johnson', date: 'Oct 15, 2026' },
    { title: 'Alex – Spring 2026 Transcript', child: 'Alex Johnson', date: 'Jun 20, 2026' },
    { title: 'Mia – Spring 2026 Transcript', child: 'Mia Johnson', date: 'Jun 20, 2026' },
    { title: 'Alex – Behavioral Assessment', child: 'Alex Johnson', date: 'Sep 30, 2026' },
  ];

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Reports & Documents</h1>

      <Card style={{ padding: 0 }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Available Reports</h3>
          <select style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }}>
            <option>All Children</option>
            <option>Alex Johnson</option>
            <option>Mia Johnson</option>
          </select>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Report</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Child</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Date</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: '600', textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FileText size={18} color="var(--color-primary)"/> {r.title}
                </td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)' }}>{r.child}</td>
                <td style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)' }}>{r.date}</td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <Button variant="outline" size="sm"><Download size={14} style={{ marginRight: 6 }}/> PDF</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
