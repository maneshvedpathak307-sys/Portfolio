import React from "react";
import "./App.css";

const GITHUB_URL = "https://github.com/maneshvedpathak307-sys";
const LINKEDIN_URL = "https://www.linkedin.com/in/maneshvedpathak";
const EMAIL = "maneshvedpathak307@gmail.com";
const PHONE = "+919850492485";

const projects = [
  {
    number: "01",
    title: "Hospital Management System",
    category: "HEALTHCARE APPLICATION",
    description: "A role-based hospital application designed to manage patients, doctors, departments and appointments.",
    features: ["Admin, Doctor & Patient", "JWT Authentication", "Appointment Management"],
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    style: "hospital",
  },
  {
    number: "02",
    title: "Employee Management System",
    category: "BUSINESS APPLICATION",
    description: "A full-stack employee management system for managing workforce information and administrative operations.",
    features: ["Employee Management", "Attendance & Leave", "Payroll & Reports"],
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    style: "employee",
  },
  {
    number: "03",
    title: "Resume Builder",
    category: "PRODUCTIVITY APPLICATION",
    description: "A resume creation application with customizable templates, resume preview and PDF download.",
    features: ["Resume Creation", "Multiple Templates", "PDF Download"],
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    style: "resume",
  },
  {
    number: "04",
    title: "Chicken Delivery System",
    category: "E-COMMERCE APPLICATION",
    description: "An online ordering and delivery application with customer and admin workflows.",
    features: ["Product Browsing & Cart", "Order Management", "Admin Reports"],
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    style: "delivery",
  },
];

const skills = [
  { title: "Programming", items: ["Java", "JavaScript", "SQL", "HTML5", "CSS3"] },
  { title: "Frontend", items: ["React.js", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Spring Boot", "Spring Security", "REST APIs", "JWT"] },
  { title: "Database", items: ["MySQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"] },
  { title: "Core Concepts", items: ["OOP", "CRUD", "Authentication", "RBAC"] },
];

const certifications = [
  {
    number: "01",
    title: "Getting Started with Full Stack Java Development",
    issuer: "Full Stack Java Development",
    date: "September 2026",
    credential: "Certificate Code: 10807109",
    category: "JAVA DEVELOPMENT",
    logo: "java",
  },
  {
    number: "02",
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "26 October 2026",
    credential: "Advanced SQL Certification",
    category: "DATABASE",
    logo: "sql",
  },
  {
    number: "03",
    title: "Spring 5 Basics with Spring Boot",
    issuer: "Infosys Springboard",
    date: "30 October 2026",
    credential: "Course Completion Certificate",
    category: "BACKEND DEVELOPMENT",
    logo: "spring",
  },
  {
    number: "04",
    title: "React JS in Hindi",
    issuer: "Great Learning",
    date: "30 October 2026",
    credential: "Course Completion Certificate",
    category: "FRONTEND DEVELOPMENT",
    logo: "react",
  },
];

function TechnologyLogo({ type }) {
  if (type === "react") {
    return (
      <svg viewBox="0 0 100 100" role="img" aria-label="React logo">
        <g fill="none" stroke="currentColor" strokeWidth="4">
          <ellipse cx="50" cy="50" rx="43" ry="16" />
          <ellipse cx="50" cy="50" rx="43" ry="16" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="43" ry="16" transform="rotate(120 50 50)" />
        </g>
        <circle cx="50" cy="50" r="7" fill="currentColor" />
      </svg>
    );
  }

  if (type === "spring") {
    return (
      <svg viewBox="0 0 100 100" role="img" aria-label="Spring logo">
        <path
          fill="currentColor"
          d="M84 13C55 15 28 20 17 42c-9 18 1 37 19 40 19 3 37-13 42-35 2-10 5-23 6-34ZM28 72c10-18 24-30 43-42C51 39 37 52 25 69c-3 4-5 8-7 13 4-3 7-6 10-10Z"
        />
        <path d="M22 82c9-20 25-34 49-49" fill="none" stroke="#0d1b2e" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "sql") {
    return (
      <svg viewBox="0 0 100 100" role="img" aria-label="SQL database logo">
        <ellipse cx="50" cy="22" rx="31" ry="12" fill="currentColor" />
        <path d="M19 22v49c0 7 14 13 31 13s31-6 31-13V22" fill="none" stroke="currentColor" strokeWidth="7" />
        <path d="M19 45c0 7 14 13 31 13s31-6 31-13M19 68c0 7 14 13 31 13s31-6 31-13" fill="none" stroke="currentColor" strokeWidth="5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="Java coffee cup logo">
      <path d="M24 39h45v23c0 13-10 22-23 22S24 75 24 62V39Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
      <path d="M69 45h8c14 0 13 20-2 20h-7M19 88h59" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d="M35 29c-8-9 7-11 0-21M50 29c-8-9 7-11 0-21M65 29c-8-9 7-11 0-21" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function ProjectPreview({ project }) {
  const names = {
    hospital: "CarePoint",
    employee: "WorkSphere",
    resume: "ResumeCraft",
    delivery: "FreshBasket",
  };

  return (
    <div className={`project-visual ${project.style}`}>
      <div className="project-preview-heading">
        <strong>{names[project.style]}</strong>
        <span>UI PREVIEW</span>
      </div>

      <div className="preview-window">
        {project.style === "hospital" && (
          <>
            <div className="preview-menu">Overview　 Doctors　 Patients　 Appointments</div>
            <h4>Hospital dashboard</h4>
            <div className="preview-stats">
              <b>248 <small>Patients</small></b>
              <b>24 <small>Doctors</small></b>
              <b>36 <small>Visits</small></b>
            </div>
            <p>Upcoming appointments　 • Patient consultation　 • Doctor appointment</p>
          </>
        )}

        {project.style === "employee" && (
          <>
            <div className="preview-menu">Dashboard　 Employees　 Attendance　 Payroll</div>
            <h4>Workforce overview</h4>
            <div className="preview-stats">
              <b>156 <small>Employees</small></b>
              <b>142 <small>Present</small></b>
              <b>14 <small>On leave</small></b>
            </div>
            <div className="chart-bars">
              <i /><i /><i /><i /><i /><i /><i />
            </div>
          </>
        )}

        {project.style === "resume" && (
          <div className="resume-mini">
            <b>PROFESSIONAL RESUME</b>
            <hr />
            <strong>Manesh Vedpathak</strong>
            <p>EDUCATION</p>
            <span />
            <span className="short" />
            <p>TECHNICAL SKILLS</p>
            <small>Java　 React　 SQL</small>
            <p>PROJECT EXPERIENCE</p>
            <span />
            <span className="short" />
          </div>
        )}

        {project.style === "delivery" && (
          <div className="delivery-mini">
            <div>
              <small>FRESH • QUALITY • FAST</small>
              <h3>Good food,<br />delivered fresh.</h3>
              <p>Explore products and place your order.</p>
            </div>
            <div className="food-icons">
              <b>🍗<small>Fresh Chicken</small></b>
              <b>🛒<small>Your Basket</small></b>
            </div>
          </div>
        )}
      </div>

      <span className="project-category">{project.category}</span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectPreview project={project} />

      <div className="project-body">
        <span className="project-number">{project.number} / PROJECT</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul>
          {project.features.map((feature) => (
            <li key={feature}>↗ {feature}</li>
          ))}
        </ul>

        <div className="project-stack">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <a
          className="text-link"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit GitHub Profile ↗
        </a>
      </div>
    </article>
  );
}

function CertificationCard({ certificate }) {
  return (
    <article className="certificate-card">
      <div className="certificate-top">
        <span className="certificate-number">
          CERTIFICATE / {certificate.number}
        </span>
        <span className="certificate-index">{certificate.number}</span>
      </div>

      <div className={`certificate-logo ${certificate.logo}`}>
        <TechnologyLogo type={certificate.logo} />
      </div>

      <span className="certificate-category">{certificate.category}</span>
      <h3>{certificate.title}</h3>
      <p className="certificate-issuer">{certificate.issuer}</p>

      <div className="certificate-footer">
        <div>
          <small>COMPLETED</small>
          <strong>{certificate.date}</strong>
        </div>
        <span className="certificate-verified">✓ CERTIFIED</span>
      </div>

      <p className="certificate-credential">{certificate.credential}</p>
    </article>
  );
}

function ContactSocialLinks() {
  return (
    <div className="contact-social-links">
      <a
        className="contact-social-link"
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="social-symbol">⌘</span>
        <span>
          <strong>GitHub</strong>
          <small>View my repositories</small>
        </span>
        <b>↗</b>
      </a>

      <a
        className="contact-social-link"
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="social-symbol">in</span>
        <span>
          <strong>LinkedIn</strong>
          <small>Connect with me</small>
        </span>
        <b>↗</b>
      </a>
    </div>
  );
}

function App() {
  const resumeUrl = `${process.env.PUBLIC_URL}/Resume.pdf`;

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home">MV<span>.</span></a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a className="nav-contact" href="#contact">Contact ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              OPEN TO ENTRY-LEVEL OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, WORLD! I'M</p>
            <h1>Manesh<br /><span>Vedpathak.</span></h1>
            <h2>Java Full Stack Developer</h2>

            <p className="hero-description">
              I build practical web applications using Java, Spring Boot,
              React.js and MySQL, with a focus on secure APIs and
              user-friendly experiences.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work ↗
              </a>
              <a
                className="button button-secondary"
                href={resumeUrl}
                download="Resume.pdf"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="social-links">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href={`mailto:${EMAIL}`}>Email ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="profile-card">
              <div className="profile-top">
                <i /><i /><i />
                <span>developer.profile</span>
              </div>

              <div className="code-art">
                <p><em>const</em> developer = {"{"}</p>
                <p className="indent">name: <b>"Manesh Vedpathak"</b>,</p>
                <p className="indent">role: <b>"Java Developer"</b>,</p>
                <p className="indent">frontend: <strong>"React"</strong>,</p>
                <p className="indent">backend: <strong>"Spring Boot"</strong>,</p>
                <p className="indent">database: <b>"MySQL"</b></p>
                <p>{"};"}</p>
                <p className="comment">{"// Building something useful..."}</p>
              </div>

              <div className="tech-cloud">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React.js</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-stats">
          <div><strong>04</strong><span>PROJECTS</span></div>
          <div><strong>Java</strong><span>BACKEND</span></div>
          <div><strong>React</strong><span>FRONTEND</span></div>
          <div><strong>MySQL</strong><span>DATABASE</span></div>
        </section>

        <section className="section content-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Turning ideas into <span>web applications.</span></h2>
          </div>

          <div className="about-content">
            <p>
              I am a Computer Application graduate aspiring to build a career
              as a Java Full Stack Developer. I enjoy developing complete web
              applications, from React interfaces to Spring Boot REST APIs
              and MySQL database integration.
            </p>

            <p>
              Through my projects, I have worked with authentication, CRUD
              operations, role-based access control and responsive UI design.
              I am continuously improving my skills and looking for an
              opportunity to contribute to a development team.
            </p>

            <a className="text-link" href="#contact">Let's connect ↗</a>
          </div>
        </section>

        <section className="section content-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2>Technical <span>skills.</span></h2>
            <p className="section-subtitle">
              Technologies and concepts I use to build web applications.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section content-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects I've <span>built.</span></h2>
            <p className="section-subtitle">
              Practical applications that demonstrate my full-stack
              development skills.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>

          <p className="project-note">
            Visit my GitHub profile to explore my repositories. Add individual
            repository links and live demos when available.
          </p>
        </section>

        <section className="section content-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">MY BACKGROUND</p>
            <h2>Education &amp; <span>certifications.</span></h2>
            <p className="section-subtitle">
              My academic qualifications and professional learning achievements.
            </p>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-marker" />
              <div>
                <p className="timeline-date">2025</p>
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p>P.D.E.A. Waghire College of Arts, Commerce &amp; Science</p>
                <p className="muted">Savitribai Phule Pune University</p>
              </div>
            </article>
          </div>

          <div className="certificates-heading">
            <div>
              <p className="eyebrow">PROFESSIONAL DEVELOPMENT</p>
              <h3>My <span>certificates.</span></h3>
              <p>
                Certifications demonstrating my continuous learning across
                Java, SQL, Spring Boot and React.js.
              </p>
            </div>
            <span className="certificate-count">04 CERTIFICATES</span>
          </div>

          <div className="certificates-grid">
            {certifications.map((certificate) => (
              <CertificationCard
                key={certificate.number}
                certificate={certificate}
              />
            ))}
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <p className="eyebrow">HAVE AN OPPORTUNITY?</p>
          <h2>Let's build something <span>great together.</span></h2>
          <p>
            I am interested in entry-level Java Full Stack Developer
            opportunities. Feel free to connect with me.
          </p>

          <a className="button button-primary" href={`mailto:${EMAIL}`}>
            Get In Touch ↗
          </a>

          <div className="contact-details">
            <a href={`mailto:${EMAIL}`}>✉ {EMAIL}</a>
            <a href={`tel:${PHONE}`}>☎ +91 9850492485</a>
          </div>

          <div className="contact-divider">
            <span>LET'S CONNECT</span>
          </div>

          <ContactSocialLinks />
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">MV<span>.</span></a>
        <p>Designed &amp; built by Manesh Vedpathak.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;