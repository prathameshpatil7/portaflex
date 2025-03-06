import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import ProfileImg from "@/assets/images/profileImg.png";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function PortfolioTemplate1() {
  return (
    // <div className="min-h-screen bg-gradient-to-r from-pink-100 to-blue-100 text-gray-800">
    // <div className="min-h-screen bg-gradient-to-r from-purple-100 to-green-100 text-gray-800">
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-yellow-100 text-gray-800">
      {/* <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 text-gray-800"> */}
      <header className="py-8 px-4 md:px-16 flex justify-between items-center">
        <h1 className="text-2xl font-bold">PP</h1>
        <div className="flex space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Contact</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-1">
        <motion.section
          className="text-center mb-16"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="mb-8">
            <img
              src={ProfileImg}
              height={300}
              width={300}
              alt="Prathamesh Rajendra Patil"
              className="rounded-full mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Prathamesh Rajendra Patil
          </h1>
          <p className="text-xl mb-4">Software Development Engineer | Mumbai</p>
          <p className="mb-6">prathameshpatil@example.com • +91 98765 43210</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
          <Card>
            <CardContent className="p-6">
              <p>
                Experienced Full Stack Developer with 2 years in startup product
                development. Proficient in React.js and Node.js, delivering
                scalable solutions for optimal user experiences. Skilled in API
                integration, database management, and application architecture.
                Passionate about leveraging technology to solve complex business
                challenges.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="bg-yellow-400 rounded-full p-6 mr-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <p className="text-xl">years of professional experience</p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>JavaScript, Python</li>
                  <li>React.js, Express, Symfony (PHP)</li>
                  <li>Node.js, HTML, CSS</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Git, GitHub</li>
                  <li>RESTful API, Postman</li>
                  <li>MySQL, ElasticSearch, MongoDB</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6">Work History</h2>
          <Card>
            <CardHeader>
              <CardTitle>
                ResearchWire Knowledge Solution Pvt Ltd, Mumbai
              </CardTitle>
              <p className="text-sm text-gray-500">2022-07 - Present</p>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2">Job Overview</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Working on ResearchWire Analytics - a patent research and
                  project management application
                </li>
                <li>
                  Developed and maintained a robust, scalable full-stack
                  analytics application using React.js, Node.js, and Symfony
                </li>
                <li>
                  Achieved 80% faster development time by implementing efficient
                  state management techniques
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <Card>
            <CardHeader>
              <CardTitle>Ramrao Adik Institute of Technology</CardTitle>
              <p className="text-sm text-gray-500">June 2022</p>
            </CardHeader>
            <CardContent>
              <p className="mb-2">University Overview</p>
              <p>
                GPA: 8.16 (on the scale of 10) | First Class with Distinction |
                CGPA: 8.0/10 | Percentile: 81.60%
              </p>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6">Accomplishments</h2>
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
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6">Personal Projects</h2>
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
                <ul className="list-disc pl-5 space-y-2">
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
                <ul className="list-disc pl-5 space-y-2">
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
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Prathamesh Patil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
