import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Search, Send, Paperclip, Image } from 'lucide-react';

export default function StudentMessages() {
  const [activeChat, setActiveChat] = useState('sj');

  const contacts = [
    { id: 'sj', name: 'Dr. Sarah Jenkins', role: 'Physics Teacher', lastMsg: 'Don\'t forget to submit your lab report by Friday.', time: '11:20 AM', unread: true },
    { id: 'md', name: 'Prof. Mark Davis', role: 'Math Teacher', lastMsg: 'Great job on the last quiz!', time: 'Yesterday', unread: false },
    { id: 'sg', name: 'Study Group', role: '5 members', lastMsg: 'Emily: Anyone up for library session?', time: 'Monday', unread: true },
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
                padding: '1rem', borderBottom: '1px solid var(--color-border)', display: 'flex', gap: '0.75rem',
                cursor: 'pointer', background: activeChat === c.id ? 'var(--color-bg)' : 'transparent', transition: 'background 0.2s'
              }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0, fontSize: '0.8rem' }}>
                  {c.id.toUpperCase()}
                </div>
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
                Hi Alex! Just a reminder about the Wave Mechanics lab report. It's due this Friday by 11:59 PM.
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>11:15 AM</div>
            </div>
            <div style={{ alignSelf: 'flex-end', maxWidth: '70%' }}>
              <div style={{ background: 'var(--color-primary)', padding: '0.875rem 1.125rem', borderRadius: '1rem', borderBottomRightRadius: 0, color: 'white', boxShadow: 'var(--shadow-sm)' }}>
                Thanks Dr. Jenkins! I'm almost done with it. Quick question — should we include the error analysis section?
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '0.25rem', textAlign: 'right' }}>11:18 AM</div>
            </div>
            <div style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
              <div style={{ background: 'white', padding: '0.875rem 1.125rem', borderRadius: '1rem', borderBottomLeftRadius: 0, boxShadow: 'var(--shadow-sm)' }}>
                Yes, absolutely! Don't forget to submit your lab report by Friday. The error analysis is worth 20% of the total grade.
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>11:20 AM</div>
            </div>
          </div>
          <div style={{ padding: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}><Paperclip size={20}/></button>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}><Image size={20}/></button>
            <input type="text" placeholder="Type a message..." style={{ flex: 1, padding: '0.7rem 1rem', borderRadius: '2rem', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg)' }} />
            <Button variant="primary" style={{ borderRadius: '50%', padding: '0.7rem' }}><Send size={18}/></Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
