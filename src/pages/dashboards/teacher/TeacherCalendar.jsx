import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export default function TeacherCalendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const events = [
    { day: 24, title: 'Physics Lab Session', time: '9:00 AM', color: 'var(--color-primary)' },
    { day: 24, title: 'Department Meeting', time: '2:00 PM', color: 'var(--color-warning)' },
    { day: 28, title: 'Exam Preparation Q&A', time: '10:00 AM', color: 'var(--color-success)' },
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => { if(currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y-1); } else setCurrentMonth(m => m-1); };
  const nextMonth = () => { if(currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y+1); } else setCurrentMonth(m => m+1); };

  const cells = [];
  for(let i = 0; i < firstDay; i++) cells.push(null);
  for(let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Academic Calendar</h1>
        <Button variant="primary"><Plus size={18} style={{ marginRight: 8 }} /> New Event</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem' }}>{MONTHS[currentMonth]} {currentYear}</h2>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={prevMonth} style={{ padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', background: 'white' }}><ChevronLeft size={18}/></button>
              <button onClick={nextMonth} style={{ padding: '0.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', background: 'white' }}><ChevronRight size={18}/></button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
            {DAYS.map(d => <div key={d} style={{ textAlign: 'center', padding: '0.75rem', color: 'var(--color-text-muted)', fontWeight: '600', fontSize: '0.875rem' }}>{d}</div>)}
            {cells.map((day, i) => {
              const hasEvent = events.find(e => e.day === day);
              const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
              return (
                <div key={i} style={{
                  aspectRatio: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
                  padding: '0.5rem', borderRadius: 'var(--radius-sm)', cursor: day ? 'pointer' : 'default',
                  background: isToday ? 'var(--color-primary)' : 'transparent',
                  color: isToday ? 'white' : 'var(--color-text-main)',
                  position: 'relative'
                }}>
                  {day && <span style={{ fontWeight: isToday ? '700' : '500' }}>{day}</span>}
                  {hasEvent && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: isToday ? 'white' : hasEvent.color, marginTop: '2px' }}></div>}
                </div>
              );
            })}
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Card>
            <h3 style={{ marginBottom: '1.5rem' }}>Upcoming Events</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {events.map((ev, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '4px', borderRadius: '4px', background: ev.color, alignSelf: 'stretch', flexShrink: 0 }}></div>
                  <div>
                    <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{ev.title}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Oct {ev.day} • {ev.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
