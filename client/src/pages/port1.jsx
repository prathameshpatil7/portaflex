import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import Banner from "@/assets/images/banner.jpg";
import ProfileImg from "@/assets/images/profileImg.png";

const Section = ({ title, children, className = "" }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`mt-16 ${className}`}
  >
    <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
      {title}
    </h3>
    {children}
  </motion.section>
);

export default function PortfolioTemplate1() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const projects = [
    {
      title: "Real Time Chat App with MERN Stack",
      description:
        "A real-time chat application using the MERN stack with a responsive architecture, integrating JWT for authentication and Socket.io for real-time interactions.",
      image: Banner,
      technologies: [
        "MongoDB",
        "Express",
        "React.js",
        "Node.js",
        "Socket.io",
        "JWT",
      ],
      link: "#",
    },
    {
      title: "Techline - MERN Stack E-Commerce Web Application",
      description:
        "Developed a dynamic e-commerce platform with a React-based frontend, ensuring smooth navigation and streamlined purchasing experience.",
      image: Banner,
      technologies: [
        "MongoDB",
        "Express",
        "React.js",
        "Node.js",
        "Redux",
        "Stripe",
      ],
      link: "#",
    },
    {
      title: "Real Time Chat App with MERN Stack",
      description:
        "A real-time chat application using the MERN stack with a responsive architecture, integrating JWT for authentication and Socket.io for real-time interactions.",
      image: Banner,
      technologies: [
        "MongoDB",
        "Express",
        "React.js",
        "Node.js",
        "Socket.io",
        "JWT",
      ],
      link: "#",
    },
    {
      title: "Techline - MERN Stack E-Commerce Web Application",
      description:
        "Developed a dynamic e-commerce platform with a React-based frontend, ensuring smooth navigation and streamlined purchasing experience.",
      image: Banner,
      technologies: [
        "MongoDB",
        "Express",
        "React.js",
        "Node.js",
        "Redux",
        "Stripe",
      ],
      link: "#",
    },
    {
      title: "Real Time Chat App with MERN Stack",
      description:
        "A real-time chat application using the MERN stack with a responsive architecture, integrating JWT for authentication and Socket.io for real-time interactions.",
      image: Banner,
      technologies: [
        "MongoDB",
        "Express",
        "React.js",
        "Node.js",
        "Socket.io",
        "JWT",
      ],
      link: "#",
    },
    {
      title: "Techline - MERN Stack E-Commerce Web Application",
      description:
        "Developed a dynamic e-commerce platform with a React-based frontend, ensuring smooth navigation and streamlined purchasing experience.",
      image: Banner,
      technologies: [
        "MongoDB",
        "Express",
        "React.js",
        "Node.js",
        "Redux",
        "Stripe",
      ],
      link: "#",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      } transition-colors duration-500`}
    >
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="flex justify-between items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
          >
            PP
          </motion.h1>
          <Switch
            checked={isDarkMode}
            onCheckedChange={setIsDarkMode}
            className="bg-purple-200 dark:bg-purple-800"
          />
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-12 items-center mb-16"
        >
          <div className="md:col-span-2">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Prathamesh Rajendra Patil
            </h2>
            <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
              Software Development Engineer | Mumbai
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5 text-purple-500" />
                <span className="text-sm">prathameshpatil@example.com</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-purple-500" />
                <span className="text-sm">+91 98765 43210</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <MapPin className="w-5 h-5 text-purple-500" />
                <span className="text-sm">Mumbai, India</span>
              </motion.div>
            </div>
            <div className="flex gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <Github className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-8 py-3 text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Contact Me
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-purple-500 shadow-2xl transform transition-all duration-500 hover:scale-105">
              <img
                src={ProfileImg}
                alt="Prathamesh Rajendra Patil"
                width={256}
                height={256}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              7+
            </div>
          </motion.div>
        </motion.div>

        <Section title="Professional Summary">
          <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl rounded-2xl">
            <p className="text-lg leading-relaxed">
              Experienced Full Stack Developer with 7+ years in startup product
              development. Proficient in React.js and Node.js, delivering
              scalable solutions for optimal user experiences. Skilled in API
              integration, database management, and application performance
              tuning. Passionate about creating innovative, user-centric
              applications that drive business growth.
            </p>
          </Card>
        </Section>

        <Section title="Skills">
          <div className="grid md:grid-cols-2 gap-8">
            {["Programming", "Frontend", "Backend", "Tools & Technologies"].map(
              (category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl rounded-2xl h-full">
                    <h4 className="font-semibold text-xl mb-4 text-purple-600 dark:text-purple-400">
                      {category}
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "JavaScript",
                        "Python",
                        "React.js",
                        "Node.js",
                        "Express",
                        "MongoDB",
                      ].map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="flex items-center gap-2"
                        >
                          <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              )
            )}
          </div>
        </Section>

        <Section title="Work History">
          <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl rounded-2xl">
            <motion.div
              initial="collapsed"
              animate={activeSection === "work" ? "expanded" : "collapsed"}
              variants={{
                expanded: { height: "auto" },
                collapsed: { height: "100px", overflow: "hidden" },
              }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-semibold text-2xl mb-2 text-purple-600 dark:text-purple-400">
                Research Knowledge Solution Pvt Ltd, Mumbai
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                2022-07 - Present
              </p>
              <p className="mb-4">
                Working on "Researcher's Analytics" - a patent research and
                project management application
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Developed and maintained a robust, scalable full-stack
                  analytics application using React.js, Node.js, and Symfony
                </li>
                <li>
                  Achieved 80% faster development time by implementing efficient
                  state management techniques
                </li>
                <li>
                  Led a team of 5 developers, implementing Agile methodologies
                  to improve project delivery times by 30%
                </li>
                <li>
                  Integrated machine learning algorithms to enhance data
                  analysis capabilities, resulting in a 50% increase in user
                  engagement
                </li>
              </ul>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setActiveSection(activeSection === "work" ? null : "work")
              }
              className="mt-4 flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors duration-300"
            >
              {activeSection === "work" ? "Read Less" : "Read More"}
              <ChevronDown
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  activeSection === "work" ? "rotate-180" : ""
                }`}
              />
            </motion.button>
          </Card>
        </Section>

        <Section title="Education">
          <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl rounded-2xl">
            <h4 className="font-semibold text-2xl mb-2 text-purple-600 dark:text-purple-400">
              Ramrao Adik Institute of Technology
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              June 2022
            </p>
            <p className="text-lg">
              GPA: 8.16 (on the scale of 10) | First Class with Distinction |
              CGPA: 8.9/10 | Percentile: 89.60%
            </p>
          </Card>
        </Section>

        <Section title="Accomplishments">
          <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl rounded-2xl">
            <h4 className="font-semibold text-2xl mb-2 text-purple-600 dark:text-purple-400">
              Employee of the Quarter - July 2023
            </h4>
            <p className="text-lg">
              Recognized at Research Knowledge Solutions Pvt. Ltd. for
              outstanding performance, dedication, and contributions to
              innovative projects.
            </p>
          </Card>
        </Section>

        <Section title="Personal Projects">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="overflow-hidden bg-white/90 dark:bg-gray-800/90 shadow-xl rounded-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <h4 className="font-semibold text-2xl text-white">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="rounded-full"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        View Project <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="Timeline" className="relative">
          <div className="absolute left-1/2 top-[3rem] bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
          <div className="relative">
            {[
              {
                title: "Software Development Engineer",
                company: "Research Knowledge Solution Pvt Ltd",
                date: "2022-07 - Present",
              },
              {
                title: "Bachelor of Engineering",
                company: "Ramrao Adik Institute of Technology",
                date: "June 2022",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <Card
                  className={`p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl rounded-2xl w-[calc(50%-20px)] ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <div
                    className={`absolute top-1/2 ${
                      index % 2 === 0 ? "-right-5" : "-left-5"
                    } w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-xl mb-2 text-purple-600 dark:text-purple-400">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.company}
                  </p>
                  <p className="text-sm">{item.date}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
      <footer className="mt-16 py-8 text-center text-sm text-gray-500 bg-gray-100 dark:bg-gray-800">
        © 2024 Prathamesh Patil. All rights reserved.
      </footer>
    </div>
  );
}
