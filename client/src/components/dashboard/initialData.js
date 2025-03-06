import {
  Briefcase,
  Lightbulb,
  GraduationCap,
  Trophy,
  FileText,
  Folder,
  Award,
  User,
} from "lucide-react";

export const initialSections = [
  { id: "experiences", title: "Work Experience", icon: Briefcase, items: [] },
  { id: "skills", title: "Skills", icon: Lightbulb, items: [] },
  { id: "education", title: "Education", icon: GraduationCap, items: [] },
  { id: "achievements", title: "Achievements", icon: Trophy, items: [] },
  { id: "summary", title: "Summary", icon: FileText, items: [] },
  { id: "projects", title: "Personal Projects", icon: Folder, items: [] },
  { id: "certification", title: "Certifications", icon: Award, items: [] },
  { id: "personal-details", title: "User Details", icon: User, items: [] },
];
