import React from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, Target, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '6rem 5%', 
        background: 'linear-gradient(to right bottom, #EEF2FF, #FFFFFF)',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ flex: 1, zIndex: 2, maxWidth: '600px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}
          >
            The Future of <span className="text-gradient">Education Management</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}
          >
            A completely integrated, beautifully designed platform for schools, teachers, students, and parents.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', gap: '1rem' }}
          >
            <Button variant="primary" size="lg">Start Free Trial <ArrowRight size={20} style={{ marginLeft: 8 }} /></Button>
            <Button variant="secondary" size="lg">Watch Demo</Button>
          </motion.div>
        </div>
        
        {/* Abstract Hero Image / Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ flex: 1, position: 'relative', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{
            position: 'absolute', width: '400px', height: '400px',
            background: 'var(--gradient-primary)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            opacity: 0.1, filter: 'blur(30px)'
          }}></div>
          
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" 
            alt="Students on campus" 
            style={{ 
              width: '80%', height: 'auto', borderRadius: 'var(--radius-2xl)',
              boxShadow: 'var(--shadow-xl)', zIndex: 2, position: 'relative'
            }} 
          />
        </motion.div>
      </section>

      {/* Programs / Stats Section */}
      <section style={{ padding: '5rem 5%' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Smarter Ecosystem for Learning</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to orchestrate a modern educational environment precisely from one dashboard.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'Student Management', icon: <Users size={32} color="var(--color-primary)" />, desc: 'Track admissions, grades, and attendance seamlessly.' },
            { title: 'Digital Learning', icon: <BookOpen size={32} color="var(--color-secondary)" />, desc: 'Interactive course materials, assignments and online grading.' },
            { title: 'Smart Attendance', icon: <Calendar size={32} color="var(--color-accent)" />, desc: 'Automated attendance tracking and parent notifications.' }
          ].map((feature, i) => (
            <Card key={i} hoverEffect={true} style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <div style={{
                background: 'var(--color-primary-light)', width: '80px', height: '80px',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>{feature.desc}</p>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Testimonials / Stats */}
      <section style={{ 
        padding: '5rem 5%', 
        background: 'var(--color-text-main)', 
        color: 'white',
        borderRadius: 'var(--radius-2xl)',
        margin: '0 5%'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
          {[
            { label: 'Active Students', value: '15,000+', icon: <Users size={40} /> },
            { label: 'Certified Teachers', value: '450+', icon: <Award size={40} /> },
            { label: 'Success Rate', value: '99.8%', icon: <Target size={40} /> }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--color-secondary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'var(--font-family-heading)' }}>{stat.value}</div>
              <div style={{ color: 'var(--color-text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
