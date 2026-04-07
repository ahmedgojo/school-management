import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Download, Save } from 'lucide-react';

export default function TeacherGrades() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Gradebook</h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="outline"><Download size={18} style={{ marginRight: 8 }}/> Export CSV</Button>
            <Button variant="primary"><Save size={18} style={{ marginRight: 8 }}/> Publish Grades</Button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <select style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', background: 'white' }}>
            <option>Physics 101 - Section A</option>
            <option>Physics 101 - Section B</option>
            <option>Advanced Physics</option>
        </select>
        <select style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', background: 'white' }}>
            <option>Fall 2026</option>
            <option>Spring 2026</option>
        </select>
      </div>

      <Card style={{ padding: 0, overflowX: 'auto' }}>
        <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
            <tr style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Student Name</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Quiz 1 (10%)</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Midterm (30%)</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Project (20%)</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Final (40%)</th>
                <th style={{ padding: '1.5rem', fontWeight: '600', color: 'var(--color-primary)' }}>Final Grade</th>
            </tr>
            </thead>
            <tbody>
            {[
                { name: 'Alex Johnson', q1: 95, mid: 88, proj: 92, fin: 94, total: '92%' },
                { name: 'Mia Johnson', q1: 75, mid: 82, proj: 85, fin: 80, total: '81%' },
                { name: 'Emily Davis', q1: 100, mid: 98, proj: 95, fin: 99, total: '98%' },
                { name: 'Michael Smith', q1: 85, mid: 70, proj: 80, fin: null, total: 'Pending' },
            ].map((s, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '1.5rem', fontWeight: '500' }}>{s.name}</td>
                    <td style={{ padding: '1.5rem' }}>
                        <input type="number" defaultValue={s.q1} style={{ width: '60px', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '4px', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '1.5rem' }}>
                        <input type="number" defaultValue={s.mid} style={{ width: '60px', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '4px', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '1.5rem' }}>
                        <input type="number" defaultValue={s.proj} style={{ width: '60px', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '4px', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '1.5rem' }}>
                        <input type="number" defaultValue={s.fin} placeholder="-" style={{ width: '60px', padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: '4px', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '1.5rem', fontWeight: '600', fontSize: '1.1rem', color: s.total === 'Pending' ? 'var(--color-text-muted)' : 'var(--color-text-main)' }}>
                        {s.total}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
      </Card>
    </div>
  );
}
