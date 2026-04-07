import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { BookOpen, Users, Clock, MoreHorizontal, Plus } from 'lucide-react';

const courses = [
  { id: 'CLS001', name: 'Advanced Mathematics', instructor: 'Prof. Mark Davis', students: 28, capacity: 30, schedule: 'Mon, Wed 09:00 AM', status: 'Active', color: 'var(--color-primary)' },
  { id: 'CLS002', name: 'Physics 101', instructor: 'Dr. Sarah Jenkins', students: 35, capacity: 40, schedule: 'Tue, Thu 11:00 AM', status: 'Active', color: 'var(--color-secondary)' },
  { id: 'CLS003', name: 'World History', instructor: 'Elena Rodríguez', students: 45, capacity: 45, schedule: 'Mon, Fri 01:00 PM', status: 'Full', color: 'var(--color-accent)' },
  { id: 'CLS004', name: 'Computer Science Fundamentals', instructor: 'James Wilson', students: 15, capacity: 30, schedule: 'Wed 02:00 PM', status: 'Active', color: 'var(--color-success)' },
];

export default function AdminClasses() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Class & Course Management</h1>
        <Button variant="primary">
          <Plus size={18} style={{ marginRight: 8 }} /> Create Course
        </Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {courses.map((course, idx) => (
          <Card key={idx} hoverEffect={true} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '1rem', background: `${course.color}20`, color: course.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{course.name}</h3>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{course.id}</span>
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
                  <MoreHorizontal size={20} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Instructor</div>
                <div style={{ fontWeight: '500', fontSize: '0.875rem' }}>{course.instructor}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Schedule</div>
                <div style={{ fontWeight: '500', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={12}/> {course.schedule}</div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><Users size={16}/> Enrolled Students</span>
                <span style={{ fontWeight: '600', color: course.students >= course.capacity ? 'var(--color-danger)' : 'var(--color-text-main)' }}>{course.students} / {course.capacity}</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--color-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(course.students / course.capacity) * 100}%`, background: course.students >= course.capacity ? 'var(--color-danger)' : course.color, borderRadius: '4px' }}></div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <Button variant="outline" size="sm" style={{ flex: 1 }}>View Details</Button>
                <Button variant="outline" size="sm" style={{ flex: 1 }}>Manage Roster</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
