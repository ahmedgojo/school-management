import React from 'react';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { UserPlus, Save, X, BookOpen, Fingerprint, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../../components/ui/Toast';

export default function TeacherAddStudent() {
  const navigate = useNavigate();
  const { success } = useToast();

  const handleSave = (e) => {
    e.preventDefault();
    success("Student registration request submitted to Administration for final approval.");
    navigate('/dashboard/teacher/students');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <button 
            onClick={() => navigate('/dashboard/teacher/students')}
            style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', marginBottom: '0.5rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            ← Back to Student Roster
          </button>
          <h1 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <UserPlus size={28} /> New Student Admission
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="outline" onClick={() => navigate('/dashboard/teacher/students')} style={{ fontWeight: '600' }}>
            <X size={18} style={{ marginRight: 8 }} /> Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} style={{ gap: '0.6rem', fontWeight: '800' }}>
            <Save size={18} /> Submit Application
          </Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Card style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Fingerprint size={20} color="var(--color-primary)" /> Basic Identification
                </h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label className="form-label">First Name</label>
                            <input type="text" placeholder="e.g. John" className="form-input" required />
                        </div>
                        <div>
                            <label className="form-label">Last Name</label>
                            <input type="text" placeholder="e.g. Doe" className="form-input" required />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label className="form-label">Date of Birth</label>
                            <input type="date" className="form-input" required />
                        </div>
                        <div>
                            <label className="form-label">Gender Identity</label>
                            <select className="form-input" style={{ cursor: 'pointer' }}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Prefer not to say</option>
                            </select>
                        </div>
                    </div>
                </form>
            </Card>

            <Card style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <BookOpen size={20} color="var(--color-secondary)" /> Academic Placement
                </h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div>
                            <label className="form-label">Assigned Class / Grade</label>
                            <select className="form-input" style={{ cursor: 'pointer' }}>
                                <option>Physics 101 - Sec A</option>
                                <option>Physics 101 - Sec B</option>
                                <option>Advanced Mathematics</option>
                            </select>
                        </div>
                        <div>
                            <label className="form-label">Entry Session</label>
                            <select className="form-input" style={{ cursor: 'pointer' }}>
                                <option>Fall 2026</option>
                                <option>Spring 2027</option>
                            </select>
                        </div>
                    </div>
                </form>
            </Card>
        </div>

        <div>
            <Card style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--color-bg)', border: '2px dashed var(--color-border)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <UserPlus size={40} color="var(--color-text-muted)" />
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>Student Avatar</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Drag and drop or click to upload official student photo.</p>
                <Button variant="outline" size="sm" style={{ width: '100%', fontWeight: '700' }}>Select File</Button>
            </Card>

            <div style={{ marginTop: '1.5rem' }}>
                <Card style={{ background: 'var(--color-info-light)', border: '1px solid var(--color-info)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <Calendar size={20} color="var(--color-info)" style={{ flexShrink: 0 }} />
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-info)', margin: 0, fontWeight: '600', lineHeight: 1.4 }}>
                        Faculty admission requests are processed by the Registrar office within 24 hours.
                    </p>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
