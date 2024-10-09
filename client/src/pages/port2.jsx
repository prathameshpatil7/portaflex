"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Moon, Sun, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sections = [
  { id: "summary", title: "Summary", icon: "FileText" },
  { id: "work", title: "Work Experience", icon: "Briefcase" },
  { id: "skills", title: "Skills", icon: "Code" },
  { id: "education", title: "Education", icon: "GraduationCap" },
  { id: "projects", title: "Projects", icon: "Folder" },
  { id: "achievements", title: "Achievements", icon: "Award" },
  { id: "certifications", title: "Certifications", icon: "Certificate" },
];

export default function Portfolio2({ userData, projectsData }) {
  const [expandedSections, setExpandedSections] = useState({});
  const headerRef = useRef(null);
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 200], [0, -100]);

  const toggleExpand = (sectionId) => {
    setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const renderSection = (section) => {
    const isExpanded = expandedSections[section.id];
    const content = userData?.[section.id] || [];

    return (
      <Card key={section.id} className="mb-6">
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
          <motion.div
            initial={false}
            animate={{
              height: isExpanded || content.length <= 2 ? "auto" : 100,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {content.map((item, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    );
  };

  const renderProjects = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData &&
        projectsData.length > 0 &&
        projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-md object-cover w-full h-48"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <motion.header
        ref={headerRef}
        style={{ y: headerY }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{userData?.name}</h1>
          <div className="flex items-center space-x-4"></div>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <img
              src={userData?.avatar}
              alt={userData?.name}
              width={300}
              height={300}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">{userData?.title}</h2>
            <p className="text-xl text-muted-foreground mb-6">
              {userData?.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {userData?.skills.slice(0, 5).map((skill, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Tabs defaultValue="summary" className="mb-12">
          <TabsList className="w-full justify-start overflow-x-auto">
            {sections.map((section) => (
              <TabsTrigger key={section.id} value={section.id}>
                {section.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {sections.map((section) => (
            <TabsContent key={section.id} value={section.id}>
              {section.id === "projects"
                ? renderProjects()
                : renderSection(section)}
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
