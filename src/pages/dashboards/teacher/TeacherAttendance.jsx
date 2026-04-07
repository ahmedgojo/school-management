import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Check, X, Clock, HelpCircle, Save } from 'lucide-react';

export default function TeacherAttendance() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const students = [
    { id: 1, name: 'Alex Johnson', status: 'present' },
    { id: 2, name: 'Mia Johnson', status: 'absent' },
    { id: 3, name: 'Emily Davis', status: 'late' },
    { id: 4, name: 'Michael Smith', status: 'present' },
    { id: 5, name: 'Sarah Wilson', status: 'excused' },
  ];

  const getStatusColor = (status) => {
      if(status === 'present') return 'var(--color-success)';
      if(status === 'absent') return 'var(--color-danger)';
      if(status === 'late') return 'var(--color-warning)';
      if(status === 'excused') return 'var(--color-text-muted)';
      return 'var(--color-border)';
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Attendance Roll Call</h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }} />
            <Button variant="primary">
                <Save size={18} style={{ marginRight: 8 }} /> Save Attendance
            </Button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ padding: '1rem', background: 'white', borderRadius: 'var(--radius-md)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Check size={18} color="var(--color-success)"/> Present (18)</div>
          <div style={{ padding: '1rem', background: 'white', borderRadius: 'var(--radius-md)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}><X size={18} color="var(--color-danger)"/> Absent (2)</div>
          <div style={{ padding: '1rem', background: 'white', borderRadius: 'var(--radius-md)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}><Clock size={18} color="var(--color-warning)"/> Late (1)</div>
          <div style={{ padding: '1rem', background: 'white', borderRadius: 'var(--radius-md)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}><HelpCircle size={18} color="var(--color-text-muted)"/> Excused (1)</div>
      </div>

      <Card style={{ padding: 0 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
            <tr style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Student Name</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>ID</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Quick Mark</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Notes</th>
            </tr>
            </thead>
            <tbody>
            {students.map((st, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '1.5rem', fontWeight: '500' }}>{st.name}</td>
                    <td style={{ padding: '1.5rem', color: 'var(--color-text-muted)' }}>STD-20{st.id}4</td>
                    <td style={{ padding: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button style={{ padding: '0.5rem', borderRadius: '50%', border: '1px solid var(--color-border)', cursor: 'pointer', background: st.status === 'present' ? 'var(--color-success)20' : 'white', color: getStatusColor(st.status) }}>
                                <Check size={18}/>
                            </button>
                            <button style={{ padding: '0.5rem', borderRadius: '50%', border: '1px solid var(--color-border)', cursor: 'pointer', background: st.status === 'absent' ? 'var(--color-danger)20' : 'white', color: getStatusColor(st.status) }}>
                                <X size={18}/>
                            </button>
                            <button style={{ padding: '0.5rem', borderRadius: '50%', border: '1px solid var(--color-border)', cursor: 'pointer', background: st.status === 'late' ? 'var(--color-warning)20' : 'white', color: getStatusColor(st.status) }}>
                                <Clock size={18}/>
                            </button>
                            <button style={{ padding: '0.5rem', borderRadius: '50%', border: '1px solid var(--color-border)', cursor: 'pointer', background: st.status === 'excused' ? 'var(--color-border)' : 'white', color: getStatusColor(st.status) }}>
                                <HelpCircle size={18}/>
                            </button>
                        </div>
                    </td>
                    <td style={{ padding: '1.5rem' }}>
                        <input type="text" placeholder="Add note..." style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }} />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
      </Card>
    </div>
  );
}
