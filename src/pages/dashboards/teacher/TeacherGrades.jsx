import React, { useState, useMemo } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Download, Save, Send, Users, TrendingUp } from 'lucide-react';
import { useToast } from '../../../components/ui/Toast';

const initialStudents = [
  { id: 1, name: 'Alex Johnson', q1: 95, mid: 88, proj: 92, fin: 94 },
  { id: 2, name: 'Mia Johnson', q1: 75, mid: 82, proj: 85, fin: 80 },
  { id: 3, name: 'Emily Davis', q1: 100, mid: 98, proj: 95, fin: 99 },
  { id: 4, name: 'Michael Smith', q1: 85, mid: 70, proj: 80, fin: 0 },
  { id: 5, name: 'David Brown', q1: 88, mid: 92, proj: 90, fin: 95 },
];

export default function TeacherGrades() {
  const { success } = useToast();
  const [students, setStudents] = useState(initialStudents);

  const calculateTotal = (s) => {
    // 10% Quiz, 30% Midterm, 20% Project, 40% Final
    const total = (s.q1 * 0.1) + (s.mid * 0.3) + (s.proj * 0.2) + (s.fin * 0.4);
    return Math.round(total);
  };

  const handleGradeChange = (id, field, value) => {
    const val = value === '' ? 0 : Math.min(100, Math.max(0, parseInt(value) || 0));
    setStudents(prev => prev.map(s => s.id === id ? { ...s, [field]: val } : s));
  };

  const handlePublish = () => {
    success("Grades have been formally published to the Student & Parent portals.");
  };

  const stats = useMemo(() => {
    const totals = students.map(s => calculateTotal(s));
    const avg = totals.reduce((a, b) => a + b, 0) / totals.length;
    return {
        average: Math.round(avg),
        highest: Math.max(...totals),
        passed: totals.filter(t => t >= 60).length
    };
  }, [students]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Digital Gradebook</h1>
          <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>Subject: Physics 101 - Fall 2026</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="outline" style={{ fontWeight: '600' }}><Download size={18} style={{ marginRight: 8 }}/> Export CSV</Button>
            <Button variant="primary" onClick={handlePublish} style={{ gap: '0.6rem', fontWeight: '700' }}>
                <Send size={18} /> Publish to Portal
            </Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {[
              { label: 'Class Average', value: `${stats.average}%`, icon: <TrendingUp size={20}/>, color: 'var(--color-primary)' },
              { label: 'Passing Students', value: `${stats.passed} / ${students.length}`, icon: <Users size={20}/>, color: 'var(--color-success)' },
              { label: 'Highest Score', value: `${stats.highest}%`, icon: <TrendingUp size={20}/>, color: 'var(--color-accent)' },
          ].map((stat, i) => (
              <Card key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem' }}>
                  <div style={{ background: `${stat.color}15`, color: stat.color, padding: '1rem', borderRadius: 'var(--radius-lg)' }}>{stat.icon}</div>
                  <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--color-text-muted)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{stat.label}</div>
                      <div style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--color-text-main)' }}>{stat.value}</div>
                  </div>
              </Card>
          ))}
      </div>

      <Card style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
        <div style={{ padding: '1.25rem 2rem', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
                <select className="form-input" style={{ width: '220px', padding: '0.5rem 1rem' }}>
                    <option>Physics 101 - Section A</option>
                    <option>Physics 101 - Section B</option>
                </select>
                <select className="form-input" style={{ width: '150px', padding: '0.5rem 1rem' }}>
                    <option>Final Exam</option>
                    <option>Midterm</option>
                    <option>Project</option>
                </select>
            </div>
            <Button variant="outline" size="sm" style={{ fontWeight: '700' }}><Save size={16} style={{ marginRight: 8 }}/> Batch Save</Button>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                <tr style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <th style={{ padding: '1.25rem 2rem', fontWeight: '700' }}>Student Name</th>
                    <th style={{ padding: '1.25rem 2rem', fontWeight: '700' }}>Quiz (10%)</th>
                    <th style={{ padding: '1.25rem 2rem', fontWeight: '700' }}>Midterm (30%)</th>
                    <th style={{ padding: '1.25rem 2rem', fontWeight: '700' }}>Proj (20%)</th>
                    <th style={{ padding: '1.25rem 2rem', fontWeight: '700' }}>Final (40%)</th>
                    <th style={{ padding: '1.25rem 2rem', fontWeight: '800', color: 'var(--color-primary)' }}>Aggregate</th>
                </tr>
                </thead>
                <tbody>
                {students.map((s) => (
                    <tr key={s.id} style={{ borderBottom: '1px solid var(--color-border)', transition: 'background 0.2s' }}>
                        <td style={{ padding: '1.25rem 2rem', fontWeight: '700', color: 'var(--color-text-main)' }}>{s.name}</td>
                        <td style={{ padding: '1.25rem 2rem' }}>
                            <input 
                              type="number" value={s.q1} 
                              onChange={(e) => handleGradeChange(s.id, 'q1', e.target.value)}
                              className="grade-input"
                            />
                        </td>
                        <td style={{ padding: '1.25rem 2rem' }}>
                            <input 
                              type="number" value={s.mid} 
                              onChange={(e) => handleGradeChange(s.id, 'mid', e.target.value)}
                              className="grade-input"
                            />
                        </td>
                        <td style={{ padding: '1.25rem 2rem' }}>
                            <input 
                              type="number" value={s.proj} 
                              onChange={(e) => handleGradeChange(s.id, 'proj', e.target.value)}
                              className="grade-input"
                            />
                        </td>
                        <td style={{ padding: '1.25rem 2rem' }}>
                            <input 
                              type="number" value={s.fin} 
                              onChange={(e) => handleGradeChange(s.id, 'fin', e.target.value)}
                              className="grade-input"
                            />
                        </td>
                        <td style={{ padding: '1.25rem 2rem' }}>
                            <span style={{ 
                                display: 'inline-block', padding: '0.4rem 0.8rem', borderRadius: '2rem', 
                                background: calculateTotal(s) >= 60 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                color: calculateTotal(s) >= 60 ? 'var(--color-success)' : 'var(--color-danger)',
                                fontWeight: '900', fontSize: '1rem'
                            }}>
                                {calculateTotal(s)}%
                            </span>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      </Card>

      <style>{`
        .grade-input {
            width: 70px;
            padding: 0.6rem;
            border: 1px solid var(--color-border);
            border-radius: var(--radius-sm);
            text-align: center;
            font-weight: 700;
            background: var(--color-bg);
            color: var(--color-text-main);
            outline: none;
            transition: all 0.2s;
        }
        .grade-input:focus {
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px var(--color-primary-light);
        }
      `}</style>
    </div>
  );
}
