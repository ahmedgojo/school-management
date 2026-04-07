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

      {/* 2. ABOUT SCHOOL */}
      <section id="about" style={{ padding: '8rem 5%', background: 'white' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" style={{ borderRadius: 'var(--radius-2xl)', width: '100%', boxShadow: 'var(--shadow-xl)' }} alt="Library" />
            <div style={{ position: 'absolute', top: '2rem', right: '-2rem', background: 'var(--color-primary)', color: 'white', padding: '2rem', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}>
              <h3 style={{ fontSize: '3rem', margin: 0, lineHeight: 1 }}>25+</h3>
              <p style={{ fontSize: '1rem', opacity: 0.9 }}>Years of Excellence</p>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>About Our Institution</h4>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>Inspiring Growth, Fostering Innovation</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              We believe in nurturing individual potential through a carefully crafted curriculum and state-of-the-art facilities. Our mission is to prepare students to thrive in a rapidly changing world by instilling critical thinking and ethical values.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                'Global Standard Curriculum and Advanced Digital Classes',
                'Highly Qualified & Certified Educators',
                'Comprehensive Extracurricular & Sports Programs'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text-main)', fontWeight: '500' }}>
                  <CheckCircle color="var(--color-success)" size={20} /> {item}
                </li>
              ))}
            </ul>
            <Button variant="outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              Learn More About Us <ChevronRight size={18} />
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6rem', background: 'var(--gradient-primary)', padding: '3rem 5%', borderRadius: 'var(--radius-2xl)', color: 'white', boxShadow: 'var(--shadow-lg)' }}>
          {[
            { label: 'Enrolled Students', value: '15,000+', icon: <Users size={32} /> },
            { label: 'Expert Mentors', value: '450+', icon: <Award size={32} /> },
            { label: 'Campus Acres', value: '120', icon: <MapPin size={32} /> },
            { label: 'Global Awards', value: '50+', icon: <Target size={32} /> }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', opacity: 0.8 }}>{stat.icon}</div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'var(--font-family-heading)', marginBottom: '0.5rem' }}>{stat.value}</div>
              <div style={{ opacity: 0.9, fontSize: '1.1rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROGRAMS / SERVICES */}
      <section id="programs" style={{ padding: '8rem 5%', background: '#F8FAFC' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
          <h4 style={{ color: 'var(--color-secondary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Our Ecosystem</h4>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Smarter Tools for Modern Learning</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
            Everything you need to orchestrate a modern educational environment precisely from one single, unified platform.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'Student Management', icon: <Users size={32} color="#4F46E5" />, desc: 'Track admissions, demographics, grades, and behavioral records seamlessly.', color: '#EEF2FF' },
            { title: 'Digital Learning', icon: <BookOpen size={32} color="#06B6D4" />, desc: 'Interactive course materials, assignments, and online grading rubrics.', color: '#ECFEFF' },
            { title: 'Smart Attendance', icon: <Calendar size={32} color="#F43F5E" />, desc: 'Biometric & RFID integration with instant parent notifications.', color: '#FFF1F2' },
            { title: 'Parent Portal', icon: <Target size={32} color="#10B981" />, desc: 'Real-time academic tracking, fee payments, and communication.', color: '#ECFDF5' },
          ].map((feature, i) => (
            <Card key={i} hoverEffect={true} style={{ padding: '3rem 2rem', background: 'white', border: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: feature.color, borderRadius: '50%', opacity: 0.5 }}></div>
              <div style={{ background: feature.color, width: '70px', height: '70px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>{feature.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>{feature.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. TEACHERS SECTION */}
      <section id="teachers" style={{ padding: '8rem 5%', background: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div style={{ maxWidth: '600px' }}>
             <h4 style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Faculty</h4>
             <h2 style={{ fontSize: '3rem' }}>Meet Our Exceptional Educators</h2>
          </div>
          <Button variant="outline">View All Teachers</Button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {[
            { name: 'Dr. Sarah Jenkins', role: 'Head of Sciences', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop' },
            { name: 'Prof. Mark Davis', role: 'Mathematics Lead', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop' },
            { name: 'Elena Rodríguez', role: 'Arts & Humanities', img: 'https://images.unsplash.com/photo-1580894732444-8ecded790047?q=80&w=600&auto=format&fit=crop' },
            { name: 'James Wilson', role: 'Physical Education', img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=600&auto=format&fit=crop' }
          ].map((teacher, i) => (
            <div key={i} style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: '#F8FAFC', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <img src={teacher.img} alt={teacher.name} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.3rem' }}>{teacher.name}</h3>
                <p style={{ color: 'var(--color-primary)', fontWeight: '500' }}>{teacher.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GALLERY */}
      <section id="gallery" style={{ padding: '8rem 5%', background: '#F8FAFC' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Campus Life Highlights</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Glimpses into our vibrant community, modern facilities, and student activities.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', gridAutoRows: '250px' }}>
          <div style={{ gridColumn: 'span 2', gridRow: 'span 2', borderRadius: '1rem', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} alt="Campus Event" onMouseEnter={e => e.target.style.transform = 'scale(1.05)'} onMouseLeave={e => e.target.style.transform = 'scale(1)'}/>
          </div>
          <div style={{ borderRadius: '1rem', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} alt="Classroom" onMouseEnter={e => e.target.style.transform = 'scale(1.05)'} onMouseLeave={e => e.target.style.transform = 'scale(1)'}/>
          </div>
          <div style={{ borderRadius: '1rem', overflow: 'hidden' }}>
             <img src="https://images.unsplash.com/photo-1511629091441-ee461463814a?q=80&w=600&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} alt="Graduation" onMouseEnter={e => e.target.style.transform = 'scale(1.05)'} onMouseLeave={e => e.target.style.transform = 'scale(1)'}/>
          </div>
          <div style={{ gridColumn: 'span 3', height: '300px', borderRadius: '1rem', overflow: 'hidden' }}>
             <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1600&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} alt="Library Hall" onMouseEnter={e => e.target.style.transform = 'scale(1.05)'} onMouseLeave={e => e.target.style.transform = 'scale(1)'}/>
          </div>
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

      {/* 7. NEWS & EVENTS */}
      <section id="news" style={{ padding: '8rem 5%', background: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem' }}>Latest Announcements</h2>
          </div>
          <Button variant="outline">View All News</Button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { title: "Annual Science Fair 2026: Innovations for Tomorrow", date: "April 15, 2026", category: "Event", img: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=600&auto=format&fit=crop" },
            { title: "School Board Approves New Digital Arts Curriculum", date: "April 10, 2026", category: "Academic", img: "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?q=80&w=600&auto=format&fit=crop" },
            { title: "Varsity Basketball Team Secures Regional Championship", date: "April 02, 2026", category: "Sports", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop" }
          ].map((news, i) => (
            <Card key={i} hoverEffect={true} style={{ overflow: 'hidden', padding: 0 }}>
              <img src={news.img} alt={news.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>
                  <span>{news.date}</span>
                  <span style={{ color: 'var(--color-primary)' }}>{news.category}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4' }}>{news.title}</h3>
                <a href="#" style={{ color: 'var(--color-primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>Read More <ArrowRight size={16} /></a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 8. CONTACT */}
      <section id="contact" style={{ padding: '8rem 5%', background: '#F8FAFC' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <h4 style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Get In Touch</h4>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>We'd Love To Hear From You</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '3rem' }}>
              Whether you have questions about admissions, our programs, or want to schedule a campus tour, our team is ready to answer all your queries.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--color-primary-light)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Our Location</h4>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>742 Evergreen Terrace<br/>Springfield, EduState 45890</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--color-primary-light)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email Address</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>admissions@edusaas.edu</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--color-primary-light)', padding: '1rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Phone Number</h4>
                  <p style={{ color: 'var(--color-text-muted)' }}>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '3rem', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Send Us a Message</h3>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>First Name</label>
                  <input type="text" placeholder="John" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', outline: 'none' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Last Name</label>
                  <input type="text" placeholder="Doe" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', outline: 'none' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Your Message</label>
                <textarea rows="4" placeholder="How can we help you?" style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--color-border)', outline: 'none', resize: 'vertical' }}></textarea>
              </div>
              <Button variant="primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>Send Message</Button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
