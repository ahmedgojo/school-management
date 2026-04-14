import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Modal from '../../../components/ui/Modal';
import { BookOpen, Users, Clock, MoreHorizontal, Plus, GraduationCap } from 'lucide-react';
import { addCourse } from '../../../store/schoolSlice';
import { useToast } from '../../../components/ui/Toast';

export default function AdminClasses() {
  const dispatch = useDispatch();
  const { success } = useToast();
  const courses = useSelector(state => state.school.courses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({ name: '', instructor: '', capacity: 30, schedule: 'Mon, Wed 09:00 AM' });

  const handleCreateCourse = (e) => {
    e.preventDefault();
    const id = `CLS${(courses.length + 1).toString().padStart(3, '0')}`;
    const courseToAdd = { 
      ...newCourse, 
      id, 
      students: 0, 
      status: 'Active', 
      color: `hsl(${Math.random() * 360}, 70%, 50%)` 
    };
    
    dispatch(addCourse(courseToAdd));
    setIsModalOpen(false);
    setNewCourse({ name: '', instructor: '', capacity: 30, schedule: 'Mon, Wed 09:00 AM' });
    success(`${newCourse.name} has been created and added to the schedule.`);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem' }}>Class & Course Management</h1>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} style={{ marginRight: 8 }} /> Create Course
        </Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {courses.map((course) => (
          <Card key={course.id} hoverEffect={true} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '1rem', background: `${course.color}20`, color: course.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', fontWeight: '700', color: 'var(--color-text-main)' }}>{course.name}</h3>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>{course.id}</span>
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
                  <MoreHorizontal size={20} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: 'var(--color-bg)', padding: '1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.5px' }}>Instructor</div>
                <div style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--color-text-main)' }}>{course.instructor}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.5px' }}>Schedule</div>
                <div style={{ fontWeight: '600', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--color-text-main)' }}><Clock size={12}/> {course.schedule}</div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontWeight: '500' }}><Users size={16}/> Enrolled Students</span>
                <span style={{ fontWeight: '700', color: course.students >= course.capacity ? 'var(--color-danger)' : 'var(--color-text-main)' }}>{course.students} / {course.capacity}</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'var(--color-bg)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(course.students / course.capacity) * 100}%`, background: course.students >= course.capacity ? 'var(--color-danger)' : course.color, borderRadius: '4px' }}></div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <Button variant="outline" size="sm" style={{ flex: 1, fontWeight: '600' }}>View Details</Button>
                <Button variant="outline" size="sm" style={{ flex: 1, fontWeight: '600' }}>Manage Roster</Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Create Course Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Course">
        <form onSubmit={handleCreateCourse} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'var(--color-primary-light)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GraduationCap size={32} />
                </div>
            </div>
            
            <div>
                <label className="form-label">Course Name</label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  placeholder="e.g. Advanced Chemistry"
                  value={newCourse.name}
                  onChange={e => setNewCourse({...newCourse, name: e.target.value})}
                />
            </div>

            <div>
                <label className="form-label">Instructor Name</label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  placeholder="e.g. Dr. Robert Brown"
                  value={newCourse.instructor}
                  onChange={e => setNewCourse({...newCourse, instructor: e.target.value})}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                    <label className="form-label">Max Capacity</label>
                    <input 
                      type="number" 
                      required 
                      className="form-input" 
                      value={newCourse.capacity}
                      onChange={e => setNewCourse({...newCourse, capacity: parseInt(e.target.value)})}
                    />
                </div>
                <div>
                    <label className="form-label">Default Schedule</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="e.g. Mon, Wed 09:00 AM"
                      value={newCourse.schedule}
                      onChange={e => setNewCourse({...newCourse, schedule: e.target.value})}
                    />
                </div>
            </div>

            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <Button variant="outline" type="button" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button variant="primary" type="submit">Create Course</Button>
            </div>
        </form>
      </Modal>
    </div>
  );
}
