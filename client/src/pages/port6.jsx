import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Calendar } from "lucide-react";
import Banner from "@/assets/images/banner.jpeg";
import ProfileImg from "@/assets/images/profileImg.png";
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function PortfolioTemplate4() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <main className="container mx-auto px-4 py-6">
        <motion.section
          className="mb-6"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <Card className="overflow-hidden">
            <div className="relative h-48 ">
              <img
                src={Banner}
                height={200}
                width={1000}
                alt="Cover"
                className="w-full h-full object-cover opacity-100"
              />
            </div>
            <CardContent className="p-6 relative">
              <img
                src={ProfileImg}
                height={150}
                width={150}
                alt="Prathamesh R Patil"
                className="rounded-full border-4 border-white absolute -top-16 left-6 w-32 h-32"
              />
              <div className="mt-20">
                <h1 className="text-3xl font-bold mb-2">Prathamesh R Patil</h1>
                <p className="text-gray-600 mb-4">
                  Software Development Engineer - Full Stack
                </p>
                <p className="text-gray-600 mb-4">Mumbai</p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-2">Summary</h2>
          <Card>
            <CardContent className="p-6">
              <p>
                Software Development Engineer | Full Stack Enthusiast |
                Innovator at Heart
              </p>
              <p className="mt-4">
                Hi, I'm Prathamesh Rajendra Patil - a passionate Software
                Development Engineer with a knack for building high-impact
                solutions. With over 2 years of experience in full-stack
                development, I've honed my skills in React.js, Node.js, and the
                MERN stack, driving projects from concept to completion.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Programming Languages</h3>
                  <ul className="list-disc list-inside">
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>C</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Web Development</h3>
                  <ul className="list-disc list-inside">
                    <li>Node.js</li>
                    <li>HTML, CSS</li>
                    <li>React.js</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Frameworks</h3>
                  <ul className="list-disc list-inside">
                    <li>Express.js</li>
                    <li>Symfony (PHP)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Databases</h3>
                  <ul className="list-disc list-inside">
                    <li>MySQL</li>
                    <li>ElasticSearch</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Version Control</h3>
                  <ul className="list-disc list-inside">
                    <li>Git</li>
                    <li>GitHub</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Agile Development Methodologies
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>JIRA</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-2">Work History</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Software Development Engineer
              </h3>
              <p className="text-gray-600 mb-2">
                ResearchWire Knowledge Solutions Pvt Ltd, Mumbai
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="mr-2 h-4 w-4" />
                <span>July 2022 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Working on a project - "ResearchWire Analytics" - a patent
                  research and project management application
                </li>
                <li>
                  Developed and maintained a robust, scalable full-stack
                  analytics application using React.js, Node.js, and Symfony
                </li>
                <li>
                  Achieved 80% faster development time by implementing efficient
                  state management techniques
                </li>
                <li>
                  Implemented backend services, APIs, and databases with Node.js
                  and Python for reliability and scalability
                </li>
                <li>
                  Collaborated closely with cross-functional teams in an agile
                  environment, ensuring seamless communication and workflow
                  using JIRA
                </li>
                <li>
                  Optimized application performance, reducing data loading time
                  by 60% and enhancing user experience
                </li>
                <li>
                  Spearheaded adoption of React.js best practices, significantly
                  improving component reusability and maintainability
                </li>
                <li>
                  Provided training to new team members on React.js concepts,
                  coding standards, and best practices
                </li>
                <li>
                  Played a key role in root cause analysis of bugs, contributing
                  to application stability and reliability
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Bachelor of Engineering - Electronics & Telecommunications
              </h3>
              <p className="text-gray-600 mb-2">
                Ramrao Adik Institute of Technology
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="mr-2 h-4 w-4" />
                <span>2018 - 2022</span>
              </div>
              <p>
                GPA: 8.16 (on the scale of 10) | First Class with Distinction |
                CGPA: 8.0/10 | Percentile: 81.60%
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-2">Accomplishments</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Badge variant="secondary" className="mr-2">
                  July 2023
                </Badge>
                <h4 className="font-semibold">Employee of the Quarter</h4>
              </div>
              <p>
                Recognized at ResearchWire Knowledge Solutions Pvt. Ltd. for
                outstanding performance, dedication, and contributions to
                innovative projects.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-2">Personal Projects</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Real Time Chat App with MERN Stack</CardTitle>
                <p className="text-sm text-gray-500">Dec 2023</p>
              </CardHeader>
              <CardContent>
                <p className="mb-2">
                  Technologies: Socket.io, Mongo DB, Express, React.js, Node.js,
                  TailwindCSS, Postman
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Engineered a one-to-one chat application using the MERN
                    stack within a monolithic architecture, integrating JWT for
                    authentication and Socket.io for real-time interactions.
                  </li>
                  <li>
                    Implemented robust error handling and proactive error
                    updates, enhancing the user experience and ensuring secure
                    communication.
                  </li>
                </ul>
                <Button variant="outline" className="mt-4">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Project
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  Techline - MERN Stack E-Commerce Web Application
                </CardTitle>
                <p className="text-sm text-gray-500">Oct 2023</p>
              </CardHeader>
              <CardContent>
                <p className="mb-2">
                  Technologies: Mongo DB, Express, React.js, Node.js, Bootstrap,
                  Postman
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Developed a dynamic e-commerce platform with a React-based
                    frontend, ensuring smooth navigation and streamlined
                    purchasing.
                  </li>
                  <li>
                    Built a robust back-end with Node.js and Express, featuring
                    JWT and Bcrypt for secure user authentication and data
                    protection.
                  </li>
                </ul>
                <Button variant="outline" className="mt-4">
                  <ExternalLink className="mr-2 h-4 w-4" /> View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="mb-6">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </Button>
            <Button variant="outline">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </div>
          <p className="mt-6 text-sm">
            © {new Date().getFullYear()} Prathamesh R Patil. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
