"use client"

import { useState } from "react"
import { Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import jsPDF from "jspdf"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about")

  const downloadResume = () => {
    const doc = new jsPDF()
    const pageHeight = doc.internal.pageSize.getHeight()
    const pageWidth = doc.internal.pageSize.getWidth()
    let yPosition = 10

    const addText = (text, options = {}) => {
      const { fontSize = 10, fontStyle = "normal", maxWidth = pageWidth - 20 } = options
      doc.setFontSize(fontSize)
      if (fontStyle === "bold") {
        doc.setFont(undefined, "bold")
      } else {
        doc.setFont(undefined, "normal")
      }

      const lines = doc.splitTextToSize(text, maxWidth)
      doc.text(lines, 10, yPosition)
      yPosition += lines.length * (fontSize / 2.5) + 2
    }

    // Header
    addText("MD ZAVED AKHTAR", { fontSize: 16, fontStyle: "bold" })
    addText("Bihar, India | +91 6287786639 | mdzavedakhtar62@gmail.com", { fontSize: 9 })
    addText("LinkedIn: https://www.linkedin.com/in/md-zaved-akhtar-22013828b", { fontSize: 9 })
    yPosition += 3

    // Career Objective
    addText("CAREER OBJECTIVE", { fontSize: 12, fontStyle: "bold" })
    addText(
      "Aspiring software developer with strong foundations in Python, databases, and web development. Passionate about innovation, problem-solving, and creating impactful digital solutions. Seeking opportunities to apply technical and analytical skills in real-world projects and contribute to organizational growth.",
      { fontSize: 9 },
    )
    yPosition += 3

    // Education
    addText("EDUCATION", { fontSize: 12, fontStyle: "bold" })
    addText("Bachelor of Technology (B.Tech) in Computer Science & IT", { fontSize: 10, fontStyle: "bold" })
    addText("Rungta College of Engineering and Technology, Bhilai, Chhattisgarh (2023 – Present)", { fontSize: 9 })
    yPosition += 3

    // Technical Skills
    addText("TECHNICAL SKILLS", { fontSize: 12, fontStyle: "bold" })
    addText("• Programming Languages: Python, Java", { fontSize: 9 })
    addText("• Web & Tools: Figma, HTML, CSS, JavaScript", { fontSize: 9 })
    addText("• Databases: MySQL", { fontSize: 9 })
    addText("• Other: Problem Solving, Debugging, UI/UX basics", { fontSize: 9 })
    yPosition += 3

    // Certifications & Training
    addText("CERTIFICATIONS & TRAINING", { fontSize: 12, fontStyle: "bold" })
    addText("• Google Developer Student Clubs Solution Challenge – Certificate of Participation", { fontSize: 9 })
    addText("• Microsoft Azure Fundamentals (AI & Cloud) – Microsoft", { fontSize: 9 })
    addText("• Figma Bootcamp – LetsUpgrade", { fontSize: 9 })
    addText("• Python Bootcamp – LetsUpgrade", { fontSize: 9 })
    addText("• Frontend Development Internship (MERN) – Pregrad (3-month internship)", { fontSize: 9 })
    addText("• Backend Development Internship – Pregrad", { fontSize: 9 })
    yPosition += 3

    // Check if we need a new page
    if (yPosition > pageHeight - 30) {
      doc.addPage()
      yPosition = 10
    }

    // Projects
    addText("PROJECTS", { fontSize: 12, fontStyle: "bold" })
    addText("E-commerce Website (MERN Stack) – Pregrad Internship", { fontSize: 10, fontStyle: "bold" })
    addText("• Built and deployed an e-commerce clone project using MERN stack.", { fontSize: 9 })
    addText("• Designed UI with Figma and implemented backend functionalities.", { fontSize: 9 })
    yPosition += 2

    addText("Minor Projects", { fontSize: 10, fontStyle: "bold" })
    addText("• Responsive web pages with HTML, CSS, and JavaScript.", { fontSize: 9 })
    addText("• Python-based automation and problem-solving tasks.", { fontSize: 9 })
    addText("• Basic database management with MySQL.", { fontSize: 9 })
    yPosition += 3

    // Achievements & Participation
    addText("ACHIEVEMENTS & PARTICIPATION", { fontSize: 12, fontStyle: "bold" })
    addText("• Participated in Google Developer Student Clubs Solution Challenge.", { fontSize: 9 })
    addText("• Completed multiple bootcamps & internships in Python, Figma, and Web Development.", { fontSize: 9 })
    addText("• Recognized for teamwork and successful project delivery during internships.", { fontSize: 9 })
    yPosition += 3

    // Additional Information
    addText("ADDITIONAL INFORMATION", { fontSize: 12, fontStyle: "bold" })
    addText("• Languages: English, Hindi", { fontSize: 9 })
    addText("• Interests: Coding challenges, UI/UX design, open-source contribution", { fontSize: 9 })

    // Save the PDF
    doc.save("Md_Zaved_Akhtar_Resume.pdf")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-card p-8 flex flex-col">
        <div className="mb-12">
          <h1 className="text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
            Md Zaved
          </h1>
          <p className="text-sm text-muted-foreground mt-2">Software Developer</p>
        </div>

        <ul className="space-y-6 flex-1">
          {[
            { id: "about", label: "ABOUT" },
            { id: "skills", label: "SKILLS" },
            { id: "projects", label: "PROJECTS" },
            { id: "experience", label: "EXPERIENCE" },
            { id: "contact", label: "CONTACT" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <button
            onClick={downloadResume}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-4 py-3 rounded-lg font-medium transition-colors"
          >
            <Download size={18} />
            Download Resume
          </button>

          <div className="flex gap-4 justify-center text-muted-foreground">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-zaved-akhtar-22013828b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:mdzavedakhtar62@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 min-h-screen p-12">
        <div className="max-w-4xl">
          {/* About Section */}
          {activeSection === "about" && (
            <section className="animate-in fade-in">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-2">Hi, I'm Md Zaved Akhtar</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded"></div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm an aspiring software developer with a passion for creating impactful digital solutions. With a
                strong foundation in Python, web development, and database management, I've worked on diverse projects
                using the MERN stack during my internships at Pregrad.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Currently pursuing my B.Tech in Computer Science at Rungta College of Engineering and Technology, I'm
                constantly learning and pushing the boundaries of what's possible in web development. I believe in the
                power of clean code, creative problem-solving, and user-centric design.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-primary">2+</h3>
                  <p className="text-sm text-muted-foreground mt-2">Years Learning</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-primary">5+</h3>
                  <p className="text-sm text-muted-foreground mt-2">Projects Completed</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-primary">6+</h3>
                  <p className="text-sm text-muted-foreground mt-2">Certifications</p>
                </div>
              </div>
            </section>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <section className="animate-in fade-in">
              <h2 className="text-4xl font-bold mb-2">Skills</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded mb-8"></div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Programming Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Python", "Java", "JavaScript"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-card border border-border px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Web & Tools</h3>
                  <div className="flex flex-wrap gap-3">
                    {["HTML", "CSS", "React", "Node.js", "MongoDB", "Figma"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-card border border-border px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Databases</h3>
                  <div className="flex flex-wrap gap-3">
                    {["MySQL", "MongoDB"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-card border border-border px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Soft Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {["Problem Solving", "Debugging", "UI/UX Basics", "Teamwork"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-card border border-border px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Projects Section */}
          {activeSection === "projects" && (
            <section className="animate-in fade-in">
              <h2 className="text-4xl font-bold mb-2">Projects</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded mb-8"></div>

              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">E-commerce Website</h3>
                      <p className="text-sm text-primary mt-1">MERN Stack · Pregrad Internship</p>
                    </div>
                    <ExternalLink size={20} className="text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Built and deployed a full-featured e-commerce clone using React, Node.js, Express, and MongoDB.
                    Designed the UI with Figma and implemented complete backend functionalities including
                    authentication, product management, and payment integration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB", "Express", "Figma"].map((tech) => (
                      <span key={tech} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Responsive Web Pages</h3>
                      <p className="text-sm text-primary mt-1">HTML · CSS · JavaScript</p>
                    </div>
                    <ExternalLink size={20} className="text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Developed multiple responsive web pages with modern design principles. Focused on clean code,
                    accessibility, and cross-browser compatibility.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["HTML5", "CSS3", "JavaScript", "Responsive Design"].map((tech) => (
                      <span key={tech} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Python Automation Scripts</h3>
                      <p className="text-sm text-primary mt-1">Python · Problem Solving</p>
                    </div>
                    <ExternalLink size={20} className="text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Created various Python scripts for automation and problem-solving tasks. Demonstrates expertise in
                    algorithm design and practical programming applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Algorithms", "Automation"].map((tech) => (
                      <span key={tech} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Experience Section */}
          {activeSection === "experience" && (
            <section className="animate-in fade-in">
              <h2 className="text-4xl font-bold mb-2">Experience & Education</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded mb-8"></div>

              <div className="space-y-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">Frontend Development Intern</h3>
                      <p className="text-primary text-sm">Pregrad</p>
                    </div>
                    <span className="text-sm text-muted-foreground">3 months</span>
                  </div>
                  <p className="text-muted-foreground">
                    Built responsive user interfaces using React and modern web technologies. Collaborated with
                    designers and backend developers to create seamless user experiences.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">Backend Development Intern</h3>
                      <p className="text-primary text-sm">Pregrad</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Recent</span>
                  </div>
                  <p className="text-muted-foreground">
                    Developed server-side applications using Node.js and Express. Designed and managed databases with
                    MongoDB. Implemented RESTful APIs for client-server communication.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">B.Tech Computer Science & IT</h3>
                      <p className="text-primary text-sm">Rungta College of Engineering and Technology</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2023 – Present</span>
                  </div>
                  <p className="text-muted-foreground">
                    Pursuing Bachelor's degree in Computer Science with focus on software development, databases, and
                    web technologies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Certifications</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Google Developer Student Clubs Solution Challenge – Certificate of Participation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Microsoft Azure Fundamentals (AI & Cloud)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Figma Bootcamp – LetsUpgrade</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Python Bootcamp – LetsUpgrade</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Contact Section */}
          {activeSection === "contact" && (
            <section className="animate-in fade-in">
              <h2 className="text-4xl font-bold mb-2">Get In Touch</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded mb-8"></div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd
                like to collaborate or just want to say hello!
              </p>

              <div className="space-y-4 max-w-md">
                <a
                  href="mailto:mdzavedakhtar62@gmail.com"
                  className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <Mail className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">mdzavedakhtar62@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+916287786639"
                  className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <Mail className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 6287786639</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/md-zaved-akhtar-22013828b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors"
                >
                  <Linkedin className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect with me</p>
                  </div>
                </a>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <p className="text-muted-foreground">Bihar, India</p>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}
