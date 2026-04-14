import React, { useState, useMemo } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Check, X, Clock, HelpCircle, Save, Calendar as CalendarIcon, Users } from 'lucide-react';
import { useToast } from '../../../components/ui/Toast';

const initialStudents = [
  { id: 1, name: 'Alex Johnson', status: 'present', note: '' },
  { id: 2, name: 'Mia Johnson', status: 'absent', note: '' },
  { id: 3, name: 'Emily Davis', status: 'late', note: '' },
  { id: 4, name: 'Michael Smith', status: 'present', note: '' },
  { id: 5, name: 'Sarah Wilson', status: 'excused', note: '' },
  { id: 6, name: 'David Brown', status: 'present', note: '' },
  { id: 7, name: 'James Wilson', status: 'present', note: '' },
];

export default function TeacherAttendance() {
  const { success } = useToast();
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [students, setStudents] = useState(initialStudents);

  const stats = useMemo(() => {
    return {
      present: students.filter(s => s.status === 'present').length,
      absent: students.filter(s => s.status === 'absent').length,
      late: students.filter(s => s.status === 'late').length,
      excused: students.filter(s => s.status === 'excused').length,
    };
  }, [students]);

  const handleStatusChange = (id, newStatus) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  const handleNoteChange = (id, note) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, note } : s));
  };

  const handleSave = () => {
    success(`Attendance for ${new Date(date).toLocaleDateString()} saved successfully.`);
  };

  const getStatusColor = (status, isActive) => {
    if (!isActive) return 'var(--color-bg-2)';
    if (status === 'present') return 'var(--color-success)';
    if (status === 'absent') return 'var(--color-danger)';
    if (status === 'late') return 'var(--color-warning)';
    if (status === 'excused') return 'var(--color-secondary)';
    return 'var(--color-border)';
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Attendance Management</h1>
          <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>Subject: Physics 101 - Section A</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.6rem 1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
                <CalendarIcon size={18} color="var(--color-text-muted)" />
                <input 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                  style={{ background: 'transparent', border: 'none', color: 'var(--color-text-main)', fontSize: '0.9rem', outline: 'none' }} 
                />
            </div>
            <Button variant="primary" onClick={handleSave} style={{ gap: '0.6rem', fontWeight: '700' }}>
                <Save size={18} /> Save Records
            </Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {[
              { label: 'Present', count: stats.present, icon: <Check size={18}/>, color: 'var(--color-success)' },
              { label: 'Absent', count: stats.absent, icon: <X size={18}/>, color: 'var(--color-danger)' },
              { label: 'Late Arrival', count: stats.late, icon: <Clock size={18}/>, color: 'var(--color-warning)' },
              { label: 'Excused', count: stats.excused, icon: <HelpCircle size={18}/>, color: 'var(--color-secondary)' },
          ].map((stat, i) => (
              <Card key={i} style={{ borderLeft: `6px solid ${stat.color}`, padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '800', color: 'var(--color-text-muted)', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>{stat.label}</div>
                          <div style={{ fontSize: '1.875rem', fontWeight: '900', color: 'var(--color-text-main)' }}>{stat.count}</div>
                      </div>
                      <div style={{ background: `${stat.color}15`, color: stat.color, padding: '0.75rem', borderRadius: '50%' }}>{stat.icon}</div>
                  </div>
              </Card>
          ))}
      </div>

      <Card style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
        <div style={{ padding: '1.5rem 2rem', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Users size={20} color="var(--color-text-muted)" />
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '700' }}>Student Manifest - Roll Call</h3>
        </div>
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                <tr style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <th style={{ padding: '1.25rem 2rem', fontWeight: '700' }}>Student Identity</th>
                    <th style={{ padding: '1.25rem 2rem', fontWeight: '700' }}>Roll Number</th>
                    <th style={{ padding: '1.25rem 2rem', fontWeight: '700' }}>Quick Mark Attendance</th>
                    <th style={{ padding: '1.25rem 2rem', fontWeight: '700' }}>Internal Notes</th>
                </tr>
                </thead>
                <tbody>
                {students.map((st) => (
                    <tr key={st.id} style={{ borderBottom: '1px solid var(--color-border)', transition: 'background 0.2s' }}>
                        <td style={{ padding: '1.25rem 2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-bg)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--color-primary)' }}>
                                    {st.name.charAt(0)}
                                </div>
                                <div style={{ fontWeight: '700', color: 'var(--color-text-main)' }}>{st.name}</div>
                            </div>
                        </td>
                        <td style={{ padding: '1.25rem 2rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>STD-20{st.id}4</td>
                        <td style={{ padding: '1.25rem 2rem' }}>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                {[
                                    { status: 'present', icon: <Check size={16}/>, title: 'Present' },
                                    { status: 'absent', icon: <X size={16}/>, title: 'Absent' },
                                    { status: 'late', icon: <Clock size={16}/>, title: 'Late' },
                                    { status: 'excused', icon: <HelpCircle size={16}/>, title: 'Excused' },
                                ].map((btn) => (
                                    <button 
                                      key={btn.status}
                                      onClick={() => handleStatusChange(st.id, btn.status)}
                                      title={btn.title}
                                      style={{ 
                                        padding: '0.6rem', borderRadius: '50%', border: '2px solid transparent', cursor: 'pointer', 
                                        background: st.status === btn.status ? getStatusColor(btn.status, true) : 'var(--color-bg)', 
                                        color: st.status === btn.status ? 'white' : 'var(--color-text-muted)',
                                        borderColor: st.status === btn.status ? 'transparent' : 'var(--color-border)',
                                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                      }}
                                    >
                                        {btn.icon}
                                    </button>
                                ))}
                            </div>
                        </td>
                        <td style={{ padding: '1.25rem 2rem' }}>
                            <input 
                              type="text" 
                              placeholder="Observation..." 
                              value={st.note}
                              onChange={(e) => handleNoteChange(st.id, e.target.value)}
                              style={{ width: '100%', padding: '0.6rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg)', color: 'var(--color-text-main)', fontSize: '0.875rem' }} 
                            />
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
