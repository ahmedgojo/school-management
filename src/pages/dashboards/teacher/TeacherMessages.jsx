import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Search, Send, Paperclip, Image } from 'lucide-react';

export default function TeacherMessages() {
  const [activeChat, setActiveChat] = useState('ad');

  const contacts = [
    { id: 'ad', name: 'Administration', role: 'School Admin', lastMsg: 'Please review the updated syllabus.', time: '10:30 AM', unread: true },
    { id: 'aj', name: 'Alex Johnson (Parent)', role: 'Parent', lastMsg: 'Thank you for the update!', time: 'Yesterday', unread: false },
    { id: 'ep', name: 'Emily Parker', role: 'Colleague', lastMsg: 'Are you available for a meeting?', time: 'Monday', unread: false },
  ];

  return (
    <div style={{ height: 'calc(100vh - 140px)', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Messages</h1>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'minmax(260px, 1fr) 3fr', gap: '1.5rem', overflow: 'hidden' }}>
        <Card style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: 10, top: 11, color: 'var(--color-text-muted)' }} />
              <input placeholder="Search..." style={{ width: '100%', padding: '0.5rem 0.5rem 0.5rem 2.25rem', borderRadius: '2rem', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg)', fontSize: '0.875rem' }} />
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {contacts.map(c => (
              <div key={c.id} onClick={() => setActiveChat(c.id)} style={{
                padding: '1rem', borderBottom: '1px solid var(--color-border)', display: 'flex', gap: '1rem',
                cursor: 'pointer', background: activeChat === c.id ? 'var(--color-bg)' : 'transparent', transition: 'background 0.2s'
              }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>
                  {c.id.toUpperCase().slice(0,2)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                    <span style={{ fontWeight: c.unread ? '700' : '500', fontSize: '0.95rem' }}>{c.name}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{c.time}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.lastMsg}</div>
                </div>
                {c.unread && <div style={{ width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%', flexShrink: 0, marginTop: '6px' }}></div>}
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>AD</div>
            <div>
              <h3 style={{ fontSize: '1rem', margin: 0 }}>Administration</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-success)' }}>● Online</span>
            </div>
          </div>
          <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'var(--color-bg)' }}>
            <div style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
              <div style={{ background: 'white', padding: '1rem 1.25rem', borderRadius: '1rem', borderBottomLeftRadius: 0, boxShadow: 'var(--shadow-sm)' }}>
                Hi! Please review the semester schedule I sent last week and confirm your free periods.
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>10:10 AM</div>
            </div>
            <div style={{ alignSelf: 'flex-end', maxWidth: '70%' }}>
              <div style={{ background: 'var(--color-primary)', padding: '1rem 1.25rem', borderRadius: '1rem', borderBottomRightRadius: 0, color: 'white', boxShadow: 'var(--shadow-sm)' }}>
                Sure, I have reviewed it. Tuesday and Thursday evenings after 4PM work best for me.
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem', textAlign: 'right' }}>10:25 AM</div>
            </div>
            <div style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
              <div style={{ background: 'white', padding: '1rem 1.25rem', borderRadius: '1rem', borderBottomLeftRadius: 0, boxShadow: 'var(--shadow-sm)' }}>
                Please review the updated syllabus.
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>10:30 AM</div>
            </div>
          </div>
          <div style={{ padding: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}><Paperclip size={20}/></button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}><Image size={20}/></button>
            <input type="text" placeholder="Type a message..." style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '2rem', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg)' }} />
            <Button variant="primary" style={{ borderRadius: '50%', padding: '0.75rem' }}><Send size={18}/></Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
