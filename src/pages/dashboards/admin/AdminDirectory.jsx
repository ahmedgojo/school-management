import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Search, Plus, MoreVertical, Filter, Mail, Phone } from 'lucide-react';

const usersData = [
  { id: 'USR001', name: 'Dr. Sarah Jenkins', role: 'Teacher', email: 's.jenkins@edusaas.com', phone: '+1 234-567-8901', status: 'Active', department: 'Science' },
  { id: 'USR002', name: 'Alex Johnson', role: 'Student', email: 'a.johnson@student.com', phone: '+1 234-567-8902', status: 'Active', department: 'Grade 10' },
  { id: 'USR003', name: 'Amanda Clarke', role: 'Parent', email: 'amanda.c@parents.com', phone: '+1 234-567-8903', status: 'Active', department: 'N/A' },
  { id: 'USR004', name: 'Prof. Mark Davis', role: 'Teacher', email: 'm.davis@edusaas.com', phone: '+1 234-567-8904', status: 'On Leave', department: 'Mathematics' },
  { id: 'USR005', name: 'Emily Davis', role: 'Student', email: 'e.davis@student.com', phone: '+1 234-567-8905', status: 'Inactive', department: 'Grade 12' },
];

export default function AdminDirectory() {
  const [filter, setFilter] = useState('All');

  const filteredUsers = filter === 'All' ? usersData : usersData.filter(u => u.role === filter);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Directory Management</h1>
        <Button variant="primary">
          <Plus size={18} style={{ marginRight: 8 }} /> Add New User
        </Button>
      </div>

      <Card style={{ padding: 0 }}>
        <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {['All', 'Student', 'Teacher', 'Parent'].map(type => (
              <button 
                key={type}
                onClick={() => setFilter(type)}
                style={{ 
                  background: filter === type ? 'var(--color-primary)' : 'transparent',
                  color: filter === type ? 'white' : 'var(--color-text-muted)',
                  border: filter === type ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                  padding: '0.5rem 1rem', borderRadius: '2rem', cursor: 'pointer',
                  fontWeight: '500', transition: 'all 0.2s'
                }}
              >
                {type}s
              </button>
            ))}
          </div>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: 12, top: 10, color: 'var(--color-text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search directory..." 
              style={{ width: '250px', padding: '0.5rem 1rem 0.5rem 2.5rem', borderRadius: '2rem', border: '1px solid var(--color-border)', outline: 'none' }}
            />
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>
                <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>User</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Contact Info</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Role / Dept</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Status</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: '600', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--color-border)', transition: 'background 0.2s' }} onMouseEnter={e => e.currentTarget.style.background = '#F8FAFC'} onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                  <td style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gradient-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>{user.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{user.id}</div>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.875rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><Mail size={14}/> {user.email}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><Phone size={14}/> {user.phone}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ fontWeight: '500' }}>{user.role}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{user.department}</div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: '600',
                      background: user.status === 'Active' ? 'var(--color-success)20' : (user.status === 'Inactive' ? 'var(--color-danger)20' : 'var(--color-warning)20'),
                      color: user.status === 'Active' ? 'var(--color-success)' : (user.status === 'Inactive' ? 'var(--color-danger)' : 'var(--color-warning)'),
                    }}>
                      {user.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
                      <MoreVertical size={20} />
                    </button>
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
