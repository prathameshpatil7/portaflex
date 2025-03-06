// avg; can be better later
// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Briefcase,
//   GraduationCap,
//   Award,
// } from "lucide-react";
// import Banner from "@/assets/images/banner.jpg";
// import ProfileImg from "@/assets/images/profileImg.png";

// const fadeInUp = {
//   initial: { opacity: 0, y: 60 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };

// export default function PortfolioTemplate3() {
//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       <header className="bg-gradient-to-r from-purple-100 to-green-100 text-gray-800 py-16 px-4 md:px-16">
//         <div className="container mx-auto flex flex-col items-center">
//           <motion.img
//             src={ProfileImg}
//             width={150}
//             height={150}
//             alt="Jenny Brown"
//             className="rounded-full border-4 border-white mb-6"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           />
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold mb-4 text-center"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             Hi, I am Jenny Brown
//           </motion.h1>
//           <motion.p
//             className="text-xl mb-6 text-center"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             App Developer
//           </motion.p>
//           <motion.div
//             className="flex space-x-4"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <Button variant="outline">Download CV</Button>
//             <Button variant="outline">Contact Me</Button>
//           </motion.div>
//         </div>
//       </header>

//       <nav className="bg-white bg-opacity-30 backdrop-blur-lg border border-gray-200 shadow-lg py-4 sticky top-[60px] z-10">
//         <div className="container mx-auto flex justify-center space-x-6">
//           <Button variant="ghost">About</Button>
//           <Button variant="ghost">Skills</Button>
//           <Button variant="ghost">Projects</Button>
//           <Button variant="ghost">Contact</Button>
//         </div>
//       </nav>

//       <main className="container mx-auto px-4 py-16">
//         <motion.section
//           className="mb-16"
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
//           <Card>
//             <CardContent className="p-6">
//               <p className="text-center">
//                 Passionate app developer with a keen eye for design and a love
//                 for creating intuitive user experiences. With 5 years of
//                 experience in mobile and web development, I specialize in
//                 crafting beautiful, functional applications that solve
//                 real-world problems.
//               </p>
//             </CardContent>
//           </Card>
//         </motion.section>

//         <motion.section
//           className="mb-16"
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-3xl font-bold mb-6 text-center">
//             What I Achieve
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center">
//                 <GraduationCap className="h-12 w-12 text-pink-500 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">
//                   Master in Computer Engineering
//                 </h3>
//                 <p className="text-gray-600 text-center">
//                   Harvard University / 2015 - 2017
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center">
//                 <Briefcase className="h-12 w-12 text-yellow-500 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">
//                   Senior App Developer
//                 </h3>
//                 <p className="text-gray-600 text-center">
//                   Google Inc / 2017 - Present
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center">
//                 <Award className="h-12 w-12 text-green-500 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">
//                   Best Developer Award
//                 </h3>
//                 <p className="text-gray-600 text-center">Google Inc / 2020</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center">
//                 <GraduationCap className="h-12 w-12 text-blue-500 mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">
//                   Bachelor in Computer Engineering
//                 </h3>
//                 <p className="text-gray-600 text-center">
//                   University of California / 2011 - 2015
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </motion.section>

//         <motion.section
//           className="mb-16"
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center">
//                 <h3 className="text-xl font-semibold mb-2">Graphics Design</h3>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div
//                     className="bg-pink-500 h-2.5 rounded-full"
//                     style={{ width: "85%" }}
//                   ></div>
//                 </div>
//                 <p className="mt-2">85%</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center">
//                 <h3 className="text-xl font-semibold mb-2">Web Design</h3>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div
//                     className="bg-yellow-500 h-2.5 rounded-full"
//                     style={{ width: "95%" }}
//                   ></div>
//                 </div>
//                 <p className="mt-2">95%</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center">
//                 <h3 className="text-xl font-semibold mb-2">App Development</h3>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div
//                     className="bg-green-500 h-2.5 rounded-full"
//                     style={{ width: "90%" }}
//                   ></div>
//                 </div>
//                 <p className="mt-2">90%</p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 flex flex-col items-center">
//                 <h3 className="text-xl font-semibold mb-2">SEO & Marketing</h3>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div
//                     className="bg-blue-500 h-2.5 rounded-full"
//                     style={{ width: "80%" }}
//                   ></div>
//                 </div>
//                 <p className="mt-2">80%</p>
//               </CardContent>
//             </Card>
//           </div>
//         </motion.section>

//         <motion.section
//           className="mb-16"
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-3xl font-bold mb-6 text-center">
//             Featured Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>E-commerce Mobile App</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <img
//                   src={Banner}
//                   width={300}
//                   height={200}
//                   alt="E-commerce Mobile App"
//                   className="w-full h-48 object-cover mb-4"
//                 />
//                 <p className="mb-4">
//                   A feature-rich mobile app for online shopping with AR product
//                   preview.
//                 </p>
//                 <Button variant="outline">View Project</Button>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Fitness Tracker Website</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <img
//                   src={Banner}
//                   width={300}
//                   height={200}
//                   alt="Fitness Tracker Website"
//                   className="w-full h-48 object-cover mb-4"
//                 />
//                 <p className="mb-4">
//                   A responsive web app for tracking workouts and nutrition with
//                   data visualization.
//                 </p>
//                 <Button variant="outline">View Project</Button>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Smart Home IoT Dashboard</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <img
//                   src={Banner}
//                   width={300}
//                   height={200}
//                   alt="Smart Home IoT Dashboard"
//                   className="w-full h-48 object-cover mb-4"
//                 />
//                 <p className="mb-4">
//                   An intuitive dashboard for controlling and monitoring smart
//                   home devices.
//                 </p>
//                 <Button variant="outline">View Project</Button>
//               </CardContent>
//             </Card>
//           </div>
//         </motion.section>
//       </main>

//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
//           <p className="mb-6">
//             Feel free to reach out for collaborations or just a friendly chat.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <Button variant="outline">
//               <Mail className="mr-2 h-4 w-4" /> Email Me
//             </Button>
//             <Button variant="outline">
//               <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
//             </Button>
//             <Button variant="outline">
//               <Github className="mr-2 h-4 w-4" /> GitHub
//             </Button>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
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
  ChevronRight,
} from "lucide-react";
import Banner from "@/assets/images/banner.jpg";
import ProfileImg from "@/assets/images/profileImg.png";

const Section = ({ title, children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`mt-32 ${className}`}
    >
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </motion.section>
  );
};

const SkillBar = ({ skill, level }) => {
  const barRef = useRef(null);
  const isInView = useInView(barRef, { once: true });

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
          {skill}
        </span>
        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          ref={barRef}
          className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default function SuperPremiumPortfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const projects = [
    {
      title: "AI-Powered Chat Application",
      description:
        "Developed a real-time chat application with AI-driven features, including sentiment analysis and automatic language translation.",
      image: Banner,
      technologies: [
        "React",
        "Node.js",
        "Socket.io",
        "TensorFlow.js",
        "Google Cloud Translation API",
      ],
      link: "#",
    },
    {
      title: "Blockchain-based Supply Chain Management System",
      description:
        "Created a decentralized supply chain management system using blockchain technology to ensure transparency and traceability.",
      image: Banner,
      technologies: ["Ethereum", "Solidity", "Web3.js", "React", "Node.js"],
      link: "#",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      } transition-colors duration-500`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 transform origin-left z-50"
        style={{ scaleX }}
      />
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <header className="flex justify-between items-center mb-16">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent"
          >
            PP
          </motion.h1>
          <Switch
            checked={isDarkMode}
            onCheckedChange={setIsDarkMode}
            className="bg-emerald-200 dark:bg-emerald-800"
          />
        </header>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-16 mb-32"
        >
          <div className="md:w-1/2">
            <h2 className="text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                Prathamesh
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Rajendra Patil
              </span>
            </h2>
            <p className="text-2xl mb-8 text-gray-600 dark:text-gray-300">
              Innovative Software Development Engineer
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5 text-emerald-500" />
                <span className="text-sm">prathameshpatil@example.com</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Phone className="w-5 h-5 text-emerald-500" />
                <span className="text-sm">+91 98765 43210</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span className="text-sm">Mumbai, India</span>
              </motion.div>
            </div>
            <div className="flex gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full px-8 py-3 text-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300">
                Get in Touch
              </Button>
            </motion.div>
          </div>
          <div className="md:w-1/2 relative">
            <motion.div
              className="w-80 h-80 mx-auto relative z-10"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src={ProfileImg}
                alt="Prathamesh Rajendra Patil"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl opacity-20 blur-3xl"></div>
          </div>
        </motion.div>

        <Section title="Professional Summary">
          <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-200 dark:border-gray-700">
            <p className="text-xl leading-relaxed">
              Visionary Software Development Engineer with 7+ years of
              experience in crafting cutting-edge solutions for startups and
              enterprises. Specialized in full-stack development using React.js
              and Node.js, with a passion for creating scalable, user-centric
              applications. Proven track record in leading teams, implementing
              Agile methodologies, and integrating emerging technologies like AI
              and blockchain to drive innovation and business growth.
            </p>
          </Card>
        </Section>

        <Section title="Core Competencies">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-600 dark:text-emerald-400">
                Technical Skills
              </h3>
              <SkillBar skill="React.js" level={95} />
              <SkillBar skill="Node.js" level={90} />
              <SkillBar skill="TypeScript" level={85} />
              <SkillBar skill="GraphQL" level={80} />
              <SkillBar skill="AWS" level={75} />
            </Card>
            <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                Soft Skills
              </h3>
              <SkillBar skill="Problem Solving" level={95} />
              <SkillBar skill="Team Leadership" level={90} />
              <SkillBar skill="Communication" level={85} />
              <SkillBar skill="Agile Methodologies" level={85} />
              <SkillBar skill="Innovation" level={80} />
            </Card>
          </div>
        </Section>

        <Section title="Professional Experience">
          <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-200 dark:border-gray-700">
            <motion.div
              initial="collapsed"
              animate={activeSection === "work" ? "expanded" : "collapsed"}
              variants={{
                expanded: { height: "auto" },
                collapsed: { height: "200px", overflow: "hidden" },
              }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">
                Senior Software Engineer
              </h3>
              <h4 className="text-xl mb-2 text-blue-600 dark:text-blue-400">
                Research Knowledge Solution Pvt Ltd, Mumbai
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                July 2022 - Present
              </p>
              <p className="mb-6 text-lg">
                Led the development of "Researcher's Analytics", a
                groundbreaking patent research and project management
                application.
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg">
                <li>
                  Architected and implemented a robust, scalable full-stack
                  analytics application using React.js, Node.js, and Symfony,
                  resulting in a 40% increase in user productivity.
                </li>
                <li>
                  Spearheaded the adoption of GraphQL, reducing API response
                  times by 60% and improving overall application performance.
                </li>
                <li>
                  Implemented advanced data visualization techniques using
                  D3.js, enhancing the platform's analytical capabilities and
                  user engagement by 35%.
                </li>
                <li>
                  Led a cross-functional team of 8 developers, designers, and QA
                  specialists, consistently delivering project milestones ahead
                  of schedule.
                </li>
                <li>
                  Integrated machine learning algorithms to provide predictive
                  analytics, leading to a 25% increase in successful patent
                  applications for clients.
                </li>
              </ul>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setActiveSection(activeSection === "work" ? null : "work")
              }
              className="mt-6 flex items-center gap-2 text-emerald-500 hover:text-emerald-600 transition-colors duration-300"
            >
              {activeSection === "work" ? "Show Less" : "Show More"}
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeSection === "work" ? "rotate-180" : ""
                }`}
              />
            </motion.button>
          </Card>
        </Section>

        <Section title="Education">
          <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-3xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">
              Bachelor of Engineering in Computer Science
            </h3>
            <h4 className="text-xl mb-2 text-blue-600  dark:text-blue-400">
              Ramrao Adik Institute of Technology
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Graduated: June 2022
            </p>
            <p className="text-lg mb-4">
              GPA: 8.16/10 | First Class with Distinction | CGPA: 8.9/10 |
              Percentile: 89.60%
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                Specialized in Artificial Intelligence and Machine Learning
              </li>
              <li>
                Capstone Project: "Predictive Analysis of Stock Market using
                Deep Learning Techniques"
              </li>
              <li>
                Active member of the college's Coding Club and Robotics Society
              </li>
            </ul>
          </Card>
        </Section>

        <Section title="Notable Achievements">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">
                Employee of the Quarter
              </h3>
              <p className="text-lg mb-2">
                Research Knowledge Solutions Pvt. Ltd.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                July 2023
              </p>
              <p className="text-lg">
                Recognized for outstanding performance, innovative
                problem-solving, and significant contributions to the
                "Researcher's Analytics" project.
              </p>
            </Card>
            <Card className="p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">
                Hackathon Winner
              </h3>
              <p className="text-lg mb-2">TechCrunch Disrupt Hackathon</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                September 2022
              </p>
              <p className="text-lg">
                Led a team of 4 to develop an AI-powered accessibility tool for
                visually impaired users, securing first place among 200+
                participants.
              </p>
            </Card>
          </div>
        </Section>

        <Section title="Innovative Projects">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="overflow-hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-6">
                      <h4 className="font-semibold text-2xl text-white">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-lg mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="rounded-full border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Explore Project <ChevronRight className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="Professional Journey" className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500"></div>
          <div className="relative">
            {[
              {
                title: "Senior Software Engineer",
                company: "Research Knowledge Solution Pvt Ltd",
                date: "July 2022 - Present",
              },
              {
                title: "Software Developer Intern",
                company: "Tech Innovators Inc.",
                date: "Jan 2022 - June 2022",
              },
              {
                title: "Bachelor of Engineering",
                company: "Ramrao Adik Institute of Technology",
                date: "August 2018 - June 2022",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <Card
                  className={`p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-200 dark:border-gray-700 w-[calc(50%-40px)] ${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <div
                    className={`absolute top-1/2 ${
                      index % 2 === 0 ? "-right-10" : "-left-10"
                    } w-[3rem] h-[3rem] bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                  >
                    {2024 - new Date(item.date.split(" - ")[0]).getFullYear()}y
                  </div>
                  <h4 className="font-semibold text-2xl mb-2 text-emerald-600 dark:text-emerald-400">
                    {item.title}
                  </h4>
                  <p className="text-lg text-blue-600 dark:text-blue-400">
                    {item.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
      <footer className="mt-32 py-8 text-center text-sm text-gray-500 bg-gray-100 dark:bg-gray-800">
        <p>© 2024 Prathamesh Patil. Crafted with passion and innovation.</p>
      </footer>
    </div>
  );
}
