import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Bot, Braces,
  Github, Linkedin, Mail, Menu, Radio, Terminal, X,
  Workflow, ExternalLink
} from 'lucide-react'

type ProjectStatus = 'In progress' | 'Planned'

const skills = [
  { icon: Bot, title: 'ROS 2 & Robotics', items: ['Nodes, topics, services & actions', 'TF2 coordinate frames', 'URDF robot descriptions', 'Nav2 navigation concepts'] },
  { icon: Braces, title: 'Programming', items: ['C++ and object-oriented programming', 'Python automation & prototyping', 'ROS 2 packages', 'Data processing'] },
  { icon: Workflow, title: 'Simulation & Control', items: ['Gazebo and RViz2', 'MATLAB numerical computing', 'Simulink block diagrams', 'PID control fundamentals'] },
  { icon: Terminal, title: 'Engineering Tools', items: ['Linux / Ubuntu command line', 'Git and version control', 'CMake and colcon', 'Debugging workflows'] },
]

const projects: { number: string; title: string; category: string; description: string; stack: string[]; status: ProjectStatus; icon: typeof Bot; accent: string }[] = [
  {
    number: '01', title: 'Autonomous Mobile Robot', category: 'MOBILE ROBOTICS',
    description: 'A simulation-first mobile robotics project exploring robot description, sensor integration, odometry, coordinate frames, and autonomous navigation with ROS 2.',
    stack: ['ROS 2 Jazzy', 'C++ / Python', 'Gazebo', 'TF2 / Nav2'], status: 'In progress', icon: Bot, accent: 'blue',
  },
  {
    number: '02', title: 'PID Control: DC Motor / Robot Joint', category: 'CONTROL SYSTEMS',
    description: 'Model a motor or robot joint, implement closed-loop PID control, and compare response characteristics such as overshoot, settling time, and steady-state error.',
    stack: ['MATLAB', 'Simulink', 'PID', 'System response'], status: 'Planned', icon: Workflow, accent: 'violet',
  },
  {
    number: '03', title: 'Robotics + IoT Telemetry', category: 'CONNECTED SYSTEMS',
    description: 'Explore how sensor values can flow through ROS 2 and Python into a simple telemetry dashboard for monitoring a robotic system.',
    stack: ['ROS 2 topics', 'Python', 'Sensors', 'IoT concepts'], status: 'Planned', icon: Radio, accent: 'mint',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectStatus>('All')
  const filteredProjects = projects.filter(p => activeFilter === 'All' || p.status === activeFilter)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.documentElement.classList.add('has-reveal')
    return () => document.documentElement.classList.remove('has-reveal')
  }, [])

  useEffect(() => {
    const video = document.querySelector<HTMLVideoElement>('.hero-video')
    if (!video) return

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePlayback = () => {
      if (preference.matches) video.pause()
      else video.play().catch(() => undefined)
    }
    updatePlayback()
    preference.addEventListener('change', updatePlayback)
    return () => preference.removeEventListener('change', updatePlayback)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [activeFilter])

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Hrishikesh Patil home">
          <span className="brand-mark">HP<span>.</span></span>
          <span className="brand-caption">ROBOTICS / ENGINEERING</span>
        </a>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {['About', 'Skills', 'Projects', 'Journey', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero hero-fullbleed" id="home">
          <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src="/watermarked_preview.mp4" type="video/mp4" />
          </video>
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> M.SC. ROBOTICS ENGINEERING · GERMANY</div>
            <h1>Robotics,<br /><span>built to move.</span></h1>
            <p className="hero-description">I'm Hrishikesh Patil, exploring the software, simulation, and control systems behind autonomous machines.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my projects <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span className="strip-label">INTEREST AREAS</span>
            <div className="strip-items"><span>Autonomous systems</span><i /><span>Robot simulation</span><i /><span>Control engineering</span><i /><span>Robotics + IoT</span></div>
          </div>
        </section>

        <section className="section-wrap section-block about-section" id="about">
          <div className="section-heading" data-reveal="left"><span className="section-index">01 / ABOUT</span><span className="heading-rule" /></div>
          <div className="about-grid">
            <h2 data-reveal="left">From data-driven thinking<br />to <span>intelligent machines.</span></h2>
            <div className="about-copy" data-reveal="right">
              <p>My foundation is in Computer Science and Engineering, where I built an interest in programming, algorithms, and intelligent systems. My professional experience at TCS in data analytics and data science strengthened my approach to problem-solving and working with data.</p>
              <p>I'm now pursuing an M.Sc. in Robotics Engineering at the University of Europe for Applied Sciences in Germany. I'm building practical skills in ROS 2, robot simulation, coordinate frames, and feedback control — connecting software with the physical world.</p>
              <div className="about-facts">
                <div><span className="fact-number">01</span><span>Software-first<br />robotics mindset</span></div>
                <div><span className="fact-number">02</span><span>Simulation-led<br />experimentation</span></div>
                <div><span className="fact-number">03</span><span>Continuous<br />hands-on learning</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block skills-section" id="skills">
          <div className="section-heading" data-reveal="left"><span className="section-index">02 / TOOLKIT</span><span className="heading-rule" /></div>
          <div className="section-title-row" data-reveal="right"><div><h2>Tools of the trade<span>.</span></h2><p className="section-subtitle">The technologies I'm learning and applying in robotics projects.</p></div><span className="side-note">LEARN · BUILD · ITERATE</span></div>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return <article className="skill-card" data-reveal="left" key={skill.title}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={20} strokeWidth={1.6} /></span><span className="skill-number">0{index + 1}</span></div>
                <h3>{skill.title}</h3>
                <ul>{skill.items.map(item => <li key={item}><span className="list-mark">↳</span>{item}</li>)}</ul>
              </article>
            })}
          </div>
          <p className="honesty-note"><span /> Skills are presented as current learning and focus areas; project evidence will be added as implementations are completed.</p>
        </section>

        <section className="projects-band" id="projects">
          <div className="section-wrap section-block projects-section">
            <div className="section-heading" data-reveal="left"><span className="section-index">03 / SELECTED WORK</span><span className="heading-rule" /></div>
            <div className="section-title-row" data-reveal="right"><div><h2>Learning by <span>building.</span></h2><p className="section-subtitle">Project work in progress — documented honestly, from problem to implementation.</p></div>
              <div className="project-filters" role="group" aria-label="Filter projects">
                {(['All', 'In progress', 'Planned'] as const).map(filter => <button className={activeFilter === filter ? 'filter-active' : ''} key={filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
              </div>
            </div>
            <div className="projects-grid">
              {filteredProjects.map((project, index) => {
                const Icon = project.icon
                return <article className={`project-card accent-${project.accent}`} data-reveal={index % 2 ? 'right' : 'left'} key={project.number}>
                  <div className="project-art">
                    <div className="art-grid" />
                    <div className="project-art-label">{project.category}</div>
                    <div className="art-orbit art-orbit-one" /><div className="art-orbit art-orbit-two" />
                    <div className="art-icon"><Icon size={42} strokeWidth={1.15} /></div>
                    <span className="art-index">{project.number}</span>
                    <span className="art-coordinate">x: 0.00<br />y: 1.24<br />θ: 0.78</span>
                  </div>
                  <div className="project-content">
                    <div className="project-status"><span className={project.status === 'In progress' ? 'status-dot' : 'status-dot status-planned'} />{project.status}</div>
                    <h3>{project.title}</h3><p>{project.description}</p>
                    <div className="tech-tags">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
                    <div className="project-footer"><span>CASE STUDY / COMING SOON</span><span className="project-arrow"><ArrowUpRight size={17} /></span></div>
                  </div>
                </article>
              })}
            </div>
            <div className="project-disclaimer">Project concepts and planned work are labeled transparently. Demonstrations, repositories, and measured results will be linked after they exist.</div>
          </div>
        </section>

        <section className="section-wrap section-block journey-section" id="journey">
          <div className="section-heading" data-reveal="left"><span className="section-index">04 / JOURNEY</span><span className="heading-rule" /></div>
          <div className="section-title-row" data-reveal="right"><div><h2>A foundation for <span>what's next.</span></h2><p className="section-subtitle">The path from software and data toward robotics engineering.</p></div></div>
          <div className="timeline">
            <article className="timeline-item" data-reveal="left"><span className="timeline-node">01</span><div className="timeline-date">2019 — 2023</div><div className="timeline-content"><h3>B.Tech. Computer Science & Engineering</h3><p>Shivaji University, India</p><span>Programming · Algorithms · Data systems</span></div></article>
            <article className="timeline-item" data-reveal="right"><span className="timeline-node">02</span><div className="timeline-date">PROFESSIONAL EXPERIENCE</div><div className="timeline-content"><h3>Tata Consultancy Services</h3><p>Data Analytics / Data Science</p><span>Python · SQL · Data processing · Analytical problem-solving</span></div></article>
            <article className="timeline-item" data-reveal="left"><span className="timeline-node timeline-current">03</span><div className="timeline-date">CURRENT</div><div className="timeline-content"><h3>M.Sc. Robotics Engineering</h3><p>University of Europe for Applied Sciences, Germany</p><span>ROS 2 · Simulation · Control systems · Autonomous robotics</span></div></article>
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-heading" data-reveal="left"><span className="section-index">05 / CONTACT</span><span className="heading-rule" /></div>
            <div className="contact-grid"><div data-reveal="left"><span className="eyebrow">OPEN TO CONNECTIONS</span><h2>Let's build something<br /><span>intelligent.</span></h2></div>
              <div className="contact-copy" data-reveal="right"><p>Interested in robotics software, autonomous systems, industrial automation, or robotics-IoT? I'd be glad to connect about relevant opportunities and technical projects.</p>
                <div className="contact-links">
                  <a href="mailto:YOUR_EMAIL@example.com" onClick={e => { if (e.currentTarget.href.endsWith('YOUR_EMAIL@example.com')) { e.preventDefault(); alert('Replace YOUR_EMAIL@example.com in src/App.tsx with your real email address.') } }}><Mail size={17} /> Email me <ArrowUpRight size={15} /></a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={14} /></a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={14} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">HP<span>.</span></span></a><span>DESIGNED AROUND CURIOSITY. BUILT THROUGH ITERATION.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></div>
        <div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} Hrishikesh Patil</span><span>Robotics Engineering Portfolio</span><span>Made for the next iteration.</span></div>
      </footer>
    </div>
  )
}

export default App
