import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { User, Activity, FileText, ChevronRight } from 'lucide-react';

export default function ParentChildren() {
  const children = [
    { name: 'Alex Johnson', grade: '10th Grade', section: 'A', school: 'High School Profile', avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', attendance: 92, lastGrade: 'A-' },
    { name: 'Mia Johnson', grade: '7th Grade', section: 'C', school: 'Middle School Profile', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', attendance: 98, lastGrade: 'A' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>My Children</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {children.map((child, idx) => (
          <Card key={idx} style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ background: 'var(--gradient-primary)', padding: '2rem', color: 'white', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', transform: 'translate(30%, -30%)' }}></div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.3)', overflow: 'hidden' }}>
                    <img src={child.avatar} alt={child.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{child.name}</h2>
                  <p style={{ opacity: 0.9 }}>{child.grade} • Section {child.section}</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                      <Activity size={16}/> Attendance
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-text-main)' }}>{child.attendance}%</div>
                </div>
                <div style={{ background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                      <FileText size={16}/> Recent Grade
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-success)' }}>{child.lastGrade}</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: '500' }}>
                    View Academic Report <ChevronRight size={18} color="var(--color-text-muted)" />
                </button>
                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: '500' }}>
                    View Behavioral Records <ChevronRight size={18} color="var(--color-text-muted)" />
                </button>
                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: '500' }}>
                    Contact Teachers <ChevronRight size={18} color="var(--color-text-muted)" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
