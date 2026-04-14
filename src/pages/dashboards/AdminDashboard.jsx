import React from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { motion } from 'framer-motion';
import { 
  Users, DollarSign, Activity, BookOpen, TrendingUp, ArrowUpRight, 
  Calendar, ShieldCheck, Mail, Bell, Search, Filter
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const financialData = [
  { month: 'Jan', amount: 85, trend: '+4%' },
  { month: 'Feb', amount: 72, trend: '-2%' },
  { month: 'Mar', amount: 94, trend: '+12%' },
  { month: 'Apr', amount: 88, trend: '+5%' },
  { month: 'May', amount: 98, trend: '+8%' },
  { month: 'Jun', amount: 105, trend: '+15%' },
];

const attendanceBars = [95, 92, 98, 90, 97];

export default function AdminDashboard() {
  const navigate = useNavigate();

  const statCards = [
    { title: 'Total Students', value: '3,245', sub: '+124 this month', icon: <Users size={22} />, color: 'var(--color-primary)' },
    { title: 'Faculty Members', value: '142', sub: '98% Active', icon: <BookOpen size={22} />, color: 'var(--color-secondary)' },
    { title: 'Fiscal Revenue', value: '$124,500', sub: '↑ 8.2% Growth', icon: <DollarSign size={22} />, color: 'var(--color-success)' },
    { title: 'System Uptime', value: '99.9%', sub: 'No incidents', icon: <ShieldCheck size={22} />, color: 'var(--color-accent)' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-0.03em' }}>Institutional Intelligence</h1>
          <p style={{ color: 'var(--color-text-muted)', margin: 0, fontWeight: '600' }}>Admin Command Center • Academy Global Campus</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.75rem 1.25rem', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <Calendar size={18} color="var(--color-text-muted)" />
                <span style={{ fontWeight: '800', fontSize: '0.9rem' }}>Oct 2026</span>
            </div>
            <button style={{ padding: '0.75rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', color: 'var(--color-text-main)', boxShadow: 'var(--shadow-sm)' }}>
                <Filter size={20} />
            </button>
        </div>
      </div>

      {/* KPI Cards with Premium Styling */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {statCards.map((stat, idx) => (
          <Card key={idx} hoverEffect={true} style={{ borderBottom: `4px solid ${stat.color}40`, padding: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div style={{ background: `${stat.color}15`, color: stat.color, padding: '0.9rem', borderRadius: '1.25rem' }}>{stat.icon}</div>
              <span style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--color-success)', background: 'var(--color-success)10', padding: '0.2rem 0.6rem', borderRadius: '2rem' }}>Live</span>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem' }}>{stat.title}</div>
              <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-text-main)', marginBottom: '0.25rem' }}>{stat.value}</h3>
              <p style={{ fontSize: '0.8rem', color: stat.title.includes('Revenue') ? 'var(--color-success)' : 'var(--color-text-muted)', fontWeight: '700', margin: 0 }}>{stat.sub}</p>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
        {/* Dynamic Financial Inflow Chart */}
        <Card style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.25rem' }}>Financial Inflow Trend</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: '600' }}>Aggregated fee collections and institutional grants</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--gradient-primary)' }}></div>
                    <span style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--color-text-muted)' }}>Revenue</span>
                </div>
                <Button variant="outline" size="sm">Download Analytics</Button>
            </div>
          </div>
          
          <div style={{ height: '240px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 1rem', borderBottom: '2px solid var(--color-bg)' }}>
            {financialData.map((d, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flex: 1 }}>
                <div style={{ position: 'relative', width: '45px', display: 'flex', justifyContent: 'center' }}>
                    <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${d.amount * 2}px` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                        style={{ width: '32px', background: 'var(--gradient-primary)', borderRadius: '6px 6px 0 0', position: 'relative', boxShadow: '0 4px 15px rgba(79, 70, 229, 0.2)' }}
                    >
                        <div style={{ position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)', fontSize: '0.75rem', fontWeight: '900', color: 'var(--color-text-main)' }}>{d.amount}k</div>
                    </motion.div>
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--color-text-muted)' }}>{d.month}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Global Attendance Health */}
        <Card style={{ padding: '2.5rem' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '900', marginBottom: '1rem' }}>Institute Health</h3>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '2.5rem' }}>Live presence across all faculties</p>
          
          <div style={{ position: 'relative', width: '100%', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
            <svg style={{ transform: 'rotate(-900deg)', width: '180px', height: '180px' }}>
                <circle cx="90" cy="90" r="80" stroke="var(--color-bg)" strokeWidth="12" fill="none" />
                <motion.circle 
                    cx="90" cy="90" r="80" stroke="var(--color-secondary)" strokeWidth="12" fill="none" 
                    strokeDasharray="502"
                    initial={{ strokeDashoffset: 502 }}
                    whileInView={{ strokeDashoffset: 502 - (502 * 0.96) }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    strokeLinecap="round"
                />
            </svg>
            <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-text-main)' }}>96%</div>
                <div style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--color-success)', textTransform: 'uppercase' }}>Optimal</div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {['Students', 'Faculty', 'Staff'].map((label, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--color-text-main)' }}>{label}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '900', color: 'var(--color-secondary)' }}>{i === 0 ? '94%' : i === 1 ? '98.5%' : '93%'}</span>
                </div>
            ))}
          </div>
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '2rem' }}>
        <Card style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '900' }}>Immediate Actions Required</h3>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{ padding: '0.4rem 0.8rem', background: 'var(--color-danger)15', color: 'var(--color-danger)', borderRadius: 'var(--radius-md)', fontSize: '0.75rem', fontWeight: '900' }}>3 Urgent</span>
                </div>
            </div>
            <div style={{ padding: '1.5rem 2rem' }}>
                {[
                    { task: 'Approve Faculty Leave Request (Dr. Watson)', priority: 'High', icon: <Mail size={16} /> },
                    { task: 'Quarterly Financial Audit Preparation', priority: 'Medium', icon: <TrendingUp size={16} /> },
                    { task: 'New Student Admission Verification (42 Students)', priority: 'High', icon: <Users size={16} /> },
                ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', marginBottom: i === 2 ? 0 : '1rem', transition: 'all 0.2s', cursor: 'pointer' }}>
                        <div style={{ color: 'var(--color-primary)' }}>{item.icon}</div>
                        <div style={{ flex: 1, fontWeight: '700', fontSize: '0.95rem', color: 'var(--color-text-main)' }}>{item.task}</div>
                        <ArrowUpRight size={18} color="var(--color-text-muted)" />
                    </div>
                ))}
            </div>
        </Card>

        <Card style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '900', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Bell size={20} color="var(--color-warning)" /> Critical Notifications
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                    { title: 'Server Maintenance', time: 'In 2 hours', desc: 'System will be unavailable for 15 mins.', color: 'var(--color-danger)' },
                    { title: 'New Admissions', time: '1 hour ago', desc: '42 applications pending review.', color: 'var(--color-info)' },
                    { title: 'Payment Gateway', time: 'Online', desc: 'Automatic fee processing active.', color: 'var(--color-success)' },
                ].map((note, i) => (
                    <div key={i} style={{ paddingLeft: '1.25rem', borderLeft: `3px solid ${note.color}`, position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                            <span style={{ fontSize: '0.95rem', fontWeight: '900', color: 'var(--color-text-main)' }}>{note.title}</span>
                            <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--color-text-muted)' }}>{note.time}</span>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '600', margin: 0 }}>{note.desc}</p>
                    </div>
                ))}
            </div>
            <Button variant="outline" style={{ width: '100%', marginTop: '2rem', fontWeight: '800' }}>Admin Log History</Button>
        </Card>
      </div>
    </div>
  );
}
