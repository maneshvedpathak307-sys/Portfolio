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
    description:
      "A role-based hospital application designed to manage patients, doctors, departments and appointments.",
    features: [
      "Admin, Doctor & Patient",
      "JWT Authentication",
      "Appointment Management",
    ],
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    style: "hospital",
  },
  {
    number: "02",
    title: "Employee Management System",
    category: "BUSINESS APPLICATION",
    description:
      "A full-stack employee management system for managing workforce information and administrative operations.",
    features: [
      "Employee Management",
      "Attendance & Leave",
      "Payroll & Reports",
    ],
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    style: "employee",
  },
  {
    number: "03",
    title: "Resume Builder",
    category: "PRODUCTIVITY APPLICATION",
    description:
      "A resume creation application with customizable templates, resume preview and PDF download.",
    features: [
      "Resume Creation",
      "Multiple Templates",
      "PDF Download",
    ],
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    style: "resume",
  },
  {
    number: "04",
    title: "Chicken Delivery System",
    category: "E-COMMERCE APPLICATION",
    description:
      "An online ordering and delivery application with customer and admin workflows.",
    features: [
      "Product Browsing & Cart",
      "Order Management",
      "Admin Reports",
    ],
    stack: ["Java", "Spring Boot", "React", "MySQL"],
    style: "delivery",
  },
];

const skills = [
  { title: "Programming", items: ["Java", "JavaScript", "SQL"] },
  { title: "Frontend", items: ["React.js", "HTML5", "CSS3"] },
  {
    title: "Backend",
    items: ["Spring Boot", "Spring Security", "REST APIs", "JWT"],
  },
  { title: "Database", items: ["MySQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
  {
    title: "Core Concepts",
    items: ["OOP", "CRUD", "Authentication", "RBAC"],
  },
];

function HospitalPreview() {
  return (
    <div className="mock-dashboard hospital-preview">
      <div className="mock-sidebar">
        <span>Overview</span>
        <span>Doctors</span>
        <span>Patients</span>
        <span>Appointments</span>
      </div>

      <div className="mock-main">
        <p className="mock-label">Hospital dashboard</p>

        <div className="mock-stats">
          <div>
            <small>Patients</small>
            <strong>248</strong>
          </div>
          <div>
            <small>Doctors</small>
            <strong>24</strong>
          </div>
          <div>
            <small>Visits</small>
            <strong>36</strong>
          </div>
        </div>

        <div className="mock-panel">
          <strong>Upcoming appointments</strong>
          <div className="mock-row">
            <i />
            <span>Patient consultation</span>
            <b>10:30</b>
          </div>
          <div className="mock-row">
            <i />
            <span>Doctor appointment</span>
            <b>11:15</b>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmployeePreview() {
  const chartHeights = [42, 67, 52, 83, 61, 92, 72];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="mock-dashboard employee-preview">
      <div className="mock-sidebar">
        <span>Dashboard</span>
        <span>Employees</span>
        <span>Attendance</span>
        <span>Payroll</span>
      </div>

      <div className="mock-main">
        <p className="mock-label">Workforce overview</p>

        <div className="mock-stats">
          <div>
            <small>Employees</small>
            <strong>156</strong>
          </div>
          <div>
            <small>Present</small>
            <strong>142</strong>
          </div>
        </div>

        <div className="mock-panel">
          <strong>Attendance overview</strong>

          <div className="mock-chart">
            {chartHeights.map((height, index) => (
              <span
                key={days[index]}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div className="mock-chart-labels">
            {days.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumePreview() {
  return (
    <div className="resume-preview">
      <div className="resume-sheet">
        <div className="resume-heading">
          <span className="resume-avatar">MV</span>

          <div>
            <strong>PROFESSIONAL RESUME</strong>
            <small>Personal details &amp; experience</small>
          </div>
        </div>

        <div className="resume-line resume-line-long" />
        <div className="resume-line resume-line-medium" />

        <p>EDUCATION</p>
        <div className="resume-line resume-line-long" />
        <div className="resume-line resume-line-short" />

        <p>TECHNICAL SKILLS</p>
        <div className="resume-skills">
          <span>Java</span>
          <span>React</span>
          <span>SQL</span>
        </div>

        <p>PROJECT EXPERIENCE</p>
        <div className="resume-line resume-line-long" />
        <div className="resume-line resume-line-medium" />
      </div>

      <span className="resume-badge">PDF EXPORT</span>
    </div>
  );
}

function DeliveryPreview() {
  return (
    <div className="delivery-preview">
      <div className="delivery-copy">
        <span className="delivery-kicker">
          FRESH • QUALITY • FAST
        </span>

        <strong>
          Good food,
          <br />
          delivered fresh.
        </strong>

        <small>Explore products and place your order.</small>

        <span className="delivery-action">EXPLORE MENU ↗</span>
      </div>

      <div className="food-products">
        <div className="food-product">
          <span className="food-emoji" aria-hidden="true">
            🍗
          </span>
          <strong>Fresh Chicken</strong>
          <small>Quality cuts</small>
        </div>

        <div className="food-product">
          <span className="food-emoji" aria-hidden="true">
            🛒
          </span>
          <strong>Your Basket</strong>
          <small>Easy ordering</small>
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ project }) {
  const previewNames = {
    hospital: "CarePoint",
    employee: "WorkSphere",
    resume: "ResumeCraft",
    delivery: "FreshBasket",
  };

  return (
    <div className={`project-visual ${project.style}`}>
      <div className="project-preview-heading">
        <span className="preview-brand">
          {previewNames[project.style]}
        </span>

        <span className="preview-status">UI PREVIEW</span>
      </div>

      {project.style === "hospital" && <HospitalPreview />}
      {project.style === "employee" && <EmployeePreview />}
      {project.style === "resume" && <ResumePreview />}
      {project.style === "delivery" && <DeliveryPreview />}

      <span className="project-category">{project.category}</span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectPreview project={project} />

      <div className="project-body">
        <span className="project-number">
          {project.number} / PROJECT
        </span>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>
              <span aria-hidden="true">↗</span>
              {feature}
            </li>
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
          Visit GitHub Profile <span>↗</span>
        </a>
      </div>
    </article>
  );
}

function ContactSocialLinks() {
  return (
    <div className="contact-social-links">
      <a
        className="contact-social-link github-link"
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Manesh Vedpathak's GitHub profile"
      >
        <svg
          className="contact-social-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M12 .8a11.3 11.3 0 0 0-3.58 22.02c.57.1.77-.25.77-.55v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.52-1.3-1.27-1.65-1.27-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.66 1.23 3.31.94.1-.73.4-1.23.72-1.51-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.44.11-3 0 0 .95-.3 3.12 1.16a10.8 10.8 0 0 1 5.68 0c2.16-1.46 3.11-1.16 3.11-1.16.62 1.56.23 2.71.12 3 .73.79 1.16 1.8 1.16 3.04 0 4.35-2.64 5.3-5.16 5.59.41.35.77 1.03.77 2.08v3.1c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .8Z" />
        </svg>

        <span>
          <strong>GitHub</strong>
          <small>View my repositories</small>
        </span>

        <span className="contact-social-arrow" aria-hidden="true">
          ↗
        </span>
      </a>

      <a
        className="contact-social-link linkedin-link"
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Manesh Vedpathak's LinkedIn profile"
      >
        <svg
          className="contact-social-icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.53v16.94c0 .85.69 1.53 1.55 1.53h16.9c.86 0 1.55-.68 1.55-1.53V3.53c0-.85-.69-1.53-1.55-1.53ZM7.93 18.56H4.98V9.07h2.95v9.49ZM6.46 7.77a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.1 10.79h-2.94v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.36V9.07h2.82v1.3h.04c.39-.74 1.35-1.53 2.78-1.53 2.97 0 3.56 1.95 3.56 4.49v5.23Z" />
        </svg>

        <span>
          <strong>LinkedIn</strong>
          <small>Connect with me</small>
        </span>

        <span className="contact-social-arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </div>
  );
}

function App() {
  const resumeUrl = `${process.env.PUBLIC_URL}/Resume.pdf`;

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Manesh home">
          MV<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-contact">
            Contact ↗
          </a>
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

            <h1>
              Manesh
              <br />
              <span>Vedpathak.</span>
            </h1>

            <h2>Java Full Stack Developer</h2>

            <p className="hero-description">
              I build practical web applications using Java, Spring Boot,
              React.js and MySQL, with a focus on secure APIs and
              user-friendly experiences.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <span>↗</span>
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
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href={`mailto:${EMAIL}`}>Email ↗</a>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Developer technology profile"
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="profile-card">
              <div className="profile-top">
                <span className="profile-dot" />
                <span className="profile-dot" />
                <span className="profile-dot" />

                <span className="profile-label">
                  developer.profile
                </span>
              </div>

              <div className="code-art">
                <p>
                  <span className="code-purple">const</span> developer = {"{"}
                </p>

                <p className="code-indent">
                  name: <span className="code-green">"Manesh Vedpathak"</span>,
                </p>

                <p className="code-indent">
                  role: <span className="code-green">"Java Developer"</span>,
                </p>

                <p className="code-indent">
                  frontend: <span className="code-blue">"React"</span>,
                </p>

                <p className="code-indent">
                  backend: <span className="code-blue">"Spring Boot"</span>,
                </p>

                <p className="code-indent">
                  database: <span className="code-green">"MySQL"</span>
                </p>

                <p>{"};"}</p>

                <p className="code-comment">
                  {"// Building something useful..."}
                </p>
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

        <section className="quick-stats" aria-label="Technology summary">
          <div>
            <strong>04</strong>
            <span>PROJECTS</span>
          </div>
          <div>
            <strong>Java</strong>
            <span>BACKEND</span>
          </div>
          <div>
            <strong>React</strong>
            <span>FRONTEND</span>
          </div>
          <div>
            <strong>MySQL</strong>
            <span>DATABASE</span>
          </div>
        </section>

        <section className="section content-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Turning ideas into <span>web applications.</span>
            </h2>
          </div>

          <div className="about-content">
            <p>
              I am a Computer Application graduate aspiring to build a
              career as a Java Full Stack Developer. I enjoy developing
              complete web applications, from React interfaces to Spring
              Boot REST APIs and MySQL database integration.
            </p>

            <p>
              Through my projects, I have worked with authentication, CRUD
              operations, role-based access control and responsive UI
              design. I am continuously improving my skills and looking
              for an opportunity to contribute to a development team.
            </p>

            <a className="text-link" href="#contact">
              Let&apos;s connect <span>↗</span>
            </a>
          </div>
        </section>

        <section className="section content-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2>
              Technical <span>skills.</span>
            </h2>
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
            <h2>
              Projects I&apos;ve <span>built.</span>
            </h2>
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
            Visit my GitHub profile to explore my repositories. Add
            individual repository links and live demos when available.
          </p>
        </section>

        <section className="section content-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">MY BACKGROUND</p>
            <h2>
              Education &amp; <span>certification.</span>
            </h2>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-marker" />

              <div>
                <p className="timeline-date">2025</p>

                <h3>
                  Bachelor of Business Administration (Computer Application)
                </h3>

                <p>
                  P.D.E.A. Waghire College of Arts, Commerce &amp; Science
                </p>

                <p className="muted">
                  Savitribai Phule Pune University · CGPA 7.78 · Grade A
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-marker" />

              <div>
                <p className="timeline-date">SEPTEMBER 2026</p>

                <h3>
                  Getting Started with Full Stack Java Development
                </h3>

                <p>Certificate Code: 10807109</p>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <p className="eyebrow">HAVE AN OPPORTUNITY?</p>

          <h2>
            Let&apos;s build something <span>great together.</span>
          </h2>

          <p>
            I am interested in entry-level Java Full Stack Developer
            opportunities. Feel free to connect with me.
          </p>

          <a
            className="button button-primary"
            href={`mailto:${EMAIL}`}
          >
            Get In Touch ↗
          </a>

          <div className="contact-details">
            <a href={`mailto:${EMAIL}`}>
              <span aria-hidden="true">✉</span>
              {EMAIL}
            </a>

            <a href={`tel:${PHONE}`}>
              <span aria-hidden="true">☎</span>
              +91 9850492485
            </a>
          </div>

          <div className="contact-divider">
            <span>LET&apos;S CONNECT</span>
          </div>

          <ContactSocialLinks />
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          MV<span>.</span>
        </a>

        <p>Designed &amp; built by Manesh Vedpathak.</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;