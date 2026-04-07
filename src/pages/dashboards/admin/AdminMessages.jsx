import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Search, Send, Image, Paperclip } from 'lucide-react';

export default function AdminMessages() {
  const [activeChat, setActiveChat] = useState('SJ');
  
  const contacts = [
    { id: 'SJ', name: 'Sarah Jenkins', role: 'Teacher', lastMsg: 'I have updated the physics syllabus.', time: '10:45 AM', unread: true },
    { id: 'MD', name: 'Mark Davis', role: 'Teacher', lastMsg: 'Can we schedule a meeting next week?', time: 'Yesterday', unread: false },
    { id: 'PR', name: 'Paul Rogers', role: 'Parent', lastMsg: 'Thank you for the update.', time: 'Monday', unread: false },
  ];

  return (
    <div style={{ height: 'calc(100vh - 140px)', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Internal Messaging</h1>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 3fr', gap: '1.5rem', overflow: 'hidden' }}>
        {/* Contacts Sidebar */}
        <Card style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ padding: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: 12, top: 10, color: 'var(--color-text-muted)' }} />
                    <input type="text" placeholder="Search contacts..." style={{ width: '100%', padding: '0.5rem 1rem 0.5rem 2.5rem', borderRadius: '2rem', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg)' }} />
                </div>
            </div>
            <div style={{ overflowY: 'auto', flex: 1 }}>
                {contacts.map((contact) => (
                    <div 
                        key={contact.id} 
                        onClick={() => setActiveChat(contact.id)}
                        style={{ 
                            padding: '1rem', borderBottom: '1px solid var(--color-border)', display: 'flex', gap: '1rem', cursor: 'pointer',
                            background: activeChat === contact.id ? 'var(--color-bg)' : 'transparent',
                            transition: 'background 0.2s'
                        }}
                    >
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                            {contact.id}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <span style={{ fontWeight: contact.unread ? '600' : '500', color: 'var(--color-text-main)' }}>{contact.name}</span>
                                <span style={{ fontSize: '0.75rem', color: contact.unread ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>{contact.time}</span>
                            </div>
                            <div style={{ fontSize: '0.875rem', color: contact.unread ? 'var(--color-text-main)' : 'var(--color-text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {contact.lastMsg}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>

        {/* Chat Area */}
        <Card style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ padding: '1.25rem', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    SJ
                </div>
                <div>
                    <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Sarah Jenkins</h3>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Teacher • Online</span>
                </div>
            </div>

            <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'var(--color-bg)' }}>
                <div style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
                    <div style={{ background: 'white', padding: '1rem', borderRadius: '1rem', borderBottomLeftRadius: 0, boxShadow: 'var(--shadow-sm)', color: 'var(--color-text-main)' }}>
                        Hello! I am preparing for the new semester. Can you approve the new physics lab equipment budget?
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>10:30 AM</div>
                </div>

                <div style={{ alignSelf: 'flex-end', maxWidth: '70%' }}>
                    <div style={{ background: 'var(--color-primary)', padding: '1rem', borderRadius: '1rem', borderBottomRightRadius: 0, boxShadow: 'var(--shadow-sm)', color: 'white' }}>
                        Hi Sarah, yes I have seen the proposal. I will approve it by end of day.
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem', textAlign: 'right' }}>10:35 AM</div>
                </div>

                <div style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
                    <div style={{ background: 'white', padding: '1rem', borderRadius: '1rem', borderBottomLeftRadius: 0, boxShadow: 'var(--shadow-sm)', color: 'var(--color-text-main)' }}>
                        Excellent. I have updated the physics syllabus.
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>10:45 AM</div>
                </div>
            </div>

            <div style={{ padding: '1rem', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}><Paperclip size={20}/></button>
                <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}><Image size={20}/></button>
                <input type="text" placeholder="Type your message..." style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '2rem', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg)' }} />
                <Button variant="primary" style={{ padding: '0.75rem', borderRadius: '50%' }}>
                    <Send size={18} />
                </Button>
            </div>
        </Card>
      </div>
    </div>
  );
}
