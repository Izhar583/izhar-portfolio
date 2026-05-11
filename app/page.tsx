import BgCanvas from '@/components/BgCanvas';
import Cursor from '@/components/Cursor';
import HeroCanvas from '@/components/HeroCanvas';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Cursor />
      <BgCanvas />
      <ScrollReveal />

      {/* NAV */}
      <nav>
        <a href="#hero" className="logo">IH<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#about">about</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#experience">experience</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
        <a href="#" className="nav-cta">Download CV</a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="blink-dot" />
            Available for work
          </div>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.82rem', color: 'var(--cyan)', letterSpacing: '0.08em', marginBottom: '1rem' }}>
            {'< Front-End Developer & SEO Specialist />'}
          </p>
          <h1 className="hero-h1">
            Hi, I&apos;m<br />
            <span className="gradient-text">Izhar Ul Haq</span>
          </h1>
          <p className="hero-sub">Building performant web apps &amp; search-optimized digital experiences from Lahore, Pakistan.</p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View My Work →</a>
            <a href="#contact" className="btn-ghost">Get In Touch</a>
          </div>
          <div className="socials">
            <a href="#" className="social-link" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
            </a>
            <a href="https://linkedin.com/in/izhar-ulhaq" className="social-link" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="mailto:izharjoiya0@gmail.com" className="social-link" title="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></svg>
            </a>
          </div>
        </div>
        <div className="hero-canvas-wrap">
          <HeroCanvas />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-num">01</div>
        <div className="reveal">
          <p className="section-label">// about me</p>
          <h2 className="section-h2">Who I Am</h2>
          <div className="about-grid">
            <div className="about-img-wrap">
              <div className="about-img-card">
                <div className="about-avatar">
                  <img src="/profile/izhar.png" alt="Profile" style={{ width: '100%', height: '100%', borderRadius: 'inherit', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div className="stat-badge">Software Engineer</div>
              </div>
            </div>
            <div className="about-text">
              <p>I&apos;m a BS Software Engineering student at Arid Institute of Management Sciences, Lahore — building at the intersection of front-end engineering and SEO. I craft fast, responsive web apps with React.js and Next.js, and bring 6+ months of search optimization expertise to ensure every site I build ranks as well as it performs.</p>
              <div className="stats-grid">
                <div className="stat-card"><div className="stat-val">2+</div><div className="stat-label">Years Learning</div></div>
                <div className="stat-card"><div className="stat-val">3</div><div className="stat-label">Internship Roles</div></div>
                <div className="stat-card"><div className="stat-val">React</div><div className="stat-label">Next.js · Node.js</div></div>
                <div className="stat-card"><div className="stat-val">🇵🇰</div><div className="stat-label">Lahore, Pakistan</div></div>
              </div>
              <a href="#" className="btn-primary" style={{ display: 'inline-flex' }}>Download Resume ↓</a>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-num">02</div>
        <div className="reveal">
          <p className="section-label">// technical skills</p>
          <h2 className="section-h2">What I Work With</h2>
          <div className="skills-grid">
            {[
              { icon: '⚡', title: 'Web Development', tags: ['React.js', 'Next.js', 'Node.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'WordPress'] },
              { icon: '📈', title: 'SEO & Marketing', tags: ['On-Page SEO', 'Technical SEO', 'Link Building', 'Keyword Research', 'Off-Page SEO'] },
              { icon: '🔍', title: 'SEO Tools', tags: ['Search Console', 'Google Analytics', 'SEMrush', 'Ahrefs', 'Screaming Frog'] },
              { icon: '💻', title: 'Programming', tags: ['JavaScript', 'Python'] },
              { icon: '🛡️', title: 'Cybersecurity', tags: ['SIEM', 'Threat Analysis', 'Vulnerability Assessment'] },
              { icon: '🧠', title: 'Deep Learning', tags: ['Python ML', 'DL Frameworks', 'Foundational'] },
            ].map(s => (
              <div key={s.title} className="skill-card">
                <div className="skill-icon">{s.icon}</div>
                <div className="skill-title">{s.title}</div>
                <div className="skill-tags">{s.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-num">03</div>
        <div className="reveal">
          <p className="section-label">// work experience</p>
          <h2 className="section-h2">Where I&apos;ve Worked</h2>
          <div className="timeline">
            {[
              {
                role: 'Front-End Web Developer Intern', date: 'Dec 2025 – Present',
                company: 'IT Kumail – ITK Online Solutions · Lahore, Pakistan',
                bullets: [
                  'Developing and maintaining web pages using React.js and Next.js with focus on performance and responsiveness',
                  'Collaborating with the development team to build scalable front-end components and user interfaces',
                  'Integrating back-end APIs with front-end interfaces using Node.js',
                  'Applying SEO best practices during web development to ensure search-engine-friendly output',
                ],
              },
              {
                role: 'Junior SEO Executive', date: 'Oct 2025 – Dec 2025',
                company: 'IT Kumail – ITK Online Solutions · Lahore, Pakistan',
                bullets: [
                  'Executed on-page SEO: meta tag optimization, content optimization, internal linking',
                  'Technical SEO: site audits and resolving crawl issues using Screaming Frog',
                  'Conducted keyword research and performance tracking using SEMrush and Ahrefs',
                  'Analyzed website data through Google Search Console and Google Analytics',
                ],
              },
              {
                role: 'Link Builder', date: 'Jul 2025 – Oct 2025',
                company: 'IT Kumail – ITK Online Solutions · Lahore, Pakistan',
                bullets: [
                  'Executed outreach strategies to acquire high-quality backlinks from authoritative domains',
                  'Performed off-page SEO activities to improve domain authority and organic search rankings',
                ],
              },
              {
                role: 'Cyber Security Analyst', date: 'Jul 2025 – Dec 2025',
                company: 'DevelopersHub Corporation · Islamabad, Pakistan',
                bullets: [
                  'Monitored and analyzed security events using SIEM tools to detect potential threats',
                  'Conducted vulnerability assessments and identified cybersecurity risks across systems',
                  'Prepared security reports and documented threat landscape findings for team review',
                ],
              },
            ].map(exp => (
              <div key={exp.role} className="exp-entry">
                <div className="exp-header">
                  <span className="exp-role">{exp.role}</span>
                  <span className="exp-date">{exp.date}</span>
                </div>
                <div className="exp-company">{exp.company}</div>
                <ul className="exp-bullets">{exp.bullets.map(b => <li key={b}>{b}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-num">04</div>
        <div className="reveal">
          <p className="section-label">// featured projects</p>
          <h2 className="section-h2">Things I&apos;ve Built</h2>
          <div className="projects-grid">
            {[
              { emoji: '📊', bg: 'p1', title: 'SEO Dashboard', desc: 'Real-time SEO metrics dashboard with keyword tracking, traffic analytics, and site audit reports built with Next.js.', tech: ['Next.js', 'TailwindCSS', 'Recharts', 'GA API'] },
              { emoji: '🌐', bg: 'p2', title: 'Portfolio CMS', desc: 'Custom WordPress theme with built-in on-page and technical SEO optimization — structured data, schema markup, and more.', tech: ['WordPress', 'PHP', 'On-Page SEO'] },
              { emoji: '🛡️', bg: 'p3', title: 'Threat Monitor', desc: 'Security event logger and visualizer with SIEM integration — maps threat activity across systems with real-time alerting.', tech: ['Python', 'SIEM', 'D3.js'] },
            ].map(p => (
              <div key={p.title} className="project-card">
                <div className={`project-img ${p.bg}`}>{p.emoji}</div>
                <div className="project-body">
                  <div className="project-title">{p.title}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-tech">{p.tech.map(t => <span key={t} className="tag">{t}</span>)}</div>
                  <div className="project-links">
                    <a href="#" className="project-link">GitHub ↗</a>
                    <a href="#" className="project-link">Live ↗</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications">
        <div className="section-num">05</div>
        <div className="reveal">
          <p className="section-label">// certifications</p>
          <h2 className="section-h2">Credentials</h2>
          <div className="certs-grid">
            {[
              { icon: '🔐', name: 'Career Essentials in Cybersecurity', issuer: 'Microsoft & LinkedIn Learning' },
              { icon: '🌐', name: 'The Cybersecurity Threat Landscape', issuer: 'LinkedIn Learning' },
              { icon: '🛡️', name: 'Introduction to Cybersecurity', issuer: 'LinkedIn Learning' },
            ].map(c => (
              <div key={c.name} className="cert-card">
                <div className="cert-icon">{c.icon}</div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <div className="cert-badge">Verified</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-num">06</div>
        <div className="reveal">
          <p className="section-label">// get in touch</p>
          <h2 className="contact-big">Let&apos;s Build<br /><span className="gradient-text">Something Together.</span></h2>
          <p className="contact-sub">Open to internships, freelance work, and full-time opportunities.</p>
          <div className="contact-grid">
            <div className="contact-info">
              <a href="mailto:izharjoiya0@gmail.com" className="contact-pill"><span className="contact-pill-icon">📧</span> izharjoiya0@gmail.com</a>
              <a href="tel:+923167097583" className="contact-pill"><span className="contact-pill-icon">📱</span> +92 316 7097583</a>
              <a href="#" className="contact-pill"><span className="contact-pill-icon">📍</span> Lahore, Pakistan</a>
              <a href="https://linkedin.com/in/izhar-ulhaq" className="contact-pill"><span className="contact-pill-icon">🔗</span> linkedin.com/in/izhar-ulhaq</a>
            </div>
            <form className="contact-form" action="mailto:izharjoiya0@gmail.com" method="post">
              <input type="text" placeholder="Your Name" className="form-input" required />
              <input type="email" placeholder="Your Email" className="form-input" required />
              <textarea placeholder="Your Message..." className="form-input" required />
              <button type="submit" className="btn-send">Send Message →</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-text">© 2025 Izhar Ul Haq</span>
        <span className="footer-built">Designed &amp; Built by <span>Izhar Ul Haq</span> · Lahore 🇵🇰</span>
        <span className="footer-text">izharjoiya0@gmail.com</span>
      </footer>
    </>
  );
}
