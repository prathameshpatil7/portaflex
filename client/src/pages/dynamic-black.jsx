import ProfileImg from "@/assets/images/profileImg.png";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  FileText,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  Download,
  ExternalLink,
  Award,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";

// Projects Data (Moved to a Constant Outside of Component)
const projects = [
  {
    title: "Real Time Chat App with MERN Stack",
    description:
      "Engineered a real-time chat application using the MERN stack within a monolithic architecture, integrating JWT for authentication and Socket.io for real-time interactions.",
    image: ProfileImg,
    date: "Dec 2023",
    liveLink: "https://chat-app-example.com",
    githubLink: "https://github.com/yourusername/chat-app",
    technologies: [
      "Socket.io",
      "MongoDB",
      "Express",
      "React JS",
      "Node JS",
      "TailwindCSS",
      "Postman",
    ],
  },
  {
    title: "E-commerce Platform",
    description:
      "Developed a full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
    image: ProfileImg,
    date: "Aug 2023",
    liveLink: "https://chat-app-example.com",
    githubLink: "https://github.com/yourusername/chat-app",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
  },
  {
    title: "AI-Powered Task Manager",
    description:
      "Created an intelligent task management application that uses machine learning to prioritize and categorize tasks automatically.",
    image: ProfileImg,
    date: "Mar 2023",
    liveLink: "https://chat-app-example.com",
    githubLink: "https://github.com/yourusername/chat-app",
    technologies: ["Python", "Flask", "TensorFlow", "React", "PostgreSQL"],
  },
];

// Reusable Section Component
const Section = ({ id, title, activeSection, children }) => (
  <section id={id} className="mb-16">
    <motion.h2
      className="text-2xl font-bold mb-6 flex items-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title}
      <motion.div
        className="ml-4 h-0.5 bg-yellow-400"
        initial={{ width: 0 }}
        animate={{ width: activeSection === id ? 100 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.h2>
    {children}
  </section>
);

export default function DynamicBlack({ data }) {
  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="container mx-auto px-4 pt-0 pb-12 max-w-5xl">
        {/* Header Section */}
        <header className="relative min-h-screen mb-2 flex flex-col justify-center items-center bg-white overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            transition={{ type: "tween", ease: "linear" }}
          />
          <HeaderIntro />
        </header>

        <Section
          id="summary"
          activeSection="summary"
          title="PROFESSIONAL SUMMARY"
        >
          <motion.div
            className="flex items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mr-4 mt-1">
              <FileText className="w-10 h-10 text-blue-600" />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Experienced Full Stack Developer with 2 years in startup product
              development. Proficient in React.js and Node.js, delivering
              scalable solutions for optimal user experiences. Skilled in API
              integration, database management, and collaborative
              problem-solving. Seeking to leverage expertise in a dynamic team
              environment.
            </p>
          </motion.div>
        </Section>

        <Section id="overview" activeSection="overview" title="OVERVIEW">
          <motion.div
            className="bg-gray-100 p-8 rounded-lg flex items-center shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-7xl font-bold text-blue-600 mr-6">2</span>
            <span className="text-gray-600 text-xl">
              Years Of Professional Experience
            </span>
          </motion.div>
        </Section>

        <Section id="skills" activeSection="skills" title="SKILLS">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              "Programming Languages: C, JavaScript, Python",
              "Frameworks: React.js, Express, Symfony (PHP)",
              "API Testing: Postman",
              "Version Control: Git, GitHub",
              "Agile Development Methodologies: JIRA",
              "Cloud: AWS",
              "Web Development: Node.js, HTML, CSS",
              "Web Services: REST/SOAP, Postman",
              "Databases: MySQL, ElasticSearch, MongoDB",
              "SQL Proficient",
              "Containerization: Docker",
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section id="work" activeSection="work" title="WORK HISTORY">
          <motion.div
            className="relative pl-8 pb-8 border-l-2 border-yellow-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -left-[0.45rem] top-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <h3 className="font-bold text-xl mb-2">
              Research Knowledge Solution Pvt Ltd, Mumbai
            </h3>
            <p className="text-gray-600 mb-2">2022-07 - Present</p>
            <p className="text-gray-700">Software Development Engineer</p>
          </motion.div>
        </Section>

        <Section id="education" activeSection="education" title="EDUCATION">
          <motion.div
            className="relative pl-8 pb-8 border-l-2 border-blue-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -left-[0.45rem] top-2 w-3 h-3 bg-blue-600 rounded-full"></div>
            <h3 className="font-bold text-xl mb-2">
              Ramrao Adik Institute of Technology
            </h3>
            <p className="text-gray-600 mb-2">June 2022</p>
            <p className="text-gray-700 mb-4">
              Bachelor of Engineering from Electronics & Telecommunications
            </p>
            <p className="font-semibold text-gray-700 mb-2">
              University Overview
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li>
                GPA: 8.16 (on the scale of 10) | First Class with Distinction |
                CGPA: 8.9/10 | Percentile: 89.60%
              </li>
              <li>
                Ranked 25th out of 13 students in NMIMS Sarla Anil Modi School
                of Economics
              </li>
              <li>
                Challenge 2021 - 1st Runner-up in 15 students long Sponsorship
                Challenge at VESIT Rx 2021-22
              </li>
            </ul>
          </motion.div>
        </Section>

        <Section
          id="projects"
          activeSection="projects"
          title="PERSONAL PROJECTS"
        >
          {/* <section className="py-12 bg-background"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card rounded-lg shadow-lg flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} banner`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {project.description}
                  </p>
                  <p className="text-gray-500 mb-2">
                    <span className="text-gray-800 font-semibold">
                      Technologies:
                    </span>{" "}
                    {project.technologies.join(", ")}
                  </p>
                  <div className="flex justify-between mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="certifications"
          activeSection="certifications"
          title="CERTIFICATIONS"
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                name: "AWS Certified Developer - Associate",
                issuer: "Amazon Web Services",
                date: "Sep 2023",
              },
              {
                name: "Professional Scrum Master I (PSM I)",
                issuer: "Scrum.org",
                date: "Jul 2023",
              },
              {
                name: "MongoDB Certified Developer Associate",
                issuer: "MongoDB",
                date: "Mar 2023",
              },
              {
                name: "React Native Specialist",
                issuer: "Udacity",
                date: "Jan 2023",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md relative overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Award className="text-blue-600 w-8 h-8 mb-2" />
                <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                <p className="text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20" />
              </motion.div>
            ))}
          </motion.div>
        </Section>

        <Section
          id="accomplishments"
          activeSection="accomplishments"
          title="ACCOMPLISHMENTS"
        >
          <motion.div
            className="bg-gray-100 p-8 rounded-lg relative shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute -right-2 -bottom-2 w-20 h-10 bg-yellow-400 -z-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
            <h3 className="font-bold text-xl mb-2">July 2024</h3>
            <p className="text-gray-700">
              Recognized as Employee of the Quarter at Research Knowledge
              Solutions Pvt. Ltd. for outstanding performance, dedication, and
              contributions to innovative projects.
            </p>
          </motion.div>
        </Section>

        {/* Additional sections for experience, skills, etc. */}
      </div>
    </div>
  );
}

const HeaderIntro = (data) => (
  <div className="container mx-auto px-4 z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <motion.div
        className="text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-xl mb-2 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 text-gray-900"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <span className="relative inline-block">
            Prathamesh
            <motion.span
              className="absolute bottom-0 left-0 h-3 bg-yellow-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
          </span>{" "}
          <span className="relative inline-block">
            Rajendra
            <motion.span
              className="absolute bottom-0 left-0 h-3 bg-blue-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </span>{" "}
          <span className="relative inline-block">
            Patil
            <motion.span
              className="absolute bottom-0 left-0 h-3 bg-green-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mb-6 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-semibold mr-2">
            SOFTWARE DEVELOPMENT ENGINEER
          </span>
          <span className="mx-2">•</span>
          <MapPin className="w-5 h-5 inline mr-1" />
          MUMBAI
        </motion.p>
        <motion.div
          className="flex space-x-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Button className="bg-gray-900 text-white hover:bg-gray-800">
            <Send className="mr-2 h-4 w-4" /> Contact Me
          </Button>
          <Button
            variant="outline"
            className="border-gray-900 text-gray-900 hover:bg-gray-100"
          >
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </motion.div>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative w-full h-96 md:h-[500px]"
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-blue-400 to-green-400 rounded-lg transform rotate-3"
          animate={{
            rotate: [3, -3, 3],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={ProfileImg}
          width={500}
          height={500}
          alt="Prathamesh Rajendra Patil"
          className="rounded-lg w-full h-full object-cover border-8 border-white shadow-2xl"
          style={{ zIndex: 1, position: "relative" }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
        <motion.div
          className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -top-6 -right-4 w-20 h-20 border-8 border-blue-400 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
    </div>
  </div>
);
