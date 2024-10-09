"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const sections = [
  { id: "summary", title: "Summary", icon: "FileText" },
  { id: "work", title: "Work Experience", icon: "Briefcase" },
  { id: "skills", title: "Skills", icon: "Code" },
  { id: "education", title: "Education", icon: "GraduationCap" },
  { id: "projects", title: "Projects", icon: "Folder" },
  { id: "achievements", title: "Achievements", icon: "Award" },
  { id: "certifications", title: "Certifications", icon: "Certificate" },
];

export default function Portfolio3({ userData, projectsData }) {
  const [activeSection, setActiveSection] = useState("summary");
  const [expandedSections, setExpandedSections] = useState({});
  const containerRef = useRef(null);

  const toggleExpand = (sectionId) => {
    setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const renderSection = (section) => {
    const isExpanded = expandedSections[section.id];
    const content = userData?.[section.id] || [];

    return (
      <Card key={section.id} className="mb-6 overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {section.title}
            {content.length > 2 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExpand(section.id)}
              >
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AnimatePresence initial={false}>
            {(isExpanded || content.length <= 2) && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                {content.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-4"
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    );
  };

  const renderProjects = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectsData &&
        projectsData.length > 0 &&
        projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{userData?.name}</h1>
          <div className="flex items-center space-x-4"></div>
        </div>
      </header>

      <main className="pt-16">
        <section className="h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={userData?.avatar}
                alt={userData?.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-8"
              />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {userData?.name}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {userData?.title}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={() =>
                  containerRef.current.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }
              >
                Explore My Work
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/4">
              <nav className="space-y-2 sticky top-24">
                {sections.map((section) => (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.title}
                  </Button>
                ))}
              </nav>
            </aside>
            <div className="md:w-3/4">
              <ScrollArea className="h-[calc(100vh-6rem)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeSection === "projects"
                      ? renderProjects()
                      : renderSection({
                          id: activeSection,
                          title: sections.find((s) => s.id === activeSection)
                            .title,
                        })}
                  </motion.div>
                </AnimatePresence>
              </ScrollArea>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
