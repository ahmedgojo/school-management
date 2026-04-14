import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Modal from '../../../components/ui/Modal';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, Printer, MapPin, Clock } from 'lucide-react';
import { addEvent } from '../../../store/schoolSlice';
import { useToast } from '../../../components/ui/Toast';

export default function AdminSchedule() {
  const dispatch = useDispatch();
  const { success } = useToast();
  const events = useSelector(state => state.school.events);
  const [currentWeek, setCurrentWeek] = useState('October 19 - October 25, 2026');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '', location: '', description: '' });

  const handleCreateEvent = (e) => {
    e.preventDefault();
    // For demo: calculate a random day and position
    const dayIndex = Math.floor(Math.random() * 5);
    const top = `${100 + Math.random() * 300}px`;
    const height = '100px';

    const eventToAdd = {
      id: Date.now(),
      title: newEvent.title,
      time: newEvent.time,
      location: newEvent.location,
      dayIndex,
      top,
      height,
      color: 'var(--color-secondary)'
    };

    dispatch(addEvent(eventToAdd));
    setIsModalOpen(false);
    setNewEvent({ title: '', date: '', time: '', location: '', description: '' });
    success(`Event "${newEvent.title}" has been added to the master schedule.`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="printable-area">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }} className="no-print">
        <div>
          <h1 style={{ fontSize: '2rem' }}>Master Schedule</h1>
          <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>Manage school-wide sessions and institutional events</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="outline" onClick={handlePrint}>
                <Printer size={18} style={{ marginRight: 8 }} /> Print Schedule
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                <Plus size={18} style={{ marginRight: 8 }} /> Create Event
            </Button>
        </div>
      </div>

      <Card style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
        <div style={{ padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)' }} className="no-print">
            <div style={{ display: 'flex', gap: '1rem' }}>
                <select className="form-input" style={{ width: 'auto', minWidth: '150px' }}>
                    <option>All Grades</option>
                    <option>10th Grade</option>
                    <option>11th Grade</option>
                    <option>12th Grade</option>
                </select>
                <select className="form-input" style={{ width: 'auto', minWidth: '150px' }}>
                    <option>All Teachers</option>
                    <option>Dr. Sarah Jenkins</option>
                    <option>Prof. Mark Davis</option>
                </select>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-text-main)' }}>{currentWeek}</span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button variant="outline" size="sm" style={{ padding: '0.5rem' }}><ChevronLeft size={18} /></Button>
                    <Button variant="outline" size="sm" style={{ padding: '0.5rem' }}><ChevronRight size={18} /></Button>
                </div>
            </div>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
            <div style={{ minWidth: '1000px', padding: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(5, 1fr)', borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg)', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' }}>
                    <div style={{ padding: '1.25rem', textAlign: 'center', fontWeight: '800', color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Time</div>
                    {['Mon 19', 'Tue 20', 'Wed 21', 'Thu 22', 'Fri 23'].map((day, idx) => (
                        <div key={idx} style={{ padding: '1.25rem', textAlign: 'center', fontWeight: '700', borderLeft: '1px solid var(--color-border)', color: 'var(--color-text-main)' }}>
                            {day}
                        </div>
                    ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(5, 1fr)', position: 'relative', background: 'var(--color-surface)' }}>
                    <div style={{ borderRight: '1px solid var(--color-border)' }}>
                        {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'].map(time => (
                            <div key={time} style={{ height: '100px', padding: '0.75rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-border)', fontWeight: '600' }}>
                                {time}
                            </div>
                        ))}
                    </div>

                    {Array(5).fill(null).map((_, i) => (
                        <div key={i} style={{ borderRight: '1px solid var(--color-border)', position: 'relative' }}>
                            {Array(9).fill(null).map((_, j) => (
                                <div key={j} style={{ height: '100px', borderBottom: '1px solid var(--color-border)' }}></div>
                            ))}

                            {/* Dynamic Events from Store */}
                            {events.filter(e => e.dayIndex === i).map(event => (
                                <div key={event.id} style={{ 
                                    position: 'absolute', top: event.top, left: '8px', right: '8px', height: event.height, 
                                    background: `${event.color}15`, borderLeft: `4px solid ${event.color}`, 
                                    borderRadius: 'var(--radius-md)', padding: '0.75rem', zIndex: 1,
                                    boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s', cursor: 'pointer',
                                    display: 'flex', flexDirection: 'column', gap: '4px'
                                }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '800', color: event.color }}>{event.title}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-body)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
                                        <Clock size={12}/> {event.time}
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
                                        <MapPin size={12}/> {event.location}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </Card>

      {/* Create Event Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Institutional Event">
          <form onSubmit={handleCreateEvent} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
                <label className="form-label">Event Title</label>
                <input 
                  type="text" required className="form-input" placeholder="e.g. Science Fair 2026"
                  value={newEvent.title}
                  onChange={e => setNewEvent({...newEvent, title: e.target.value})}
                />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                    <label className="form-label">Date</label>
                    <input 
                      type="date" required className="form-input"
                      value={newEvent.date}
                      onChange={e => setNewEvent({...newEvent, date: e.target.value})}
                    />
                </div>
                <div>
                    <label className="form-label">Time Range</label>
                    <input 
                      type="text" required className="form-input" placeholder="e.g. 10:00 - 12:00"
                      value={newEvent.time}
                      onChange={e => setNewEvent({...newEvent, time: e.target.value})}
                    />
                </div>
            </div>
            <div>
                <label className="form-label">Location</label>
                <input 
                  type="text" required className="form-input" placeholder="e.g. Main Auditorium"
                  value={newEvent.location}
                  onChange={e => setNewEvent({...newEvent, location: e.target.value})}
                />
            </div>
            <div>
                <label className="form-label">Description</label>
                <textarea 
                  className="form-input" rows="3" placeholder="Additional details..."
                  value={newEvent.description}
                  onChange={e => setNewEvent({...newEvent, description: e.target.value})}
                  style={{ resize: 'none' }}
                />
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <Button variant="outline" type="button" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button variant="primary" type="submit">Publish Event</Button>
            </div>
          </form>
      </Modal>

      {/* Global CSS for Printing */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .printable-area { margin: 0 !important; width: 100% !important; }
          Card { box-shadow: none !important; border: 1px solid #eee !important; }
        }
      `}</style>
    </div>
  );
}
