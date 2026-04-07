import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { BookOpen, Video, FileText, CheckCircle } from 'lucide-react';

export default function StudentCourses() {
  const courses = [
    { name: 'Mathematics 10A', instructor: 'Prof. Mark Davis', progress: 75, nextClass: 'Tomorrow, 09:00 AM', color: 'var(--color-primary)' },
    { name: 'Physics 11B', instructor: 'Dr. Sarah Jenkins', progress: 42, nextClass: 'Today, 11:00 AM', color: 'var(--color-secondary)' },
    { name: 'World History', instructor: 'Elena Rodríguez', progress: 90, nextClass: 'Wed, 01:00 PM', color: 'var(--color-warning)' },
    { name: 'Computer Science Fundamentals', instructor: 'James Wilson', progress: 15, nextClass: 'Wed, 02:00 PM', color: 'var(--color-success)' }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>My Courses</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {courses.map((course, idx) => (
          <Card key={idx} hoverEffect={true} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${course.color}20`, color: course.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{course.name}</h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{course.instructor}</span>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontWeight: '500' }}>Course Progress</span>
                    <span style={{ fontWeight: '600' }}>{course.progress}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'var(--color-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${course.progress}%`, background: course.color, borderRadius: '4px' }}></div>
                </div>
            </div>

            <div style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Next Live Class</div>
                <div style={{ fontWeight: '500', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Video size={16} color={course.color}/> {course.nextClass}
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <Button variant="outline" size="sm" style={{ flex: 1 }}><FileText size={16} style={{ marginRight: 8 }}/> Materials</Button>
                <Button variant="primary" size="sm" style={{ flex: 1 }}><CheckCircle size={16} style={{ marginRight: 8 }}/> Join Class</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
