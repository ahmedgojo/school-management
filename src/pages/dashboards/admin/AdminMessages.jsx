import React, { useState, useRef, useEffect } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Search, Send, Image, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';

const initialContacts = [
  { id: 'SJ', name: 'Sarah Jenkins', role: 'Physics Teacher', lastMsg: 'I have updated the physics syllabus.', time: '10:45 AM', unread: true },
  { id: 'MD', name: 'Mark Davis', role: 'Mathematics Teacher', lastMsg: 'Can we schedule a meeting next week?', time: 'Yesterday', unread: false },
  { id: 'PR', name: 'Paul Rogers', role: 'Parent', lastMsg: 'Thank you for the update.', time: 'Monday', unread: false },
  { id: 'JW', name: 'James Wilson', role: 'IT Manager', lastMsg: 'System maintenance scheduled for Sat.', time: 'Oct 20', unread: false },
];

const initialMessages = {
  'SJ': [
    { id: 1, sender: 'them', text: "Hello! I am preparing for the new semester. Can you approve the new physics lab equipment budget?", time: '10:30 AM' },
    { id: 2, sender: 'me', text: "Hi Sarah, yes I have seen the proposal. I will approve it by end of day.", time: '10:35 AM' },
    { id: 3, sender: 'them', text: "Excellent. I have updated the physics syllabus.", time: '10:45 AM' },
  ],
  'MD': [
    { id: 1, sender: 'them', text: "Can we schedule a meeting next week to discuss the curriculum?", time: 'Yesterday' }
  ],
  'PR': [
    { id: 1, sender: 'them', text: "Thank you for the update regarding the tuition fees.", time: 'Monday' }
  ],
  'JW': [
    { id: 1, sender: 'them', text: "System maintenance scheduled for Sat at 2:00 AM. It will take roughly 2 hours.", time: 'Oct 20' }
  ]
};

export default function AdminMessages() {
  const [activeChat, setActiveChat] = useState('SJ');
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeChat]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      sender: 'me',
      text: inputValue.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage]
    }));
    
    setInputValue('');
  };

  const filteredContacts = initialContacts.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentContact = initialContacts.find(c => c.id === activeChat);

  return (
    <div style={{ height: 'calc(100vh - 140px)', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Internal Messaging</h1>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'minmax(280px, 1fr) 3fr', gap: '1.5rem', overflow: 'hidden' }}>
        {/* Contacts Sidebar */}
        <Card style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
            <div style={{ padding: '1.25rem', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                    <input 
                      type="text" 
                      placeholder="Search contacts..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{ width: '100%', padding: '0.65rem 1rem 0.65rem 2.75rem', borderRadius: '2rem', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg)', color: 'var(--color-text-main)', fontSize: '0.875rem' }} 
                    />
                </div>
            </div>
            <div style={{ overflowY: 'auto', flex: 1 }}>
                {filteredContacts.map((contact) => (
                    <div 
                        key={contact.id} 
                        onClick={() => setActiveChat(contact.id)}
                        style={{ 
                            padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', gap: '1rem', cursor: 'pointer',
                            background: activeChat === contact.id ? 'var(--color-bg-2)' : 'transparent',
                            transition: 'all 0.2s',
                            borderLeft: activeChat === contact.id ? '4px solid var(--color-primary)' : '4px solid transparent'
                        }}
                    >
                        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem', flexShrink: 0 }}>
                            {contact.id}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <span style={{ fontWeight: contact.unread ? '700' : '600', color: 'var(--color-text-main)', fontSize: '0.9rem' }}>{contact.name}</span>
                                <span style={{ fontSize: '0.7rem', color: contact.unread ? 'var(--color-primary)' : 'var(--color-text-muted)', fontWeight: '600' }}>{contact.time}</span>
                            </div>
                            <div style={{ fontSize: '0.8rem', color: contact.unread ? 'var(--color-text-main)' : 'var(--color-text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: contact.unread ? '500' : '400' }}>
                                {contact.lastMsg}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>

        {/* Chat Area */}
        <Card style={{ padding: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
            <div style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--color-surface)', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>
                        {currentContact?.id}
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: '700', color: 'var(--color-text-main)' }}>{currentContact?.name}</h3>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: '600' }}>{currentContact?.role} • Online</span>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ padding: '0.5rem', background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}><Phone size={20}/></button>
                    <button style={{ padding: '0.5rem', background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}><Video size={20}/></button>
                    <button style={{ padding: '0.5rem', background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}><MoreVertical size={20}/></button>
                </div>
            </div>

            <div style={{ flex: 1, padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'var(--color-bg)' }}>
                {(messages[activeChat] || []).map((msg) => (
                    <div 
                      key={msg.id} 
                      style={{ 
                        alignSelf: msg.sender === 'me' ? 'flex-end' : 'flex-start', 
                        maxWidth: '75%',
                        animation: 'fadeInUp 0.3s ease-out forwards' 
                      }}
                    >
                        <div style={{ 
                            background: msg.sender === 'me' ? 'var(--color-primary)' : 'var(--color-surface)', 
                            padding: '1rem 1.25rem', 
                            borderRadius: '1.25rem', 
                            borderBottomRightRadius: msg.sender === 'me' ? 0 : '1.25rem',
                            borderBottomLeftRadius: msg.sender === 'me' ? '1.25rem' : 0, 
                            boxShadow: 'var(--shadow-sm)', 
                            color: msg.sender === 'me' ? 'white' : 'var(--color-text-main)',
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            border: msg.sender === 'me' ? 'none' : '1px solid var(--color-border)',
                            // Use CSS variables for high contrast, ensuring readability in dark mode
                            fontWeight: '500'
                        }}>
                            {msg.text}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', textAlign: msg.sender === 'me' ? 'right' : 'left', fontWeight: '600' }}>{msg.time}</div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div style={{ padding: '1.25rem 2rem', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '1rem', alignItems: 'center', background: 'var(--color-surface)', zIndex: 1 }}>
                <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}><Paperclip size={22}/></button>
                <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}><Image size={22}/></button>
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  style={{ flex: 1, padding: '0.85rem 1.5rem', borderRadius: '2rem', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--color-bg)', color: 'var(--color-text-main)', fontSize: '0.95rem' }} 
                />
                <Button 
                  variant="primary" 
                  onClick={handleSendMessage}
                  style={{ padding: '0.75rem', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Send size={18} />
                </Button>
            </div>
        </Card>
      </div>
      <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
