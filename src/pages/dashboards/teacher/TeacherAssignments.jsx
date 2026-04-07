import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { FileText, Plus, CheckCircle, Clock } from 'lucide-react';

export default function TeacherAssignments() {
  const assignments = [
    { title: 'Algebra Weekly Quiz', class: 'Mathematics 10A', dueDate: 'Today, 11:59 PM', submitted: 28, total: 32, status: 'Active' },
    { title: 'Kinematics Lab Report', class: 'Physics 11B', dueDate: 'Oct 28, 2026', submitted: 15, total: 28, status: 'Active' },
    { title: 'Derivatives Worksheet', class: 'Advanced Calculus', dueDate: 'Oct 25, 2026', submitted: 24, total: 24, status: 'Completed' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Assignments & Grading</h1>
        <Button variant="primary">
          <Plus size={18} style={{ marginRight: 8 }} /> Create Assignment
        </Button>
      </div>

      <Card style={{ padding: 0 }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Assignment Details</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Class</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Due Date</th>
                <th style={{ padding: '1.5rem', fontWeight: '600' }}>Submissions</th>
                <th style={{ padding: '1.5rem', fontWeight: '600', textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: assignment.status === 'Completed' ? 'var(--color-success)20' : 'var(--color-primary-light)', color: assignment.status === 'Completed' ? 'var(--color-success)' : 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FileText size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>{assignment.title}</div>
                      <div style={{ fontSize: '0.75rem', color: assignment.status === 'Completed' ? 'var(--color-success)' : 'var(--color-text-muted)', marginTop: '0.25rem' }}>{assignment.status}</div>
                    </div>
                  </td>
                  <td style={{ padding: '1.5rem', fontWeight: '500' }}>{assignment.class}</td>
                  <td style={{ padding: '1.5rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: assignment.dueDate.includes('Today') ? 'var(--color-danger)' : 'var(--color-text-muted)' }}>
                        <Clock size={14}/> {assignment.dueDate}
                    </span>
                  </td>
                  <td style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ flex: 1, height: '6px', background: 'var(--color-bg)', borderRadius: '3px', width: '100px' }}>
                            <div style={{ height: '100%', width: `${(assignment.submitted / assignment.total)*100}%`, background: assignment.submitted === assignment.total ? 'var(--color-success)' : 'var(--color-primary)', borderRadius: '3px' }}></div>
                        </div>
                        <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>{assignment.submitted}/{assignment.total}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1.5rem', textAlign: 'right' }}>
                    <Button variant="outline" size="sm">
                       {assignment.status === 'Completed' ? 'Review Grades' : 'Grade Submissions'}
                    </Button>
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
