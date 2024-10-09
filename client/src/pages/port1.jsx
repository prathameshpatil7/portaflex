"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
// import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sections = [
  { id: "summary", title: "Summary", icon: "FileText" },
  { id: "work", title: "Work Experience", icon: "Briefcase" },
  { id: "skills", title: "Skills", icon: "Code" },
  { id: "education", title: "Education", icon: "GraduationCap" },
  { id: "projects", title: "Projects", icon: "Folder" },
  { id: "achievements", title: "Achievements", icon: "Award" },
  { id: "certifications", title: "Certifications", icon: "Certificate" },
];

export default function Portfolio1({ userData, projectsData }) {
  const [activeSection, setActiveSection] = useState("summary");
  const [expandedSections, setExpandedSections] = useState({});
  //   const { theme, setTheme } = useTheme();

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
          <AnimatePresence>
            {(isExpanded || content.length <= 2) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {content.map((item, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
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
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="rounded-md object-cover w-full h-48"
              />
            </CardContent>
          </Card>
        ))}
    </div>
  );

  return (
    <div className="flex min-h-screen bg-background">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden fixed top-4 left-4 z-50"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <SidebarContent
            userData={userData}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </SheetContent>
      </Sheet>

      <aside className="hidden md:flex w-64 flex-col bg-muted p-6">
        <SidebarContent
          userData={userData}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </aside>

      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-6">
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </Button> */}
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            {activeSection === "projects"
              ? renderProjects()
              : sections.map(renderSection)}
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}

function SidebarContent({ userData, activeSection, setActiveSection }) {
  return (
    <>
      <div className="flex flex-col items-center mb-6">
        <img
          src={userData?.avatar}
          alt={userData?.name}
          width={120}
          height={120}
          className="rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold">{userData?.name}</h1>
        <p className="text-muted-foreground">{userData?.title}</p>
      </div>
      <nav className="space-y-2">
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
    </>
  );
}
