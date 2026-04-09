import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Search, Send, Paperclip, Image } from 'lucide-react';

export default function ParentMessages() {
  const [activeChat, setActiveChat] = useState('sj');

  const contacts = [
    { id: 'sj', name: 'Dr. Sarah Jenkins', role: 'Physics Teacher', lastMsg: 'Alex is doing very well in class this semester.', time: '10:30 AM', unread: true },
    { id: 'ad', name: 'Administration', role: 'School Office', lastMsg: 'Fee payment confirmation received.', time: 'Yesterday', unread: false },
    { id: 'ct', name: 'Class Teacher - Mr. Davis', role: 'Homeroom Teacher', lastMsg: 'Parent-teacher meeting is scheduled for Nov 5.', time: 'Oct 22', unread: false },
  ];

  return (
    <div style={{ height: 'calc(100vh - 140px)', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Messages</h1>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'minmax(260px, 1fr) 3fr', gap: '1.5rem', overflow: 'hidden' }}>
        <Card style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: 10, top: 11, color: 'var(--color-text-muted)' }}/>
              <input placeholder="Search contacts..." style={{ width: '100%', padding: '0.5rem 0.5rem 0.5rem 2.25rem', borderRadius: '2rem', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg)', fontSize: '0.875rem' }} />
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {contacts.map(c => (
              <div key={c.id} onClick={() => setActiveChat(c.id)} style={{
                padding: '1rem', borderBottom: '1px solid var(--color-border)', display: 'flex', gap: '0.75rem',
                cursor: 'pointer', background: activeChat === c.id ? 'var(--color-bg)' : 'transparent'
              }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '0.8rem' }}>{c.id.toUpperCase()}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                    <span style={{ fontWeight: c.unread ? '700' : '500', fontSize: '0.9rem' }}>{c.name}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{c.time}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.lastMsg}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>SJ</div>
            <div>
              <h3 style={{ fontSize: '1rem', margin: 0 }}>Dr. Sarah Jenkins</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-success)' }}>● Online</span>
            </div>
          </div>
          <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem', background: 'var(--color-bg)' }}>
            <div style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
              <div style={{ background: 'white', padding: '0.875rem 1.125rem', borderRadius: '1rem', borderBottomLeftRadius: 0, boxShadow: 'var(--shadow-sm)' }}>
                Hi! I wanted to let you know that Alex is doing very well in class this semester. His lab work has been exceptional.
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>10:25 AM</div>
            </div>
            <div style={{ alignSelf: 'flex-end', maxWidth: '70%' }}>
              <div style={{ background: 'var(--color-primary)', padding: '0.875rem 1.125rem', borderRadius: '1rem', borderBottomRightRadius: 0, color: 'white', boxShadow: 'var(--shadow-sm)' }}>
                Thank you so much, Dr. Jenkins! We're very proud of his progress. Is there anything we can do to support him further at home?
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '0.25rem', textAlign: 'right' }}>10:28 AM</div>
            </div>
            <div style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
              <div style={{ background: 'white', padding: '0.875rem 1.125rem', borderRadius: '1rem', borderBottomLeftRadius: 0, boxShadow: 'var(--shadow-sm)' }}>
                Alex is doing very well in class this semester. Just encourage him to keep up with the practice problems and he'll be fine for the finals!
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>10:30 AM</div>
            </div>
          </div>
          <div style={{ padding: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}><Paperclip size={20}/></button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}><Image size={20}/></button>
            <input type="text" placeholder="Type a message..." style={{ flex: 1, padding: '0.7rem 1rem', borderRadius: '2rem', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg)' }}/>
            <Button variant="primary" style={{ borderRadius: '50%', padding: '0.7rem' }}><Send size={18}/></Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
