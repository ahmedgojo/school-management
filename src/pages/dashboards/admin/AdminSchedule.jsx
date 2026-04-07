import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Calendar, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function AdminSchedule() {
  const [currentWeek, setCurrentWeek] = useState('October 19 - October 25, 2026');

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>Master Schedule</h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="outline">Print Schedule</Button>
            <Button variant="primary">
            <Plus size={18} style={{ marginRight: 8 }} /> Create Event
            </Button>
        </div>
      </div>

      <Card style={{ padding: 0 }}>
        <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <select style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }}>
                    <option>All Grades</option>
                    <option>10th Grade</option>
                    <option>11th Grade</option>
                    <option>12th Grade</option>
                </select>
                <select style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', outline: 'none' }}>
                    <option>All Teachers</option>
                    <option>Dr. Sarah Jenkins</option>
                    <option>Prof. Mark Davis</option>
                </select>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontWeight: '600' }}>{currentWeek}</span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button variant="outline" size="sm" style={{ padding: '0.5rem' }}><ChevronLeft size={18} /></Button>
                    <Button variant="outline" size="sm" style={{ padding: '0.5rem' }}><ChevronRight size={18} /></Button>
                </div>
            </div>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
            <div style={{ minWidth: '800px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(5, 1fr)', borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg)' }}>
                    <div style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--color-text-muted)' }}>Time</div>
                    {['Mon 19', 'Tue 20', 'Wed 21', 'Thu 22', 'Fri 23'].map((day, idx) => (
                        <div key={idx} style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', borderLeft: '1px solid var(--color-border)' }}>
                            {day}
                        </div>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(5, 1fr)', position: 'relative' }}>
                    <div style={{ borderRight: '1px solid var(--color-border)' }}>
                        {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'].map(time => (
                            <div key={time} style={{ height: '80px', padding: '0.5rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-border)' }}>
                                {time}
                            </div>
                        ))}
                    </div>

                    {Array(5).fill(null).map((_, i) => (
                        <div key={i} style={{ borderRight: '1px solid var(--color-border)', position: 'relative' }}>
                            {Array(8).fill(null).map((_, j) => (
                                <div key={j} style={{ height: '80px', borderBottom: '1px solid var(--color-border)' }}></div>
                            ))}

                            {i === 2 && (
                                <div style={{ position: 'absolute', top: '160px', left: '10px', right: '10px', height: '150px', background: 'var(--color-primary-light)', borderLeft: '4px solid var(--color-primary)', borderRadius: '4px', padding: '0.5rem' }}>
                                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Staff Meeting</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>10:00 - 11:50</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Conference Room A</div>
                                </div>
                            )}

                            {i === 4 && (
                                <div style={{ position: 'absolute', top: '400px', left: '10px', right: '10px', height: '110px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid var(--color-warning)', borderRadius: '4px', padding: '0.5rem' }}>
                                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-warning)', marginBottom: '0.25rem' }}>School Assembly</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>13:00 - 14:30</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Main Hall</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </Card>
    </div>
  );
}
