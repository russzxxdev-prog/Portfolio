import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/russzxxdev-prog', icon: 'github' },
  { label: 'Facebook', href: 'https://www.facebook.com/Russzxx.05', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/its_russzxx', icon: 'instagram' },
  { label: 'Email', href: 'mailto:russelmonroy2@gmail.com', icon: 'email' },
];

const SocialIcon = ({ type }) => {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  switch (type) {
    case 'github':
      return (
        <svg {...commonProps}>
          <path d="M9 18c-4.5 1.5-4.5-2.5-6-3M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.56 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case 'facebook':
      return (
        <svg {...commonProps}>
          <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...commonProps}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'email':
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    default:
      return null;
  }
};

const skills = [
  { title: 'Programming Languages', icon: '💻', items: ['Python', 'Java', 'C/C++', 'JavaScript', 'PHP', 'SQL'] },
  { title: 'Web Development', icon: '🌐', items: ['HTML5', 'CSS3', 'React', 'Django', 'PHP', 'MySQL'] },
  { title: 'Mobile & Hybrid', icon: '📱', items: ['React Native', 'Hybrid Apps', 'Cross-platform'] },
  { title: 'IoT & Embedded', icon: '🔌', items: ['Arduino Mega', 'ESP32', 'Raspberry Pi', 'MikroTik', 'MQTT', 'Sensors'] },
  { title: 'Robotics', icon: '🤖', items: ['Autonomous Robots', '6-DOF Arm', 'AI Camera', 'Line Tracing', 'PID Control'] },
  { title: 'Desktop Software', icon: '🖥️', items: ['Java Swing', 'Python GUI', 'tkinter', 'Database Design'] },
];

const projects = [
  {
    name: "Teacher's Performance Evaluation System",
    type: 'Web App',
    description:
      'A comprehensive digital evaluation platform for academic institutions, featuring category scoring, analytics dashboards, and teacher performance insights.',
    tags: ['Django', 'Python', 'MySQL', 'JavaScript', 'Chart.js'],
    image: "Teacher's Performance Evaluation system.jpg",
    impact: 'Improved institutional evaluation workflows with structured dashboards and faster reporting.',
  },
  {
    name: 'Artistry Hub',
    type: 'Social Platform',
    description:
      'A creative social media app enabling artists to share works, gain followers, and interact with direct messages and real-time engagement features.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS3', 'HTML5'],
    image: 'artistry hub.jpg',
    impact: 'Created a digital community experience with user engagement features and portfolio sharing.',
  },
  {
    name: 'Business Permit Monitoring System',
    type: 'Government Platform',
    description:
      'A centralized system for local government permit tracking, renewals, status monitoring, and automated email alerts for compliance management.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Email Alerts'],
    image: 'Business Permit Monitoring System.jpg',
    impact: 'Streamlined local permit administration with real-time status tracking and alerts.',
  },
  {
    name: 'Company Employee Management System',
    type: 'Desktop App',
    description:
      'A polished employee management application with registration workflows, profile management, admin controls, and overseas inquiry tracking.',
    tags: ['Java', 'Java Swing', 'MySQL', 'JDBC'],
    image: 'Company Employee management system.jpg',
    impact: 'Helped organize employee records and internal operations in a clean desktop workflow.',
  },
  {
    name: 'Electronic Voting System',
    type: 'Secure Desktop System',
    description:
      'A secure digital election system built for institutional voting with authenticated access, real-time tallying, and protected record keeping.',
    tags: ['Java', 'MySQL', 'Java Swing'],
    image: 'Voting System.jpg',
    impact: 'Built a reliable voting platform focused on accuracy, transparency, and secured data handling.',
  },
  {
    name: 'Food Ordering System',
    type: 'Responsive Platform',
    description:
      'A user-friendly food ordering platform with menu browsing, cart management, and seamless order processing for business operations.',
    tags: ['JavaScript', 'PHP', 'MySQL', 'Responsive UI'],
    image: 'food ordering system.jpg',
    impact: 'Delivered a smooth ordering interface for business and customer-facing transactions.',
  },
  {
    name: 'Furtector',
    type: 'IoT Assistive Device',
    description:
      'An assistive navigation system for visually impaired users, combining ultrasonic sensing, water detection, and real-time proximity alerts via mobile feedback.',
    tags: ['React Native', 'ESP32', 'Ultrasonic', 'BLE'],
    image: 'furtector.jpg',
    impact: 'Enabled safer navigation assistance through real-time sensor feedback and emergency-aware user alerts.',
  },
  {
    name: 'Autonomous Mobile Robot',
    type: 'Robotics Project',
    description:
      'A self-driving robotic platform with computer vision, manipulator integration, and autonomous object interaction using a 6-DOF arm and AI camera.',
    tags: ['Arduino Mega', 'AI Camera', '6-DOF Arm', 'LiPo 12V'],
    image: 'Autonomous mobile robot.jpg',
    impact: 'Demonstrated autonomous robotics capabilities with machine perception and physical interaction.',
  },
  {
    name: 'Line Tracing Car',
    type: 'Embedded System',
    description:
      'An autonomous line-following vehicle utilizing IR sensors and PID control to maintain precise movement and navigation along a path.',
    tags: ['MCU', 'IR Array', 'PID Control', 'Motor Driver'],
    image: 'Line Tracing.jpg',
    impact: 'Showcased embedded control logic and precise navigation using sensor-driven intelligence.',
  },
  {
    name: 'Smart WiFi Vendo Machine',
    type: 'IoT Infrastructure',
    description:
      'A cashless WiFi vending machine built on MikroTik Hotspot technology for QR-based access, automated dispensing, and remote package control.',
    tags: ['MikroTik', 'RouterOS', 'QR Payment', 'Hotspot'],
    image: 'Smart wifi vendo.jpg',
    impact: 'Automated service delivery for WiFi access packages with remote managed workflows.',
  },
  {
    name: 'KeTox',
    type: 'Research Prototype',
    description:
      'KeTox predicts whether a small-molecule compound is likely to inhibit CYP3A4 using a hybrid Random Forest + GCN model, supporting PBPK-informed liver concentration analysis and explainability methods.',
    tags: ['ML', 'GCN', 'XAI', 'CYP3A4', 'PBPK'],
    image: 'Ketox.png',
    impact: 'Research-driven predictive modeling for drug metabolism and safety screening with explainable AI.',
  },
];

const achievements = [
  'Magna Cum Laude Graduate, BS Computer Science',
  'Dean’s List / Academic Excellence recognition',
  'Capstone and thesis project innovation award',
  'Competition programming finalist and academic recognition',
  'Best in On-the-Job Training recognition',
];

const experience = [
  {
    period: '2025 — 2026',
    role: 'Capstone Project Lead',
    place: 'Osmeña Colleges, BS Computer Science',
    detail:
      'Led the design and development of Furtector and AMR, handling architecture, hardware integration, firmware, and technical documentation for intelligent systems.',
  },
  {
    period: '2023 — 2026',
    role: 'Freelance Web & Software Developer',
    place: 'Independent / Self-Employed',
    detail:
      'Built institutional and custom software tools including teacher evaluation and permit monitoring systems, managing the full lifecycle from requirements to deployment.',
  },
  {
    period: '2025 — 2025',
    role: 'IoT & Robotics Developer',
    place: 'Personal Projects & Academic R&D',
    detail:
      'Created embedded and autonomous robotics systems such as Smart WiFi Vendo, Line Tracing Car, and Autonomous Mobile Robot, sharpening hands-on systems integration skills.',
  },
  {
    period: '2026 — 2026',
    role: 'Academic Tutor & Peer Mentor',
    place: 'Osmeña Colleges — CS Department',
    detail:
      'Mentored peers in programming fundamentals, data structures, and laboratory exercises while strengthening communication and problem-solving capabilities.',
  },
];

const baseImagePath = (file) => (file ? `/images/${encodeURIComponent(file)}` : '/images/download.jpg');

const handleImageError = (event) => {
  if (event.currentTarget.dataset.fallbackApplied === 'true') return;

  event.currentTarget.dataset.fallbackApplied = 'true';
  event.currentTarget.src = '/images/download.jpg';
};

function App() {
  const [theme, setTheme] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('portfolio-theme') || 'dark' : 'dark'));
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'Web Development', message: '' });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap';
    document.head.appendChild(link);
    return () => { if (document.head.contains(link)) document.head.removeChild(link); };
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setFormStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            project_type: formData.projectType,
            message: formData.message,
            to_email: 'russelmonroy2@gmail.com',
          },
          publicKey
        );

        setFormStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });
        setFormData({ name: '', email: '', projectType: 'Web Development', message: '' });
      } else {
        const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || 'New client'}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
        );

        window.location.href = `mailto:russelmonroy2@gmail.com?subject=${subject}&body=${body}`;
        setFormStatus({
          type: 'info',
          message: 'Your mail app opened with the message details, and you can also add EmailJS keys for direct sending.',
        });
      }
    } catch (error) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || 'New client'}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
      );

      window.location.href = `mailto:russelmonroy2@gmail.com?subject=${subject}&body=${body}`;
      setFormStatus({
        type: 'error',
        message: 'The direct send failed, so your email app opened instead. Add EmailJS keys to enable instant delivery.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="page-shell" id="top">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-name">Russel.dev</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileNavOpen((current) => !current)}
          >
            {mobileNavOpen ? '✕' : '☰'}
          </button>

          <a className="primary-button small hire-button" href="mailto:russelmonroy2@gmail.com">
            Hire Me
          </a>
        </div>
      </header>

      {mobileNavOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileNavOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <main>
        <section className="hero section reveal">
          <div className="hero-copy">
            <p className="eyebrow">Software Developer · IoT Innovator · Systems Builder</p>
            <h1>Building digital products and intelligent systems that move ideas forward.</h1>
            <p className="lead">
              BS Computer Science student with a strong foundation in full-stack development,
              embedded systems, robotics, and human-centered product design.
            </p>

            <div className="cta-row">
              <a className="primary-button" href="#projects">
                View My Work
              </a>
              <a className="secondary-button" href="mailto:russelmonroy2@gmail.com">
                Get In Touch
              </a>
            </div>

            <div className="social-row">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} aria-label={item.label} className="social-link">
                  <SocialIcon type={item.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <div className="portrait-glow" />
              <img src={baseImagePath('profile-removebg-preview.png')} alt="Russel A. Monroy portrait" />
              <div className="stat-badge badge-top">Available for new opportunities</div>
              <div className="stat-badge badge-bottom">10+ projects built</div>
            </div>
          </div>
        </section>

        <section className="metrics-strip reveal">
          <div className="metric-card">
            <span className="metric-number">10+</span>
            <span className="metric-label">Projects</span>
          </div>
          <div className="metric-card">
            <span className="metric-number">4</span>
            <span className="metric-label">Tech Focus Areas</span>
          </div>
          <div className="metric-card">
            <span className="metric-number">2022–2026</span>
            <span className="metric-label">Computer Science Journey</span>
          </div>
          <div className="metric-card highlight">
            <span className="metric-number">Magna Cum Laude</span>
            <span className="metric-label">Academic Distinction</span>
          </div>
        </section>

        <section id="about" className="section about-grid reveal">
          <div className="section-heading compact">
            <p className="eyebrow">About</p>
            <h2>Passionate builder of digital solutions</h2>
          </div>

          <div className="about-content">
            <p>
              I’m Russel A. Monroy, a BS Computer Science graduate with Magna Cum Laude honors,
              dedicated to building systems that connect software, hardware, and real-world needs.
            </p>
            <p>
              My expertise stretches from crafting responsive web applications and desktop systems to
              designing embedded IoT solutions and autonomous robots. I thrive in interdisciplinary
              environments where code, engineering, and innovation meet.
            </p>
            <div className="mini-stats">
              <div>
                <strong>4</strong>
                <span>Tech categories</span>
              </div>
              <div>
                <strong>2022–2026</strong>
                <span>Computer Science journey</span>
              </div>
              <div>
                <strong>Magna Cum Laude</strong>
                <span>Academic distinction</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">What I work with</p>
            <h2>A versatile toolkit across software, hardware, and intelligent systems.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article key={skill.title} className="skill-card">
                <div className="skill-card-top">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="card-dot" />
                </div>
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="section-heading">
            <p className="eyebrow">Featured Projects</p>
            <h2>Real solutions built across web, desktop, mobile, and embedded systems.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card" onClick={() => setSelectedProject(project)}>
                <div className="project-image-wrap">
                  <img src={baseImagePath(project.image)} alt={project.name} onError={handleImageError} />
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span className="type-pill">{project.type}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="awards-section reveal">
          <div className="section-heading compact">
            <p className="eyebrow">Recognition</p>
            <h2>Awards &amp; achievements</h2>
          </div>

          <div className="award-list">
            {achievements.map((award) => (
              <div key={award} className="award-item">
                <span>🏅</span>
                <p>{award}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section reveal">
          <div className="section-heading compact">
            <p className="eyebrow">Background & experience</p>
            <h2>Building real solutions from classroom to the real world.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.period}-${item.role}`} className="timeline-item">
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section reveal">
          <div className="section-heading compact">
            <p className="eyebrow">Contact</p>
            <h2>Let’s work together.</h2>
          </div>

          <div className="contact-layout">
            <div className="contact-info-card">
              <p>
                Whether it's a web app, IoT system, desktop software, or a full tech solution, I’m ready to
                build it with you.
              </p>

              <div className="contact-links">
                <a href="mailto:russelmonroy2@gmail.com">russelmonroy2@gmail.com</a>
                <a href="https://www.instagram.com/its_russzxx" target="_blank" rel="noreferrer">
                  @its_russzxx on Instagram
                </a>
                <a href="https://www.facebook.com/Russzxx.05" target="_blank" rel="noreferrer">
                  Russzxx.05 on Facebook
                </a>
                <a href="https://github.com/russzxxdev-prog" target="_blank" rel="noreferrer">
                  github.com/russzxxdev-prog
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row two-col">
                <label>
                  <span>Your Name</span>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                </label>

                <label>
                  <span>Email Address</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                </label>
              </div>

              <label>
                <span>Project Type</span>
                <select name="projectType" value={formData.projectType} onChange={handleChange}>
                  <option>Web Development</option>
                  <option>IoT / Embedded</option>
                  <option>Desktop Software</option>
                  <option>Robotics</option>
                  <option>Research / AI</option>
                  <option>Other</option>
                </select>
              </label>

              <label>
                <span>Message</span>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your idea..." required />
              </label>

              {formStatus.message && <p className={`form-status ${formStatus.type}`}>{formStatus.message}</p>}

              <button type="submit" className="primary-button submit-button" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Russel A. Monroy — All rights reserved</span>
        <span>Masbate, Philippines</span>
      </footer>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>
            <div className="modal-image-wrap">
              <img src={baseImagePath(selectedProject.image)} alt={selectedProject.name} onError={handleImageError} />
            </div>
            <div className="modal-content">
              <span className="type-pill">{selectedProject.type}</span>
              <h3>{selectedProject.name}</h3>
              <p>{selectedProject.description}</p>
              <div className="tag-list">
                {selectedProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-impact">
                <strong>Impact</strong>
                <p>{selectedProject.impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
