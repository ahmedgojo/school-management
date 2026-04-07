import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { BookOpen, Users, Clock, Upload, CheckCircle } from 'lucide-react';

export default function TeacherClasses() {
  const classes = [
    { name: 'Mathematics 10A', room: 'Room 304', time: 'Mon, Wed 09:00 AM', students: 32, avgGrade: '88%' },
    { name: 'Physics 11B', room: 'Lab 2', time: 'Tue, Thu 11:00 AM', students: 28, avgGrade: '82%' },
    { name: 'Advanced Calculus', room: 'Room 310', time: 'Mon, Fri 02:00 PM', students: 24, avgGrade: '91%' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>My Classes</h1>
        <Button variant="primary">
          <Upload size={18} style={{ marginRight: 8 }} /> Upload Syllabus
        </Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {classes.map((cls, idx) => (
          <Card key={idx} hoverEffect={true} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{cls.name}</h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{cls.room}</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Schedule</div>
                <div style={{ fontWeight: '500', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={12}/> {cls.time}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Class Average</div>
                <div style={{ fontWeight: '500', fontSize: '0.875rem', color: 'var(--color-success)' }}>{cls.avgGrade}</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                    <Users size={16}/> {cls.students} Students Enrolled
                </div>
                <Button variant="outline" size="sm">
                  View Roster
                </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
