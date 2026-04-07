import React from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { motion } from 'framer-motion';
import { 
  BookOpen, Users, Calendar, Target, Award, ArrowRight,
  CheckCircle, MapPin, Mail, Phone, Star, Quote, ChevronRight, PlayCircle
} from 'lucide-react';

export default function Home() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', overflow: 'hidden' }}>
      
      {/* 1. HERO SECTION */}
      <section id="home" style={{ 
        minHeight: '100vh',
        padding: '8rem 5% 4rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, #EEF2FF 0%, #FFFFFF 100%)'
      }}>
        {/* Background Decorative Shapes */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'var(--color-primary)', opacity: 0.05, borderRadius: '50%', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '400px', height: '400px', background: 'var(--color-secondary)', opacity: 0.05, borderRadius: '50%', filter: 'blur(50px)' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', width: '100%', zIndex: 1 }}>
          <motion.div initial="hidden" animate="show" variants={staggerContainer} style={{ maxWidth: '650px' }}>
            <motion.div variants={fadeInUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-primary-light)', color: 'var(--color-primary)', padding: '0.5rem 1rem', borderRadius: '2rem', fontWeight: '600', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              <Star size={16} fill="currentColor" /> #1 Educational Platform of 2026
            </motion.div>
            <motion.h1 variants={fadeInUp} style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1.1', color: 'var(--color-text-main)' }}>
              Empowering <br />
              <span className="text-gradient">Next-Gen Minds</span>
            </motion.h1>
            <motion.p variants={fadeInUp} style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
              An all-in-one ecosystem uniting students, teachers, and parents. Experience seamless schooling, engaging digital classrooms, and smart operations.
            </motion.p>
            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', borderRadius: '3rem' }}>
                Start Free Trial <ArrowRight size={20} style={{ marginLeft: 8 }} />
              </Button>
              <Button variant="outline" size="lg" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', borderRadius: '3rem', border: '2px solid #E2E8F0', background: 'white' }}>
                <PlayCircle size={20} style={{ marginRight: 8, color: 'var(--color-primary)' }} /> Watch Demo
              </Button>
            </motion.div>
            
            <motion.div variants={fadeInUp} style={{ marginTop: '3rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', marginLeft: '10px' }}>
                {[1,2,3,4,5].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} style={{ width: '45px', height: '45px', borderRadius: '50%', border: '3px solid white', marginLeft: '-15px', boxShadow: 'var(--shadow-sm)' }} alt="User" />
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', color: 'var(--color-warning)', gap: '0.2rem' }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>Loved by 10,000+ Students</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div className="glass-panel" style={{ padding: '1rem', background: 'rgba(255,255,255,0.4)', borderRadius: 'var(--radius-2xl)' }}>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop" 
                alt="Students on campus" 
                style={{ width: '100%', height: 'auto', borderRadius: '1rem', boxShadow: 'var(--shadow-lg)' }} 
              />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="glass-panel"
              style={{ position: 'absolute', bottom: '-20px', left: '-40px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(255,255,255,0.95)' }}
            >
              <div style={{ background: '#10B981', padding: '0.8rem', borderRadius: '50%', color: 'white' }}>
                <CheckCircle size={24} />
              </div>
              <div>
                <p style={{ fontWeight: 'bold', color: 'var(--color-text-main)', fontSize: '1.1rem' }}>99.8% Success Rate</p>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>In all standard evaluations</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* 6. TESTIMONIALS */}
      <section id="testimonials" style={{ padding: '8rem 5%', background: '#0F172A', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40vw', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(79, 70, 229, 0.2))' }}></div>
        
        <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative', zIndex: 1 }}>
          <h4 style={{ color: 'var(--color-secondary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Success Stories</h4>
          <h2 style={{ fontSize: '3rem' }}>What Parents & Students Say</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', position: 'relative', zIndex: 1 }}>
          {[
            { text: "EduSaaS completely transformed how I keep track of my children's progress. The parent portal is incredibly intuitive.", author: "Amanda Clarke", role: "Parent", img: "https://i.pravatar.cc/150?img=47" },
            { text: "The digital learning environment made remote classes actually engaging. I've never felt more connected to my teachers.", author: "Thomas Wright", role: "High School Junior", img: "https://i.pravatar.cc/150?img=11" },
            { text: "As a teacher, the automated grading and smart attendance features have saved me over 15 hours a week. Truly revolutionary.", author: "Rebecca Lin", role: "Senior Educator", img: "https://i.pravatar.cc/150?img=5" }
          ].map((testimonial, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '3rem 2rem', borderRadius: 'var(--radius-xl)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Quote size={40} color="var(--color-secondary)" style={{ opacity: 0.5, marginBottom: '1.5rem' }} />
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', fontStyle: 'italic', color: '#E2E8F0' }}>"{testimonial.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={testimonial.img} alt={testimonial.author} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                <div>
                  <h4 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{testimonial.author}</h4>
                  <p style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '8rem 5%', background: 'var(--gradient-primary)', color: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Ready to transform your school?</h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Join hundreds of institutions worldwide that are redefining education. Start your journey with EduSaaS today.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Button variant="outline" style={{ background: 'white', color: 'var(--color-primary)', border: 'none', padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '3rem' }}>Get Started Free</Button>
          <Button variant="outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderRadius: '3rem', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>Schedule Demo</Button>
        </div>
      </section>

    </div>
  );
}
