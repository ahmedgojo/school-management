import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { ChevronLeft, ChevronRight, Clock, MapPin, Video } from 'lucide-react';

export default function StudentSchedule() {
  const [currentWeek, setCurrentWeek] = useState('October 19 - October 25, 2026');

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>My Schedule</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontWeight: '600' }}>{currentWeek}</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button variant="outline" size="sm" style={{ padding: '0.5rem' }}><ChevronLeft size={18} /></Button>
                <Button variant="outline" size="sm" style={{ padding: '0.5rem' }}><ChevronRight size={18} /></Button>
            </div>
        </div>
      </div>

      <Card style={{ padding: 0, overflowX: 'auto' }}>
        <div style={{ minWidth: '800px' }}>
            {/* Timeline Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(5, 1fr)', borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg)' }}>
                <div style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: 'var(--color-text-muted)' }}>Time</div>
                {['Monday 19', 'Tuesday 20', 'Wednesday 21', 'Thursday 22', 'Friday 23'].map((day, idx) => (
                    <div key={idx} style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', borderLeft: '1px solid var(--color-border)' }}>
                        {day}
                    </div>
                ))}
            </div>

            {/* Timeline Body */}
            <div style={{ display: 'grid', gridTemplateColumns: '80px repeat(5, 1fr)', position: 'relative' }}>
                {/* Time labels */}
                <div style={{ borderRight: '1px solid var(--color-border)' }}>
                    {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'].map(time => (
                        <div key={time} style={{ height: '80px', padding: '0.5rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-border)' }}>
                            {time}
                        </div>
                    ))}
                </div>

                {/* Day Columns */}
                {Array(5).fill(null).map((_, i) => (
                    <div key={i} style={{ borderRight: '1px solid var(--color-border)', position: 'relative' }}>
                        {/* Fake grid lines */}
                        {Array(8).fill(null).map((_, j) => (
                            <div key={j} style={{ height: '80px', borderBottom: '1px solid var(--color-border)' }}></div>
                        ))}

                        {/* Rendering blocks conditionally */}
                        {i === 0 && (
                            <div style={{ position: 'absolute', top: '80px', left: '10px', right: '10px', height: '110px', background: 'var(--color-primary-light)', borderLeft: '4px solid var(--color-primary)', borderRadius: '4px', padding: '0.5rem' }}>
                                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Mathematics 10A</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={12}/> 09:00 - 10:30</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}><MapPin size={12}/> Room 304</div>
                            </div>
                        )}

                        {i === 1 && (
                            <div style={{ position: 'absolute', top: '240px', left: '10px', right: '10px', height: '110px', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid var(--color-success)', borderRadius: '4px', padding: '0.5rem' }}>
                                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-success)', marginBottom: '0.25rem' }}>Physics 11B</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={12}/> 11:00 - 12:30</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}><Video size={12}/> Online Zoom</div>
                            </div>
                        )}
                        
                        {i === 2 && (
                            <div style={{ position: 'absolute', top: '400px', left: '10px', right: '10px', height: '110px', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid var(--color-warning)', borderRadius: '4px', padding: '0.5rem' }}>
                                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-warning)', marginBottom: '0.25rem' }}>World History</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={12}/> 13:00 - 14:30</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}><MapPin size={12}/> Room 102</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </Card>
    </div>
  );
}
